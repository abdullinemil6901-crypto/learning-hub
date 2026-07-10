"use strict";
/* ============================================================
   EMIL — контент-пак v2: уроки, словарь, сюжет, коллекция.
   Данные отделены от движка (index.html). Без сборки: глобальные литералы.
   ============================================================ */

/* ============ CONTENT: PROGRAMMING ============ */
const PROG=[
{id:"m1",title:"Как работает веб + первая страница",
theory:`
<p>🎯 <b>Зачем это тебе:</b> прежде чем писать сайты, надо понять, что вообще происходит, когда человек открывает страницу. Без этой картинки код кажется магией. С ней — ты понимаешь, что делаешь. Это фундамент под всё дальнейшее.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Что происходит, когда ты открываешь сайт</h3>
<p>Ты вводишь адрес — браузер отправляет <b>запрос</b> на <b>сервер</b> (чужой компьютер, где лежит сайт). Сервер отвечает <b>файлами</b>. Браузер их получает и «рисует» из них страницу.</p>
<svg viewBox="0 0 600 150" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker>
  <marker id="ag" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#37936F"/></marker></defs>
  <rect x="20" y="45" width="150" height="60" rx="10" fill="#141716" stroke="#B9FF47"/>
  <text x="95" y="72" text-anchor="middle" fill="#F4F6F2" font-size="14" font-weight="700">Браузер</text>
  <text x="95" y="90" text-anchor="middle" fill="#9BA39D" font-size="10">твой телефон</text>
  <rect x="430" y="45" width="150" height="60" rx="10" fill="#141716" stroke="#37936F"/>
  <text x="505" y="72" text-anchor="middle" fill="#F4F6F2" font-size="14" font-weight="700">Сервер</text>
  <text x="505" y="90" text-anchor="middle" fill="#9BA39D" font-size="10">где лежит сайт</text>
  <line x1="175" y1="62" x2="423" y2="62" stroke="#B9FF47" stroke-width="2" marker-end="url(#ar)"/>
  <text x="300" y="55" text-anchor="middle" fill="#B9FF47" font-size="11">запрос: «дай сайт»</text>
  <line x1="425" y1="90" x2="177" y2="90" stroke="#37936F" stroke-width="2" marker-end="url(#ag)"/>
  <text x="300" y="108" text-anchor="middle" fill="#37936F" font-size="11">ответ: файлы HTML, CSS, JS</text>
</svg>
<p>Разбор: страница — это не картинка, которую прислали целиком. Это <b>инструкции</b> (файлы), по которым браузер сам собирает то, что ты видишь. Поэтому один и тот же сайт открывается и на телефоне, и на компе — браузер соберёт под свой экран.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Три технологии — три слоя</h3>
<p>Любая страница держится на трёх вещах. У каждой своя работа:</p>
<svg viewBox="0 0 600 140" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="25" width="170" height="90" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="115" y="55" text-anchor="middle" fill="#B9FF47" font-size="15" font-weight="700">HTML</text>
  <text x="115" y="77" text-anchor="middle" fill="#F4F6F2" font-size="11">структура</text>
  <text x="115" y="95" text-anchor="middle" fill="#9BA39D" font-size="10">скелет: что есть</text>
  <rect x="215" y="25" width="170" height="90" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="300" y="55" text-anchor="middle" fill="#FFD34D" font-size="15" font-weight="700">CSS</text>
  <text x="300" y="77" text-anchor="middle" fill="#F4F6F2" font-size="11">внешний вид</text>
  <text x="300" y="95" text-anchor="middle" fill="#9BA39D" font-size="10">одежда: как выглядит</text>
  <rect x="400" y="25" width="170" height="90" rx="10" fill="#1C201E" stroke="#FF7A2F"/>
  <text x="485" y="55" text-anchor="middle" fill="#FF7A2F" font-size="15" font-weight="700">JavaScript</text>
  <text x="485" y="77" text-anchor="middle" fill="#F4F6F2" font-size="11">поведение</text>
  <text x="485" y="95" text-anchor="middle" fill="#9BA39D" font-size="10">мышцы: что делает</text>
</svg>
<p>Сегодня мы про <b>HTML</b> — скелет. CSS и JS будут дальше. Порядок не случаен: сначала строят каркас, потом красят, потом оживляют.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. HTML — это теги</h3>
<p><b>Тег</b> — команда браузеру, слово в угловых скобках. Большинство тегов <b>парные</b>: открывающий и закрывающий (со слэшем). Между ними — содержимое.</p>
<pre class="demo">&lt;h1&gt;Большой заголовок&lt;/h1&gt;
&lt;p&gt;Обычный абзац текста.&lt;/p&gt;</pre>
<p>Разбор: <code>&lt;h1&gt;</code> открывает заголовок, <code>&lt;/h1&gt;</code> закрывает. Браузер понимает: «всё между ними — крупный заголовок». <code>&lt;p&gt;</code> — абзац (paragraph). Заголовки бывают от <code>&lt;h1&gt;</code> (самый крупный) до <code>&lt;h6&gt;</code> (мелкий).</p>

<p>Не все теги парные. <b>Одиночные</b> теги не оборачивают текст, а вставляют что-то на месте — например картинку или перенос строки:</p>
<pre class="demo">&lt;img src="cat.jpg" alt="кот"&gt;   &lt;!-- картинка --&gt;
&lt;br&gt;                          &lt;!-- перенос строки --&gt;</pre>
<p>Разбор: у <code>&lt;img&gt;</code> нет закрывающей пары — он самодостаточный. То, что в кавычках (<code>src</code>, <code>alt</code>), называется <b>атрибут</b> — дополнительная настройка тега (<code>src</code> — какой файл показать, <code>alt</code> — текст, если картинка не загрузилась). Атрибуты подробно разберём в следующем уроке. А <code>&lt;!-- ... --&gt;</code> — это <b>комментарий</b>: заметка для себя, браузер её не показывает.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Каркас страницы и дерево</h3>
<p>У страницы есть обязательная обёртка. <code>&lt;head&gt;</code> — служебное (невидимое), <code>&lt;body&gt;</code> — всё, что видно на экране:</p>
<pre class="demo">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;Вкладка&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Привет!&lt;/h1&gt;
    &lt;p&gt;Моя страница.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
<p>Разбор: теги вложены друг в друга и образуют <b>дерево</b> — браузер именно так и хранит страницу внутри (это называется DOM, дойдём до него):</p>
<svg viewBox="0 0 600 160" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="255" y="12" width="90" height="26" rx="6" fill="#141716" stroke="#5D655F"/><text x="300" y="29" text-anchor="middle" fill="#F4F6F2" font-size="12">html</text>
  <line x1="300" y1="38" x2="180" y2="58" stroke="#5D655F"/><line x1="300" y1="38" x2="420" y2="58" stroke="#5D655F"/>
  <rect x="135" y="58" width="90" height="26" rx="6" fill="#141716" stroke="#5D655F"/><text x="180" y="75" text-anchor="middle" fill="#9BA39D" font-size="12">head</text>
  <rect x="375" y="58" width="90" height="26" rx="6" fill="#141716" stroke="#B9FF47"/><text x="420" y="75" text-anchor="middle" fill="#B9FF47" font-size="12">body</text>
  <line x1="180" y1="84" x2="180" y2="113" stroke="#5D655F"/>
  <rect x="135" y="113" width="90" height="26" rx="6" fill="#141716" stroke="#5D655F"/><text x="180" y="130" text-anchor="middle" fill="#9BA39D" font-size="11">title</text>
  <line x1="420" y1="84" x2="360" y2="113" stroke="#5D655F"/><line x1="420" y1="84" x2="480" y2="113" stroke="#5D655F"/>
  <rect x="315" y="113" width="90" height="26" rx="6" fill="#141716" stroke="#B9FF47"/><text x="360" y="130" text-anchor="middle" fill="#F4F6F2" font-size="12">h1</text>
  <rect x="435" y="113" width="90" height="26" rx="6" fill="#141716" stroke="#B9FF47"/><text x="480" y="130" text-anchor="middle" fill="#F4F6F2" font-size="12">p</text>
</svg>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">5. Подсмотри, как сделан любой сайт</h3>
<p>Весь HTML любого сайта открыт — можно посмотреть, как он устроен, и учиться на живых примерах. На компьютере нажми <b>F12</b> (или правой кнопкой → «Просмотреть код»). Откроются <b>инструменты разработчика</b>: слева — то самое дерево тегов, наведись на любой — и увидишь, за какой кусок страницы он отвечает.</p>
<p>Это твой главный инструмент отладки: когда что-то «не так выглядит», открываешь F12 и смотришь, какие теги реально получились. Профи живут в этой панели.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">&lt;h1&gt;Заголовок</span> → <span class="now">&lt;h1&gt;Заголовок&lt;/h1&gt;</span><br><span class="muted2">забыл закрыть тег — браузер «поедет», следующий текст затянет в заголовок</span></span>
<span class="fix"><span class="was">видимый текст внутри &lt;head&gt;</span> → <span class="now">внутри &lt;body&gt;</span><br><span class="muted2">head — служебный и не показывается; всё, что видно, живёт в body</span></span>
<span class="fix"><span class="was">&lt;/p&gt;Текст&lt;p&gt;</span> → <span class="now">&lt;p&gt;Текст&lt;/p&gt;</span><br><span class="muted2">слэш — только у закрывающего тега, и он идёт после содержимого</span></span>`,
quiz:[
 {t:"pairs",q:"Соедини технологию с её ролью",pairs:[["HTML","структура/скелет"],["CSS","внешний вид"],["JavaScript","поведение/логика"],["сервер","где лежит сайт"]],e:"HTML — скелет, CSS — одежда, JS — мышцы, сервер отдаёт файлы браузеру."},
 {t:"output",q:"Что покажет браузер?",code:"<h1>Кофе</h1>\n<p>Вкусный</p>",o:["крупный «Кофе», ниже обычный «Вкусный»","всё одним размером","только «Кофе»","ошибку"],a:0,e:"h1 — крупный заголовок, p — обычный абзац под ним."},
 {q:"Где живёт то, что видно на экране?",o:["В <head>","В <body>","В <title>","В <!DOCTYPE>"],a:1,e:"body — видимая часть; head — служебная (невидимая)."},
 {t:"bug",q:"В какой строке тег не закрыт?",code:["<body>","  <h1>Привет","  <p>Текст</p>","</body>"],a:1,e:"У <h1> нет закрывающего </h1> — текст «поедет»."},
 {t:"cloze",q:"Допиши каркас: обёртка видимой части",code:"<{0}>\n  <h1>Привет</h1>\n</{1}>",gaps:["body","body"],e:"Видимое содержимое оборачивают в парный тег body."}],
lab:[
 {kind:"fill",type:"html",prompt:`<p><b>Задание 1.</b> Внутри &lt;body&gt; добавь <b>заголовок</b> &lt;h1&gt; с любым текстом и <b>абзац</b> &lt;p&gt; под ним. Жми «Запустить» — увидишь страницу, потом «Проверить».</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<body>\n\n  <!-- напиши здесь h1 и p -->\n\n</body>\n</html>",
  tests:[
   {t:"На странице есть заголовок <h1> с текстом",fn:d=>{const h=d.querySelector("h1");return !!h&&h.textContent.trim().length>0;}},
   {t:"На странице есть абзац <p> с текстом",fn:d=>{const p=d.querySelector("p");return !!p&&p.textContent.trim().length>0;}}]},
 {kind:"fix",type:"html",prompt:`<p><b>Задание 2.</b> Страница сломана: заголовок не закрыт и «съел» абзац. <b>Почини</b> — закрой &lt;h1&gt; правильно, чтобы абзац стал отдельным.</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<body>\n  <h1>Моё кафе\n  <p>Лучший кофе в городе</p>\n</body>\n</html>",
  tests:[
   {t:"Заголовок <h1> закрыт и не затянул текст абзаца внутрь",fn:d=>{const h=d.querySelector("h1");return !!h&&h.textContent.trim().length>0&&!/лучший кофе/i.test(h.textContent);}},
   {t:"Абзац <p> существует отдельным элементом",fn:d=>{const p=d.querySelector("p");return !!p&&/кофе/i.test(p.textContent);}}]},
 {kind:"build",type:"html",prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> мини-страницу о себе: заголовок с именем, один абзац о себе и список &lt;ul&gt; из <b>трёх</b> пунктов &lt;li&gt; (твои увлечения).</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<body>\n\n  <!-- заголовок с именем -->\n\n  <!-- абзац о себе -->\n\n  <!-- список ul с тремя li -->\n\n</body>\n</html>",
  tests:[
   {t:"Есть заголовок <h1> с текстом",fn:d=>{const h=d.querySelector("h1");return !!h&&h.textContent.trim().length>0;}},
   {t:"Есть абзац <p> с текстом",fn:d=>{const p=d.querySelector("p");return !!p&&p.textContent.trim().length>0;}},
   {t:"Есть список <ul> минимум с тремя <li>",fn:d=>{const ul=d.querySelector("ul");return !!ul&&ul.querySelectorAll("li").length>=3;}},
   {t:"Каждый пункт списка не пустой",fn:d=>{const li=d.querySelectorAll("ul li");return li.length>=3&&[...li].every(x=>x.textContent.trim().length>0);}}]}],
res:[
 ["MDN: Введение в HTML (рус.)","url","https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML"],
 ["METANIT: основы HTML5","url","https://metanit.com/web/html5/"],
 ["Как работает интернет — простыми словами","yt","как работает интернет и браузер простыми словами"],
 ["freeCodeCamp: Responsive Web Design","url","https://www.freecodecamp.org/learn/2022/responsive-web-design/"]]},
{id:"m2",title:"HTML глубже: списки, ссылки, картинки",
theory:`
<p>🎯 <b>Зачем это тебе:</b> почти каждый заказ — это списки («наши услуги»), ссылки («наши соцсети») и картинки («наши работы»). Освоишь эти три тега — и сможешь собрать типовую страницу-визитку целиком, а не только «голый заголовок с абзацем».</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Списки: ul и ol</h3>
<p>Списков два вида, и различаются они одной буквой в названии:</p>
<pre class="demo">&lt;ul&gt;                &lt;ol&gt;
  &lt;li&gt;Хоккей&lt;/li&gt;     &lt;li&gt;Первый&lt;/li&gt;
  &lt;li&gt;Код&lt;/li&gt;        &lt;li&gt;Второй&lt;/li&gt;
&lt;/ul&gt;               &lt;/ol&gt;</pre>
<p>Разбор: <code>ul</code> (unordered list — неупорядоченный) — маркированный, браузер сам поставит точки. <code>ol</code> (ordered list — упорядоченный) — нумерованный, цифры 1, 2, 3 браузер проставит сам. Выбор простой: важен порядок (шаги рецепта, места в топе) — бери ol; порядок не важен (список услуг) — ul. Каждый пункт — тег <code>li</code> (list item), и жить он может только внутри ul или ol. Внутрь li кладут не только текст, но и ссылки или картинки — меню реальных сайтов устроены именно так: список из ссылок. Списки можно вкладывать: пункт li сам содержит вложенный ul — так строят многоуровневые меню.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Ссылки: тег a и атрибут href</h3>
<p>Ссылка — это текст, по которому можно кликнуть и перейти в другое место:</p>
<pre class="demo">&lt;a href="https://google.com"&gt;Открыть Google&lt;/a&gt;</pre>
<p>Разбор: тег <code>a</code> делает текст кликабельным. <code>href</code> — это <b>атрибут</b> (настройка тега вида имя="значение", пишется внутри открывающего тега) и хранит адрес, куда ведёт ссылка. Текст между тегами — то, что пользователь видит и нажимает.</p>
<svg viewBox="0 0 600 140" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="30" width="150" height="70" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="95" y="58" text-anchor="middle" fill="#B9FF47" font-size="15" font-weight="700">&lt;a … &gt;</text>
  <text x="95" y="77" text-anchor="middle" fill="#9BA39D" font-size="10">тег: делает</text>
  <text x="95" y="91" text-anchor="middle" fill="#9BA39D" font-size="10">текст ссылкой</text>
  <rect x="185" y="30" width="200" height="70" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="285" y="58" text-anchor="middle" fill="#FFD34D" font-size="14" font-weight="700">href="…"</text>
  <text x="285" y="77" text-anchor="middle" fill="#9BA39D" font-size="10">атрибут: адрес,</text>
  <text x="285" y="91" text-anchor="middle" fill="#9BA39D" font-size="10">куда ведёт клик</text>
  <rect x="400" y="30" width="180" height="70" rx="10" fill="#1C201E" stroke="#37936F"/>
  <text x="490" y="58" text-anchor="middle" fill="#37936F" font-size="14" font-weight="700">Открыть</text>
  <text x="490" y="77" text-anchor="middle" fill="#9BA39D" font-size="10">видимый текст:</text>
  <text x="490" y="91" text-anchor="middle" fill="#9BA39D" font-size="10">на него нажимают</text>
</svg>
<p>Адрес бывает полным — <code>https://google.com</code>, на чужой сайт — или коротким: <code>page2.html</code> означает «файл рядом с этой страницей». Хочешь, чтобы ссылка открывалась в новой вкладке — добавь атрибут <code>target="_blank"</code>: заказчики часто просят так для внешних ссылок. Ссылкой можно сделать не только текст, но и картинку — положи тег <code>img</code> внутрь <code>a</code>, и клик по картинке уведёт на адрес из href: так работают кликабельные логотипы и баннеры.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Картинки: img</h3>
<pre class="demo">&lt;img src="photo.jpg" alt="Моё фото"&gt;</pre>
<p>Разбор: <code>img</code> — одиночный тег, закрывающей пары у него нет — картинке нечего «оборачивать». <code>src</code> (source — источник) — путь к файлу, работает по тем же правилам, что и href: имя файла рядом или полный адрес. <code>alt</code> — запасной текст: он появится, если файл не загрузился, и именно его читают экранные дикторы для незрячих. Размер можно задать атрибутом <code>width="200"</code> (в пикселях), но чаще это делают через CSS. Форматы под задачу: <code>jpg</code> — для фотографий, <code>png</code> — когда нужна прозрачность, <code>svg</code> — для иконок и логотипов, которые не мылятся при увеличении.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Контейнер div — коробка для группировки</h3>
<p><code>&lt;div&gt;</code> — «коробка» без собственного вида: в неё складывают связанные элементы, чтобы позже красить и двигать их через CSS как единое целое.</p>
<pre class="demo">&lt;div&gt;
  &lt;img src="team.jpg" alt="Команда"&gt;
  &lt;p&gt;Наша команда&lt;/p&gt;
&lt;/div&gt;</pre>
<p>Разбор: картинка и подпись сгруппированы в одну коробку — карточку. На вид страница пока не изменится, но в следующем модуле мы оформим такую карточку одним CSS-правилом, и обе части будут двигаться вместе.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">&lt;a&gt;Открыть Google&lt;/a&gt;</span> → <span class="now">&lt;a href="https://google.com"&gt;Открыть Google&lt;/a&gt;</span><br><span class="muted2">без атрибута href ссылка никуда не ведёт — это просто текст</span></span>
<span class="fix"><span class="was">&lt;img&gt;photo.jpg&lt;/img&gt;</span> → <span class="now">&lt;img src="photo.jpg" alt="Фото"&gt;</span><br><span class="muted2">img — одиночный тег, а путь к файлу пишут в атрибуте src</span></span>
<span class="fix"><span class="was">&lt;li&gt;Хоккей&lt;/li&gt; сам по себе</span> → <span class="now">&lt;ul&gt;&lt;li&gt;Хоккей&lt;/li&gt;&lt;/ul&gt;</span><br><span class="muted2">пункты li всегда обёрнуты в список ul или ol</span></span>`,
quiz:[
 {t:"pairs",q:"Соедини тег с назначением",pairs:[["<ul>","маркированный список"],["<ol>","нумерованный список"],["<li>","пункт списка"],["<img>","картинка"]],e:"ul — точки, ol — цифры, li — пункт внутри них, img — одиночный тег картинки."},
 {t:"cloze",q:"Допиши ссылку на Google, которая ведёт по адресу",code:"<a {0}=\"https://google.com\">Открыть</a>",gaps:["href"],e:"Адрес ссылки хранит атрибут href внутри открывающего тега a."},
 {t:"bug",q:"В какой строке ошибка?",code:["<ul>","  <li>Хоккей</li>","  <li>Код<li>","</ul>"],a:2,e:"Пункт «Код» не закрыт: в конце строки вместо закрывающего </li> стоит второй открывающий li."},
 {t:"output",q:"Что покажет браузер?",code:"<ol>\n  <li>Заварить</li>\n  <li>Налить</li>\n</ol>",o:["нумерованный список: 1. Заварить, 2. Налить","маркированный список с точками","две ссылки","одну строку через запятую"],a:0,e:"ol — упорядоченный список: браузер сам проставит цифры 1, 2 перед пунктами."},
 {q:"Что делает атрибут alt у картинки?",o:["Меняет размер","Текст, если картинка не загрузилась","Делает её ссылкой","Ничего"],a:1,e:"alt — запасной текст: виден при сбое загрузки, его же читают экранные дикторы."}],
lab:[
 {kind:"fill",type:"html",prompt:`<p><b>Задание 1.</b> Собери страницу «Мои хобби»: внутри &lt;body&gt; добавь заголовок &lt;h1&gt; и маркированный список &lt;ul&gt; минимум из <b>трёх</b> пунктов &lt;li&gt;. Жми «Запустить», потом «Проверить».</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<body>\n\n  <!-- TODO: заголовок h1 -->\n\n  <!-- TODO: список ul минимум с тремя li -->\n\n</body>\n</html>",
  tests:[
   {t:"На странице есть заголовок <h1> с текстом",fn:d=>{const h=d.querySelector("h1");return !!h&&h.textContent.trim().length>0;}},
   {t:"Есть список <ul> минимум с тремя <li>",fn:d=>{const ul=d.querySelector("ul");return !!ul&&ul.querySelectorAll("li").length>=3;}}]},
 {kind:"fix",type:"html",prompt:`<p><b>Задание 2.</b> Страница сломана: ссылка не ведёт никуда (нет href), а картинка записана как парный тег и не покажется. <b>Почини</b> — добавь ссылке адрес, а картинку сделай одиночным тегом с атрибутами src и alt.</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<body>\n  <h1>Мои ссылки</h1>\n  <a>Открыть Google</a>\n  <img>cat.jpg</img>\n</body>\n</html>",
  tests:[
   {t:"Ссылка <a> имеет href и видимый текст",fn:d=>{const a=d.querySelector("a");return !!a&&!!a.getAttribute("href")&&a.textContent.trim().length>0;}},
   {t:"Картинка <img> имеет атрибуты src и alt",fn:d=>{const i=d.querySelector("img");return !!i&&!!i.getAttribute("src")&&i.getAttribute("alt")!=null;}}]},
 {kind:"build",type:"html",prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> страницу-визитку: заголовок &lt;h1&gt;, список &lt;ul&gt; из <b>трёх</b> пунктов, рабочая ссылка &lt;a href="…"&gt;текст&lt;/a&gt; и картинка &lt;img&gt; с атрибутами src и alt.</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<body>\n\n  <!-- заголовок h1 -->\n\n  <!-- список ul с тремя li -->\n\n  <!-- ссылка a с href и текстом -->\n\n  <!-- картинка img с src и alt -->\n\n</body>\n</html>",
  tests:[
   {t:"Есть заголовок <h1> с текстом",fn:d=>{const h=d.querySelector("h1");return !!h&&h.textContent.trim().length>0;}},
   {t:"Есть список <ul> минимум с тремя непустыми <li>",fn:d=>{const li=d.querySelectorAll("ul li");return li.length>=3&&[...li].every(x=>x.textContent.trim().length>0);}},
   {t:"Есть рабочая ссылка <a> с href и видимым текстом",fn:d=>{const a=d.querySelector("a");return !!a&&!!a.getAttribute("href")&&a.textContent.trim().length>0;}},
   {t:"Есть картинка <img> с src и alt",fn:d=>{const i=d.querySelector("img");return !!i&&!!i.getAttribute("src")&&i.getAttribute("alt")!=null;}}]}],
res:[
 ["MDN: HTML — текст, списки, абзацы (рус.)","url","https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"],
 ["MDN: создание ссылок (рус.)","url","https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks"],
 ["METANIT: изображения и ссылки в HTML5","url","https://metanit.com/web/html5/"],
 ["HTML для начинающих: списки, ссылки, картинки","yt","html списки ссылки картинки для начинающих"]]},
{id:"m3",title:"CSS: делаем красиво",
theory:`
<p>🎯 <b>Зачем это тебе:</b> заказчик платит не за «голый HTML», а за страницу, на которую приятно смотреть. CSS превращает скелет в продукт, который можно сдать и получить оплату. Это первый навык, за который реально дают деньги.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Из чего состоит CSS-правило</h3>
<p>CSS работает правилами. Правило отвечает на два вопроса: <b>кому</b> (селектор — способ указать элементы) и <b>что поменять</b> (свойства со значениями):</p>
<pre class="demo">h1 {
  color: blue;          /* цвет текста */
  font-size: 40px;      /* размер шрифта */
}</pre>
<p>Разбор: селектор <code>h1</code> означает «все заголовки h1 на странице». В фигурных скобках — пары «свойство: значение», каждая заканчивается точкой с запятой. Текст между <code>/* */</code> — комментарий, браузер его игнорирует.</p>
<svg viewBox="0 0 600 140" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="35" width="140" height="60" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="90" y="61" text-anchor="middle" fill="#B9FF47" font-size="15" font-weight="700">h1</text>
  <text x="90" y="81" text-anchor="middle" fill="#9BA39D" font-size="10">селектор — кому</text>
  <text x="182" y="70" text-anchor="middle" fill="#F4F6F2" font-size="20">{</text>
  <rect x="205" y="35" width="150" height="60" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="280" y="61" text-anchor="middle" fill="#FFD34D" font-size="15" font-weight="700">color</text>
  <text x="280" y="81" text-anchor="middle" fill="#9BA39D" font-size="10">свойство — что</text>
  <text x="368" y="70" text-anchor="middle" fill="#F4F6F2" font-size="18">:</text>
  <rect x="385" y="35" width="150" height="60" rx="10" fill="#1C201E" stroke="#37936F"/>
  <text x="460" y="61" text-anchor="middle" fill="#37936F" font-size="15" font-weight="700">blue</text>
  <text x="460" y="81" text-anchor="middle" fill="#9BA39D" font-size="10">значение — как</text>
  <text x="552" y="66" text-anchor="middle" fill="#F4F6F2" font-size="16">; }</text>
</svg>
<p>Проще всего писать CSS внутри тега <code>&lt;style&gt;</code>, который кладут в <code>&lt;head&gt;</code>. Правило для <code>body</code> красит фон всей страницы, потому что body — вся видимая часть.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Классы — красим только избранных</h3>
<p><b>Классы</b> нужны, когда стиль должен получить не каждый тег, а только отмеченные элементы:</p>
<pre class="demo">&lt;p class="important"&gt;Важный текст&lt;/p&gt;

.important { color: red; font-weight: bold; }</pre>
<p>Разбор: атрибут <code>class="important"</code> вешает на абзац метку. В CSS к метке обращаются через точку: <code>.important</code> — «все элементы с классом important». <code>font-weight: bold</code> делает текст жирным. Один класс можно повесить хоть на сто элементов — все покрасятся одним правилом. А на один тег можно повесить сразу несколько классов через пробел (<code>class="card big"</code>) — элемент получит стили и <code>.card</code>, и <code>.big</code>: так собирают вид из готовых кусочков.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Отступы: padding и margin</h3>
<p>Отступы — то, что отличает аккуратную страницу от «каши»:</p>
<pre class="demo">.card {
  padding: 16px;   /* воздух ВНУТРИ коробки */
  margin: 20px;    /* воздух СНАРУЖИ коробки */
}</pre>
<p>Разбор: <code>padding</code> отодвигает содержимое от краёв самого элемента, <code>margin</code> отодвигает элемент от соседей. Запоминалка: padding — «подкладка» внутри, margin — «поля» снаружи. Эти два свойства используются в каждом заказе. Можно уточнить сторону — <code>padding-top</code>, <code>margin-bottom</code> и так далее, — когда отступ нужен только сверху или только снизу.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Цвета, шрифт и каскад</h3>
<p>Цвета задают словами (<code>red</code>, <code>white</code>) или HEX-кодом — решётка и шесть символов (<code>#B9FF47</code>): так попадёшь в точный оттенок из макета. Нужен полупрозрачный цвет — есть запись <code>rgba(0,0,0,0.5)</code>, где четвёртое число от 0 до 1 задаёт непрозрачность: удобно для затемнения поверх фото. Ещё три свойства понадобятся в первом же заказе: <code>font-family</code> — шрифт, <code>text-align: center</code> — текст по центру, <code>border: 2px solid black</code> — рамка.</p>
<p>Кроме классов есть <code>id</code> — уникальная метка на один-единственный элемент (в CSS к ней обращаются через решётку <code>#</code>), но для оформления почти всегда берут классы: их можно переиспользовать, а id приберечь для якорей и JavaScript. Если два правила спорят за один элемент, побеждает более точное: селектор класса сильнее селектора тега. При равной точности — то правило, что написано ниже. Это и есть «каскад» — буква C в названии CSS (Cascading Style Sheets — каскадные таблицы стилей).</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">h1 { color blue }</span> → <span class="now">h1 { color: blue; }</span><br><span class="muted2">без двоеточия и точки с запятой браузер молча пропустит свойство</span></span>
<span class="fix"><span class="was">#important { color: red; }</span> → <span class="now">.important { color: red; }</span><br><span class="muted2">к классу обращаются через точку, решётка — для id</span></span>
<span class="fix"><span class="was">&lt;body&gt; h1 { color: red; }</span> → <span class="now">&lt;style&gt; h1 { color: red; } &lt;/style&gt;</span><br><span class="muted2">CSS вне тега style браузер покажет как обычный текст на странице</span></span>`,
quiz:[
 {t:"pairs",q:"Соедини свойство с эффектом",pairs:[["color","цвет текста"],["background","цвет фона"],["padding","отступ внутри элемента"],["margin","отступ снаружи элемента"]],e:"color красит текст, background — фон, padding — воздух внутри коробки, margin — снаружи."},
 {t:"cloze",q:"Дополни код: синий текст размером 40 пикселей",code:"h1 {\n  {0}: blue;\n  font-size: {1};\n}",gaps:["color",["40px","40 px"]],e:"Цвет текста — color, а размер шрифта указывают вместе с единицами: 40px."},
 {t:"bug",q:"В какой строке ошибка?",code:["p {","  color: red","  font-size: 20px;","}"],a:1,e:"После red потерялась точка с запятой — браузер склеит строку со следующей, и оба свойства сломаются."},
 {q:"Что такое padding?",o:["Отступ снаружи","Отступ внутри элемента","Размер шрифта","Цвет рамки"],a:1,e:"padding — воздух внутри элемента, margin — снаружи."},
 {q:"Как обратиться в CSS к классу important?",o:["important","#important",".important","<important>"],a:2,e:"Классы — через точку: .important. Решётка — для id."}],
lab:[
 {kind:"fill",type:"html",prompt:`<p><b>Задание 1.</b> Внутри &lt;style&gt; напиши <b>два</b> правила: для <code>body</code> задай <code>background</code> (например #0E100F) и для <code>h1</code> задай <code>color</code> (словом white или кодом #B9FF47). Жми «Запустить» — фон и заголовок должны сменить цвет.</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* TODO: правило для body с background */\n\n  /* TODO: правило для h1 с color */\n</style>\n</head>\n<body>\n  <h1>Мой сайт</h1>\n</body>\n</html>",
  tests:[
   {t:"У body задан фон (background не прозрачный)",fn:(d,w)=>{const b=d.querySelector("body");return !!b&&w.getComputedStyle(b).backgroundColor!=="rgba(0, 0, 0, 0)";}},
   {t:"У h1 задан цвет текста (не чёрный по умолчанию)",fn:(d,w)=>{const h=d.querySelector("h1");return !!h&&w.getComputedStyle(h).color!=="rgb(0, 0, 0)";}}]},
 {kind:"fix",type:"html",prompt:`<p><b>Задание 2.</b> Абзац должен быть цветным, но правило написано с ошибкой: к классу обратились через решётку <code>#note</code> вместо точки, поэтому стиль не применяется. <b>Почини</b> селектор, чтобы абзац покрасился.</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<head>\n<style>\n  body { background: #0E100F; }\n  #note { color: #B9FF47; }\n</style>\n</head>\n<body>\n  <h1>Мой сайт</h1>\n  <p class=\"note\">Важный текст</p>\n</body>\n</html>",
  tests:[
   {t:"Абзац с классом note получил цвет (селектор через точку)",fn:(d,w)=>{const p=d.querySelector("p");return !!p&&w.getComputedStyle(p).color!=="rgb(0, 0, 0)";}},
   {t:"Фон страницы (body) по-прежнему задан",fn:(d,w)=>{const b=d.querySelector("body");return !!b&&w.getComputedStyle(b).backgroundColor!=="rgba(0, 0, 0, 0)";}}]},
 {kind:"build",type:"html",prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> оформленную визитку: в &lt;style&gt; задай фон body, цвет заголовка h1 и правило для класса (например <code>.card</code>), который меняет фон или цвет. В &lt;body&gt; добавь h1 и элемент с этим классом.</p>`,
  starter:"<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* TODO: body — фон, h1 — цвет, .card — свой стиль */\n</style>\n</head>\n<body>\n\n  <!-- TODO: заголовок h1 и элемент с классом (например class=\"card\") -->\n\n</body>\n</html>",
  tests:[
   {t:"У body задан фон",fn:(d,w)=>{const b=d.querySelector("body");return !!b&&w.getComputedStyle(b).backgroundColor!=="rgba(0, 0, 0, 0)";}},
   {t:"У h1 сменился цвет текста",fn:(d,w)=>{const h=d.querySelector("h1");return !!h&&w.getComputedStyle(h).color!=="rgb(0, 0, 0)";}},
   {t:"На странице есть элемент с атрибутом class",fn:d=>!!d.querySelector("[class]")},
   {t:"Классовый селектор реально меняет вид (цвет или фон элемента)",fn:(d,w)=>{const el=d.querySelector("[class]");if(!el)return false;const cs=w.getComputedStyle(el);return cs.color!=="rgb(0, 0, 0)"||cs.backgroundColor!=="rgba(0, 0, 0, 0)";}}]}],
res:[
 ["MDN: Первые шаги в CSS (рус.)","url","https://developer.mozilla.org/ru/docs/Learn/CSS/First_steps"],
 ["METANIT: руководство по CSS3","url","https://metanit.com/web/css/"],
 ["CSS для начинающих: стили и вёрстка","yt","css для начинающих стили верстка с нуля"],
 ["freeCodeCamp: Responsive Web Design","url","https://www.freecodecamp.org/learn/2022/responsive-web-design/"]]},
{id:"m10",title:"Flexbox и Grid: раскладка страницы",
theory:`
<p>🎯 <b>Зачем это тебе:</b> заказчик почти никогда не хочет «блоки столбиком» — ему нужны карточки товаров в три колонки, меню в одну строку, галерея ровной сеткой. Раскладка — это то, что отличает страницу-черновик от макета, за который платят. Сегодня освоишь два инструмента, на которых держится вся современная вёрстка: flex и grid.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Почему всё само падает вниз</h3>
<p>Каждый <code>&lt;div&gt;</code>, заголовок и абзац — <b>блочный элемент</b>: он занимает всю ширину страницы и сталкивает соседа вниз. Сколько бы карточек ты ни написал, сами по себе они выстроятся в столбик. Чтобы поставить их рядом, включают <b>раскладку</b> (layout — правило, по которому браузер расставляет элементы), причём включают её не на самих карточках, а на их <b>родителе-контейнере</b>. Это главная мысль урока: раскладку задаёт родитель, а слушаются его дети.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Flexbox — раскладка в одну линию</h3>
<p><b>Flexbox</b> (flex — гибкий) выстраивает детей в ряд. Свойство пишут контейнеру:</p>
<pre class="demo">.menu {
  display: flex;   /* дети встают в ряд */
  gap: 12px;       /* промежуток между ними */
}</pre>
<p>Разбор: <code>display: flex</code> включает раскладку в линию, слева направо. <code>gap</code> задаёт расстояние между детьми одним свойством — не нужно вешать margin на каждый элемент и воевать с лишним отступом у последнего.</p>
<p>У флекса две оси, и по каждой — своё свойство выравнивания:</p>
<svg viewBox="0 0 600 140" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="mx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker>
  <marker id="cx" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#FFD34D"/></marker></defs>
  <text x="250" y="16" text-anchor="middle" fill="#9BA39D" font-size="10">display: flex — контейнер-родитель</text>
  <rect x="60" y="26" width="380" height="76" rx="10" fill="#141716" stroke="#37936F"/>
  <rect x="80" y="46" width="90" height="38" rx="6" fill="#1C201E" stroke="#B9FF47"/><text x="125" y="70" text-anchor="middle" fill="#F4F6F2" font-size="12">1</text>
  <rect x="185" y="46" width="90" height="38" rx="6" fill="#1C201E" stroke="#B9FF47"/><text x="230" y="70" text-anchor="middle" fill="#F4F6F2" font-size="12">2</text>
  <rect x="290" y="46" width="90" height="38" rx="6" fill="#1C201E" stroke="#B9FF47"/><text x="335" y="70" text-anchor="middle" fill="#F4F6F2" font-size="12">3</text>
  <line x1="80" y1="118" x2="440" y2="118" stroke="#B9FF47" stroke-width="2" marker-end="url(#mx)"/>
  <text x="250" y="133" text-anchor="middle" fill="#B9FF47" font-size="11">главная ось · justify-content</text>
  <line x1="475" y1="28" x2="475" y2="102" stroke="#FFD34D" stroke-width="2" marker-end="url(#cx)"/>
  <text x="533" y="62" text-anchor="middle" fill="#FFD34D" font-size="11">поперечная</text>
  <text x="533" y="76" text-anchor="middle" fill="#FFD34D" font-size="11">align-items</text>
</svg>
<pre class="demo">.hero {
  display: flex;
  justify-content: center;  /* центр по главной оси */
  align-items: center;      /* центр по поперечной */
}</pre>
<p>Разбор: <code>justify-content</code> двигает элементы вдоль главной оси — <code>center</code> собирает в центр, а <code>space-between</code> прижимает крайние к краям и раскидывает свободное место между ними (так делают шапки: логотип слева, кнопка справа). <code>align-items: center</code> выравнивает по поперечной оси — иконка и текст рядом встают на одну среднюю линию. А <code>flex-direction: column</code> разворачивает главную ось вертикально, и ряд превращается в столбик.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Grid — сетка из колонок и строк</h3>
<p><b>Grid</b> (сетка) раскладывает сразу по колонкам и строкам:</p>
<pre class="demo">.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}</pre>
<p>Разбор: <code>display: grid</code> включает сетку на контейнере. <code>grid-template-columns</code> описывает колонки: запись <code>repeat(3, 1fr)</code> значит «повтори колонку шириной 1fr три раза». Единица <code>fr</code> (fraction — доля) — доля свободной ширины: три колонки по 1fr всегда равны и сами тянутся под экран, никаких пикселей подгонять не надо. Дети раскладываются по клеткам автоматически — четвёртая карточка сама перейдёт на новую строку, пятая встанет под первую, и тебе не нужно ничего считать руками. <code>gap</code> работает как во флексе, только сразу в обе стороны — и между колонками, и между строками. Захочешь неравные колонки — например узкое меню слева и широкий контент справа — пишешь <code>grid-template-columns: 200px 1fr</code>: первая колонка фиксированная, вторая забирает весь остаток.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Что выбрать и как адаптировать</h3>
<p>Запоминалка: <b>flex — лента, grid — сетка</b>. Одна линия элементов (меню, шапка, ряд кнопок) — это flex. Плитки в несколько строк и колонок (каталог, галерея работ) — это grid. Ошибиться не страшно: почти любую раскладку можно собрать обоими способами, правильный инструмент просто даёт код короче.</p>
<p>Заказчик первым делом откроет твою вёрстку с телефона, поэтому нужна <b>адаптивность</b> — умение страницы перестраиваться под ширину экрана. Для неё есть <b>медиазапрос</b>:</p>
<pre class="demo">@media (max-width: 600px) {
  .cards { grid-template-columns: 1fr; }
}</pre>
<p>Разбор: <code>@media (max-width: 600px)</code> читается «если экран не шире 600 пикселей». Внутри — обычные CSS-правила: та же сетка получает одну колонку вместо трёх, и на телефоне карточки встают в столбик во всю ширину. Одна строка кода — и в переписке с заказчиком можно честно писать «адаптив есть».</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">.card { display: flex; }</span> → <span class="now">.cards { display: flex; }</span><br><span class="muted2">раскладку включают на контейнере-родителе: в ряд встают его дети, а не он сам</span></span>
<span class="fix"><span class="was">grid-template-column: repeat(3, 1fr);</span> → <span class="now">grid-template-columns: repeat(3, 1fr);</span><br><span class="muted2">свойство пишется с s на конце — опечатку браузер молча пропустит, и сетка не появится</span></span>
<span class="fix"><span class="was">gap: 16;</span> → <span class="now">gap: 16px;</span><br><span class="muted2">промежутку нужны единицы измерения — число без px не сработает</span></span>`,
quiz:[
 {q:"Куда пишут display: flex, чтобы карточки встали в ряд?",o:["Каждой карточке отдельно","Контейнеру, внутри которого лежат карточки","Только тегу body","Первой карточке в ряду"],a:1,e:"Раскладку включают на родителе: display: flex у контейнера выстраивает его прямых детей, сами карточки не трогаем."},
 {t:"pairs",q:"Соедини свойство с эффектом",pairs:[["display: flex","дети контейнера встают в ряд"],["gap: 16px","промежуток между элементами"],["justify-content: center","элементы собираются в центре"],["grid-template-columns","количество и ширина колонок"]],e:"flex включает раскладку в линию, gap задаёт расстояние, justify-content двигает элементы вдоль главной оси, grid-template-columns описывает колонки сетки."},
 {t:"cloze",q:"Дополни код: сетка из трёх равных колонок с промежутком 16 пикселей",code:".cards {\n  display: {0};\n  grid-template-columns: repeat(3, 1fr);\n  {1}: 16px;\n}",gaps:["grid","gap"],e:"Сетку включает display: grid, а расстояние между карточками — свойство gap."},
 {t:"bug",q:"В какой строке ошибка, из-за которой колонки не появятся?",code:[".cards {","  display: grid;","  grid-template-column: repeat(3, 1fr);","  gap: 16px;","}"],a:2,e:"Свойство называется grid-template-columns — с s на конце. Браузер не покажет ошибку, просто молча пропустит строку, и колонки не появятся."},
 {q:"Что означает 1fr в grid-template-columns?",o:["Один пиксель","Одна доля свободной ширины контейнера","Один процент экрана","Фиксированная колонка в 100px"],a:1,e:"fr — fraction, доля: repeat(3, 1fr) делит свободную ширину на три равные части, которые сами тянутся под экран."}],
lab:[
 {kind:"fill",type:"html",prompt:`<p><b>Задание 1.</b> В &lt;style&gt; допиши правило для контейнера &lt;div class="row"&gt;: добавь <b>display: flex</b>, чтобы две коробки встали в ряд, и <b>gap</b>, чтобы между ними появился промежуток. Жми «Запустить», потом «Проверить».</p>`,
  starter:'<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .row {\n    /* TODO: добавь display: flex и gap */\n  }\n  .box { background:#B9FF47; color:#111; padding:14px; }\n</style>\n</head>\n<body>\n  <div class="row">\n    <div class="box">Раз</div>\n    <div class="box">Два</div>\n  </div>\n</body>\n</html>',
  tests:[
   {t:"Контейнер выстраивает детей в ряд (display: flex или grid)",fn:(d,w)=>[...d.querySelectorAll("*")].some(e=>["flex","grid"].includes(w.getComputedStyle(e).display)&&e.children.length>=2)},
   {t:"Между элементами задан промежуток gap",fn:(d,w)=>[...d.querySelectorAll("*")].some(e=>{const g=w.getComputedStyle(e).gap;return g&&g!=="normal"&&parseFloat(g)>0;})}]},
 {kind:"fix",type:"html",prompt:`<p><b>Задание 2.</b> Карточки должны стоять в ряд с промежутком, но вёрстка сломана: в CSS <b>две ошибки</b> — неверное значение у display и промежуток без единиц. <b>Почини</b> обе, чтобы карточки встали рядом с воздухом между ними.</p>`,
  starter:'<!DOCTYPE html>\n<html>\n<head>\n<style>\n  .cards { display: flexbox; gap: 12; }\n  .card { background:#1C201E; color:#F4F6F2; padding:10px; }\n</style>\n</head>\n<body>\n  <div class="cards">\n    <div class="card">A</div>\n    <div class="card">B</div>\n    <div class="card">C</div>\n  </div>\n</body>\n</html>',
  tests:[
   {t:"Первые две карточки стоят в одном ряду",fn:(d,w)=>{const c=[...d.querySelectorAll(".card")];if(c.length<2)return false;return Math.abs(c[0].getBoundingClientRect().top-c[1].getBoundingClientRect().top)<5;}},
   {t:"Между карточками появился реальный промежуток gap",fn:(d,w)=>[...d.querySelectorAll("*")].some(e=>{const g=w.getComputedStyle(e).gap;return g&&g!=="normal"&&parseFloat(g)>0;})}]},
 {kind:"build",type:"html",prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> витрину товаров: контейнер &lt;div class="cards"&gt;, а внутри — минимум <b>три</b> карточки &lt;div class="card"&gt; с коротким названием и ценой. В &lt;style&gt; включи для .cards раскладку (grid с тремя колонками или flex) и задай gap, чтобы все три карточки стояли в один ряд с промежутками.</p>`,
  starter:'<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* TODO: правило для .cards — включи grid или flex и задай gap */\n  /* TODO: правило для .card — фон и padding, чтобы карточки было видно */\n</style>\n</head>\n<body>\n  <h1>Наши товары</h1>\n\n  <!-- TODO: <div class="cards"> с тремя <div class="card"> внутри -->\n\n</body>\n</html>',
  tests:[
   {t:"Есть контейнер с раскладкой flex/grid и минимум тремя детьми",fn:(d,w)=>[...d.querySelectorAll("*")].some(e=>["flex","grid"].includes(w.getComputedStyle(e).display)&&e.children.length>=3)},
   {t:"На странице минимум три карточки .card",fn:d=>d.querySelectorAll(".card").length>=3},
   {t:"Между карточками задан промежуток gap",fn:(d,w)=>[...d.querySelectorAll("*")].some(e=>{const g=w.getComputedStyle(e).gap;return g&&g!=="normal"&&parseFloat(g)>0;})},
   {t:"Первые три карточки стоят в одном ряду",fn:(d,w)=>{const c=[...d.querySelectorAll(".card")];if(c.length<3)return false;const t0=c[0].getBoundingClientRect().top;return c.slice(0,3).every(x=>Math.abs(x.getBoundingClientRect().top-t0)<5);}}]}],
res:[
 ["MDN: Основы Flexbox (рус.)","url","https://developer.mozilla.org/ru/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox"],
 ["MDN: CSS Grid Layout (рус.)","url","https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout"],
 ["CSS-Tricks: A Complete Guide to Flexbox","url","https://css-tricks.com/snippets/css/a-guide-to-flexbox/"],
 ["Flexbox и Grid для начинающих","yt","flexbox grid вёрстка для начинающих на русском"]]},
{id:"m11",title:"Формы и семантический HTML",
theory:`
<p>🎯 <b>Зачем это тебе:</b> почти каждый заказ заканчивается фразой «и чтобы клиент мог оставить заявку». Бронь столика, обратный звонок, запись на стрижку — всё это <b>формы</b>: сбор данных от посетителя. Заодно уберём из твоего кода «див-суп»: семантические теги — то, по чему заказчик и другой разработчик отличают профи от новичка.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Из чего собрана форма</h3>
<p><b>Форма</b> — область страницы, куда посетитель вводит данные и отправляет их одной кнопкой:</p>
<pre class="demo">&lt;form&gt;
  &lt;label for="name"&gt;Ваше имя&lt;/label&gt;
  &lt;input type="text" id="name"&gt;
  &lt;button type="submit"&gt;Отправить&lt;/button&gt;
&lt;/form&gt;</pre>
<p>Разбор построчно: <code>&lt;form&gt;</code> объединяет поля в одну заявку. <code>&lt;label&gt;</code> — подпись к полю; её атрибут <code>for="name"</code> ссылается на поле с <code>id="name"</code> (id — уникальное имя элемента), и браузер понимает, что подпись и поле — пара. <code>&lt;input&gt;</code> — само поле ввода, одиночный тег без закрывающей пары. <code>&lt;button type="submit"&gt;</code> — кнопка, которая отправляет всё, что введено внутри её формы.</p>
<svg viewBox="0 0 600 140" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="fa" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker></defs>
  <rect x="18" y="18" width="564" height="104" rx="12" fill="none" stroke="#37936F" stroke-dasharray="5 4"/>
  <text x="40" y="36" fill="#37936F" font-size="11">&lt;form&gt; — обёртка всей заявки</text>
  <rect x="42" y="52" width="150" height="46" rx="8" fill="#141716" stroke="#FFD34D"/>
  <text x="117" y="72" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">label</text>
  <text x="117" y="89" text-anchor="middle" fill="#9BA39D" font-size="10">подпись «Имя»</text>
  <rect x="224" y="52" width="150" height="46" rx="8" fill="#141716" stroke="#B9FF47"/>
  <text x="299" y="72" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700">input</text>
  <text x="299" y="89" text-anchor="middle" fill="#9BA39D" font-size="10">поле ввода</text>
  <rect x="406" y="52" width="150" height="46" rx="8" fill="#141716" stroke="#FF7A2F"/>
  <text x="481" y="72" text-anchor="middle" fill="#FF7A2F" font-size="12" font-weight="700">button</text>
  <text x="481" y="89" text-anchor="middle" fill="#9BA39D" font-size="10">отправить</text>
  <line x1="194" y1="75" x2="222" y2="75" stroke="#B9FF47" stroke-width="2" marker-end="url(#fa)"/>
  <line x1="376" y1="75" x2="404" y2="75" stroke="#B9FF47" stroke-width="2" marker-end="url(#fa)"/>
  <text x="117" y="116" text-anchor="middle" fill="#9BA39D" font-size="10">for="name"</text>
  <text x="299" y="116" text-anchor="middle" fill="#9BA39D" font-size="10">id="name" — связаны</text>
</svg>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Тип поля решает атрибут type</h3>
<pre class="demo">&lt;input type="text"&gt;      обычная строка текста
&lt;input type="email"&gt;     почта
&lt;input type="number"&gt;    только число
&lt;input type="checkbox"&gt;  галочка «да/нет»</pre>
<p>Разбор: <code>text</code> — универсальное текстовое поле. <code>email</code> — браузер сам проверит, что внутри есть @, и не даст отправить ерунду, а на телефоне покажет клавиатуру с этим символом. <code>number</code> — пускает только цифры, удобно для количества или возраста. <code>checkbox</code> — квадратик-галочка, например «согласен на звонок». Есть ещё <code>tel</code> для телефона и <code>date</code> для выбора даты — заказчик кафе почти всегда просит поле «дата брони», и это ровно оно. Правильный type — это бесплатная проверка данных без единой строки JavaScript: у заказчика меньше мусорных заявок, а у тебя меньше правок после сдачи. Хочешь, чтобы поле нельзя было оставить пустым, — добавь атрибут <code>required</code>, и браузер сам не даст отправить форму без него.</p>
<p>Для длинного текста (пожеланий, отзыва) есть <code>&lt;textarea&gt;</code> — в отличие от input это парный тег, и поле многострочное:</p>
<pre class="demo">&lt;label for="wish"&gt;Пожелания&lt;/label&gt;
&lt;textarea id="wish"&gt;&lt;/textarea&gt;</pre>
<p>Разбор: между открывающим и закрывающим тегами можно положить текст-заготовку, а пользователь растянет поле мышкой под длинный текст.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Почему label — не украшение</h3>
<p>Связка <code>for</code> + <code>id</code> делает подпись кликабельной: тап по слову «Согласен» ставит галочку в чекбокс, а попасть пальцем по слову куда проще, чем по крошечному квадратику. Второе: экранный диктор (программа, читающая страницу незрячим) произнесёт «Ваше имя, поле ввода» — без label он скажет просто «поле ввода», и человек не поймёт, что вводить. Форма без label — это брак в работе.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Семантический HTML — смысл вместо див-супа</h3>
<p><b>Семантика</b> — смысл: тег сообщает, чем блок является. Страницу собирают не из безликих div, а из смысловых зон:</p>
<pre class="demo">&lt;header&gt;Шапка: название кафе&lt;/header&gt;
&lt;nav&gt;Меню: ссылки на разделы&lt;/nav&gt;
&lt;main&gt;
  &lt;section&gt;Форма заявки&lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;Подвал: телефон и адрес&lt;/footer&gt;</pre>
<p>Разбор построчно: <code>&lt;header&gt;</code> — шапка: логотип, название. <code>&lt;nav&gt;</code> (navigation) — блок со ссылками-меню. <code>&lt;main&gt;</code> — главное содержимое, такой тег на странице ровно один. <code>&lt;section&gt;</code> — смысловой раздел внутри. <code>&lt;footer&gt;</code> — подвал: контакты, копирайт. На вид они ведут себя как обычные div — «коробки» без своего оформления, красить их можно теми же CSS-правилами.</p>
<p>Что это даёт, если внешне разницы нет? Три вещи. Поисковики (отсюда SEO — оптимизация под поисковую выдачу) понимают, где на странице главное, и охотнее поднимают сайт. Диктор даёт незрячему прыгнуть сразу к main, не переслушивая шапку. И читаемость: в чужом коде <code>&lt;footer&gt;</code> понятен мгновенно, а <code>&lt;div class="block27"&gt;</code> — загадка. «Див-суп» — страница из сплошных div — первое, за что ругают вёрстку новичка.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">&lt;label&gt;Имя&lt;/label&gt; &lt;input id="name"&gt;</span> → <span class="now">&lt;label for="name"&gt;Имя&lt;/label&gt; &lt;input id="name"&gt;</span><br><span class="muted2">без for подпись не связана с полем: клик по ней ничего не активирует, диктор её не привяжет</span></span>
<span class="fix"><span class="was">&lt;input&gt; и &lt;button&gt; сами по себе</span> → <span class="now">&lt;form&gt;&lt;input&gt;…&lt;button&gt;…&lt;/form&gt;</span><br><span class="muted2">кнопка отправки собирает только поля, которые лежат внутри её формы</span></span>
<span class="fix"><span class="was">&lt;div class="header"&gt;</span> → <span class="now">&lt;header&gt;</span><br><span class="muted2">класс с именем header — просто метка для тебя; смысл блока поисковик и диктор понимают только из тега</span></span>`,
quiz:[
 {t:"pairs",q:"Соедини тег с его ролью на странице",pairs:[["<header>","шапка: логотип и название"],["<nav>","меню со ссылками"],["<main>","главное содержимое"],["<footer>","подвал: контакты"]],e:"header — верх страницы, nav — навигация, main — единственный блок с главным содержимым, footer — низ с контактами."},
 {q:"Зачем связывать label с полем через for?",o:["Чтобы поле стало обязательным","Клик по подписи активирует поле, а диктор читает её незрячим","Чтобы текст подписи стал жирным","Без for форма не отправится"],a:1,e:"for + id делают подпись частью поля: тап по ней ставит фокус или галочку, экранный диктор понимает, чья это подпись."},
 {t:"bug",q:"В какой строке ошибка — подпись не связана с полем?",code:["<form>","  <label>Почта</label>","  <input type=\"email\" id=\"mail\">","  <button type=\"submit\">Отправить</button>","</form>"],a:1,e:"У label нет атрибута for=\"mail\" — подпись не связана с полем: клик по слову «Почта» ничего не активирует."},
 {t:"order",q:"Собери семантичную страницу сверху вниз",lines:["<header>Кафе «Ромашка»</header>","<nav>Меню | Доставка | Контакты</nav>","<main>Форма заявки</main>","<footer>Телефон и адрес</footer>"],e:"Порядок как в жизни: шапка, под ней навигация, затем главное содержимое, внизу подвал."},
 {q:"Что даёт type=\"email\" у поля input?",o:["Ничего, это просто пометка для верстальщика","Браузер проверит формат почты и покажет клавиатуру с @","Поле станет обязательным для заполнения","Письмо отправится автоматически"],a:1,e:"Браузер не пропустит текст без @, а на телефоне откроет клавиатуру с нужным символом — проверка без JavaScript."}],
lab:[
 {kind:"fill",type:"html",prompt:`<p><b>Задание 1.</b> Внутри формы собери <b>связку подпись+поле</b>: добавь &lt;label for="name"&gt; с текстом и &lt;input type="text" id="name"&gt;, а после — кнопку не трогай. Жми «Запустить», потом «Проверить».</p>`,
  starter:'<!DOCTYPE html>\n<html>\n<body>\n  <form>\n\n    <!-- TODO: label с for="name" и input с id="name" -->\n\n    <button type="submit">Отправить</button>\n  </form>\n</body>\n</html>',
  tests:[
   {t:"На странице есть форма <form>",fn:d=>!!d.querySelector("form")},
   {t:"Внутри формы есть подпись <label> и поле <input>",fn:d=>!!d.querySelector("form label")&&!!d.querySelector("form input")}]},
 {kind:"fix",type:"html",prompt:`<p><b>Задание 2.</b> Форма не работает: поле и кнопка «Отправить» по ошибке оказались <b>снаружи</b> тега &lt;form&gt;, поэтому кнопка ничего не соберёт. <b>Почини</b> — перенеси поле и кнопку внутрь формы.</p>`,
  starter:'<!DOCTYPE html>\n<html>\n<body>\n  <form>\n    <label for="mail">Почта</label>\n  </form>\n  <input type="email" id="mail">\n  <button type="submit">Отправить</button>\n</body>\n</html>',
  tests:[
   {t:"Поле ввода <input> лежит внутри формы",fn:d=>!!d.querySelector("form input")},
   {t:"Кнопка отправки лежит внутри формы",fn:d=>!!(d.querySelector("form button")||d.querySelector('form input[type="submit"]'))}]},
 {kind:"build",type:"html",prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> семантическую страницу кафе с рабочей формой заявки: обёрни шапку в &lt;header&gt; (или используй &lt;main&gt;/&lt;footer&gt;), внутри &lt;form&gt; сделай минимум <b>два</b> поля &lt;input&gt; с атрибутом type (например text и email), хотя бы одну подпись &lt;label&gt; и кнопку отправки. Добавь &lt;textarea&gt; или чекбокс, если хочешь.</p>`,
  starter:'<!DOCTYPE html>\n<html>\n<head>\n  <title>Кафе — заявка</title>\n</head>\n<body>\n\n  <!-- TODO: семантический тег (header/main/footer) -->\n\n  <!-- TODO: <form> с двумя input[type], label и кнопкой отправки -->\n\n</body>\n</html>',
  tests:[
   {t:"Есть семантический тег (header, main, footer, section или nav)",fn:d=>!!d.querySelector("header,main,footer,section,nav")},
   {t:"На странице есть форма <form>",fn:d=>!!d.querySelector("form")},
   {t:"Минимум два поля <input> с атрибутом type",fn:d=>d.querySelectorAll("input[type]").length>=2},
   {t:"Есть подпись <label>",fn:d=>!!d.querySelector("label")},
   {t:"Есть кнопка отправки — <button> или input[type=submit]",fn:d=>!!(d.querySelector("button")||d.querySelector('input[type="submit"]'))}]}],
res:[
 ["MDN: Веб-формы для начинающих (рус.)","url","https://developer.mozilla.org/ru/docs/Learn/Forms"],
 ["MDN: Семантика (рус.)","url","https://developer.mozilla.org/ru/docs/Glossary/Semantics"],
 ["freeCodeCamp: Responsive Web Design","url","https://www.freecodecamp.org/learn/2022/responsive-web-design/"],
 ["Семантический HTML и формы простыми словами","yt","семантический html формы для начинающих на русском"]]},
{id:"m4",title:"JavaScript: первые шаги",
theory:`
<p>🎯 <b>Зачем это тебе:</b> HTML и CSS — это витрина, а платят в заказах за логику: посчитать корзину, проверить форму, отреагировать на клик. Логику пишут на JavaScript, и весь он начинается с двух вещей — переменных и вывода в консоль.</p>
<p><b>Переменная</b> — именованная «коробка», в которой программа хранит значение. Объявляют её словом <code>let</code> или <code>const</code>:</p>
<pre class="demo">let age = 20;              // число, можно менять
const name = "Emil";       // строка, менять нельзя
let isHockeyPlayer = true; // да/нет</pre>
<p>Разбор построчно: <code>let age = 20</code> — создали коробку age и положили в неё число 20. <code>const name = "Emil"</code> — текст в кавычках называется <b>строкой</b> (string). <code>true</code> — <b>логическое значение</b> (boolean): у него всего два варианта — true («да») и false («нет»).</p>
<table class="simple"><tr><th>Тип данных</th><th>Пример</th><th>Где встретишь</th></tr>
<tr><td>Число (number)</td><td><code>20</code>, <code>99.5</code></td><td>цена, возраст, счёт матча</td></tr>
<tr><td>Строка (string)</td><td><code>"Emil"</code></td><td>любой текст — всегда в кавычках</td></tr>
<tr><td>Булево (boolean)</td><td><code>true</code> / <code>false</code></td><td>оплачен ли заказ, включён ли звук</td></tr></table>
<p>Разница между словами: <code>let</code> разрешает перезаписать значение позже — <code>age = 21;</code> (слово let при этом второй раз не пишут). <code>const</code> — константа: попытка перезаписать уронит программу с ошибкой. Правило джуна: по умолчанию пиши <code>const</code>, а <code>let</code> бери только там, где значение реально меняется. Имена давай осмысленные и в стиле camelCase: не <code>x</code>, а <code>userAge</code>, <code>totalPrice</code>.</p>
<p>Переменные живут в выражениях: <code>let total = price * 2;</code> — посчитали и сохранили. Позже можно пересчитать: <code>total = total + 100;</code> — взяли старое значение, прибавили 100, положили обратно в ту же коробку.</p>
<p><b>Вывод в консоль:</b></p>
<pre class="demo">console.log("Привет!");      // Привет!
console.log(2 + 2);          // 4
console.log(name, age);      // Emil 20</pre>
<p>Разбор: текст в кавычках печатается как есть. Выражение <code>2 + 2</code> сначала вычисляется — в консоль уходит результат. Через запятую можно вывести несколько значений разом. <b>Консоль</b> — панель разработчика в браузере (F12 → вкладка Console); посетитель сайта её не видит.</p>
<p><code>console.log()</code> — инструмент №1 в работе: не понимаешь, что лежит в переменной, — выведи её и посмотри. Так ищут ошибки даже сеньоры.</p>
<p><b>Комментарии</b> — заметки для людей: всё после <code>//</code> и до конца строки исполнитель кода пропускает. Ими объясняют неочевидные места и временно «выключают» строки.</p>
<p><b>Строки складываются</b> оператором <code>+</code> — это называется <b>конкатенация</b> (склейка):</p>
<pre class="demo">let greeting = "Меня зовут " + name;
console.log(greeting);       // Меня зовут Emil
console.log("3" + 4);        // 34 — не 7!</pre>
<p>Разбор: строка + строка склеиваются в одну. Строка + число — JavaScript сам превратит число в текст и тоже склеит: <code>"3" + 4</code> — это «34», потому что "3" в кавычках — текст, а не число. Пробелы на стыках («Меня зовут » с пробелом в конце) ставь сам — автоматически они не появятся.</p>
<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">const score = 0; score = 10;</span> → <span class="now">let score = 0; score = 10;</span><br><span class="muted2">const перезаписать нельзя — упадёт «Assignment to constant variable». Меняешь значение — объявляй через let</span></span>
<span class="fix"><span class="was">console.log("age")</span> → <span class="now">console.log(age)</span><br><span class="muted2">в кавычках — просто текст «age»; чтобы напечатать значение переменной, кавычки не нужны</span></span>
<span class="fix"><span class="was">let city = Казань;</span> → <span class="now">let city = "Казань";</span><br><span class="muted2">текст без кавычек JS читает как имя несуществующей переменной — получишь «Казань is not defined»</span></span>`,
quiz:[
 {q:"Как объявить переменную, которую можно менять?",o:["const x = 5","let x = 5","variable x = 5","x := 5"],a:1,e:"let — изменяемая, const — константа. Слов variable и := в JavaScript нет."},
 {t:"output",q:"Что выведет console.log?",code:"const name = \"Emil\";\nconsole.log(\"name\");",o:["Emil","name","ошибку"],a:1,e:"В кавычках — просто текст «name», а не переменная. Чтобы вывести Emil, нужно console.log(name) без кавычек."},
 {t:"output",q:"Что выведет console.log?",code:"console.log(\"3\" + 4);",o:["7","34","NaN"],a:1,e:"«3» в кавычках — строка, поэтому + склеивает: «34». Сложение как у чисел было бы при 3 + 4."},
 {q:"Чем const отличается от let?",o:["Ничем","const нельзя перезаписать","const только для чисел","let устарел"],a:1,e:"const — константа: перезапись уронит программу. let можно менять."},
 {t:"bug",q:"В какой строке ошибка?",code:["const level = 1;","level = 2;","console.log(level);"],a:1,e:"level объявлен через const — перезаписать нельзя. Либо объяви let level = 1, либо не меняй значение."}],
practice:{type:"js",
task:"<p><b>Что делаем:</b> заказ — визитка для профиля фрилансера. Скрипт собирает строку-представление из твоих данных; позже такую строку будем выводить прямо на страницу.</p><p><b>Шаги:</b></p><ol><li>Объяви константу <code>name</code> со своим именем — строка в кавычках.</li><li>Объяви переменную <code>age</code> с возрастом — число, без кавычек.</li><li>Склей оператором <code>+</code> фразу «Меня зовут ..., мне ... лет» в переменную <code>greeting</code>. Не забудь пробелы внутри кавычек.</li><li>Выведи <code>greeting</code> через <code>console.log</code> и нажми «Запустить».</li></ol>",
starter:"// Заказ: визитка для профиля\n// TODO: объяви константу name со своим именем (строка в кавычках)\n\n// TODO: объяви переменную age с возрастом (число)\n\n// TODO: склей фразу «Меня зовут ..., мне ... лет» в переменную greeting\n\n// TODO: выведи greeting в консоль\n",
checks:[
 {t:"Объявлена переменная name (let или const)",fn:c=>/(let|const)\s+name\s*=/.test(c)},
 {t:"В name лежит строка в кавычках",fn:c=>/name\s*=\s*["'`]/.test(c)},
 {t:"Объявлена переменная age с числом",fn:c=>/(let|const)\s+age\s*=\s*\d/.test(c)},
 {t:"Фраза склеена оператором + со строками",fn:c=>/["'`]\s*\+|\+\s*["'`]/.test(c)},
 {t:"Есть вывод console.log(...)",fn:c=>/console\.log\s*\(/.test(c)}],
hint:"Схема: const name = \"Эмиль\"; let age = 20; let greeting = \"Меня зовут \" + name + \", мне \" + age + \" лет\"; console.log(greeting);"}},
{id:"m5",title:"Условия: код принимает решения",
theory:`
<p>🎯 <b>Зачем это тебе:</b> почти любой заказ — это решения: показать скидку или нет, пустить в личный кабинет или спросить пароль, подсветить пустое поле формы красным. За каждое «или» в коде отвечает if/else — без него джуну не дают даже мелкие таски.</p>
<p><b>if / else</b> (по-русски «если / иначе») выполняет одну из двух веток кода:</p>
<pre class="demo">let age = 20;
if (age &gt;= 18) {
  console.log("Взрослый");
} else {
  console.log("Ещё нет 18");
}</pre>
<p>Разбор: в круглых скобках после <code>if</code> стоит <b>условие</b> — выражение, которое вычисляется в <code>true</code> (истина) или <code>false</code> (ложь). true — выполняется первый блок в фигурных скобках, false — блок после <code>else</code>. Здесь 20 &gt;= 18 — true: напечатается «Взрослый», а ветка else просто пропустится.</p>
<p><b>Операторы сравнения</b> — из них собирают условия:</p>
<table class="simple"><tr><th>Оператор</th><th>Значение</th><th>Пример → результат</th></tr>
<tr><td><code>===</code></td><td>равно (строго)</td><td><code>5 === 5</code> → true</td></tr>
<tr><td><code>!==</code></td><td>не равно</td><td><code>5 !== 3</code> → true</td></tr>
<tr><td><code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code></td><td>больше / меньше (или равно)</td><td><code>10 &gt; 3</code> → true</td></tr></table>
<p><b>Главная ловушка:</b> <code>=</code> — присваивание («положи значение»), <code>===</code> — сравнение («равны ли?»). Напишешь <code>if (x = 5)</code> — код не сравнит, а перезапишет x, и условие «сработает» всегда. Вторая ловушка: <code>10 === "10"</code> даёт <b>false</b> — число и строка разные типы, даже если выглядят одинаково. Есть ещё нестрогое <code>==</code>: оно пытается подгонять типы и любит сюрпризы — в своём коде используй только <code>===</code>.</p>
<p><b>Цепочка else if</b> («иначе-если») — когда вариантов больше двух:</p>
<pre class="demo">let total = 4500;
if (total &gt;= 5000) {
  console.log("Скидка 15%");
} else if (total &gt;= 2000) {
  console.log("Скидка 5%");   // сработает: 4500 &gt;= 2000
} else {
  console.log("Без скидки");
}</pre>
<p>Разбор: проверки идут сверху вниз, выполняется ПЕРВАЯ истинная ветка — остальные пропускаются. 4500 меньше 5000, первая ветка мимо; 4500 &gt;= 2000 — true, печатается «Скидка 5%». Поэтому порядок важен: сначала самое строгое условие, потом мягче.</p>
<p>Две мелочи, которые экономят нервы. Первая: ветка <code>else</code> необязательна — если действие нужно только в одном случае, пиши одиночный if (показать баннер «Бесплатная доставка» при total &gt;= 3000, иначе ничего не делать). Вторая: условие можно сохранить в переменную с говорящим именем — <code>const isAdult = age &gt;= 18;</code> — и потом писать <code>if (isAdult)</code>: код читается как обычное предложение.</p>
<p><b>Логические операторы</b> склеивают несколько условий в одно: <code>&amp;&amp;</code> — И (оба верны), <code>||</code> — ИЛИ (хотя бы одно), <code>!</code> — НЕ (переворачивает):</p>
<pre class="demo">if (age &gt;= 18 &amp;&amp; hasTicket) {
  console.log("Проходи");
}</pre>
<p>Разбор: ветка выполнится, только если возраст подходит И билет есть. Хватит одного false — и всё условие целиком false.</p>
<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">if (x = 5) { ... }</span> → <span class="now">if (x === 5) { ... }</span><br><span class="muted2">одиночное = кладёт 5 в x, и условие «истинно» всегда. Сравнение — только ===</span></span>
<span class="fix"><span class="was">if (score &gt;= 80) {...} if (score &gt;= 50) {...}</span> → <span class="now">if (score &gt;= 80) {...} else if (score &gt;= 50) {...}</span><br><span class="muted2">два отдельных if независимы: при score = 90 сработают ОБА. else if выполняет только первую подходящую ветку</span></span>
<span class="fix"><span class="was">if (age &gt;= 18 || age &lt;= 60)</span> → <span class="now">if (age &gt;= 18 &amp;&amp; age &lt;= 60)</span><br><span class="muted2">«от 18 до 60» — оба условия сразу, значит И. С || условие истинно вообще для любого возраста</span></span>`,
quiz:[
 {t:"output",q:"Что выведет console.log?",code:"let price = 500;\nif (price > 300) {\n  console.log(\"Дорого\");\n} else {\n  console.log(\"Выгодно\");\n}",o:["Дорого","Выгодно","ничего"],a:0,e:"500 > 300 — true: выполняется ветка if, до else дело не доходит."},
 {q:"Чем === отличается от = ?",o:["Ничем","= сравнение, === присваивание","= присваивание, === сравнение","=== устарел"],a:2,e:"= кладёт значение в переменную, === сравнивает и возвращает true/false."},
 {q:"Что вернёт 10 === \"10\"?",o:["true","false","10","ошибку"],a:1,e:"Строгое сравнение учитывает тип: число ≠ строка → false."},
 {t:"bug",q:"Код должен печатать «Совпало» только когда x равен 5. В какой строке ошибка?",code:["let x = 10;","if (x = 5) {","  console.log(\"Совпало\");","}"],a:1,e:"x = 5 — присваивание: оно кладёт 5 в x, и условие «истинно» всегда. Для сравнения нужно x === 5."},
 {t:"pairs",q:"Соедини оператор с его смыслом",pairs:[["&&","И — оба условия верны"],["||","ИЛИ — хотя бы одно верно"],["!","НЕ — переворачивает условие"],["===","равно, с учётом типа"]],e:"&& строже всех: нужно и то, и другое. Для || хватит одного. ! делает из true false и наоборот."}],
practice:{type:"js",
task:"<p><b>Что делаем:</b> заказ от интернет-магазина — бот, который по сумме заказа печатает уровень скидки.</p><p><b>Шаги:</b></p><ol><li>Оставь переменную <code>total</code> — это сумма заказа в рублях.</li><li>Напиши <code>if</code>: если <code>total &gt;= 5000</code> — выведи «Скидка 15%».</li><li>Добавь <code>else if</code>: если <code>total &gt;= 2000</code> — «Скидка 5%».</li><li>Добавь <code>else</code> — «Без скидки».</li><li>Запусти с total = 4500, потом поменяй на 500 и 9000 — должны отработать все три ветки.</li></ol>",
starter:"let total = 4500; // сумма заказа\n\n// TODO: if — от 5000 выведи \"Скидка 15%\"\n\n// TODO: else if — от 2000 выведи \"Скидка 5%\"\n\n// TODO: else — выведи \"Без скидки\"\n",
checks:[
 {t:"Есть проверка if (...)",fn:c=>/if\s*\(/.test(c)},
 {t:"Есть цепочка else if (...)",fn:c=>/else\s+if\s*\(/.test(c)},
 {t:"Есть финальная ветка else { ... }",fn:c=>/else\s*\{/.test(c)},
 {t:"Условия сравнивают total через >= или >",fn:c=>/total\s*[><]=?/.test(c)},
 {t:"Есть вывод console.log(...)",fn:c=>/console\.log\s*\(/.test(c)}],
hint:"Каркас: if (total >= 5000) { console.log(\"Скидка 15%\"); } else if (total >= 2000) { console.log(\"Скидка 5%\"); } else { console.log(\"Без скидки\"); }"}},
{id:"m6",title:"Циклы и массивы: много данных без копипасты",
theory:`
<p>🎯 <b>Зачем это тебе:</b> в реальных заказах данные приходят пачками — 50 товаров каталога, 200 комментариев, список заказов за день. Руками их не перепечатаешь: массив хранит пачку в одной переменной, цикл обрабатывает каждый элемент. Эту базу спрашивают на любом собеседовании джуна.</p>
<p><b>Массив</b> (array) — список значений в одной переменной, порядок элементов сохраняется:</p>
<pre class="demo">const hobbies = ["хоккей", "код", "английский"];
console.log(hobbies[0]);      // хоккей
console.log(hobbies.length);  // 3
hobbies.push("музыка");       // добавить в конец</pre>
<p>Разбор построчно: элементы перечисляют в квадратных скобках через запятую. Достают их по <b>индексу</b> — номеру позиции, и счёт идёт С НУЛЯ: <code>hobbies[0]</code> — первый, <code>hobbies[2]</code> — третий. <code>length</code> («длина») — свойство «сколько элементов», пишется без скобок. <code>push()</code> — метод «добавить в конец», со скобками. Заметь: push сработал, хотя массив объявлен через const — const запрещает перезаписать саму переменную, а менять содержимое массива можно.</p>
<p>Последний элемент — <code>hobbies[hobbies.length - 1]</code>: длина 4, а последний индекс 3.</p>
<p><b>Цикл for</b> повторяет блок кода нужное число раз:</p>
<pre class="demo">for (let i = 0; i &lt; 3; i++) {
  console.log("Круг " + i);   // Круг 0, Круг 1, Круг 2
}</pre>
<p>Разбор трёх частей в скобках: <code>let i = 0</code> — счётчик и его старт; <code>i &lt; 3</code> — условие «повторять, пока истинно»; <code>i++</code> — после каждого круга прибавить к i единицу. Тело выполнится 3 раза: при i = 0, 1, 2. На i = 3 условие станет false — цикл закончится.</p>
<p>Классическая связка — цикл по массиву через индексы:</p>
<pre class="demo">for (let i = 0; i &lt; hobbies.length; i++) {
  console.log(hobbies[i]);
}</pre>
<p>Разбор: i пробегает от 0 до length - 1 — ровно все существующие индексы. Поэтому в условии <code>&lt;</code>, а не <code>&lt;=</code>: элемента с индексом length не существует, лишний круг даст undefined («не определено»).</p>
<p><b>for...of</b> — короткая форма, когда индекс не нужен, а нужны сами значения:</p>
<pre class="demo">for (const h of hobbies) {
  console.log(h);
}</pre>
<p>Разбор: на каждом круге в <code>h</code> лежит очередной элемент массива. Читается «для каждого h из hobbies». Нужно просто обойти массив — бери for...of: ошибиться в нём почти негде.</p>
<p>Второй типовой приём — накопить результат. Например, посчитать сумму всех заказов за день:</p>
<pre class="demo">const prices = [300, 450, 250];
let sum = 0;
for (const p of prices) {
  sum = sum + p;    // прибавили очередной заказ
}
console.log(sum);   // 1000</pre>
<p>Разбор: <code>sum</code> стартует с нуля и на каждом круге впитывает очередную цену. Схема «переменная-копилка + цикл» решает половину задач с массивами: сумма, счётчик подходящих элементов, самая длинная строка.</p>
<p><b>while</b> («пока») повторяет блок, пока условие истинно, — пригодится, когда число повторов заранее неизвестно. Осторожно: если внутри цикла ничего не двигает условие к false, цикл станет бесконечным и повесит вкладку.</p>
<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">goals[1] // хочу первый элемент</span> → <span class="now">goals[0]</span><br><span class="muted2">счёт с нуля: [1] — это ВТОРОЙ элемент</span></span>
<span class="fix"><span class="was">arr.length()</span> → <span class="now">arr.length</span><br><span class="muted2">length — свойство, а не метод: со скобками получишь «arr.length is not a function»</span></span>
<span class="fix"><span class="was">for (let i = 0; i &lt;= arr.length; i++)</span> → <span class="now">for (let i = 0; i &lt; arr.length; i++)</span><br><span class="muted2">последний индекс — length - 1: с &lt;= цикл сделает лишний круг и выведет undefined</span></span>`,
quiz:[
 {q:"Какой индекс у ПЕРВОГО элемента массива?",o:["1","0","-1","first"],a:1,e:"Счёт с нуля: arr[0] — первый, arr[1] — второй."},
 {q:"Сколько раз выполнится тело цикла for (let i = 0; i < 3; i++)?",o:["2","3","4","бесконечно"],a:1,e:"i = 0, 1, 2 — три круга. На i = 3 условие i < 3 станет false."},
 {t:"output",q:"Что выведет console.log?",code:"const orders = [100, 250, 400];\nconsole.log(orders[1]);",o:["100","250","400"],a:1,e:"Индексы с нуля: orders[0] — это 100, orders[1] — 250."},
 {t:"bug",q:"Цикл должен вывести ВСЕ товары. В какой строке ошибка?",code:["const items = [\"чай\", \"кофе\"];","for (let i = 1; i < items.length; i++) {","  console.log(items[i]);","}"],a:1,e:"Старт с i = 1 пропускает items[0] — «чай». Счёт с нуля: нужно let i = 0."},
 {t:"pairs",q:"Соедини инструмент с его работой",pairs:[["push(x)","добавить x в конец"],["length","сколько элементов"],["for...of","обойти все элементы"],["arr[arr.length - 1]","последний элемент"]],e:"length — свойство (без скобок), push — метод (со скобками). Последний индекс — length - 1."}],
practice:{type:"js",
task:"<p><b>Что делаем:</b> заказ — доска задач для команды: скрипт печатает все задачи спринта и их количество.</p><p><b>Шаги:</b></p><ol><li>Положи в массив <code>tasks</code> минимум 3 задачи-строки.</li><li>Добавь ещё одну задачу методом <code>push</code>.</li><li>Выведи каждую задачу циклом <code>for</code> или <code>for...of</code>.</li><li>После цикла выведи «Всего задач: N», взяв число из <code>tasks.length</code>.</li></ol>",
starter:"const tasks = []; // TODO: положи внутрь минимум 3 задачи-строки\n\n// TODO: добавь ещё одну задачу методом push\n\n// TODO: выведи каждую задачу циклом (for или for...of)\n\n// TODO: выведи количество задач через length\n",
checks:[
 {t:"Массив содержит минимум 3 элемента",fn:c=>/\[[^\]]*,[^\]]*,[^\]]+\]/.test(c)},
 {t:"Задача добавлена через push(...)",fn:c=>/\.push\s*\(/.test(c)},
 {t:"Есть цикл for или for...of",fn:c=>/for\s*\(/.test(c)},
 {t:"Есть вывод console.log(...)",fn:c=>/console\.log\s*\(/.test(c)},
 {t:"Количество берётся из .length",fn:c=>/\.length/.test(c)}],
hint:"Каркас: const tasks = [\"а\", \"б\", \"в\"]; tasks.push(\"г\"); for (const t of tasks) { console.log(t); } console.log(\"Всего задач: \" + tasks.length);"}},
{id:"m7",title:"Функции и объекты: строительные блоки",
theory:`
<p>🎯 <b>Зачем это тебе:</b> функции — это код без копипасты: подсчёт цены или проверку формы в реальном заказе пишут один раз и вызывают в десяти местах. А объекты — стандартный способ описывать данные: пользователя, товар, заказ. Почти любой ответ сервера, с которым ты будешь работать, — объект.</p>
<p><b>Функция</b> — кусок кода с именем, который можно вызывать сколько угодно раз:</p>
<pre class="demo">function greet(name) {
  return "Привет, " + name + "!";
}
console.log(greet("Emil"));   // Привет, Emil!
console.log(greet("Anna"));   // Привет, Anna!</pre>
<p>Разбор: <code>function greet(name)</code> — объявление: имя функции и <b>параметр</b> (входные данные, здесь <code>name</code>). <code>return</code> возвращает результат наружу и сразу завершает функцию — код после него не выполнится. Вызов <code>greet("Emil")</code> подставляет <b>аргумент</b> (конкретное значение) на место параметра. Одна функция — сколько угодно вызовов с разными данными, в этом весь смысл.</p>
<p>Важно: функция без <code>return</code> возвращает <code>undefined</code> («значения нет»). Если результат нужен дальше в коде — пиши <code>return</code>, а не <code>console.log</code> внутри.</p>
<p><b>Стрелочная функция</b> — короткая запись, увидишь её везде:</p>
<pre class="demo">const add = (a, b) => a + b;
console.log(add(2, 3));       // 5</pre>
<p>Разбор: <code>(a, b)</code> — параметры, <code>=></code> — «стрелка» вместо слова function, а выражение справа от неё возвращается автоматически, без return. Если тело взято в фигурные скобки — return снова обязателен: <code>(a, b) => { return a + b; }</code>.</p>
<p><b>Объект</b> — данные парами «ключ: значение», способ держать связанное вместе:</p>
<pre class="demo">const user = { name: "Emil", age: 20, isLearning: true };
console.log(user.name);   // "Emil" — доступ через точку
user.age = 21;            // свойство можно перезаписать
user.city = "Уфа";        // и добавить новое</pre>
<p>Разбор: слева от двоеточия — <b>ключ</b> (имя свойства), справа — значение любого типа. Точка и читает, и записывает: <code>user.name</code> — прочитать, <code>user.age = 21</code> — изменить. Скобки при чтении свойства не нужны: скобки — это всегда вызов функции.</p>
<p><b>Метод</b> — функция, записанная внутрь объекта:</p>
<pre class="demo">const player = {
  name: "Emil",
  hello() { return \`Привет, я \${this.name}\`; }
};
console.log(player.hello());   // Привет, я Emil</pre>
<p>Разбор: <code>hello()</code> живёт внутри объекта, а <code>this</code> («этот») — сам объект, поэтому <code>this.name</code> — это <code>player.name</code>. Знакомый <code>console.log()</code> устроен так же: <code>log</code> — метод объекта <code>console</code>.</p>
<p><b>Шаблонные строки</b> — строки в обратных кавычках \` \`, переменные вставляются через <code>\${...}</code>:</p>
<pre class="demo">console.log(\`Меня зовут \${user.name}, мне \${user.age}\`);
console.log(\`Через год: \${user.age + 1}\`);   // внутри — любое выражение</pre>
<p>Разбор: внутри <code>\${...}</code> работает любой JavaScript — переменная, свойство объекта, арифметика. Это удобнее склейки через «+»: не путаешься в кавычках и пробелах. Используй шаблонные строки по умолчанию.</p>
<p>Финальный приём — функция принимает объект и собирает из него строку. Так работает почти каждый шаблон на сайте:</p>
<pre class="demo">const card = (u) => \`\${u.name} — цель: \${u.goal}\`;
console.log(card({ name: "Emil", goal: "фриланс" }));</pre>
<p>Разбор: <code>card</code> получает объект <code>u</code> и возвращает готовую строку. Данные меняются — функция остаётся той же. В практике сделаешь ровно это.</p>
<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">function double(x) { x * 2; }</span> → <span class="now">function double(x) { return x * 2; }</span><br><span class="muted2">Без return функция вернёт undefined — результат потеряется</span></span>
<span class="fix"><span class="was">console.log('Привет, \${name}')</span> → <span class="now">console.log(\`Привет, \${name}\`)</span><br><span class="muted2">Подстановка \${} работает только в обратных кавычках — в одинарных это просто текст</span></span>
<span class="fix"><span class="was">user.name()</span> → <span class="now">user.name</span><br><span class="muted2">Скобки — вызов функции; свойство читают без скобок, иначе «user.name is not a function»</span></span>`,
quiz:[
 {q:"Что делает return в функции?",o:["Печатает текст в консоль","Возвращает результат и завершает функцию","Создаёт переменную","Повторяет код"],a:1,e:"return отдаёт значение наружу и останавливает функцию — код после него уже не выполнится."},
 {t:"output",q:"Что выведет?",code:"function double(x) {\n  x * 2;\n}\nconsole.log(double(5));",o:["10","undefined","ошибка"],a:1,e:"Внутри нет return, поэтому функция возвращает undefined. Чтобы получить 10, нужно return x * 2;"},
 {q:"Как получить name из const user={name:\"Emil\"}?",o:["user->name","user[name]","user.name","name.user"],a:2,e:"Доступ к свойству — через точку: user.name. Квадратные скобки работали бы с кавычками: user[\"name\"]."},
 {q:"В каких кавычках пишется шаблонная строка с ${}?",o:["В одинарных ' '","В двойных \" \"","В обратных ` `","В любых"],a:2,e:"Только обратные кавычки ` ` включают подстановку ${...} — в остальных это обычный текст."},
 {t:"order",q:"Собери функцию и её вызов",lines:["function intro(user) {","  return `Я ${user.name}, мне ${user.age}`;","}","console.log(intro({ name: \"Emil\", age: 20 }));"],e:"Сначала объявление: заголовок function, тело с return внутри фигурных скобок, закрывающая скобка. Потом вызов с объектом-аргументом."}],
practice:{type:"js",
task:"<p><b>Что делаем:</b> визитку в консоли — функция собирает представление из объекта с данными. Так на реальных сайтах данные пользователя подставляются в шаблон.</p><p><b>Шаги:</b></p><ol><li>Создай объект <code>user</code> с полями <code>name</code> и <code>goal</code>.</li><li>Напиши функцию <code>intro(user)</code>, которая возвращает шаблонную строку вида «Я Emil, моя цель — стать разработчиком».</li><li>Внутри используй обратные кавычки и <code>${...}</code>.</li><li>Вызови <code>intro(user)</code> и выведи результат через <code>console.log</code>.</li></ol>",
starter:"// TODO объект user с полями name и goal\n\n// TODO функция intro(user) — возвращает шаблонную строку\n\n// TODO выведи результат вызова в консоль\n",
checks:[
 {t:"есть объект с полями «ключ: значение»",fn:c=>/=\s*\{[\s\S]*?\w+\s*:/.test(c)},
 {t:"объявлена функция (function или стрелочная)",fn:c=>/(function\s+\w+|=>)/.test(c)},
 {t:"функция возвращает значение (return или короткая стрелка)",fn:c=>/(return|=>)/.test(c)},
 {t:"шаблонная строка с ${...} в обратных кавычках",fn:c=>/`[^`]*\$\{[^`]*\}[^`]*`/.test(c)},
 {t:"результат выведен через console.log",fn:c=>/console\.log\s*\(/.test(c)}],
hint:"Схема: const user = {...}; function intro(u) { return `Я ${u.name}...`; } console.log(intro(user));"}},
{id:"m12",title:"Массивы-профи: map, filter, reduce",
theory:`
<p>🎯 <b>Зачем это тебе:</b> каждый второй заказ — это «обработай список»: товары каталога, заказы за день, сообщения чата. В m6 ты делал это циклом for. Цикл работает, но у профи для списков есть три метода массивов — map, filter и reduce. Ими написана обработка данных почти в каждом React-проекте, и их спрашивают на любом собеседовании джуна.</p>
<p><b>map</b> («преобразовать») — превратить КАЖДЫЙ элемент и собрать из результатов новый массив той же длины:</p>
<pre class="demo">const prices = [100, 200, 300];
const withMarkup = prices.map(p => p * 1.2);   // наценка 20%
console.log(withMarkup);   // [120, 240, 360]
console.log(prices);       // [100, 200, 300] — не тронут</pre>
<p>Разбор построчно: метод вызывается у массива через точку — <code>prices.map(...)</code>. Внутрь передаётся стрелочная функция из m7: <code>p => p * 1.2</code> — «возьми элемент p, верни p * 1.2». map сам прогонит её по всем элементам — без счётчика i и квадратных скобок с индексами. Результат — НОВЫЙ массив; исходный не меняется, и это плюс: старые данные не потеряны.</p>
<p><b>filter</b> («отфильтровать») — отобрать только подходящие элементы:</p>
<pre class="demo">const check = [3200, 0, 1400, 5600];
const paid = check.filter(p => p &gt; 0);
console.log(paid);   // [3200, 1400, 5600]</pre>
<p>Разбор: функция внутри filter возвращает не новое значение, а вердикт — true («оставить») или false («выкинуть»). Здесь условие p &gt; 0 отсеивает нули — отменённые позиции чека. Длина результата — какая получится: хоть все элементы, хоть пустой массив. Запомни разницу: map МЕНЯЕТ каждый элемент, filter лишь РЕШАЕТ, кто останется.</p>
<p><b>reduce</b> («свернуть») — сжать весь массив в одно значение: сумму, счётчик, максимум:</p>
<pre class="demo">const total = paid.reduce((sum, p) => sum + p, 0);
console.log(total);   // 10200</pre>
<p>Разбор: у функции внутри reduce два параметра: <code>sum</code> — копилка с накопленным, <code>p</code> — очередной элемент. Каждый шаг возвращает новое содержимое копилки: sum + p. Ноль после запятой — стартовое значение копилки, с него начинается счёт. Это схема «копилка + цикл» из m6, свёрнутая в одну строку: reduce сам перебирает элементы и таскает копилку между шагами.</p>
<p><b>Цепочки.</b> map и filter возвращают массив — значит, к результату сразу цепляется следующий метод:</p>
<pre class="demo">const bill = check
  .filter(p => p &gt; 0)              // 1. убрать отменённые
  .map(p => p * 0.9)               // 2. скидка 10%
  .reduce((sum, p) => sum + p, 0); // 3. итог чека</pre>
<p>Разбор: данные текут сверху вниз, как по конвейеру: filter отдал массив без нулей → map уценил каждый элемент → reduce свернул всё в число. Порядок осмысленный: сначала отбор, потом преобразование — зачем считать скидку тому, что всё равно выкинем.</p>
<p><b>Тот же конвейер циклом</b> — сравни сам:</p>
<pre class="demo">let bill2 = 0;
for (const p of check) {
  if (p &gt; 0) bill2 = bill2 + p * 0.9;
}
const bill3 = check.filter(p => p &gt; 0).map(p => p * 0.9).reduce((s, p) => s + p, 0);</pre>
<p>Разбор: bill2 и bill3 равны. Но цикл описывает, КАК считать: копилка, обход, if внутри. Цепочка читается как ЧТО мы делаем: отфильтровать → уценить → сложить, шаг за шагом, без переменных-времянок. Поэтому в командах обработку списков пишут методами, а for оставляют на случаи «просто повторить N раз».</p>
<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">prices.map(p => { p * 2 })</span> → <span class="now">prices.map(p => p * 2)</span><br><span class="muted2">у тела в фигурных скобках нужен return — без него каждый элемент превратится в undefined</span></span>
<span class="fix"><span class="was">check.filter(p => p * 0.9)</span> → <span class="now">check.map(p => p * 0.9)</span><br><span class="muted2">filter ждёт условие true/false и ничего не меняет. Преобразовать каждый элемент — работа map</span></span>
<span class="fix"><span class="was">arr.reduce((s, p) => s + p)</span> → <span class="now">arr.reduce((s, p) => s + p, 0)</span><br><span class="muted2">без стартового значения reduce возьмёт первый элемент, а на пустом массиве вообще упадёт с ошибкой — ставь 0</span></span>`,
quiz:[
 {t:"output",q:"Что выведет console.log?",code:"const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);\nconsole.log(doubled);",o:["[1, 2, 3]","[2, 4, 6]","6"],a:1,e:"map применил n * 2 к каждому элементу и собрал НОВЫЙ массив: [2, 4, 6]. Исходный nums не изменился, а 6 вернул бы reduce с суммой."},
 {t:"cloze",q:"Дополни кассу: преврати каждую цену и сверни в сумму",code:"const prices = [100, 200, 300];\nconst withVat = prices.{0}(p => p * 1.2);\nconst total = withVat.{1}((sum, p) => sum + p, 0);",gaps:["map","reduce"],e:"Превратить каждый элемент — map, свернуть массив в одно число — reduce. Функция в reduce получает копилку sum и очередной элемент p, ноль — старт копилки."},
 {t:"order",q:"Собери конвейер кассы: убрать нули → скидка → сумма",lines:["const total = prices","  .filter(p => p > 0)","  .map(p => p * 0.9)","  .reduce((sum, p) => sum + p, 0);","console.log(total);"],e:"Данные текут сверху вниз: сначала filter отбрасывает отменённые позиции, потом map даёт скидку оставшимся, и только потом reduce сворачивает всё в итог."},
 {q:"Что возвращает reduce?",o:["Новый массив той же длины","Одно значение — результат свёртки","Только сумму чисел","undefined"],a:1,e:"reduce сворачивает массив в одно значение. Какое именно — решает твоя функция: сумма, максимум, счётчик, хоть склеенная строка."},
 {t:"bug",q:"Код должен сложить только положительные цены, но выводит 2. В какой строке ошибка?",code:["const prices = [100, 0, 250];","const paid = prices.map(p => p > 0);","const sum = paid.reduce((s, p) => s + p, 0);","console.log(sum);"],a:1,e:"map превратил КАЖДЫЙ элемент в результат условия — вышел массив [true, false, true], а true + true — это 2. Отбирать подходящие — работа filter: prices.filter(p => p > 0)."}],
practice:{type:"js",
task:"<p><b>Что делаем:</b> заказ — касса интернет-магазина. В чеке есть отменённые позиции (цена 0), на остальные действует скидка 10%. Скрипт считает сумму к оплате — конвейером из трёх методов.</p><p><b>Шаги:</b></p><ol><li>Оставь массив <code>prices</code> — это цены позиций чека, нули — отменённые.</li><li>Методом <code>filter</code> оставь только цены больше 0.</li><li>Методом <code>map</code> примени скидку: умножь каждую цену на 0.9.</li><li>Методом <code>reduce</code> сверни цены в сумму — стартовый 0 не забудь.</li><li>Выведи «К оплате: ... руб.» через <code>console.log</code>. Можно решить одной цепочкой, как в теории.</li></ol>",
starter:"// Заказ: касса интернет-магазина\n// prices — цены позиций чека; 0 — отменённые позиции\nconst prices = [3200, 0, 1400, 5600, 0, 800];\n\n// TODO: методом filter оставь только цены больше 0\n\n// TODO: методом map примени скидку 10% — умножь каждую цену на 0.9\n\n// TODO: методом reduce сверни цены в одну сумму (старт — 0)\n\n// TODO: выведи в консоль \"К оплате: ... руб.\"\n",
checks:[
 {t:"Отменённые позиции убраны методом .filter(...)",fn:c=>/\.filter\s*\(/.test(c)},
 {t:"Скидка применена методом .map(...)",fn:c=>/\.map\s*\(/.test(c)},
 {t:"Сумма собрана методом .reduce(...)",fn:c=>/\.reduce\s*\(/.test(c)},
 {t:"Внутри методов — стрелочные функции (=>)",fn:c=>/=>/.test(c)},
 {t:"Итог выведен через console.log(...)",fn:c=>/console\.log\s*\(/.test(c)}],
hint:"Каркас: const total = prices.filter(p => p > 0).map(p => p * 0.9).reduce((sum, p) => sum + p, 0); console.log(\"К оплате: \" + total + \" руб.\");"}},
{id:"m13",title:"Объекты глубже: this, деструктуризация, ?.",
theory:`
<p>🎯 <b>Зачем это тебе:</b> реальные данные приходят объектами — профиль пользователя, заказ, товар. Достанешь поле не так — приложение падает красной ошибкой прямо на глазах заказчика. Сегодня научишься вскрывать объекты аккуратно и безопасно.</p>

<p><b>Объект</b> — набор «поле: значение». У него бывают <b>методы</b> — функции внутри объекта:</p>
<pre class="demo">const player = {
  name: "Эмиль",
  level: 5,
  hello() { return "Я " + this.name; }
};
console.log(player.hello());   // Я Эмиль</pre>
<p>Разбор: <code>hello</code> — метод. Внутри него <code>this</code> — это «тот объект, у которого метод вызвали». Вызвали <code>player.hello()</code> — значит <code>this</code> = <code>player</code>, и <code>this.name</code> даёт «Эмиль». Простое правило: <b>кто слева от точки — тот и this</b>.</p>

<p><b>Деструктуризация</b> — достать несколько полей одной строкой:</p>
<pre class="demo">const { name, level } = player;
console.log(name, level);   // Эмиль 5</pre>
<p>Разбор: слева в фигурных скобках перечисляешь имена полей — и получаешь готовые переменные <code>name</code> и <code>level</code>. Это короче, чем <code>player.name</code>, <code>player.level</code> по отдельности. Так же можно доставать из массива, только через квадратные скобки: <code>const [first, second] = arr;</code>.</p>

<p><b>Optional chaining</b> <code>?.</code> — безопасный доступ вглубь, когда поля может не быть:</p>
<pre class="demo">const user = { name: "Аня" };
console.log(user.address.city);    // 💥 ошибка: address — undefined
console.log(user.address?.city);   // undefined, без падения</pre>
<p>Разбор: обычная точка <code>user.address.city</code> роняет программу, если <code>address</code> нет. Знак <code>?.</code> говорит «если слева пусто — верни undefined и не падай». Рядом живёт <code>??</code> — «значение по умолчанию»: <code>user.address?.city ?? "не указан"</code> вернёт «не указан» вместо undefined.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">this в обычной стрелочной функции внутри объекта</span> → <span class="now">обычный метод hello() { ... }</span><br><span class="muted2">у стрелок нет своего this — для методов объекта пиши обычную функцию</span></span>
<span class="fix"><span class="was">const name = player.name; const level = player.level;</span> → <span class="now">const { name, level } = player;</span><br><span class="muted2">деструктуризация делает то же самое одной строкой и читается чище</span></span>
<span class="fix"><span class="was">user.address.city когда address может отсутствовать</span> → <span class="now">user.address?.city</span><br><span class="muted2">одна опечатка ?. спасает от «Cannot read properties of undefined»</span></span>`,
quiz:[
 {q:"Что такое this внутри метода объекта?",o:["Объект, у которого метод вызвали","Всегда window","Первый аргумент функции","Копия объекта"],a:0,e:"Кто слева от точки при вызове — тот и this."},
 {t:"output",q:"Что выведет console.log?",code:"const o = { a: 1 };\nconsole.log(o.b);",o:["1","undefined","null","ошибка"],a:1,e:"Поля b нет — обращение к несуществующему полю даёт undefined (без падения)."},
 {t:"cloze",q:"Дополни: достань name и level из player одной строкой",code:"const {0} name, level {1} = player;",gaps:["{","}"],e:"Деструктуризация: имена полей в фигурных скобках слева от =."},
 {t:"bug",q:"В какой строке приложение упадёт, если address нет?",code:["const user = { name: 'Аня' };","console.log(user.name);","console.log(user.address.city);"],a:2,e:"user.address — undefined, а у undefined нельзя взять .city. Спасает user.address?.city."},
 {q:"Что вернёт user.address?.city, если address отсутствует?",o:["Ошибку","undefined без падения","Пустую строку","null"],a:1,e:"?. возвращает undefined и не роняет программу."}],
practice:{type:"js",
task:`<p><b>Что делаем:</b> карточку игрока с методом и безопасным доступом к полю, которого может не быть.</p><p><b>Шаги:</b></p><ol><li>Создай объект player с полями name, level и методом (обычная функция, не стрелка), где через this и шаблонную строку соберёшь описание.</li><li>Достань name и level через деструктуризацию: const { name, level } = player;</li><li>Выведи через console.log результат метода и деструктурированные поля.</li><li>Попробуй достать поле, которого нет (например player.stats?.wins) через ?. и тоже выведи.</li></ol>`,
starter:"// TODO: объект player с name, level и методом с this\n\n// TODO: деструктуризация const { name, level } = player;\n\n// TODO: console.log метода, полей и player.stats?.wins через ?.\n",
checks:[
 {t:"Есть деструктуризация const { ... } = ...",fn:c=>/\{[^}{]*\}\s*=/.test(c)},
 {t:"Использован optional chaining ?.",fn:c=>/\?\./.test(c)},
 {t:"В методе используется this.",fn:c=>/this\./.test(c)},
 {t:"Результат выведен через console.log",fn:c=>/console\.log\s*\(/.test(c)}],
hint:"const player={name:'Эмиль',level:5,card(){return `${this.name}, ур.${this.level}`}}; const {name,level}=player; console.log(player.card(), name, level, player.stats?.wins);"}},
{id:"m14",title:"Строки и шаблоны: работа с текстом",
theory:`
<p>🎯 <b>Зачем это тебе:</b> весь интерфейс — это текст: имена, цены, сообщения, кнопки. Криво склеенная строка выглядит как непрофессионализм и в коде, и на экране. Сегодня научишься собирать текст чисто и приводить его в порядок.</p>

<p><b>Шаблонные литералы</b> — строки в обратных кавычках, куда можно вставлять значения через <code>\${}</code>:</p>
<pre class="demo">const name = "Эмиль", level = 5;
const msg = \`Игрок \${name}, уровень \${level}\`;
console.log(msg);   // Игрок Эмиль, уровень 5</pre>
<p>Разбор: строка в обратных кавычках <code>\` \`</code> (клавиша над Tab). Внутри <code>\${name}</code> подставляется значение переменной прямо в текст. Сравни со старым способом через плюсы: <code>"Игрок " + name + ", уровень " + level</code> — легко потерять пробел или запутаться в кавычках. Шаблон читается как обычная фраза.</p>

<p><b>Главные методы строк</b> — каждый возвращает <b>новую</b> строку, оригинал не меняется:</p>
<table class="simple"><tr><th>Метод</th><th>Что делает</th><th>Пример</th></tr>
<tr><td><code>toUpperCase()</code></td><td>ВСЁ заглавными</td><td>"код" → "КОД"</td></tr>
<tr><td><code>trim()</code></td><td>убирает пробелы по краям</td><td>"  hi  " → "hi"</td></tr>
<tr><td><code>includes(x)</code></td><td>есть ли подстрока (true/false)</td><td>"заказ".includes("каз") → true</td></tr>
<tr><td><code>slice(0,1)</code></td><td>вырезать кусок по позициям</td><td>"код".slice(0,1) → "к"</td></tr>
<tr><td><code>replace(a,b)</code></td><td>заменить</td><td>"1-2".replace("-","+") → "1+2"</td></tr></table>

<p>Комбинируем — сделать первую букву имени заглавной:</p>
<pre class="demo">const raw = "  эмиль ";
const clean = raw.trim();                 // "эмиль"
const nice = clean.slice(0,1).toUpperCase() + clean.slice(1);
console.log(nice);   // Эмиль</pre>
<p>Разбор: сначала <code>trim()</code> убирает пробелы. Потом <code>slice(0,1)</code> берёт первую букву и <code>toUpperCase()</code> делает её заглавной, а <code>slice(1)</code> — весь остаток строки; склеиваем плюсом. Это классический приём «капитализации», его просят на собеседованиях.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">"Привет " + name + "!"</span> → <span class="now">\`Привет \${name}!\`</span><br><span class="muted2">в шаблоне не потеряешь пробел и не запутаешься в кавычках</span></span>
<span class="fix"><span class="was">str.toUpperCase (без скобок)</span> → <span class="now">str.toUpperCase()</span><br><span class="muted2">метод вызывают со скобками, иначе получишь саму функцию, а не результат</span></span>
<span class="fix"><span class="was">ждать, что trim() изменит саму строку</span> → <span class="now">const clean = str.trim()</span><br><span class="muted2">методы строк возвращают новую строку — результат надо сохранить в переменную</span></span>`,
quiz:[
 {t:"output",q:"Что выведет console.log?",code:"const n = 3;\nconsole.log(\"Их \" + n + \"!\");",o:["Их 3!","Их n!","Их3!","ошибка"],a:0,e:"Плюс склеивает строку и число: получается «Их 3!»."},
 {q:"Как правильно вставить переменную name в шаблонную строку?",o:["`Привет $name`","`Привет ${name}`","'Привет {name}'","\"Привет +name\""],a:1,e:"Внутри обратных кавычек значение вставляют через ${name}."},
 {t:"cloze",q:"Дополни: обрезать пробелы и сделать ГРОМКО",code:"const clean = raw.{0}();\nconst loud = clean.{1}();",gaps:["trim","toUpperCase"],e:"trim() убирает пробелы по краям, toUpperCase() переводит в верхний регистр."},
 {t:"pairs",q:"Соедини метод с результатом",pairs:[["'  hi  '.trim()","'hi'"],["'код'.toUpperCase()","'КОД'"],["'заказ'.includes('за')","true"],["'код'.slice(0,1)","'к'"]],e:"trim чистит края, toUpperCase поднимает регистр, includes проверяет подстроку, slice режет по позициям."},
 {q:"Что вернёт 'hi'.toUpperCase(), а чему станет равна сама 'hi'?",o:["Вернёт 'HI', строка станет 'HI'","Вернёт 'HI', сама 'hi' не меняется","Изменит строку на 'HI', ничего не вернёт","Вернёт true"],a:1,e:"Методы строк возвращают новую строку, оригинал остаётся прежним."}],
practice:{type:"js",
task:`<p><b>Что делаем:</b> генератор приветствия, который наводит красоту в имени.</p><p><b>Шаги:</b></p><ol><li>Заведи переменные с сырым именем (с лишними пробелами) и уровнем.</li><li>Очисти имя: trim(), затем сделай первую букву заглавной через slice и toUpperCase.</li><li>Собери приветствие шаблонной строкой в обратных кавычках с \${}.</li><li>Выведи результат через console.log.</li></ol>`,
starter:"const raw = \"  эмиль \";\nconst level = 5;\n\n// TODO: очисти имя (trim + первая буква заглавной через slice/toUpperCase)\n\n// TODO: собери приветствие шаблонной строкой с ${} и выведи через console.log\n",
checks:[
 {t:"Использована шаблонная строка с ${...}",fn:c=>/`[^`]*\$\{[^}]+\}/.test(c)},
 {t:"Есть минимум два строковых метода",fn:c=>(c.match(/\.(toUpperCase|toLowerCase|includes|slice|replace|trim|split)\s*\(/g)||[]).length>=2},
 {t:"Результат выведен через console.log",fn:c=>/console\.log\s*\(/.test(c)}],
hint:"const clean=raw.trim(); const nice=clean.slice(0,1).toUpperCase()+clean.slice(1); console.log(`Привет, ${nice}! Уровень ${level}`);"}},
{id:"m15",title:"Ошибки под контролем: try / catch / throw",
theory:`
<p>🎯 <b>Зачем это тебе:</b> интернет отваливается, пользователи вводят ерунду, сервер молчит. Код без защиты падает белым экраном — и заказчик видит «сломалось». Junior отличается от новичка именно тем, что его код <b>переживает</b> ошибку и показывает понятное сообщение.</p>

<p><b>try / catch</b> — «попробуй, а если сломается — поймай»:</p>
<pre class="demo">try {
  const data = JSON.parse(text);   // может упасть
  console.log(data.name);
} catch (e) {
  console.log("Не смог разобрать данные");
}</pre>
<p>Разбор: код в <code>try</code> выполняется как обычно. Если внутри случается ошибка — программа не падает, а прыгает в <code>catch</code>. В скобках <code>catch (e)</code> — объект ошибки, у него есть <code>e.message</code> с текстом причины. Без этой обёртки одна кривая строка <code>text</code> уронила бы всю страницу.</p>

<p><b>throw</b> — самому сообщить о проблеме, когда данные не устраивают:</p>
<pre class="demo">function checkAge(age) {
  if (age < 0) throw new Error("Возраст не может быть отрицательным");
  return age;
}</pre>
<p>Разбор: <code>throw new Error("...")</code> создаёт и «бросает» ошибку с твоим текстом. Дальше код функции не выполняется — управление улетает в ближайший <code>catch</code>. Так ты сам ставишь защиту: «с такими данными работать не буду».</p>

<p>Собираем вместе — типичный боевой паттерн:</p>
<pre class="demo">try {
  const order = JSON.parse(input);
  if (!order.id) throw new Error("У заказа нет id");
  console.log("Заказ принят:", order.id);
} catch (e) {
  console.log("Ошибка заказа:", e.message);
}</pre>
<p>Разбор: пробуем разобрать заказ. Если строка кривая — падает <code>JSON.parse</code>. Если id нет — падаем сами через <code>throw</code>. Оба случая ловит один <code>catch</code> и показывает <code>e.message</code>. Есть ещё <code>finally { ... }</code> — блок, который выполнится в любом случае (например, спрятать спиннер загрузки), но он нужен реже.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">throw "текст ошибки"</span> → <span class="now">throw new Error("текст ошибки")</span><br><span class="muted2">бросай объект Error — у него есть message и стек, по строке ошибку не отладить</span></span>
<span class="fix"><span class="was">catch { } — пустой блок</span> → <span class="now">catch (e) { console.log(e.message) }</span><br><span class="muted2">проглоченная ошибка — худший баг: приложение молча делает не то, и никто не знает почему</span></span>
<span class="fix"><span class="was">оборачивать в try весь файл целиком</span> → <span class="now">try только вокруг рискованной строки</span><br><span class="muted2">оборачивай то, что реально может упасть — так понятно, где именно проблема</span></span>`,
quiz:[
 {q:"Что происходит, когда код в try падает с ошибкой?",o:["Вся страница ломается","Управление переходит в блок catch","Ошибка игнорируется молча","Программа перезапускается"],a:1,e:"try ловит ошибку и передаёт управление в catch — программа не падает."},
 {t:"output",q:"Что выведет console.log?",code:"try {\n  JSON.parse(\"кривая строка\");\n} catch (e) {\n  console.log(\"Поймал\");\n}",o:["кривая строка","Поймал","ошибка в консоли","ничего"],a:1,e:"JSON.parse падает на кривой строке — управление уходит в catch, выводится «Поймал»."},
 {t:"order",q:"Собери безопасную обработку данных по порядку",lines:["try {","  const data = JSON.parse(input);","  console.log(data.name);","} catch (e) {","  console.log(e.message);","}"],e:"Сначала try с рискованным кодом, затем catch с сообщением об ошибке."},
 {t:"bug",q:"В какой строке ошибка — брошено не то?",code:["function check(x) {","  if (x < 0) throw \"плохо\";","  return x;","}"],a:1,e:"Бросать нужно объект: throw new Error(\"плохо\") — у строки нет .message и стека."},
 {q:"Зачем нужен throw new Error(...)?",o:["Чтобы завершить программу навсегда","Чтобы самому сообщить об ошибке и уйти в catch","Чтобы ускорить код","Чтобы вывести текст в консоль"],a:1,e:"throw создаёт ошибку с твоим текстом; управление уходит в ближайший catch."}],
practice:{type:"js",
task:`<p><b>Что делаем:</b> безопасный парсер заказа, который не падает на кривых данных.</p><p><b>Шаги:</b></p><ol><li>Напиши функцию, которая принимает строку и внутри try делает JSON.parse.</li><li>Если в разобранном заказе нет обязательного поля (например id) — брось ошибку через throw new Error(...).</li><li>В catch (e) выведи понятное сообщение с e.message через console.log.</li><li>Вызови функцию дважды: с хорошей строкой и с кривой — убедись, что второй вызов не роняет программу.</li></ol>`,
starter:"function parseOrder(input) {\n  // TODO: try { JSON.parse, проверка поля, throw new Error если плохо }\n  // TODO: catch (e) { console.log с e.message }\n}\n\n// TODO: вызови parseOrder с хорошей и с кривой строкой\n",
checks:[
 {t:"Есть блок try { ... }",fn:c=>/try\s*\{/.test(c)},
 {t:"Есть блок catch ( ... )",fn:c=>/catch\s*\(/.test(c)},
 {t:"Ошибка брошена через throw",fn:c=>/throw\s/.test(c)},
 {t:"Использован JSON.parse",fn:c=>/JSON\.parse\s*\(/.test(c)},
 {t:"Сообщение выведено через console.log",fn:c=>/console\.log\s*\(/.test(c)}],
hint:"function parseOrder(s){ try{ const o=JSON.parse(s); if(!o.id) throw new Error('нет id'); console.log('ок',o.id);}catch(e){console.log('Ошибка:',e.message);} } parseOrder('{\"id\":1}'); parseOrder('кривая');"}},
{id:"m8",title:"DOM: JavaScript управляет страницей",
theory:`
<p>🎯 <b>Зачем это тебе:</b> DOM — это то, за что платят во фронтенде: живые интерфейсы. «По клику открой меню», «посчитай сумму корзины», «проверь форму перед отправкой» — каждый такой заказ решается через DOM.</p>
<p><b>DOM</b> (Document Object Model — «документ как модель объектов») — страница глазами JavaScript: браузер превращает каждый HTML-тег в объект, который можно найти и изменить. Именно так работает весь этот тренажёр: очки, кнопки, прогресс — это JS, который дёргает DOM.</p>
<p><b>Шаг 1 — найти элемент:</b></p>
<pre class="demo">const title = document.querySelector("h1");      // по тегу
const btn = document.querySelector("#myBtn");     // по id (#)
const card = document.querySelector(".card");     // по классу (.)</pre>
<p>Разбор: <code>document</code> — объект всей страницы; <code>querySelector</code> ищет по тем же селекторам, что и CSS: имя тега без знаков, <code>#</code> — id, точка — класс. Возвращается <b>первый</b> подходящий элемент, а если ничего не нашлось — <code>null</code> («пусто»). Нужны все совпадения сразу — есть <code>querySelectorAll</code>. Совет: находи элемент один раз, сохраняй в <code>const</code> наверху скрипта и дальше работай с переменной — не ищи заново в каждом обработчике.</p>
<p><b>Шаг 2 — изменить:</b></p>
<pre class="demo">title.textContent = "Новый текст";   // заменить текст
title.style.color = "lime";          // поменять CSS-стиль
card.classList.add("active");        // добавить CSS-класс</pre>
<p>Разбор: <code>textContent</code> — текст внутри элемента, его можно и читать, и перезаписывать; <code>style</code> — стили прямо из JS; <code>classList.add/remove</code> — включать и выключать готовые классы из твоего CSS (обычно удобнее, чем менять стили поштучно).</p>
<p>Рядом с <code>textContent</code> есть <code>innerHTML</code> — он вставляет строку как HTML-разметку, вместе с тегами. Удобно для готовых кусков интерфейса, но осторожно: не вставляй через него текст пользователя как есть — вместе с текстом можно занести чужой скрипт (атака XSS). Для обычного текста всегда бери <code>textContent</code>.</p>
<p><b>Шаг 3 — реагировать на события:</b></p>
<pre class="demo">btn.addEventListener("click", () => {
  title.textContent = "Кнопка нажата!";
});</pre>
<p>Разбор: <code>addEventListener</code> «вешает» на элемент <b>обработчик</b> — функцию, которую браузер сам вызовет, когда случится событие. Первый аргумент — имя события строкой (<code>"click"</code>, <code>"input"</code>, <code>"submit"</code>), второй — функция. Обрати внимание: функцию передаём, а не вызываем — без скобок вызова.</p>
<p><b>Формы:</b> текст из поля ввода — <code>input.value</code>:</p>
<pre class="demo">const input = document.querySelector("#name");
btn.addEventListener("click", () => {
  title.textContent = \`Привет, \${input.value}!\`;
});</pre>
<p>Разбор: <code>value</code> читаем <b>внутри</b> обработчика — в момент клика, когда пользователь уже что-то ввёл. Прочитаешь заранее, при загрузке страницы, — получишь пустую строку.</p>
<p>Другие события подключаются так же, меняется только имя-строка: <code>"input"</code> — каждое изменение поля, <code>"submit"</code> — отправка формы, <code>"keydown"</code> — нажатие клавиши:</p>
<pre class="demo">input.addEventListener("input", () => {
  title.textContent = input.value;   // обновляется на лету
});</pre>
<p>Разбор: обработчик срабатывает на каждый введённый символ — так делают живой предпросмотр и поиск-фильтр.</p>
<p>Запомни схему любого интерактива: <b>найти → повесить обработчик → изменить</b>. Выучишь её — соберёшь что угодно: табы, модалки, валидацию, счётчики.</p>
<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">querySelector("btn")</span> → <span class="now">querySelector("#btn")</span><br><span class="muted2">Без # ищется тег &lt;btn&gt;, которого нет — вернётся null, а дальше «Cannot read properties of null»</span></span>
<span class="fix"><span class="was">btn.addEventListener("click", show())</span> → <span class="now">btn.addEventListener("click", show)</span><br><span class="muted2">Со скобками функция вызовется сразу при загрузке, а не по клику — передавай саму функцию</span></span>
<span class="fix"><span class="was">&lt;script&gt; в &lt;head&gt; без defer</span> → <span class="now">&lt;script&gt; в конце &lt;body&gt;</span><br><span class="muted2">Скрипт выше разметки запускается, когда элементов ещё нет, — querySelector вернёт null</span></span>`,
quiz:[
 {q:"Что делает document.querySelector(\"#btn\")?",o:["Создаёт кнопку","Находит первый элемент с id=\"btn\"","Удаляет элемент","Меняет стиль кнопки"],a:1,e:"querySelector ищет элемент по CSS-селектору; # — поиск по id."},
 {t:"output",q:"На странице есть <div class=\"card\">. Что выведет код?",code:"const el = document.querySelector(\"card\");\nconsole.log(el);",o:["<div class=\"card\">","null","ошибка"],a:1,e:"\"card\" без точки — поиск тега <card>, а такого на странице нет: querySelector вернёт null. Класс ищут через \".card\"."},
 {q:"Как поменять текст элемента el?",o:["el.text = \"...\"","el.textContent = \"...\"","el.write(\"...\")","text(el)"],a:1,e:"textContent — свойство с текстом внутри элемента: его можно читать и перезаписывать."},
 {t:"pairs",q:"Соедини инструмент с задачей",pairs:[["querySelector","найти элемент на странице"],["addEventListener","повесить обработчик события"],["textContent","заменить текст элемента"],["classList.add","добавить элементу CSS-класс"]],e:"Это и есть схема интерактива: найти → повесить обработчик → изменить (текст, классы, стили)."},
 {q:"Как прочитать, что пользователь ввёл в поле input?",o:["input.text","input.value","input.data","read(input)"],a:1,e:"input.value — текущее содержимое поля; читай его внутри обработчика, в момент события."}],
practice:{type:"html",
task:"<p><b>Что делаем:</b> первый живой интерфейс — кнопку, которая по клику меняет заголовок. Это схема «найти → повесить обработчик → изменить», из неё состоит любой интерактив.</p><p><b>Шаги:</b></p><ol><li>В <code>&lt;script&gt;</code> найди заголовок и кнопку: <code>document.querySelector(\"#title\")</code> и <code>document.querySelector(\"#btn\")</code>.</li><li>Повесь на кнопку обработчик: <code>addEventListener(\"click\", ...)</code>.</li><li>Внутри обработчика замени <code>textContent</code> заголовка на новый текст.</li><li>Нажми «Запустить» и проверь клик в превью.</li></ol>",
starter:"<!DOCTYPE html>\n<html>\n<body>\n  <h1 id=\"title\">Привет</h1>\n  <button id=\"btn\">Нажми меня</button>\n  <script>\n    // TODO найди заголовок и кнопку по id\n    // TODO повесь обработчик клика на кнопку\n    // TODO внутри обработчика поменяй текст заголовка\n  <\/script>\n</body>\n</html>",
checks:[
 {t:"на странице есть заголовок h1 и кнопка button",fn:c=>/<h1[\s>]/i.test(c)&&/<button[\s>]/i.test(c)},
 {t:"элементы найдены (querySelector или getElementById)",fn:c=>/(querySelector|getElementById)/.test(c)},
 {t:"на кнопке висит обработчик клика",fn:c=>/(addEventListener\s*\(\s*["']click["']|onclick)/i.test(c)},
 {t:"по клику меняется текст (textContent или innerHTML)",fn:c=>/(textContent|innerHTML)\s*=/.test(c)}],
hint:"const btn = document.querySelector(\"#btn\"); btn.addEventListener(\"click\", () => { title.textContent = \"...\"; });"}},
{id:"m16",title:"События глубже: клики и делегирование",
theory:`
<p>🎯 <b>Зачем это тебе:</b> любое приложение — это реакция на действия: клик, ввод, отправка. А когда элементов много (список товаров, задач, сообщений), вешать обработчик на каждый — тупик. Делегирование решает это одним слушателем.</p>

<p><b>Событие</b> — то, что происходит на странице: клик, ввод текста, наведение. Ловят его методом <code>addEventListener</code>:</p>
<pre class="demo">const btn = document.querySelector("#send");
btn.addEventListener("click", () => {
  console.log("Нажали!");
});</pre>
<p>Разбор: первым аргументом — <b>тип</b> события (<code>"click"</code>, <code>"input"</code>, <code>"submit"</code>), вторым — функция, которая выполнится, когда событие случится. Эта функция называется <b>обработчик</b> (handler).</p>

<p>У обработчика есть объект события <code>e</code>, а в нём <code>e.target</code> — <b>элемент, на котором событие случилось</b>:</p>
<pre class="demo">list.addEventListener("click", (e) => {
  console.log(e.target.textContent);  // текст того, куда кликнули
});</pre>
<p>Разбор: <code>e.target</code> — не тот, на кого повесили слушатель, а конкретный элемент под пальцем. Это ключ к делегированию.</p>

<p><b>Делегирование</b> — повесить <b>один</b> слушатель на родителя вместо сотни на детей. Событие «всплывает» от ребёнка к родителю, и родитель ловит его за всех:</p>
<pre class="demo">todoList.addEventListener("click", (e) => {
  const item = e.target.closest("li");
  if (item) item.remove();   // удалить задачу по клику
});</pre>
<p>Разбор: клик по любому <code>&lt;li&gt;</code> всплывает до <code>todoList</code>. <code>e.target.closest("li")</code> находит ближайший сверху <code>&lt;li&gt;</code> (даже если кликнули по вложенной иконке). Добавили новую задачу — она работает сразу, без нового слушателя. Ещё пригодится <code>e.target.dataset.id</code> — чтение атрибута <code>data-id</code> с элемента.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">addEventListener("click", handler())</span> → <span class="now">addEventListener("click", handler)</span><br><span class="muted2">передавай функцию без скобок — со скобками ты вызовешь её сразу, а не по клику</span></span>
<span class="fix"><span class="was">слушатель на каждом элементе списка</span> → <span class="now">один слушатель на родителе + e.target.closest</span><br><span class="muted2">делегирование работает и для элементов, добавленных позже</span></span>
<span class="fix"><span class="was">e.target когда кликнули по вложенной иконке</span> → <span class="now">e.target.closest('li')</span><br><span class="muted2">target — самый глубокий элемент; closest поднимается к нужному контейнеру</span></span>`,
quiz:[
 {q:"Что делает второй аргумент addEventListener?",o:["Это функция-обработчик, которая сработает при событии","Это цвет элемента","Это id элемента","Это тип события"],a:0,e:"Второй аргумент — функция, которая выполнится, когда событие случится."},
 {t:"output",q:"Что не так с этим кодом?",code:'btn.addEventListener("click", greet());',o:["Всё верно","greet вызовется сразу, а не по клику","click написан с ошибкой","btn не существует"],a:1,e:"greet() со скобками выполняется немедленно; нужно передать greet без скобок."},
 {t:"cloze",q:"Дополни делегирование: найти ближайший li и прочитать target",code:'list.addEventListener("click", (e) => {\n  const li = e.{0}.closest("{1}");\n});',gaps:["target","li"],e:"e.target — элемент под кликом, closest('li') поднимается к ближайшему li."},
 {t:"pairs",q:"Соедини понятие с ролью",pairs:[["addEventListener","повесить обработчик"],["e.target","элемент под кликом"],["closest('li')","ближайший родитель-li"],["e.target.dataset.id","чтение data-id"]],e:"addEventListener вешает обработчик, target — цель события, closest ищет родителя, dataset читает data-атрибуты."},
 {q:"Чем делегирование лучше слушателя на каждом элементе?",o:["Один слушатель работает и для новых элементов","Оно делает страницу цветной","Оно не требует HTML","Никакой разницы"],a:0,e:"Один слушатель на родителе ловит клики по всем детям, включая добавленных позже."}],
practice:{type:"html",
task:`<p><b>Что делаем:</b> список задач, где клик по любому пункту удаляет его — через один слушатель (делегирование).</p><p><b>Шаги:</b></p><ol><li>Сделай <code>&lt;ul id="list"&gt;</code> с несколькими <code>&lt;li&gt;</code>.</li><li>В &lt;script&gt; найди список через querySelector или getElementById.</li><li>Повесь на список ОДИН addEventListener("click", ...).</li><li>Внутри возьми e.target, найди ближайший li через closest и удали его (remove).</li></ol>`,
starter:"<!DOCTYPE html>\n<html>\n<body>\n  <ul id=\"list\">\n    <li>Выучить события</li>\n    <li>Сделать проект</li>\n  </ul>\n<script>\n  // TODO: найди список и повесь ОДИН обработчик click\n  // TODO: внутри — e.target.closest('li') и .remove()\n<\/script>\n</body>\n</html>",
checks:[
 {t:"Обработчик клика через addEventListener('click', ...)",fn:c=>/addEventListener\s*\(\s*["']click/.test(c)},
 {t:"Используется e.target",fn:c=>/\.target/.test(c)},
 {t:"Поиск элемента через closest, matches или dataset",fn:c=>/(closest|matches|dataset)/.test(c)},
 {t:"Есть список из минимум 2 <li>",fn:c=>(c.match(/<li[\s>]/gi)||[]).length>=2}],
hint:"const list=document.getElementById('list'); list.addEventListener('click',e=>{const li=e.target.closest('li'); if(li) li.remove();});"}},
{id:"m17",title:"localStorage: страница помнит",
theory:`
<p>🎯 <b>Зачем это тебе:</b> обычная страница забывает всё при перезагрузке. Корзина, тема оформления, черновик, прогресс — всё это должно сохраняться. localStorage даёт браузеру маленькую память прямо на устройстве. Кстати, этот тренажёр хранит твой прогресс именно так.</p>

<p><b>localStorage</b> — хранилище «ключ → значение» внутри браузера. Живёт после перезагрузки и закрытия вкладки. Два главных метода:</p>
<pre class="demo">localStorage.setItem("theme", "dark");   // записать
const t = localStorage.getItem("theme");  // прочитать → "dark"
localStorage.removeItem("theme");          // удалить</pre>
<p>Разбор: <code>setItem(ключ, значение)</code> сохраняет, <code>getItem(ключ)</code> достаёт (вернёт <code>null</code>, если ключа нет), <code>removeItem</code> стирает. Всё привязано к конкретному сайту — чужие сайты твои данные не видят.</p>

<p><b>Важно:</b> localStorage хранит <b>только строки</b>. Объект или массив надо превратить в строку через <code>JSON.stringify</code>, а при чтении — обратно через <code>JSON.parse</code>:</p>
<pre class="demo">const cart = ["кофе", "чай"];
localStorage.setItem("cart", JSON.stringify(cart));   // сохранили массив

const saved = JSON.parse(localStorage.getItem("cart")); // достали массив
console.log(saved[0]);   // кофе</pre>
<p>Разбор: <code>JSON.stringify</code> превращает массив в строку <code>'["кофе","чай"]'</code> — её можно хранить. <code>JSON.parse</code> делает обратное: строку снова в массив, с которым работает код. Забыл parse — получишь строку вместо массива и <code>saved[0]</code> вернёт один символ.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">localStorage.setItem("cart", cart)</span> → <span class="now">localStorage.setItem("cart", JSON.stringify(cart))</span><br><span class="muted2">объект без stringify сохранится как бесполезное "[object Object]"</span></span>
<span class="fix"><span class="was">const a = localStorage.getItem("cart"); a.push(...)</span> → <span class="now">const a = JSON.parse(localStorage.getItem("cart"))</span><br><span class="muted2">getItem даёт строку — без parse у неё нет методов массива</span></span>
<span class="fix"><span class="was">JSON.parse(localStorage.getItem("x")) когда ключа нет</span> → <span class="now">const raw = localStorage.getItem("x"); const v = raw ? JSON.parse(raw) : []</span><br><span class="muted2">parse(null) падает — проверь, что данные есть</span></span>`,
quiz:[
 {q:"Что вернёт localStorage.getItem по несуществующему ключу?",o:["Пустую строку","null","Ошибку","undefined"],a:1,e:"getItem возвращает null, если ключа нет."},
 {t:"output",q:"Что выведет код?",code:'localStorage.setItem("n", 5);\nconst x = localStorage.getItem("n");\nconsole.log(x + 1);',o:["6","51","NaN","ошибка"],a:1,e:"localStorage хранит строки: getItem вернёт \"5\", и \"5\"+1 склеится в \"51\"."},
 {t:"cloze",q:"Дополни: сохранить массив и прочитать обратно",code:'localStorage.setItem("cart", JSON.{0}(cart));\nconst back = JSON.{1}(localStorage.getItem("cart"));',gaps:["stringify","parse"],e:"stringify превращает массив в строку для хранения, parse — обратно в массив."},
 {t:"bug",q:"В какой строке ошибка — массив сохранён неправильно?",code:['const cart = ["кофе"];','localStorage.setItem("cart", cart);','const back = JSON.parse(localStorage.getItem("cart"));'],a:1,e:"Массив надо сохранять через JSON.stringify(cart), иначе запишется \"[object Object]\" или строка, и parse потом упадёт."},
 {q:"Что переживает перезагрузку страницы?",o:["Обычные переменные let/const","Данные в localStorage","Ничего","Только console.log"],a:1,e:"Переменные обнуляются при перезагрузке; localStorage сохраняется на устройстве."}],
practice:{type:"html",
task:`<p><b>Что делаем:</b> счётчик, который помнит своё значение после перезагрузки.</p><p><b>Шаги:</b></p><ol><li>При загрузке прочитай число из localStorage через getItem (если ничего нет — начни с 0).</li><li>Сделай кнопку, которая увеличивает счётчик.</li><li>После каждого изменения сохраняй значение через setItem.</li><li>Используй JSON.stringify при записи и JSON.parse при чтении.</li></ol>`,
starter:"<!DOCTYPE html>\n<html>\n<body>\n  <div id=\"n\">0</div>\n  <button id=\"add\">+1</button>\n<script>\n  // TODO: прочитай сохранённое число (getItem + JSON.parse), иначе 0\n  // TODO: по клику увеличивай и сохраняй (setItem + JSON.stringify)\n<\/script>\n</body>\n</html>",
checks:[
 {t:"Запись через localStorage.setItem",fn:c=>/localStorage\.setItem/.test(c)},
 {t:"Чтение через localStorage.getItem",fn:c=>/localStorage\.getItem/.test(c)},
 {t:"Используется JSON.stringify",fn:c=>/JSON\.stringify/.test(c)},
 {t:"Используется JSON.parse",fn:c=>/JSON\.parse/.test(c)}],
hint:"let n=JSON.parse(localStorage.getItem('n'))||0; document.getElementById('add').addEventListener('click',()=>{n++; localStorage.setItem('n',JSON.stringify(n)); document.getElementById('n').textContent=n;});"}},
{id:"m9",title:"fetch и async/await: данные из интернета",
theory:`
<p>🎯 <b>Зачем это тебе:</b> почти любой реальный заказ — показать данные «из мира»: погоду, курсы валют, товары, профиль пользователя. Эти данные живут на серверах, и <code>fetch</code> с <code>async/await</code> — стандартный способ их достать.</p>
<p>Данные отдаёт <b>API</b> (Application Programming Interface — «интерфейс для программ»): сервер, который на запрос отвечает не страницей, а данными в формате <b>JSON</b> (JavaScript Object Notation) — текстом, похожим на объект JS: <code>{"name": "Emil", "level": 3}</code>.</p>
<p><b>fetch</b> отправляет запрос и возвращает <b>промис</b> (Promise — «обещание»): не сами данные, а обещание отдать их, когда сервер ответит. Ответ идёт по сети десятки и сотни миллисекунд, и JS это время не стоит на месте, а продолжает работать.</p>
<pre class="demo">async function getUser() {
  const res = await fetch("https://api.github.com/users/octocat");
  const data = await res.json();   // JSON → объект JS
  console.log(data.name);
}
getUser();</pre>
<p>Разбор построчно: <code>async</code> перед function помечает функцию как асинхронную — только внутри такой работает <code>await</code>. <code>await fetch(...)</code> — «дождись ответа сервера»: в <code>res</code> попадает ответ (статус, заголовки), но ещё не данные. <code>await res.json()</code> — второй await: разбор JSON-текста в объект — тоже асинхронная операция, она тоже возвращает промис. После этого <code>data</code> — обычный объект: берём <code>data.name</code> через точку, как в модуле про объекты.</p>
<p>Порядок всегда один: <b>fetch → json → использовать</b>. Два await, а не один — самое частое место, где путаются.</p>
<p>Ответы бывают вложенными — тогда точки складываются в цепочку: <code>data.company.name</code>. Списки приходят массивами: <code>data.users[0].name</code> — имя первого пользователя. Правило простое: сначала выведи <code>console.log(data)</code> целиком, посмотри структуру ответа — и только потом доставай нужные поля.</p>
<p>Что будет без await? <code>console.log(fetch(url))</code> напечатает <code>Promise { &lt;pending&gt; }</code> — «обещание в ожидании». Это главный симптом: видишь pending — значит где-то потерял await.</p>
<p><b>Ошибки.</b> Сеть ненадёжна: интернет пропал, сервер упал. Такие сбои ловят через <code>try/catch</code>:</p>
<pre class="demo">try {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Сервер ответил " + res.status);
  const data = await res.json();
} catch (err) {
  console.log("Ошибка: " + err.message);
}</pre>
<p>Разбор: <code>try</code> — «пробуем выполнить», <code>catch</code> — «если внутри что-то упало, выполни это»: программа не падает, а показывает сообщение. Тонкость: fetch НЕ считает ответы 404 или 500 ошибкой (запрос-то дошёл), поэтому проверяем <code>res.ok</code> — он равен false, когда статус не 2xx, — и бросаем ошибку сами через <code>throw</code>.</p>
<p>Кстати, любая async-функция и сама возвращает промис — поэтому её результат снаружи тоже получают через await. Но на верхнем уровне достаточно просто вызвать <code>getUser();</code> — вывод случится, когда данные придут.</p>
<p>Тренажёр офлайн, поэтому в практике «сервер» имитирует функция <code>fakeApi()</code> — промис с данными и задержкой. Механика с твоей стороны та же: async-функция, await, объект с данными.</p>
<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">const res = fetch(url)</span> → <span class="now">const res = await fetch(url)</span><br><span class="muted2">Без await в res лежит промис, а не ответ — увидишь Promise { &lt;pending&gt; } вместо данных</span></span>
<span class="fix"><span class="was">const data = res.json()</span> → <span class="now">const data = await res.json()</span><br><span class="muted2">json() тоже возвращает промис — нужен второй await</span></span>
<span class="fix"><span class="was">function load() { await fetch(url) }</span> → <span class="now">async function load() { await fetch(url) }</span><br><span class="muted2">await работает только внутри функции со словом async — иначе SyntaxError</span></span>`,
quiz:[
 {q:"Что возвращает fetch()?",o:["Сразу данные","Промис — обещание результата","Строку HTML","Ошибку"],a:1,e:"Ответ идёт по сети не мгновенно, поэтому fetch сразу возвращает промис, а данные приходят потом."},
 {t:"cloze",q:"Дополни запрос к API",code:"async function load() {\n  const res = {0} fetch(url);\n  const data = await res.{1}();\n  console.log(data.name);\n}",gaps:["await","json"],e:"await — «дождись ответа», res.json() превращает JSON-текст в объект. Оба шага асинхронные — оба ждём."},
 {t:"order",q:"Собери запрос: fetch → json → использовать",lines:["async function getUser() {","  const res = await fetch(\"https://api.example.com/user\");","  const data = await res.json();","  console.log(data.name);","}"],e:"Порядок всегда один: сначала await fetch (ответ сервера), потом await res.json() (данные), потом используем data."},
 {q:"JSON — это…",o:["Язык программирования","Текстовый формат данных «ключ: значение»","База данных","Фреймворк"],a:1,e:"Формат обмена данными: выглядит как объект JS, но это текст — res.json() превращает его в настоящий объект."},
 {q:"Зачем нужен try/catch при запросах?",o:["Ускорить запрос","Поймать ошибку, если запрос не удался","Красиво оформить код","Он обязателен в любом коде"],a:1,e:"Сеть ненадёжна: если интернет пропал или сервер упал, catch перехватит ошибку и программа не рухнет."}],
practice:{type:"js",
task:"<p><b>Что делаем:</b> тренажёр офлайн, поэтому сервер имитирует <code>fakeApi()</code> — промис с данными через секунду, как настоящий API. Получи данные и покажи их, не уронив программу при ошибке.</p><p><b>Шаги:</b></p><ol><li>Напиши <code>async</code>-функцию <code>load()</code>.</li><li>Внутри, в блоке <code>try</code>, дождись данных: <code>const data = await fakeApi();</code></li><li>Выведи <code>data.name</code> и <code>data.level</code> через <code>console.log</code>.</li><li>В <code>catch</code> выведи сообщение об ошибке.</li><li>В конце вызови <code>load()</code>.</li></ol>",
starter:"function fakeApi() {\n  return new Promise(resolve => {\n    setTimeout(() => resolve({ name: \"Emil\", level: \"junior soon\" }), 1000);\n  });\n}\n\n// TODO асинхронная функция load, внутри — try и catch\n// TODO дождись результата fakeApi и выведи имя и уровень\n// TODO в конце вызови функцию\n",
checks:[
 {t:"объявлена async-функция",fn:c=>/async\s+function|async\s*\(|async\s+\w+\s*=>/.test(c)},
 {t:"данные получены через await fakeApi()",fn:c=>/await\s+fakeApi\s*\(/.test(c)},
 {t:"есть try/catch на случай ошибки",fn:c=>/try\s*\{[\s\S]*catch/.test(c)},
 {t:"выведены data.name и data.level",fn:c=>/console\.log/.test(c)&&/\.name/.test(c)&&/\.level/.test(c)},
 {t:"функция вызвана в конце",fn:c=>/^\s*load\s*\(/m.test(c)}],
hint:"async function load() { try { const data = await fakeApi(); console.log(data.name, data.level); } catch (e) { console.log(\"Ошибка\", e); } } load();"}},
{id:"m18",title:"JSON и REST: данные как в реальных приложениях",
theory:`
<p>🎯 <b>Зачем это тебе:</b> настоящие приложения не хранят данные внутри себя — они запрашивают их у сервера: список товаров, погоду, профиль. Формат этого обмена — JSON, а сам обмен — REST-запросы. Это то, что делает приложение «живым».</p>

<p><b>JSON</b> (JavaScript Object Notation) — текстовый формат данных, похожий на объект JS. На нём разговаривают все API мира:</p>
<pre class="demo">{ "name": "Эмиль", "level": 5, "skills": ["html", "js"] }</pre>
<p>Разбор: это <b>строка</b> с данными. Ключи и строковые значения — в двойных кавычках. Приходит такой текст с сервера — превращаем в объект через <code>JSON.parse</code>, отправляем на сервер — превращаем объект в текст через <code>JSON.stringify</code>.</p>

<p><b>REST-запрос</b> через <code>fetch</code> — просишь у сервера данные по адресу. Ответ приходит асинхронно, поэтому <code>async/await</code>:</p>
<pre class="demo">async function loadUser() {
  const res = await fetch("/api/user");   // ждём ответ
  const data = await res.json();           // разбираем JSON в объект
  console.log(data.name);
}</pre>
<p>Разбор: <code>await fetch(url)</code> отправляет запрос и ждёт ответ — объект <code>res</code>. <code>await res.json()</code> читает тело ответа и разбирает JSON в готовый объект. Два await, потому что и запрос, и чтение тела — асинхронные.</p>

<p>Сеть капризна, поэтому боевой код всегда в защите <code>try/catch</code>:</p>
<pre class="demo">async function load() {
  try {
    const res = await fetch("/api/user");
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Не удалось загрузить:", e.message);
  }
}</pre>
<p>Разбор: если сети нет или сервер молчит — <code>fetch</code> падает, и управление уходит в <code>catch</code>, где показываем понятное сообщение вместо белого экрана. Это отличает код джуна от студенческого.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">const data = fetch(url)</span> → <span class="now">const data = await fetch(url)</span><br><span class="muted2">без await получишь Promise, а не ответ — «зависший» объект</span></span>
<span class="fix"><span class="was">const data = await fetch(url); data.name</span> → <span class="now">const data = await res.json(); data.name</span><br><span class="muted2">fetch возвращает ответ-обёртку; сами данные достаёт res.json()</span></span>
<span class="fix"><span class="was">запрос без try/catch</span> → <span class="now">try { await fetch(...) } catch (e) { ... }</span><br><span class="muted2">сеть падает регулярно — без защиты приложение умрёт молча</span></span>`,
quiz:[
 {q:"Что такое JSON?",o:["Текстовый формат обмена данными","Язык программирования","База данных","Тег HTML"],a:0,e:"JSON — текстовый формат данных, на нём общаются приложение и сервер."},
 {t:"cloze",q:"Дополни загрузку данных с сервера",code:'const res = {0} fetch(url);\nconst data = await res.{1}();',gaps:["await","json"],e:"await ждёт ответ fetch, res.json() разбирает тело ответа в объект."},
 {t:"order",q:"Собери правильный порядок загрузки данных",lines:["async function load() {","  const res = await fetch(url);","  const data = await res.json();","  console.log(data.name);","}"],e:"Сначала объявляем async-функцию, ждём fetch, затем разбираем json, потом используем данные."},
 {t:"output",q:"Что окажется в data без await у fetch?",code:'const data = fetch("/api");\nconsole.log(typeof data);',o:["object (Promise)","string","undefined","массив"],a:0,e:"Без await fetch возвращает Promise — «обещание» ответа, а не сам ответ."},
 {q:"Куда попадёт управление, если fetch упадёт из-за сети?",o:["В блок catch","Программа падает белым экраном","В console.log","Никуда"],a:0,e:"Ошибку fetch ловит окружающий try/catch — там показывают понятное сообщение."}],
practice:{type:"js",
task:`<p><b>Что делаем:</b> безопасную загрузку данных с учебного сервера fakeApi и вывод результата.</p><p><b>Шаги:</b></p><ol><li>Оставь готовую функцию fakeApi (она имитирует сервер).</li><li>Напиши async-функцию load с блоком try.</li><li>Внутри: await fakeApi(), затем выведи поле из данных через console.log.</li><li>Добавь catch (e) с сообщением об ошибке. Вызови load().</li></ol>`,
starter:"// учебный сервер: отдаёт данные через 300мс\nfunction fakeApi(){return new Promise(res=>setTimeout(()=>res({name:\"Эмиль\",level:5}),300));}\n\n// TODO: напиши асинхронную функцию load, которая дождётся данных от fakeApi\n//       и выведет их; оберни в защиту от ошибок и вызови функцию\n",
checks:[
 {t:"Функция помечена async",fn:c=>/async/.test(c)},
 {t:"Данные ожидаются через await",fn:c=>/await\s+fakeApi\s*\(/.test(c)},
 {t:"Есть защита try/catch",fn:c=>/try\s*\{/.test(c)&&/catch\s*\(/.test(c)},
 {t:"Результат выведен через console.log",fn:c=>/console\.log\s*\(/.test(c)}],
hint:"async function load(){ try{ const d=await fakeApi(); console.log(d.name, d.level);}catch(e){console.log('Ошибка:',e.message);} } load();"}},
{id:"m19",title:"ES-модули: import и export",
theory:`
<p>🎯 <b>Зачем это тебе:</b> реальный проект — это не один файл на тысячу строк, а десятки маленьких, каждый за своё. Модули позволяют разбить код на файлы и подключать нужное друг к другу. Без этого не собрать ни один современный проект, и это фундамент под React в следующем акте.</p>

<p><b>export</b> — «отдать наружу» то, чем поделится файл. <b>import</b> — «взять» это в другом файле.</p>
<pre class="demo">// файл math.js — отдаём функцию
export function add(a, b) {
  return a + b;
}</pre>
<pre class="demo">// файл app.js — берём и используем
import { add } from "./math.js";
console.log(add(2, 3));   // 5</pre>
<p>Разбор: в <code>math.js</code> перед функцией стоит <code>export</code> — значит, она доступна снаружи. В <code>app.js</code> пишем <code>import { add } from "./math.js"</code> — берём именно <code>add</code> из соседнего файла. Имя в фигурных скобках должно совпадать с тем, что экспортировали.</p>

<p>Бывает <b>export default</b> — «главное, что отдаёт файл», его можно импортировать под любым именем без скобок:</p>
<pre class="demo">// файл user.js
export default { name: "Эмиль" };

// файл app.js
import user from "./user.js";   // без фигурных скобок</pre>
<p>Разбор: <code>default</code>-экспорт в файле один. При импорте фигурные скобки не нужны, а имя выбираешь сам. Именованных (через <code>{ }</code>) экспортов может быть сколько угодно.</p>

<p>В браузере модули подключают так: <code>&lt;script type="module" src="app.js"&gt;&lt;/script&gt;</code>. Слово <code>module</code> включает поддержку import/export.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">import { add } from "math.js"</span> → <span class="now">import { add } from "./math.js"</span><br><span class="muted2">путь к своему файлу начинается с ./ — иначе браузер ищет не там</span></span>
<span class="fix"><span class="was">import add from "./math.js" (для именованного экспорта)</span> → <span class="now">import { add } from "./math.js"</span><br><span class="muted2">именованный экспорт импортируют в фигурных скобках, default — без них</span></span>
<span class="fix"><span class="was">&lt;script src="app.js"&gt;</span> → <span class="now">&lt;script type="module" src="app.js"&gt;</span><br><span class="muted2">без type="module" браузер не понимает import и выдаёт ошибку</span></span>`,
quiz:[
 {q:"Что делает export перед функцией?",o:["Делает её доступной для импорта в других файлах","Запускает её сразу","Удаляет её","Делает её приватной"],a:0,e:"export открывает функцию наружу, чтобы её можно было импортировать."},
 {t:"cloze",q:"Дополни: отдать функцию и взять её в другом файле",code:'// math.js\n{0} function add(a,b){ return a+b; }\n\n// app.js\n{1} { add } from "./math.js";',gaps:["export","import"],e:"export отдаёт наружу, import берёт в другом файле."},
 {t:"bug",q:"В какой строке ошибка в импорте именованного экспорта?",code:['// math.js: export function add(a,b){return a+b}','import add from "./math.js";','console.log(add(2,3));'],a:1,e:"Именованный экспорт импортируют в фигурных скобках: import { add } from ..."},
 {t:"pairs",q:"Соедини запись с её смыслом",pairs:[["export","отдать наружу"],["import","взять в другом файле"],["export default","главный экспорт файла"],["type=\"module\"","включить модули в браузере"]],e:"export отдаёт, import берёт, default — главный экспорт, type=module включает поддержку."},
 {q:"Как импортируют export default?",o:["Без фигурных скобок, под любым именем","Только в фигурных скобках","Через require","Никак"],a:0,e:"default-экспорт берут без { } и называют как хочешь."}],
practice:{type:"js",
task:`<p><b>Что делаем:</b> разложить код на два «файла» — один отдаёт функцию, другой её берёт. (Здесь два файла показаны комментариями в одном окне; кнопка «Запустить» для модулей не сработает — проверка идёт по коду.)</p><p><b>Шаги:</b></p><ol><li>В блоке «файл math.js» напиши функцию и поставь перед ней export.</li><li>В блоке «файл app.js» импортируй её: import { имя } from "./math.js".</li><li>Вызови функцию и подготовь вывод результата.</li></ol>`,
starter:"// ===== файл math.js =====\n// TODO: объяви функцию и отдай её наружу ключевым словом\n\n// ===== файл app.js =====\n// TODO: возьми функцию из соседнего файла ./math.js и вызови её\n",
checks:[
 {t:"Есть export (функции, const или default)",fn:c=>/export\s+(default\s+|function\s+|const\s+|let\s+|class\s+)/.test(c)},
 {t:"Есть import ... from \"./...\"",fn:c=>/import\s+[\s\S]*?from\s+["']\.\//.test(c)},
 {t:"Импорт именованного экспорта в фигурных скобках или default",fn:c=>/import\s+(\{[^}]+\}|[A-Za-z_$][\w$]*)\s+from/.test(c)}],
hint:"// math.js\\nexport function add(a,b){return a+b;}\\n// app.js\\nimport { add } from \"./math.js\";\\nconsole.log(add(2,3));"}},
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
 {n:"01",title:"Основы: веб, HTML и CSS",lessons:["m1","m2","m3","m10","m11"],
  project:"Адаптивная страница-визитка о себе",
  res:[["Гоша Дударь — вёрстка","yt","Гоша Дударь HTML CSS вёрстка"],["Kevin Powell — CSS","yt","Kevin Powell CSS flexbox grid"],["freeCodeCamp","url","https://www.freecodecamp.org/learn/2022/responsive-web-design/"],["MDN — справочник","url","https://developer.mozilla.org/ru/docs/Web/HTML"]]},
 {n:"02",title:"JavaScript: фундамент",lessons:["m4","m5","m6","m7","m12","m13","m14","m15"],
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
   {id:"m10",t:"Научиться раскладке",
     intro:[{who:"Ментор",text:"Блоки друг под другом — это не дизайн. Flexbox и Grid расставляют всё по местам."}],
     outro:[{who:"EMIL",text:"Сетка слушается. Теперь я решаю, где что стоит."}]},
   {id:"m11",t:"Собрать форму заявки",
     intro:[{who:"Ментор",text:"Заказчику нужны заявки от клиентов. Форма — это деньги, пусть работает как часы."}],
     outro:[{who:"EMIL",text:"Форма ловит данные, страница размечена по-взрослому."},{who:"Ментор",text:"Всё, инструменты собраны. Кафе ждёт свой лендинг."}]},
   {boss:true,id:"b1",t:"Заказ: лендинг кафе",need:["m1","m2","m3","m10","m11"],type:"html",
     intro:[{who:"Ментор",text:"Первый настоящий заказ. Кафе «У Даны» хочет одностраничник: название, меню, картинка и форма заявки."},{who:"EMIL",text:"Погнали. Первые деньги за код."}],
     outro:[{who:"Заказчик",text:"То что надо! Держи оплату."},{who:"Ментор",text:"Первый заказ закрыт. Ты уже не ноль — ты фрилансер с портфолио из одной работы."},{who:"EMIL",text:"Одна страница — а ощущение, будто гору свернул."}],
     brief:`<p>Кафе «У Даны» заказало лендинг. Собери всё из первого акта в одну страницу.</p><p><b>Нужно:</b> заголовок с названием, меню списком (минимум 3 блюда), картинка, свои стили (цвет и фон), аккуратная раскладка через Flexbox или Grid и форма заявки с кнопкой.</p>`,
     starter:"<!DOCTYPE html>\n<html>\n<head>\n<style>\n  /* TODO: свои стили — цвет текста и фон, раскладка flex или grid */\n</style>\n</head>\n<body>\n  <!-- TODO: h1 с названием кафе -->\n\n  <!-- TODO: меню списком ul c минимум 3 li -->\n\n  <!-- TODO: картинка img с alt -->\n\n  <!-- TODO: форма form с input и кнопкой -->\n</body>\n</html>",
     checks:[
      {t:"Заголовок <h1> с названием кафе",fn:c=>/<h1[\s>]/i.test(c)},
      {t:"Меню списком: минимум 3 пункта <li>",fn:c=>(c.match(/<li[\s>]/gi)||[]).length>=3},
      {t:"Картинка <img> с атрибутом alt",fn:c=>/<img[^>]+alt\s*=/i.test(c)},
      {t:"Свои стили: заданы color и background",fn:c=>/<style[\s\S]*color\s*:/i.test(c)&&/<style[\s\S]*background/i.test(c)},
      {t:"Раскладка через Flexbox или Grid",fn:c=>/display\s*:\s*(flex|grid)/i.test(c)},
      {t:"Форма заявки: form + input + кнопка",fn:c=>/<form[\s>]/i.test(c)&&/<input/i.test(c)&&(/<button[\s>]/i.test(c)||/type\s*=\s*["']?submit/i.test(c))}],
     reward:{xp:120,coins:100,card:"n15"}}
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
     outro:[{who:"EMIL",text:"Собираю код как из деталей. Кайф."}]},
   {id:"m12",t:"Обработать данные как профи",
     intro:[{who:"Ментор",text:"Вот список заказов. Обработай его в три строки: map, filter, reduce. Циклы для этого слишком многословны."}],
     outro:[{who:"EMIL",text:"Три метода — и любой список у меня в кармане."}]},
   {id:"m13",t:"Приручить объекты",
     intro:[{who:"Ментор",text:"Данные из API приходят объектами. Вскрывай их аккуратно — деструктуризация и ?. спасают от красных ошибок."}],
     outro:[{who:"EMIL",text:"Объекты раскладываются сами. Красные ошибки — мимо."}]},
   {id:"m14",t:"Навести красоту в тексте",
     intro:[{who:"Ментор",text:"Пользователь видит текст. Кривая строка — кривое впечатление о всём приложении."}],
     outro:[{who:"EMIL",text:"Строки собираются шаблонами — чисто и читаемо."}]},
   {id:"m15",t:"Пережить любую ошибку",
     intro:[{who:"Ментор",text:"Код падает — это нормально. Разница между новичком и джуном: чей код переживает падение."}],
     outro:[{who:"EMIL",text:"Теперь ошибки под моим контролем, а не наоборот."},{who:"Ментор",text:"Второй акт почти закрыт. Есть заказ посерьёзнее."}]},
   {boss:true,id:"b2",t:"Заказ: каталог с корзиной",need:["m4","m5","m6","m7","m12","m13","m14","m15"],type:"js",
     intro:[{who:"Ментор",text:"Большой заказ: каталог товаров с подсчётом корзины. Массив товаров, фильтр, наценка через map и сумма через reduce."},{who:"EMIL",text:"Погнали. Это уже настоящая разработка."}],
     outro:[{who:"Заказчик",text:"Корзина считает верно, беру! Оплата ушла."},{who:"Ментор",text:"Ты обработал данные как взрослый разработчик. Второй акт закрыт."},{who:"EMIL",text:"map, filter, reduce — теперь это мои рабочие инструменты."}],
     brief:`<p>Интернет-магазин заказал логику каталога. Работаем с данными по-взрослому.</p><p><b>Нужно:</b> массив из минимум 3 товаров-объектов; отобрать нужные через <code>filter</code>; посчитать что-нибудь через <code>map</code>; собрать итоговую сумму через <code>reduce</code>; вывести результат шаблонной строкой в <code>console.log</code>.</p>`,
     starter:"// Каталог товаров\nconst products = [\n  // TODO: минимум 3 объекта {name, price, inStock}\n];\n\n// TODO: отфильтруй доступные (filter), посчитай со скидкой/наценкой (map),\n//       собери сумму (reduce) и выведи шаблонной строкой (console.log)\n",
     checks:[
      {t:"Массив товаров: минимум 3 объекта",fn:c=>/\[[\s\S]*\{[\s\S]*\}[\s\S]*,[\s\S]*\{[\s\S]*\}[\s\S]*,[\s\S]*\{/.test(c)},
      {t:"Отбор через .filter(...)",fn:c=>/\.filter\s*\(/.test(c)},
      {t:"Преобразование через .map(...)",fn:c=>/\.map\s*\(/.test(c)},
      {t:"Сумма через .reduce(...)",fn:c=>/\.reduce\s*\(/.test(c)},
      {t:"Вывод шаблонной строкой в console.log",fn:c=>/console\.log\s*\([\s\S]*`[^`]*\$\{/.test(c)}],
     reward:{xp:150,coins:120,card:"n16"}}
 ]},
 {act:"03",title:"Данные из мира",sub:"Приложение с реальными данными",quests:[
   {id:"m8",t:"Управлять страницей из кода",
     intro:[{who:"Ментор",text:"Свяжи JS и страницу — это DOM. Клик — и всё меняется."}],
     outro:[{who:"EMIL",text:"Я управляю страницей прямо из кода. Магия."}]},
   {id:"m16",t:"Ловить действия пользователя",
     intro:[{who:"Ментор",text:"Список на сто задач? Не вешай сто слушателей. Один на родителя — и делегирование делает всё."}],
     outro:[{who:"EMIL",text:"Один обработчик ловит клики по всему списку. Красиво."}]},
   {id:"m17",t:"Научить страницу помнить",
     intro:[{who:"Ментор",text:"Перезагрузил — и всё пропало? Нет. localStorage хранит данные прямо в браузере."}],
     outro:[{who:"EMIL",text:"Прогресс переживает перезагрузку. Как в этом самом тренажёре."}]},
   {id:"m9",t:"Достать данные из сети",
     intro:[{who:"Ментор",text:"Настоящие приложения тянут данные из интернета. fetch и await."}],
     outro:[{who:"EMIL",text:"Данные из сети — прямо в моём приложении. Я почти разраб."}]},
   {id:"m18",t:"Говорить с сервером на JSON",
     intro:[{who:"Ментор",text:"Все API мира общаются на JSON. Запросил, разобрал, показал — и защитил try/catch, потому что сеть капризна."}],
     outro:[{who:"EMIL",text:"JSON, запросы, обработка ошибок — это уже боевой код."}]},
   {id:"m19",t:"Разложить код по файлам",
     intro:[{who:"Ментор",text:"Проект — это не один файл на тысячу строк. import и export режут код на части. Без этого не будет React."}],
     outro:[{who:"EMIL",text:"Код разложен по модулям. Готов к большому."},{who:"Ментор",text:"Третий акт собран. Финальный заказ — приложение на реальных данных."}]},
   {boss:true,id:"b3",t:"Заказ: приложение с API",need:["m8","m16","m17","m9","m18","m19"],type:"html",
     intro:[{who:"Ментор",text:"Финальный заказ акта: приложение, которое тянет данные и показывает их по клику. Это уже уровень портфолио."},{who:"EMIL",text:"DOM, fetch, обработка ошибок — собираю всё вместе."}],
     outro:[{who:"Заказчик",text:"Работает вживую, данные грузятся — отличная работа!"},{who:"Ментор",text:"Это уже проект для резюме. Три акта позади, впереди — Git, React и оффер."},{who:"EMIL",text:"Я делаю приложения, которые живут на реальных данных. Я разраб."}],
     brief:`<p>Заказчику нужно мини-приложение на реальных данных: кнопка «Загрузить» тянет данные и показывает их на странице, а если что-то пошло не так — понятное сообщение вместо белого экрана.</p><p><b>Нужно:</b> кнопка и место для результата; обработчик клика; асинхронная загрузка (<code>async/await</code>, можно через учебный <code>fakeApi</code>); вывод данных в элемент; защита <code>try/catch</code>.</p>`,
     starter:"<!DOCTYPE html>\n<html>\n<body>\n  <button id=\"load\">Загрузить</button>\n  <div id=\"out\">—</div>\n<script>\n// учебный сервер: возвращает данные через 300мс\nfunction fakeApi(){return new Promise(res=>setTimeout(()=>res({name:\"Эмиль\",level:5}),300));}\n\n// TODO: повесь addEventListener('click') на кнопку\n// TODO: внутри async-функции: try { const d = await fakeApi(); показать d в #out } catch(e){ показать ошибку }\n<\/script>\n</body>\n</html>",
     checks:[
      {t:"Обработчик клика через addEventListener",fn:c=>/addEventListener\s*\(\s*["']click/i.test(c)},
      {t:"Асинхронность: async и await",fn:c=>/async/.test(c)&&/await/.test(c)},
      {t:"Поиск элемента (querySelector или getElementById)",fn:c=>/querySelector\s*\(|getElementById\s*\(/.test(c)},
      {t:"Вывод данных в элемент (textContent/innerHTML)",fn:c=>/\.(textContent|innerHTML)\s*=/.test(c)},
      {t:"Защита от ошибок: try / catch",fn:c=>/try\s*\{/.test(c)&&/catch\s*\(/.test(c)}],
     reward:{xp:200,coins:150,card:"n17"}}
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
 {id:"n14",img:"Крыша — спокойный, закат.jpg",name:"Закат",r:"l",cond:"Выучи прочно все слова из «Слов»",check:()=>Object.values(S.srs).filter(c=>c.learned).length>=VOCAB.length},
 {id:"n15",img:"trophy-act1.jpg",name:"Первый заказ",r:"l",cond:"Сдай босс-заказ Акта 1 — лендинг кафе",trophy:"b1"},
 {id:"n16",img:"trophy-act2.jpg",name:"Живой код",r:"l",cond:"Сдай босс-заказ Акта 2 — каталог с корзиной",trophy:"b2"},
 {id:"n17",img:"trophy-act3.jpg",name:"Данные мира",r:"l",cond:"Сдай босс-заказ Акта 3 — приложение с API",trophy:"b3"}
];
