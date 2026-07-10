"use strict";
/* ============================================================
   EMIL — контент-пак v2: уроки, словарь, сюжет, коллекция.
   Данные отделены от движка (index.html). Без сборки: глобальные литералы.
   ============================================================ */

/* ============ CONTENT: PROGRAMMING ============ */
const PROG=[
{id:"m1",title:"Как работает веб + первая страница",
theory:`
<p>Когда ты открываешь сайт, браузер получает от сервера файлы и «рисует» из них страницу. Три главные технологии:</p>
<table class="simple"><tr><th>Технология</th><th>За что отвечает</th><th>Аналогия</th></tr>
<tr><td><b>HTML</b></td><td>Структура и содержимое</td><td>Скелет</td></tr>
<tr><td><b>CSS</b></td><td>Внешний вид</td><td>Одежда</td></tr>
<tr><td><b>JavaScript</b></td><td>Логика и интерактивность</td><td>Мышцы и мозг</td></tr></table>
<p>HTML состоит из <b>тегов</b> — слов в угловых скобках. Большинство тегов парные:</p>
<pre class="demo">&lt;h1&gt;Самый большой заголовок&lt;/h1&gt;
&lt;p&gt;Абзац обычного текста.&lt;/p&gt;</pre>
<p>Минимальная страница:</p>
<pre class="demo">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Название вкладки&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Привет, мир!&lt;/h1&gt;
    &lt;p&gt;Моя первая страница.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
<p><b>head</b> — служебная информация, <b>body</b> — всё, что видно. Заголовки: от <code>&lt;h1&gt;</code> (крупный) до <code>&lt;h6&gt;</code> (мелкий).</p>`,
quiz:[
 {q:"За что отвечает HTML?",o:["Структура и содержимое страницы","Цвета и шрифты","Логика при кликах","Хранение данных на сервере"],a:0,e:"HTML — скелет: из чего страница состоит."},
 {q:"Какой тег делает САМЫЙ крупный заголовок?",o:["<h6>","<p>","<h1>","<big>"],a:2,e:"h1 — самый крупный, h6 — самый мелкий."},
 {q:"Где пишут то, что видно на экране?",o:["В <head>","В <body>","В <title>","В <html>"],a:1,e:"body — видимая часть, head — служебная."},
 {q:"Как выглядит закрывающий тег абзаца?",o:["<p>","</p>","<p/end>","(p)"],a:1,e:"Закрывающий тег — со слэшем: </p>."},
 {q:"За что отвечает JavaScript?",o:["За красоту","За структуру","За интерактивность и логику","За заголовки"],a:2,e:"JS оживляет страницу."}],
practice:{type:"html",task:"Сделай первую страницу: заголовок <code>&lt;h1&gt;</code> с твоим именем и абзац <code>&lt;p&gt;</code> о себе. «Запустить» — увидишь результат, потом «Проверить задание».",
starter:"<!DOCTYPE html>\n<html>\n<body>\n\n  <!-- напиши свой код здесь -->\n\n</body>\n</html>",
check:c=>/<h1[\s>]/i.test(c)&&/<p[\s>]/i.test(c),hint:"Нужны тег <h1>...</h1> и тег <p>...</p> внутри body."}},

{id:"m2",title:"HTML глубже: списки, ссылки, картинки",
theory:`
<p><b>Списки:</b></p>
<pre class="demo">&lt;ul&gt;              &lt;ol&gt;
  &lt;li&gt;Хоккей&lt;/li&gt;    &lt;li&gt;Первый&lt;/li&gt;
  &lt;li&gt;Код&lt;/li&gt;       &lt;li&gt;Второй&lt;/li&gt;
&lt;/ul&gt;             &lt;/ol&gt;</pre>
<p><code>ul</code> — маркированный (точки), <code>ol</code> — нумерованный. Пункт — <code>li</code>.</p>
<p><b>Ссылки:</b></p>
<pre class="demo">&lt;a href="https://google.com"&gt;Открыть Google&lt;/a&gt;</pre>
<p><code>href</code> — <b>атрибут</b>: настройка тега, пишется внутри открывающего тега.</p>
<p><b>Картинки:</b></p>
<pre class="demo">&lt;img src="photo.jpg" alt="Моё фото"&gt;</pre>
<p><code>img</code> — одиночный тег, без закрывающей пары. <code>src</code> — путь к файлу, <code>alt</code> — текст, если картинка не загрузилась.</p>
<p><code>&lt;div&gt;</code> — «коробка» без собственного вида для группировки элементов. Позже будем красить и двигать эти коробки через CSS.</p>`,
quiz:[
 {q:"Каким тегом делают нумерованный список?",o:["<ul>","<ol>","<li>","<list>"],a:1,e:"ol = ordered list."},
 {q:"Что такое href?",o:["Тег","Атрибут ссылки — куда она ведёт","Название сайта","Стиль"],a:1,e:"href — атрибут тега <a>."},
 {q:"Какой тег НЕ имеет закрывающей пары?",o:["<p>","<a>","<img>","<h1>"],a:2,e:"img — одиночный тег."},
 {q:"Что делает атрибут alt у картинки?",o:["Меняет размер","Текст, если картинка не загрузилась","Делает её ссылкой","Ничего"],a:1,e:"alt показывается вместо картинки."},
 {q:"Для чего нужен <div>?",o:["Для заголовков","Коробка для группировки элементов","Для картинок","Для списков"],a:1,e:"div — контейнер без собственного вида."}],
practice:{type:"html",task:"Страница: заголовок «Мои хобби», маркированный список минимум из 3 пунктов и ссылка на любой сайт.",
starter:"<!DOCTYPE html>\n<html>\n<body>\n\n  <!-- заголовок, список ul с li, ссылка a -->\n\n</body>\n</html>",
check:c=>/<(ul|ol)[\s>]/i.test(c)&&(c.match(/<li[\s>]/gi)||[]).length>=3&&/<a\s[^>]*href/i.test(c),hint:"Нужны: <ul> или <ol>, минимум три <li> и ссылка <a href=\"...\">."}},

{id:"m3",title:"CSS: делаем красиво",
theory:`
<p>Правило CSS: <b>кому</b> (селектор) → <b>что поменять</b> (свойства):</p>
<pre class="demo">h1 {
  color: blue;          /* цвет текста */
  font-size: 40px;      /* размер шрифта */
}
body {
  background: #f0f0f0;  /* цвет фона */
}</pre>
<p>Проще всего писать CSS внутри тега <code>&lt;style&gt;</code> в <code>&lt;head&gt;</code>.</p>
<p><b>Классы:</b></p>
<pre class="demo">&lt;p class="important"&gt;Важный текст&lt;/p&gt;

.important { color: red; font-weight: bold; }</pre>
<p><b>Отступы:</b> <code>margin</code> — снаружи элемента, <code>padding</code> — внутри. Используются постоянно.</p>
<p>Цвета: словами (<code>red</code>) или кодом (<code>#B9FF47</code>).</p>`,
quiz:[
 {q:"Какое свойство меняет цвет текста?",o:["background","color","font-style","text"],a:1,e:"color — текст, background — фон."},
 {q:"Как обратиться в CSS к классу important?",o:["important","#important",".important","<important>"],a:2,e:"Классы — через точку."},
 {q:"Что такое padding?",o:["Отступ снаружи","Отступ внутри элемента","Размер шрифта","Цвет рамки"],a:1,e:"padding — внутри, margin — снаружи."},
 {q:"Где обычно пишут CSS на простой странице?",o:["В теге <style> в head","В <title>","В комментарии","В теге <img>"],a:0,e:"Внутри <style> в head."},
 {q:"Как задать размер шрифта 20 пикселей?",o:["size: 20","font-size: 20px","text: 20px","font: big"],a:1,e:"font-size: 20px;"}],
practice:{type:"html",task:"Оформи страницу: через <code>&lt;style&gt;</code> сделай <code>h1</code> любого цвета и поменяй фон страницы (<code>body</code>).",
starter:"<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* твой CSS здесь */\n</style>\n</head>\n<body>\n  <h1>Мой сайт</h1>\n  <p>Учусь делать красиво.</p>\n</body>\n</html>",
check:c=>/<style[\s>]/i.test(c)&&/color\s*:/i.test(c)&&/background[^:]*:/i.test(c),hint:"Внутри <style> нужны color для h1 и background для body."}},

{id:"m4",title:"JavaScript: первые шаги",
theory:`
<p><b>Переменные:</b></p>
<pre class="demo">let age = 20;              // число, можно менять
const name = "Emil";       // строка, менять нельзя
let isHockeyPlayer = true; // да/нет</pre>
<p><code>let</code> — можно перезаписать, <code>const</code> — константа.</p>
<p><b>Вывод:</b></p>
<pre class="demo">console.log("Привет!");
console.log(2 + 2);          // 4
console.log(name, age);      // Emil 20</pre>
<p><code>console.log()</code> — главный инструмент программиста: видеть, что происходит.</p>
<p><b>Строки складываются:</b></p>
<pre class="demo">let greeting = "Меня зовут " + name;
console.log(greeting);       // Меня зовут Emil</pre>`,
quiz:[
 {q:"Как объявить переменную, которую можно менять?",o:["const x = 5","let x = 5","variable x = 5","x := 5"],a:1,e:"let — изменяемая."},
 {q:"Что выведет console.log(3 + 4)?",o:["3 + 4","34","7","ошибку"],a:2,e:"Числа складываются: 7."},
 {q:'Что выведет console.log("3" + "4")?',o:["7","34","ошибку","3 4"],a:1,e:"Строки склеиваются: «34». Частая ловушка!"},
 {q:"Чем const отличается от let?",o:["Ничем","const нельзя перезаписать","const только для чисел","let устарел"],a:1,e:"const — константа."},
 {q:"Для чего нужен console.log?",o:["Создать кнопку","Напечатать значение","Сохранить файл","Открыть сайт"],a:1,e:"Инструмент отладки №1."}],
practice:{type:"js",task:"Объяви <code>name</code> с именем и <code>age</code> с возрастом. Выведи через <code>console.log</code>: «Меня зовут Emil, мне 20 лет».",
starter:"// объяви переменные и выведи фразу\n\n",
check:c=>/(let|const)\s+name/.test(c)&&/(let|const)\s+age/.test(c)&&/console\.log/.test(c),hint:"Нужны let/const name, let/const age и console.log(...)."}},

{id:"m5",title:"Условия: код принимает решения",
theory:`
<p>Программа становится умной, когда умеет выбирать. <b>if / else</b>:</p>
<pre class="demo">let age = 20;
if (age >= 18) {
  console.log("Взрослый");
} else {
  console.log("Ещё нет 18");
}</pre>
<p><b>Операторы сравнения:</b></p>
<table class="simple"><tr><th>Оператор</th><th>Значение</th><th>Пример → результат</th></tr>
<tr><td><code>===</code></td><td>равно (строго)</td><td><code>5 === 5</code> → true</td></tr>
<tr><td><code>!==</code></td><td>не равно</td><td><code>5 !== 3</code> → true</td></tr>
<tr><td><code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code></td><td>больше / меньше</td><td><code>10 &gt; 3</code> → true</td></tr></table>
<p><b>Главная ловушка:</b> <code>=</code> — присваивание, <code>===</code> — сравнение. <code>10 === "10"</code> даёт <b>false</b>: число и строка — разные типы.</p>
<p><b>Логические операторы:</b> <code>&amp;&amp;</code> — И (оба условия), <code>||</code> — ИЛИ (хотя бы одно), <code>!</code> — НЕ.</p>
<pre class="demo">if (age >= 18 && hasTicket) { ... }   // и то, и другое
else if (age >= 14) { ... }           // иначе-если: проверки по цепочке</pre>`,
quiz:[
 {q:"Что выведет: let x=5; if(x>3){console.log('да')}else{console.log('нет')}",o:["нет","да","ошибку","ничего"],a:1,e:"5 > 3 — условие истинно, выполняется первая ветка."},
 {q:"Чем === отличается от = ?",o:["Ничем","= сравнение, === присваивание","= присваивание, === сравнение","=== устарел"],a:2,e:"= кладёт значение в переменную, === сравнивает."},
 {q:"Что вернёт 10 === \"10\"?",o:["true","false","10","ошибку"],a:1,e:"Строгое сравнение: число ≠ строка → false."},
 {q:"Какой оператор означает «И» (оба условия верны)?",o:["||","!","&&","=="],a:2,e:"&& — И, || — ИЛИ, ! — НЕ."},
 {q:"Для чего нужен else if?",o:["Завершить программу","Проверить ещё одно условие, если первое не сработало","Повторить код","Объявить переменную"],a:1,e:"Цепочка проверок: if → else if → else."}],
practice:{type:"js",task:"Объяви <code>score</code> с числом от 0 до 100. Выведи: от 80 — «Отлично», от 50 — «Нормально», иначе — «Учить ещё». Проверь с разными значениями.",
starter:"let score = 85;\n\n// if / else if / else\n\n",
check:c=>/if\s*\(/.test(c)&&/else/.test(c)&&/console\.log/.test(c),hint:"Нужны if (...), else (или else if) и console.log."}},

{id:"m6",title:"Циклы и массивы: много данных без копипасты",
theory:`
<p><b>Массив</b> — список значений в одной переменной:</p>
<pre class="demo">const hobbies = ["хоккей", "код", "английский"];
console.log(hobbies[0]);      // хоккей — счёт с нуля!
console.log(hobbies.length);  // 3
hobbies.push("музыка");       // добавить в конец</pre>
<p><b>Цикл for</b> повторяет код:</p>
<pre class="demo">for (let i = 0; i < 3; i++) {
  console.log("Круг " + i);   // Круг 0, Круг 1, Круг 2
}</pre>
<p>Читается: старт <code>i=0</code>; пока <code>i&lt;3</code>; после каждого круга <code>i++</code> (плюс один).</p>
<p><b>for...of</b> — пройти по массиву без индексов, самый удобный способ:</p>
<pre class="demo">for (const h of hobbies) {
  console.log(h);
}</pre>
<p><b>while</b> — повторять, пока условие истинно. Осторожно: если условие никогда не станет false — бесконечный цикл.</p>`,
quiz:[
 {q:"Какой индекс у ПЕРВОГО элемента массива?",o:["1","0","-1","first"],a:1,e:"Счёт с нуля: arr[0] — первый."},
 {q:"Что делает hobbies.push(\"музыка\")?",o:["Удаляет элемент","Добавляет в начало","Добавляет в конец","Сортирует"],a:2,e:"push — добавить в конец массива."},
 {q:"Сколько раз выполнится: for(let i=0;i<3;i++)",o:["2","3","4","бесконечно"],a:1,e:"i = 0, 1, 2 — три раза."},
 {q:"Как узнать, сколько элементов в массиве arr?",o:["arr.size","arr.count()","arr.length","length(arr)"],a:2,e:"Свойство length, без скобок."},
 {q:"Что выведет console.log([10,20,30][1])?",o:["10","20","30","ошибку"],a:1,e:"Индекс 1 — второй элемент: 20."}],
practice:{type:"js",task:"Создай массив минимум из 3 своих целей и выведи каждую циклом (<code>for</code> или <code>for...of</code>).",
starter:"const goals = [];\n\n// заполни массив и выведи каждую цель циклом\n\n",
check:c=>/\[[\s\S]*\]/.test(c)&&/for\s*\(/.test(c)&&/console\.log/.test(c),hint:"Нужны массив [...], цикл for и console.log внутри цикла."}},

{id:"m7",title:"Функции и объекты: строительные блоки",
theory:`
<p><b>Функция</b> — кусок кода с именем, который можно вызывать сколько угодно раз:</p>
<pre class="demo">function greet(name) {
  return "Привет, " + name + "!";
}
console.log(greet("Emil"));   // Привет, Emil!</pre>
<p><code>return</code> возвращает результат и завершает функцию. Параметр <code>name</code> — «входные данные».</p>
<p><b>Стрелочная функция</b> — короткая запись, увидишь её везде:</p>
<pre class="demo">const add = (a, b) => a + b;
console.log(add(2, 3));       // 5</pre>
<p><b>Объект</b> — данные парами «ключ: значение»:</p>
<pre class="demo">const user = { name: "Emil", age: 20, isLearning: true };
console.log(user.name);       // доступ через точку</pre>
<p><b>Шаблонные строки</b> — строки в обратных кавычках, переменные вставляются через <code>\${...}</code>:</p>
<pre class="demo">console.log(\`Меня зовут \${user.name}, мне \${user.age}\`);</pre>
<p>Удобнее склейки через «+» — используй их по умолчанию.</p>`,
quiz:[
 {q:"Что делает return в функции?",o:["Печатает текст","Возвращает результат и завершает функцию","Создаёт переменную","Повторяет код"],a:1,e:"return отдаёт значение наружу и останавливает функцию."},
 {q:"Что выведет: const add=(a,b)=>a+b; console.log(add(2,3))",o:["23","5","a+b","ошибку"],a:1,e:"Стрелочная функция вернёт 2+3 = 5."},
 {q:"Как получить name из const user={name:\"Emil\"}?",o:["user->name","user[name]","user.name","name.user"],a:2,e:"Доступ к свойству — через точку: user.name."},
 {q:"В каких кавычках пишется шаблонная строка с ${}?",o:["В одинарных ' '","В двойных \" \"","В обратных ` `","В любых"],a:2,e:"Только обратные кавычки ` ` включают ${...}."},
 {q:"Как вызвать функцию hello без параметров?",o:["call hello","hello()","hello;","run(hello)"],a:1,e:"Вызов — имя со скобками: hello()."}],
practice:{type:"js",task:"Напиши функцию <code>intro(name, goal)</code>, которая возвращает шаблонную строку вида «Я Emil, моя цель — стать разработчиком». Вызови её со своими данными и выведи результат.",
starter:"// function intro(name, goal) { return `...` }\n\n",
check:c=>/(function\s+\w+|=>)/.test(c)&&/return|=>/.test(c)&&/`/.test(c)&&/console\.log/.test(c),hint:"Нужны функция, return, шаблонная строка в обратных кавычках и console.log(intro(...))."}},

{id:"m8",title:"DOM: JavaScript управляет страницей",
theory:`
<p><b>DOM</b> — страница глазами JavaScript: каждый тег — объект, который можно найти и изменить. Именно так работает весь этот тренажёр.</p>
<p><b>Найти элемент:</b></p>
<pre class="demo">const title = document.querySelector("h1");      // по тегу
const btn = document.querySelector("#myBtn");     // по id (#)
const card = document.querySelector(".card");     // по классу (.)</pre>
<p><b>Изменить:</b></p>
<pre class="demo">title.textContent = "Новый текст";
title.style.color = "lime";</pre>
<p><b>Реагировать на события:</b></p>
<pre class="demo">btn.addEventListener("click", () => {
  title.textContent = "Кнопка нажата!";
});</pre>
<p><b>Формы:</b> текст из поля ввода — <code>input.value</code>.</p>
<p>Схема любого интерактива: <b>найти → повесить обработчик → изменить</b>. Выучишь её — сможешь делать живые страницы.</p>`,
quiz:[
 {q:"Что делает document.querySelector(\"#btn\")?",o:["Создаёт кнопку","Находит элемент с id=\"btn\"","Удаляет элемент","Меняет стиль"],a:1,e:"querySelector ищет элемент; # — поиск по id."},
 {q:"Как поменять текст элемента el?",o:["el.text = \"...\"","el.textContent = \"...\"","el.write(\"...\")","text(el)"],a:1,e:"Свойство textContent."},
 {q:"Что делает addEventListener(\"click\", fn)?",o:["Кликает сам","Вызывает fn при каждом клике по элементу","Удаляет клики","Создаёт кнопку"],a:1,e:"«Вешает» обработчик: клик → выполняется функция."},
 {q:"Как прочитать, что пользователь ввёл в input?",o:["input.text","input.value","input.data","read(input)"],a:1,e:"input.value — текущее содержимое поля."},
 {q:"Как обратиться к элементу с классом card?",o:['querySelector("card")','querySelector("#card")','querySelector(".card")','querySelector("<card>")'],a:2,e:"Класс — через точку, id — через решётку."}],
practice:{type:"html",task:"Сделай страницу: заголовок <code>&lt;h1&gt;</code>, кнопка и скрипт — по клику на кнопку текст заголовка меняется. Запусти и проверь клик в превью.",
starter:"<!DOCTYPE html>\n<html>\n<body>\n  <h1 id=\"title\">Привет</h1>\n  <button id=\"btn\">Нажми меня</button>\n  <script>\n    // найди элементы и повесь обработчик клика\n  <\/script>\n</body>\n</html>",
check:c=>/(addEventListener|onclick)/i.test(c)&&/(textContent|innerHTML)/i.test(c)&&/(querySelector|getElementById)/i.test(c),hint:"Нужны поиск элемента (querySelector/getElementById), addEventListener или onclick и смена textContent."}},

{id:"m9",title:"fetch и async/await: данные из интернета",
theory:`
<p>Приложения живут данными: погода, курсы, фильмы. Их отдаёт <b>API</b> — сервер, который отвечает данными в формате <b>JSON</b> (текст, похожий на объект JS).</p>
<p><b>fetch</b> делает запрос и возвращает <b>промис</b> — «обещание результата в будущем» (ответ приходит не мгновенно):</p>
<pre class="demo">async function getUser() {
  const res = await fetch("https://api.github.com/users/octocat");
  const data = await res.json();   // JSON → объект JS
  console.log(data.name);
}
getUser();</pre>
<p>Правила: <code>await</code> — «дождись результата», работает только внутри функции со словом <code>async</code>. <code>res.json()</code> превращает ответ в объект.</p>
<p><b>Ошибки</b> (нет интернета, сервер упал) ловят через try/catch:</p>
<pre class="demo">try {
  const res = await fetch(url);
} catch (err) {
  console.log("Ошибка: " + err);
}</pre>
<p>Тренажёр офлайн, поэтому в практике имитируем «медленный сервер» через промис с задержкой — механика та же.</p>`,
quiz:[
 {q:"Что возвращает fetch()?",o:["Сразу данные","Промис — обещание результата","Строку HTML","Ошибку"],a:1,e:"Ответ приходит не мгновенно, поэтому fetch возвращает промис."},
 {q:"Где можно использовать await?",o:["Где угодно","Только внутри async-функции","Только в циклах","Только в HTML"],a:1,e:"await работает внутри функций, помеченных async."},
 {q:"Что делает res.json()?",o:["Печатает ответ","Превращает ответ сервера в объект JS","Отправляет данные","Проверяет ошибки"],a:1,e:"JSON-текст → обычный объект, с которым можно работать."},
 {q:"JSON — это…",o:["Язык программирования","Текстовый формат данных «ключ: значение»","База данных","Фреймворк"],a:1,e:"Формат обмена данными, выглядит как объект JS."},
 {q:"Зачем нужен try/catch при запросах?",o:["Ускорить запрос","Поймать ошибку, если запрос не удался","Красиво оформить код","Обязателен всегда"],a:1,e:"Сеть ненадёжна: try/catch не даёт программе упасть."}],
practice:{type:"js",task:"Имитация API: есть функция <code>fakeApi()</code>, она возвращает промис с данными через секунду. Напиши <code>async</code>-функцию, которая ждёт результат через <code>await</code> и выводит имя и уровень.",
starter:"function fakeApi() {\n  return new Promise(resolve => {\n    setTimeout(() => resolve({ name: \"Emil\", level: \"junior soon\" }), 1000);\n  });\n}\n\n// напиши async-функцию: await fakeApi(), выведи data.name и data.level\n\n",
check:c=>/async/.test(c)&&/await/.test(c)&&/console\.log/.test(c),hint:"Нужны async function, await fakeApi() и console.log с результатом."}}
];

/* ============ CONTENT: ENGLISH ============ */
const ENG=[
{id:"l1",title:"Present Simple vs Present Continuous",
theory:`
<span class="fix"><span class="was">I'm learn English</span> → <span class="now">I'm learning English</span><br><span class="muted2">Твоя ошибка из теста</span></span>
<table class="simple"><tr><th></th><th>Present Simple</th><th>Present Continuous</th></tr>
<tr><td>Когда</td><td>Регулярно, вообще</td><td>Прямо сейчас</td></tr>
<tr><td>Форма</td><td>V / V+s (he, she, it)</td><td>am / is / are + V-ing</td></tr>
<tr><td>Пример</td><td>I learn English every day</td><td>I am learning English now</td></tr></table>
<p><b>Правило -s:</b> he/she/it: <i>She go<b>es</b>. He play<b>s</b>.</i></p>
<p><b>Нельзя:</b> «I'm learn» — либо <i>I'm learning</i>, либо <i>I learn</i>.</p>
<p>Маркеры Simple: every day, usually, often. Маркеры Continuous: now, at the moment.</p>`,
ex:[
 {t:"mc",q:"She ___ to work every day.",o:["go","goes","going","is go"],a:1,e:"he/she/it + -s. «Every day» = Simple."},
 {t:"mc",q:"I ___ English now.",o:["learn","am learning","learning","am learn"],a:1,e:"«Now» = Continuous."},
 {t:"fill",q:"He ___ (play) hockey every weekend.",a:["plays"],e:"he → plays."},
 {t:"fill",q:"Look! It ___ (rain).",a:["is raining","'s raining"],e:"Прямо сейчас → is raining."},
 {t:"mc",q:"«Я учу английский, потому что хочу стать разработчиком»:",o:["I'm learn English because I will be a developer","I'm learning English because I want to become a developer","I learning English because I be developer","I am learn English for be developer"],a:1,e:"am + learning; want to become."},
 {t:"mc",q:"They usually ___ dinner at 7.",o:["are having","haves","have","having"],a:2,e:"«Usually» = Simple: have."},
 {t:"fill",q:"My brother ___ (not/like) coffee.",a:["doesn't like","does not like"],e:"doesn't + глагол без -s."},
 {t:"mc",q:"___ you working now?",o:["Do","Is","Are","Does"],a:2,e:"you → Are you working now?"}]},

{id:"l2",title:"Past Simple: говорим о прошлом",
theory:`
<p><b>Past Simple</b> — законченное действие в прошлом: yesterday, last week, ago.</p>
<p>Правильные глаголы: + <b>-ed</b>: play → play<b>ed</b>. Неправильные — запоминаем:</p>
<table class="simple"><tr><th>Глагол</th><th>Прошедшее</th><th>Перевод</th></tr>
<tr><td>go</td><td>went</td><td>идти</td></tr><tr><td>see</td><td>saw</td><td>видеть</td></tr>
<tr><td>have</td><td>had</td><td>иметь</td></tr><tr><td>make</td><td>made</td><td>делать</td></tr>
<tr><td>begin</td><td>began</td><td>начинать</td></tr><tr><td>write</td><td>wrote</td><td>писать</td></tr></table>
<p><b>Отрицание и вопрос</b> — через did, глагол в начальной форме:</p>
<pre class="demo">I didn't see the film.   (НЕ "didn't saw")
Did you finish the task? (НЕ "Did you finished")</pre>
<span class="fix"><span class="was">hockey carrera</span> → <span class="now">hockey career</span><br><span class="muted2">carrera — это испанский. Время ты выбрал верно</span></span>`,
ex:[
 {t:"fill",q:"I ___ (watch) a film yesterday.",a:["watched"],e:"Правильный глагол: + ed."},
 {t:"fill",q:"She ___ (go) to Moscow last week.",a:["went"],e:"go → went."},
 {t:"mc",q:"I ___ my homework an hour ago.",o:["finish","finished","have finished","finishing"],a:1,e:"«ago» → finished."},
 {t:"mc",q:"He didn't ___ the message.",o:["saw","seen","see","sees"],a:2,e:"После didn't — начальная форма."},
 {t:"fill",q:"___ you ___ (play) hockey yesterday? (вопрос)",a:["did play","did you play"],e:"Did you play...?",w:220},
 {t:"mc",q:"They ___ a new project last month.",o:["began","begin","begun","beginned"],a:0,e:"begin → began."},
 {t:"fill",q:"I ___ (not/have) time yesterday.",a:["didn't have","did not have"],e:"didn't + have (не had!)."},
 {t:"mc",q:"«Я закончил хоккейную карьеру»:",o:["I finish my hockey career","I finished my hockey career","I have finish hockey carrera","I was finish my career"],a:1,e:"finished + career."}]},

{id:"l3",title:"Будущее и цели: will, going to, want to become",
theory:`
<table class="simple"><tr><th>Форма</th><th>Когда</th><th>Пример</th></tr>
<tr><td><b>will + V</b></td><td>Решение сейчас, обещание</td><td>I will help you</td></tr>
<tr><td><b>going to + V</b></td><td>План (уже решил)</td><td>I'm going to learn JavaScript</td></tr>
<tr><td><b>want to + V</b></td><td>Желание, цель</td><td>I want to become a developer</td></tr></table>
<p>«Хочу стать разработчиком»: <b>I want to become a developer</b>.</p>
<pre class="demo">My goal is to become a junior developer.
I'm learning English to get a better job.
I need to practise every day.</pre>
<span class="fix"><span class="was">i need be a greatest version on me</span> → <span class="now">I need to be the greatest version of myself</span><br><span class="muted2">после need нужен to</span></span>`,
ex:[
 {t:"mc",q:"«Я хочу стать разработчиком»:",o:["I will developer","I want to become a developer","I want become developer","I be a developer"],a:1,e:"want + to + become + a developer."},
 {t:"fill",q:"I ___ (go) to learn CSS next week. (собираюсь)",a:["am going","'m going","am going to learn"],e:"План → am going to.",w:240},
 {t:"mc",q:"— The phone is ringing! — OK, I ___ answer it.",o:["going to","will","want","am"],a:1,e:"Решение в момент речи → will."},
 {t:"mc",q:"I need ___ every day.",o:["practise","to practise","practising","for practise"],a:1,e:"need + to + глагол."},
 {t:"mc",q:"My goal is ___ a junior developer.",o:["become","becoming","to become","became"],a:2,e:"My goal is TO become."},
 {t:"fill",q:"She ___ (not/will) come tomorrow.",a:["won't","will not"],e:"will not = won't."},
 {t:"mc",q:"«Пожелай мне удачи»:",o:["Say good luck for me","Wish me luck","Good luck to say me","Luck for me"],a:1,e:"Wish me luck!"}]},

{id:"l4",title:"Работа над ошибками: твой тест",
theory:`
<p>Разбор твоих фраз — самый полезный урок: ошибки свои, а не из учебника.</p>
<span class="fix"><span class="was">i'm learn english because i will be a developer</span><br>
<span class="now">I'm learning English because I want to become a developer.</span><br>
<span class="muted2">am + V-ing; want to become; I — всегда с большой буквы.</span></span>
<span class="fix"><span class="was">i'm 20 yars old and i start lerning new lenguge</span><br>
<span class="now">I'm 20 years old and I started learning a new language.</span><br>
<span class="muted2">years, learning, language; started (прошедшее).</span></span>
<span class="fix"><span class="was">i need be a greatest version on me</span><br>
<span class="now">I need to be the greatest version of myself.</span><br>
<span class="muted2">need TO be; the greatest; version OF myself.</span></span>
<span class="fix"><span class="was">i am very iinteristing guy</span><br>
<span class="now">I am a very interesting guy.</span><br>
<span class="muted2">Артикль a: a guy, a developer.</span></span>
<span class="fix"><span class="was">Just be be say good luck for me</span><br>
<span class="now">Just wish me luck!</span><br>
<span class="muted2">Устойчивое выражение.</span></span>
<p><b>3 направления роста:</b> времена, «to» после need/want/goal, артикли a/the.</p>
<p>«To look forward to» = <b>ждать с нетерпением</b>: <i>I look forward to my new life.</i></p>`,
ex:[
 {t:"mc",q:"I am ___ interesting guy.",o:["very","a very","the very","an very"],a:1,e:"a + very + interesting + guy."},
 {t:"fill",q:"I started ___ (learn) a new language.",a:["learning","to learn"],e:"start + learning / to learn."},
 {t:"mc",q:"I need ___ the greatest version of myself.",o:["be","to be","being","am"],a:1,e:"need TO be."},
 {t:"mc",q:"«I look forward to my first job» означает:",o:["Я смотрю вперёд на работу","Я с нетерпением жду первую работу","Я ищу первую работу","Я боюсь первой работы"],a:1,e:"look forward to = ждать с нетерпением."},
 {t:"fill",q:"I'm 20 ___ old.",a:["years"],e:"years (не yars)."},
 {t:"mc",q:"Фраза без ошибок:",o:["I'm learn English every day","I learning English every day","I learn English every day","I am learn English every day"],a:2,e:"I learn (Simple) или I am learning (сейчас)."}]}
];


/* ============ CONTENT: VOCAB (SRS) ============ */
const VOCAB=[
["developer","разработчик","I want to become a developer."],
["to learn","учить, учиться","I learn English every day."],
["to teach","обучать (кого-то)","Claude teaches me to code."],
["language","язык","JavaScript is a programming language."],
["to improve","улучшать","I want to improve my English."],
["mistake","ошибка","Don't be afraid of mistakes."],
["to create","создавать","I created my first web page."],
["to build","строить, создавать","We are building an app."],
["website","сайт","This website looks great."],
["page","страница","Open the main page."],
["button","кнопка","Click the button."],
["file","файл","Save the file."],
["folder","папка","The project is in this folder."],
["to run","запускать","Run the code."],
["to save","сохранять","Save your progress."],
["skill","навык","Coding is a useful skill."],
["goal","цель","My goal is to become a junior developer."],
["to achieve","достигать","You can achieve your goal."],
["career","карьера","I finished my hockey career."],
["future","будущее","I think about my future."],
["to practise","практиковаться","I practise every day."],
["habit","привычка","Learning is my new habit."],
["to remember","помнить","I remember this word."],
["to forget","забывать","Don't forget the rules."],
["to try","пытаться","Try again!"],
["sentence","предложение","Write a sentence in English."],
["word","слово","This word is new for me."],
["meaning","значение","What is the meaning of this word?"],
["to become","становиться","I want to become a developer."],
["interesting","интересный","I am a very interesting guy."],
["to look forward to","ждать с нетерпением","I look forward to my new life."],
["to wish luck","пожелать удачи","Wish me luck!"]
];
const INTERVALS=[1,3,7,16,35];

const BLOCKS=[
 {n:"01",title:"Основы: веб, HTML и CSS",lessons:["m1","m2","m3","m4"],
  project:"Адаптивная страница-визитка о себе",
  res:[["Гоша Дударь — вёрстка","yt","Гоша Дударь HTML CSS вёрстка"],["Kevin Powell — CSS","yt","Kevin Powell CSS flexbox grid"],["freeCodeCamp","url","https://www.freecodecamp.org/learn/2022/responsive-web-design/"],["MDN — справочник","url","https://developer.mozilla.org/ru/docs/Web/HTML"]]},
 {n:"02",title:"JavaScript: фундамент",lessons:["m5","m6","m7","m8","m9"],
  project:"Интерактивное приложение с данными из API (погода / фильмы)",
  res:[["Владилен Минин — JS","yt","Владилен Минин JavaScript с нуля"],["Web Dev Simplified","yt","Web Dev Simplified JavaScript"],["freeCodeCamp — JS","url","https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/"],["Codewars — задачи","url","https://www.codewars.com/"]]},
 {n:"03",title:"Git, GitHub и инструменты",topics:["Git: commit, branch, push","GitHub: репозиторий, pull request","npm и Vite — старт проекта","Деплой на Netlify / Vercel"],
  project:"Выложить свои проекты на GitHub и в интернет",
  res:[["Гоша Дударь — Git","yt","Гоша Дударь Git GitHub для начинающих"],["roadmap.sh","url","https://roadmap.sh/frontend"],["The Odin Project","url","https://www.theodinproject.com/paths/foundations/courses/foundations"]]},
 {n:"04",title:"React",topics:["Компоненты и props","Состояние: useState","Эффекты: useEffect","Списки, формы, работа с API"],
  project:"Приложение на React с состоянием (трекер / каталог)",
  res:[["Владилен Минин — React","yt","Владилен Минин React с нуля"],["Traversy Media","yt","Traversy Media React crash course"],["The Net Ninja","yt","Net Ninja React tutorial"],["Scrimba — React","url","https://scrimba.com/learn-react-c0e"]]},
 {n:"05",title:"TypeScript и немного бэкенда",topics:["Основы типов TypeScript","Node.js + Express","Простой CRUD и база данных","Первый full-stack проект"],
  project:"Full-stack приложение: React + Node + база",
  res:[["Ulbi TV — fullstack","yt","Ulbi TV fullstack React TypeScript"],["freeCodeCamp — backend","url","https://www.freecodecamp.org/learn/back-end-development-and-apis/"]]},
 {n:"06",title:"Портфолио и выход на работу",topics:["Довести 3–5 проектов до деплоя","Оформить GitHub и резюме","Один проект с AI-фичей","Подготовка к собеседованию junior"],
  project:"Портфолио из 3–5 работающих проектов + резюме",
  res:[["Frontend Mentor — макеты","url","https://www.frontendmentor.io/challenges"],["roadmap.sh","url","https://roadmap.sh/frontend"]]}
];

const STORY=[
 {act:"01",title:"Первая страница",sub:"Из района — в код",quests:[
   {id:"m1",t:"Понять, как устроен веб",
     intro:[{who:"Ментор",text:"Хочешь вырваться? Код — твой билет. Но сперва пойми, из чего вообще собран интернет."},{who:"EMIL",text:"Ладно. С нуля так с нуля."}],
     outro:[{who:"EMIL",text:"Так вот как браузер рисует страницу... Первая в жизни — готова."},{who:"Ментор",text:"Теперь ты видишь, как всё устроено. Дальше — больше."}]},
   {id:"m2",t:"Собрать настоящую страницу",
     intro:[{who:"Ментор",text:"Одного заголовка мало. Списки, ссылки, картинки — кирпичи любой страницы."}],
     outro:[{who:"EMIL",text:"Уже похоже на сайт, а не на записку."}]},
   {id:"m3",t:"Сделать красиво",
     intro:[{who:"Ментор",text:"Голый HTML никто не купит. Пора наводить красоту — это CSS."}],
     outro:[{who:"EMIL",text:"О, вот это уже можно показать людям."},{who:"Ментор",text:"Кстати. Есть заказчик — кафе за углом. Нужен лендинг."}]},
   {boss:true,id:"b1",t:"Заказ: лендинг кафе",need:["m1","m2","m3"],
     intro:[{who:"Ментор",text:"Первый настоящий заказ. Собери всё, что выучил, в одну страницу — и ты уже не ноль."},{who:"EMIL",text:"Погнали. Первые деньги за код."}]}
 ]},
 {act:"02",title:"Оживи это",sub:"Страница начинает думать",quests:[
   {id:"m4",t:"Оживить страницу кодом",
     intro:[{who:"Ментор",text:"Красиво, но мертво. Оживим — знакомься, JavaScript."}],
     outro:[{who:"EMIL",text:"Переменные, типы... язык начинает меня слушаться."}]},
   {id:"m5",t:"Научить код решать",
     intro:[{who:"Ментор",text:"Программа должна выбирать: если да — одно, если нет — другое."}],
     outro:[{who:"EMIL",text:"Теперь она думает, а не тупо повторяет."}]},
   {id:"m6",t:"Победить рутину",
     intro:[{who:"Ментор",text:"Сто одинаковых строк руками? Нет. Циклы и массивы."}],
     outro:[{who:"EMIL",text:"Одна петля — и работа сделана за меня."}]},
   {id:"m7",t:"Собирать из блоков",
     intro:[{who:"Ментор",text:"Хватит копипастить. Заворачивай логику в функции."}],
     outro:[{who:"EMIL",text:"Собираю код как из деталей. Кайф."}]}
 ]},
 {act:"03",title:"Данные из мира",sub:"Приложение с реальными данными",quests:[
   {id:"m8",t:"Управлять страницей из кода",
     intro:[{who:"Ментор",text:"Свяжи JS и страницу — это DOM. Клик — и всё меняется."}],
     outro:[{who:"EMIL",text:"Я управляю страницей прямо из кода. Магия."}]},
   {id:"m9",t:"Достать данные из сети",
     intro:[{who:"Ментор",text:"Настоящие приложения тянут данные из интернета. fetch и await."}],
     outro:[{who:"EMIL",text:"Данные из сети — прямо в моём приложении. Я почти разраб."}]},
   {boss:true,id:"b3",t:"Заказ: приложение с API",need:["m8","m9"],
     intro:[{who:"Ментор",text:"Сделай приложение, которое живёт на реальных данных. Это уже уровень портфолио."}]}
 ]},
 {act:"04",title:"Инструменты профи",sub:"Скоро — Git, React, оффер",locked:true,quests:[
   {t:"Git и GitHub"},{t:"React"},{t:"Собеседование на английском"}
 ]}
];

/* ============ ECONOMY + NFT COLLECTION ============ */
const RARITY={c:{n:"Common",col:"#9BA39D"},r:{n:"Rare",col:"#4DA3FF"},e:{n:"Epic",col:"#C24DFF"},l:{n:"Legendary",col:"#FFD34D"}};
const NFTS=[
 {id:"n1",img:"3 na 4 влево, задумчивый.jpg",name:"Задумчивый",r:"c",price:60},
 {id:"n2",img:"3 na 4, смотрит на телефон.jpg",name:"Чекает чарты",r:"c",price:60},
 {id:"n3",img:"Кухня — утро.jpg",name:"Утро на кухне",r:"c",price:60},
 {id:"n4",img:"SHIMPA V SPALNE.jpg",name:"Chill Zone",r:"c",price:60},
 {id:"n5",img:"3 na 4 вправо, уверенный.jpg",name:"Уверенный",r:"r",price:150},
 {id:"n6",img:"SHAMP IN PK ROOM.jpg",name:"За сетапом",r:"r",price:150},
 {id:"n7",img:"Со спины, капюшон.jpg",name:"Hoodie Mode",r:"r",price:150},
 {id:"n8",img:"SHAMP IN KITCHEN.jpg",name:"Шеф",r:"r",price:150},
 {id:"n9",img:"Trading Cave — за мониторами.jpg",name:"Trading Cave",r:"e",price:350},
 {id:"n10",img:"SHIMPA NA KRYSHE.jpg",name:"На крыше",r:"e",price:350},
 {id:"n11",img:"REKT — слеза.jpg",name:"REKT",r:"e",price:350},
 {id:"n12",img:"Крыша — победа.jpg",name:"Победа",r:"l",cond:"Закрой весь Блок 1: все тесты и практика",check:()=>blockDone(BLOCKS[0])},
 {id:"n13",img:"Профиль, вид снизу, героический.jpg",name:"Герой",r:"l",cond:"Стрик 30 дней подряд",check:()=>S.streak>=30},
 {id:"n14",img:"Крыша — спокойный, закат.jpg",name:"Закат",r:"l",cond:"Выучи прочно все слова из «Слов»",check:()=>Object.values(S.srs).filter(c=>c.learned).length>=VOCAB.length}
];
