/* EMIL — Тренажёр: service worker (офлайн + быстрая загрузка) */
const CACHE = "emil-hub-v1";
const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "assets/character.png",
  "assets/noise.png",
  "assets/icon-192.png",
  "assets/icon-512.png",
  "assets/icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
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
  // Отдаём из кэша сразу, в фоне обновляем копию из сети
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
