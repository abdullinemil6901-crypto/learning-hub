// Supabase Edge Function: tutor
// ИИ-тьютор по программированию для learning-hub.
// Проксирует запрос к Anthropic API. Ключ берётся из секрета ANTHROPIC_API_KEY.
// Задеплоить: supabase functions deploy tutor --project-ref qdwdybqbdjfsjvtxsxfp
// Секрет:     supabase secrets set ANTHROPIC_API_KEY=sk-ant-... --project-ref qdwdybqbdjfsjvtxsxfp

const MODEL = "claude-haiku-4-5-20251001"; // дёшево и достаточно для тьютора
const MAX_TOKENS = 900;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const BASE = `Ты — персональный тьютор по веб-разработке для студента, который идёт с нуля до уровня junior (HTML, CSS, JavaScript).
Правила:
- Отвечай по-русски, коротко и по делу, дружелюбно, без воды.
- Твоя цель — чтобы студент ПОНЯЛ и научился сам, а не получил готовый ответ.
- НИКОГДА не выдавай полностью готовое решение задачи целиком. Максимум — маленький фрагмент-пример на 1-3 строки для иллюстрации приёма.
- Объясняй простым языком, привязывайся к конкретному коду студента.
- Если студент близок к решению — подтверди и подтолкни. Если ошибается — покажи где и почему, задай наводящий вопрос.`;

const MODES: Record<string, string> = {
  explain: `Режим: объясни ошибку. Найди в коде студента конкретную ошибку или проблему. Скажи где она (строка/место), почему это ошибка, и задай наводящий вопрос, который поможет её исправить. Не переписывай код за него.`,
  review: `Режим: ревью кода как доброжелательный senior. Сначала отметь 1-2 вещи, которые сделаны хорошо. Потом укажи 2-3 конкретных слабых места с объяснением ПОЧЕМУ и как это улучшить (подходом, не готовым кодом). В конце — один главный совет.`,
  quiz: `Режим: спроси меня (active recall). Задай студенту РОВНО 3 коротких вопроса по теме урока на понимание. Не давай ответы. Пронумеруй вопросы. В конце попроси ответить, и скажи, что потом разберёте вместе.`,
  chat: `Режим: сократический диалог. Отвечай на вопрос студента наводящими вопросами и подсказками, веди к решению постепенно. Не вываливай готовый код.`,
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "POST only" }), { status: 405, headers: { ...CORS, "content-type": "application/json" } });
  }

  const key = Deno.env.get("ANTHROPIC_API_KEY");
  if (!key) {
    return new Response(JSON.stringify({ error: "Тьютор ещё не настроен: не задан ANTHROPIC_API_KEY." }), { status: 503, headers: { ...CORS, "content-type": "application/json" } });
  }

  let body: any = {};
  try { body = await req.json(); } catch { /* пусто */ }

  const mode: string = MODES[body.mode] ? body.mode : "chat";
  const code: string = (body.code || "").toString().slice(0, 6000);
  const lesson: string = (body.lesson || "").toString().slice(0, 400);
  const err: string = (body.error || "").toString().slice(0, 600);
  const question: string = (body.question || "").toString().slice(0, 1000);
  const history: Array<{ role: string; content: string }> = Array.isArray(body.history) ? body.history.slice(-6) : [];

  const system = `${BASE}\n\n${MODES[mode]}${lesson ? `\n\nТема урока: ${lesson}.` : ""}`;

  const userParts: string[] = [];
  if (code.trim()) userParts.push("Мой код сейчас:\n```\n" + code + "\n```");
  if (err.trim()) userParts.push("Ошибка/вывод: " + err);
  if (question.trim()) userParts.push("Мой вопрос: " + question);
  if (!userParts.length) userParts.push("Помоги мне с этим уроком.");

  const messages = [
    ...history.map((m) => ({ role: m.role === "assistant" ? "assistant" : "user", content: String(m.content).slice(0, 2000) })),
    { role: "user", content: userParts.join("\n\n") },
  ];

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "content-type": "application/json", "x-api-key": key, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: MODEL, max_tokens: MAX_TOKENS, system, messages }),
    });
    const data = await r.json();
    if (!r.ok) {
      return new Response(JSON.stringify({ error: data?.error?.message || "Ошибка Anthropic API" }), { status: 502, headers: { ...CORS, "content-type": "application/json" } });
    }
    const text = (data.content || []).filter((b: any) => b.type === "text").map((b: any) => b.text).join("\n").trim();
    return new Response(JSON.stringify({ text: text || "(пустой ответ)" }), { headers: { ...CORS, "content-type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Сеть/сервер: " + (e?.message || e) }), { status: 500, headers: { ...CORS, "content-type": "application/json" } });
  }
});
