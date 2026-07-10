/* EMIL — Тренажёр: service worker v3 (офлайн + CDN-кэш + обновления) */
const CACHE = "emil-hub-v5";
const SHELL = [
  "./",
  "index.html",
  "content.js",
  "manifest.webmanifest",
  "assets/character.png",
  "assets/noise.png",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/icon-maskable-512.png"
];
// CDN-ресурсы кэшируем тоже — офлайн со шрифтами и иконками
const CDN = [
  "https://unpkg.com/@phosphor-icons/web@2.1.1/src/bold/style.css",
  "https://fonts.googleapis.com/css2?family=Unbounded:wght@400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap",
  "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"
];
const CDN_HOSTS = ["fonts.googleapis.com", "fonts.gstatic.com", "unpkg.com", "cdn.jsdelivr.net"];

// fetch с жёстким таймаутом: мёртвая сеть не должна вешать установку
const tFetch = (u, ms = 8000) => Promise.race([
  fetch(new Request(u, { mode: "cors" })),
  new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))
]);

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    // CDN — по одному и без фатальных ошибок: недоступный шрифт не должен ломать установку
    await Promise.allSettled(CDN.map(u =>
      tFetch(u).then(r => {
        if (r.ok || r.type === "opaque") return c.put(u, r);
      })
    ));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  // Облако (Supabase) всегда ходит в сеть напрямую
  if (e.request.method !== "GET" || url.hostname.endsWith("supabase.co")) return;

  if (CDN_HOSTS.includes(url.hostname)) {
    // CDN: cache-first (шрифты/иконки не меняются), докэшируем в фоне
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(resp => {
        if (resp && (resp.ok || resp.type === "opaque")) {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }))
    );
    return;
  }

  // Свои файлы: отдаём из кэша сразу, в фоне обновляем копию
  e.respondWith(
    caches.match(e.request).then(hit => {
      const net = fetch(e.request).then(resp => {
        if (resp && resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
