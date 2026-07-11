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
<p>🎯 <b>Зачем это тебе:</b> HTML и CSS — это витрина, а платят в заказах за логику: посчитать корзину, проверить промокод, отреагировать на клик. Логику пишут на JavaScript. Сегодня — фундамент языка: переменные, типы данных и вывод в консоль. А в конце соберёшь первую функцию — именно функции проверяет тренажёр, как автотесты на настоящей работе.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Переменная — подписанная коробка</h3>
<p><b>Переменная</b> — это коробка с подписью, в которую программа кладёт значение, чтобы потом найти его по имени. Объявляют её словом <code>let</code> или <code>const</code>:</p>
<pre class="demo">let age = 20;           // можно перезаписать
const name = "Эмиль";   // константа: менять нельзя
let isPro = true;       // да/нет</pre>
<p>Разбор: <code>let age = 20</code> — создали коробку с подписью age и положили в неё число 20. <code>const name = "Эмиль"</code> — коробка запечатана: попытка перезаписать уронит программу с ошибкой. Правило джуна: по умолчанию пиши <code>const</code>, а <code>let</code> бери только там, где значение реально меняется. Имена давай осмысленные и в стиле camelCase: не <code>x</code>, а <code>userAge</code>, <code>totalPrice</code>.</p>
<svg viewBox="0 0 600 140" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="34" width="170" height="86" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <rect x="70" y="22" width="90" height="24" rx="6" fill="#141716" stroke="#B9FF47"/>
  <text x="115" y="39" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700">name</text>
  <text x="115" y="80" text-anchor="middle" fill="#F4F6F2" font-size="16" font-weight="700">"Эмиль"</text>
  <text x="115" y="104" text-anchor="middle" fill="#9BA39D" font-size="10">строка (string)</text>
  <rect x="215" y="34" width="170" height="86" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <rect x="255" y="22" width="90" height="24" rx="6" fill="#141716" stroke="#FFD34D"/>
  <text x="300" y="39" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">age</text>
  <text x="300" y="80" text-anchor="middle" fill="#F4F6F2" font-size="16" font-weight="700">20</text>
  <text x="300" y="104" text-anchor="middle" fill="#9BA39D" font-size="10">число (number)</text>
  <rect x="400" y="34" width="170" height="86" rx="10" fill="#1C201E" stroke="#FF7A2F"/>
  <rect x="440" y="22" width="90" height="24" rx="6" fill="#141716" stroke="#FF7A2F"/>
  <text x="485" y="39" text-anchor="middle" fill="#FF7A2F" font-size="12" font-weight="700">isPro</text>
  <text x="485" y="80" text-anchor="middle" fill="#F4F6F2" font-size="16" font-weight="700">true</text>
  <text x="485" y="104" text-anchor="middle" fill="#9BA39D" font-size="10">булево (boolean)</text>
</svg>
<p>Перезаписывают коробку уже без слова let: <code>age = 21;</code>. Справа от <code>=</code> может стоять целое выражение — оно сначала вычислится: <code>let total = price * 2;</code> — в коробку ляжет результат. Работает даже так: <code>total = total + 100;</code> — взяли старое значение, прибавили 100, положили обратно в ту же коробку.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Три типа данных для старта</h3>
<p>В коробках лежат значения разных <b>типов</b>. Для первых заказов хватит трёх:</p>
<table class="simple"><tr><th>Тип</th><th>Пример</th><th>Где встретишь</th></tr>
<tr><td>Число (number)</td><td><code>20</code>, <code>99.5</code></td><td>цена, возраст, счёт матча</td></tr>
<tr><td>Строка (string)</td><td><code>"Эмиль"</code></td><td>любой текст — всегда в кавычках</td></tr>
<tr><td>Булево (boolean)</td><td><code>true</code> / <code>false</code></td><td>оплачен ли заказ, включён ли звук</td></tr></table>
<p>Кавычки — граница между текстом и кодом: <code>"42"</code> — строка, <code>42</code> — число, и ведут они себя по-разному. Узнать тип можно оператором <code>typeof</code>: <code>typeof 42</code> даст «number», <code>typeof "42"</code> — «string». Тренажёр в практике проверяет твой код в том числе через typeof. Дальше в курсе появятся массивы и объекты — но собираются они из этих трёх кирпичей.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. console.log — твой фонарик</h3>
<pre class="demo">console.log("Привет!");    // Привет!
console.log(2 + 2);        // 4
console.log(name, age);    // Эмиль 20</pre>
<p>Разбор: текст в кавычках печатается как есть. Выражение <code>2 + 2</code> сначала вычисляется — в консоль уходит результат. Через запятую можно вывести несколько значений разом. <b>Консоль</b> — панель разработчика (F12 → вкладка Console), посетитель сайта её не видит.</p>
<p><code>console.log()</code> — инструмент №1 в отладке: не понимаешь, что лежит в переменной, — выведи её и посмотри. Так ищут ошибки даже сеньоры. А всё после <code>//</code> — <b>комментарий</b>: заметка для людей, код её пропускает; комментарием удобно временно «выключить» строку.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Склейка строк и шаблонные строки</h3>
<pre class="demo">const greeting = "Меня зовут " + name;    // Меня зовут Эмиль
console.log("3" + 4);                     // 34 — не 7!
console.log(\`Игрок \${name}, уровень 5\`);  // Игрок Эмиль, уровень 5</pre>
<p>Разбор: оператор <code>+</code> склеивает строки — это называется <b>конкатенация</b>; пробелы на стыках ставь сам, внутри кавычек. Ловушка: строка + число — тоже склейка, <code>"3" + 4</code> даёт «34», потому что «3» в кавычках — текст. Третья строка — <b>шаблонная строка</b>: обратные кавычки (клавиша над Tab), а значения вставляются прямо в текст через <code>\${…}</code> — так не потеряешь ни пробел, ни кавычку.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">5. Функция: код, который можно вызвать</h3>
<pre class="demo">function greet(name) {
  return "Привет, " + name + "!";
}
console.log(greet("Эмиль"));   // Привет, Эмиль!
console.log(greet("Аня"));     // Привет, Аня!</pre>
<p>Разбор: <code>function greet(name)</code> объявляет функцию, в скобках — <b>параметр</b>: входные данные. <code>return</code> отдаёт результат наружу — его можно положить в переменную или вывести. Один раз написал — вызывай с любыми именами. Практика ниже устроена как настоящие автотесты: тренажёр вызовет твою функцию с разными входами и сверит ответы, поэтому объявляй функции именно словом <code>function</code>.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">const score = 0; score = 10;</span> → <span class="now">let score = 0; score = 10;</span><br><span class="muted2">const перезаписать нельзя — упадёт «Assignment to constant variable». Меняешь значение — объявляй через let</span></span>
<span class="fix"><span class="was">console.log("age")</span> → <span class="now">console.log(age)</span><br><span class="muted2">в кавычках — просто текст «age»; чтобы напечатать значение переменной, кавычки не нужны</span></span>
<span class="fix"><span class="was">let city = Казань;</span> → <span class="now">let city = "Казань";</span><br><span class="muted2">текст без кавычек JS читает как имя несуществующей переменной — получишь «Казань is not defined»</span></span>`,
quiz:[
 {t:"output",q:"Что выведет console.log?",code:"const name = \"Эмиль\";\nconsole.log(\"name\");",o:["Эмиль","name","ошибку","ничего"],a:1,e:"В кавычках — просто текст «name», а не переменная. Чтобы вывести Эмиль, нужно console.log(name) без кавычек."},
 {t:"cloze",q:"Допиши объявления по правилу джуна: имя дальше не меняется, счёт будет расти",code:"{0} name = \"Эмиль\";\n{1} score = 0;\nscore = score + 10;",gaps:["const","let"],e:"Что не меняется — const. score ниже перезаписывается, поэтому только let: const тут уронит программу."},
 {t:"output",q:"Что выведет console.log?",code:"console.log(\"3\" + 4);",o:["7","34","NaN","ошибку"],a:1,e:"«3» в кавычках — строка, поэтому + склеивает: «34». Сложение как у чисел было бы при 3 + 4."},
 {t:"bug",q:"В какой строке ошибка?",code:["const level = 1;","level = 2;","console.log(level);"],a:1,e:"level объявлен через const — перезаписать нельзя. Либо объяви let level = 1, либо не меняй значение."},
 {t:"pairs",q:"Соедини значение с его типом",pairs:[["\"Эмиль\"","строка (string)"],["42","число (number)"],["true","булево (boolean)"],["\"42\"","строка — цифры в кавычках"]],e:"Кавычки решают всё: \"42\" — текст, даже если внутри цифры. Без кавычек 42 — число, true/false — булево."}],
lab:[
 {kind:"fill",type:"js",
  prompt:`<p><b>Задание 1.</b> Допиши функцию <code>greet</code>: она получает имя и <b>возвращает</b> строку «Привет, &lt;имя&gt;!». Собери её оператором <code>+</code> из трёх кусков: "Привет, ", имя, "!". Хочешь посмотреть глазами — добавь console.log(greet("Эмиль")) и жми «Запустить»; «Проверить» вызовет функцию с разными именами сам.</p>`,
  starter:"// greet(\"Эмиль\") → \"Привет, Эмиль!\"\nfunction greet(name) {\n  // TODO: верни склейку через return: \"Привет, \" + имя + \"!\"\n}\n",
  tests:[
   {t:"greet — это функция",expr:"typeof greet",expect:"function"},
   {t:"greet('Эмиль') → 'Привет, Эмиль!'",expr:"greet('Эмиль')",expect:"Привет, Эмиль!"},
   {t:"greet('Аня') → 'Привет, Аня!'",expr:"greet('Аня')",expect:"Привет, Аня!"}]},
 {kind:"fix",type:"js",
  prompt:`<p><b>Задание 2.</b> Калькулятор очков сломан: вместо суммы он «склеивает» цифры — addBonus(100) выдаёт «10050» вместо 150. Это ловушка из теории про строку и число. Найди лишние кавычки и <b>почини</b>, чтобы бонус был числом.</p>`,
  starter:"// Бонус за уровень — 50 очков.\n// Должно быть: addBonus(100) → 150. А выходит \"10050\" 🤔\nfunction addBonus(points) {\n  const bonus = \"50\";\n  return points + bonus;\n}\n",
  tests:[
   {t:"addBonus — это функция",expr:"typeof addBonus",expect:"function"},
   {t:"addBonus(100) → 150 (число, а не строка «10050»)",expr:"addBonus(100)",expect:150},
   {t:"addBonus(0) → 50",expr:"addBonus(0)",expect:50}]},
 {kind:"build",type:"js",
  prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> функцию <code>card(name, level)</code> — карточку игрока. Она <b>возвращает</b> строку вида <code>Эмиль · уровень 5</code>: имя, точка «·» (скопируй её отсюда), слово «уровень» и число. Собери строку шаблонной строкой: обратные кавычки и подстановка <code>\${…}</code>. Объявляй именно через <code>function card(...)</code>.</p>`,
  starter:"// card(\"Эмиль\", 5) → \"Эмиль · уровень 5\"\n// card(\"Аня\", 12)  → \"Аня · уровень 12\"\n// Символ · скопируй прямо из этой строки.\n\n// TODO: объяви функцию card(name, level) словом function\n// TODO: верни шаблонную строку: обратные кавычки и ${...} для имени и уровня\n",
  tests:[
   {t:"card — это функция",expr:"typeof card",expect:"function"},
   {t:"card('Эмиль', 5) → 'Эмиль · уровень 5'",expr:"card('Эмиль', 5)",expect:"Эмиль · уровень 5"},
   {t:"card('Аня', 12) → 'Аня · уровень 12'",expr:"card('Аня', 12)",expect:"Аня · уровень 12"},
   {t:"card возвращает строку — число подставлено в текст",expr:"typeof card('Бот', 99)",expect:"string"}]}],
res:[
 ["MDN: Первые шаги в JavaScript (рус.)","url","https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps"],
 ["learn.javascript.ru: современный учебник — первые шаги","url","https://learn.javascript.ru/first-steps"],
 ["METANIT: руководство по JavaScript","url","https://metanit.com/web/javascript/"],
 ["JavaScript с нуля: переменные и типы данных","yt","javascript для начинающих переменные типы данных console.log"]]},
{id:"m5",title:"Условия: код принимает решения",
theory:`
<p>🎯 <b>Зачем это тебе:</b> почти любой заказ — это решения: показать скидку или нет, пустить в личный кабинет или спросить пароль, подсветить пустое поле красным. За каждое «или» в коде отвечает if/else — без него джуну не дают даже мелкие таски. Сегодня научишь код выбирать ветку самостоятельно.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. if / else — развилка на дороге</h3>
<pre class="demo">const age = 20;
if (age &gt;= 18) {
  console.log("Проходи");
} else {
  console.log("Нельзя");
}</pre>
<p>Разбор: в круглых скобках после <code>if</code> — <b>условие</b>: выражение, которое вычисляется в <code>true</code> (истина) или <code>false</code> (ложь). true — выполняется первый блок в фигурных скобках, false — блок после <code>else</code>. Здесь 20 &gt;= 18 — true: напечатается «Проходи», ветка else пропустится.</p>
<svg viewBox="0 0 600 150" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="m5t" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker>
    <marker id="m5f" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#FF7A2F"/></marker>
  </defs>
  <polygon points="150,15 265,75 150,135 35,75" fill="#141716" stroke="#FFD34D" stroke-width="2"/>
  <text x="150" y="70" text-anchor="middle" fill="#FFD34D" font-size="13" font-weight="700">age &gt;= 18 ?</text>
  <text x="150" y="90" text-anchor="middle" fill="#9BA39D" font-size="10">условие: true или false</text>
  <line x1="268" y1="68" x2="352" y2="45" stroke="#B9FF47" stroke-width="2" marker-end="url(#m5t)"/>
  <text x="305" y="42" text-anchor="middle" fill="#B9FF47" font-size="11">true</text>
  <line x1="268" y1="82" x2="352" y2="105" stroke="#FF7A2F" stroke-width="2" marker-end="url(#m5f)"/>
  <text x="303" y="120" text-anchor="middle" fill="#FF7A2F" font-size="11">false</text>
  <rect x="358" y="22" width="222" height="46" rx="10" fill="#1C201E" stroke="#37936F"/>
  <text x="469" y="41" text-anchor="middle" fill="#9BA39D" font-size="10">ветка if</text>
  <text x="469" y="58" text-anchor="middle" fill="#F4F6F2" font-size="12" font-weight="700">console.log("Проходи")</text>
  <rect x="358" y="84" width="222" height="46" rx="10" fill="#1C201E" stroke="#FF7A2F"/>
  <text x="469" y="103" text-anchor="middle" fill="#9BA39D" font-size="10">ветка else</text>
  <text x="469" y="120" text-anchor="middle" fill="#F4F6F2" font-size="12" font-weight="700">console.log("Нельзя")</text>
</svg>
<p>Ветка <code>else</code> необязательна: если действие нужно только в одном случае, пиши одиночный if — показать баннер при total &gt;= 3000, иначе не делать ничего.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Сравнения и главная ловушка =</h3>
<table class="simple"><tr><th>Оператор</th><th>Смысл</th><th>Пример → результат</th></tr>
<tr><td><code>===</code></td><td>равно (строго)</td><td><code>5 === 5</code> → true</td></tr>
<tr><td><code>!==</code></td><td>не равно</td><td><code>5 !== 3</code> → true</td></tr>
<tr><td><code>&gt;</code> <code>&lt;</code> <code>&gt;=</code> <code>&lt;=</code></td><td>больше / меньше (или равно)</td><td><code>10 &gt;= 10</code> → true</td></tr></table>
<p>Запомни разницу: <code>=</code> кладёт значение в коробку («присвоить»), <code>===</code> сравнивает («равны ли?»). Напишешь <code>if (x = 5)</code> — код не сравнит, а перезапишет x, и условие «сработает» всегда. Вторая ловушка: <code>10 === "10"</code> — это <b>false</b>: число и строка — разные типы, даже если выглядят одинаково. Есть и нестрогое <code>==</code> — оно подгоняет типы и любит сюрпризы, в своём коде используй только <code>===</code>. И помни про границы: «ровно 1000 — уже скидка» это <code>total &gt;= 1000</code>, а не <code>&gt;</code> — за такие мелочи на ревью и цепляются.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Цепочка else if — вариантов больше двух</h3>
<pre class="demo">const score = 87;
if (score &gt;= 80) {
  console.log("Отлично");
} else if (score &gt;= 50) {
  console.log("Зачёт");
} else {
  console.log("Пересдача");
}</pre>
<p>Разбор: проверки идут сверху вниз, выполняется <b>первая</b> истинная ветка — остальные пропускаются, даже если тоже верны. 87 &gt;= 80 — true: печатается «Отлично», хотя 87 больше и 50. Поэтому порядок важен: сначала самое строгое условие, потом мягче. Такие «лесенки» условий — типовой заказ: уровни скидок, тарифы, оценки. В практике ниже соберёшь ровно такую.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Условие внутри функции: return выходит сразу</h3>
<pre class="demo">function grade(score) {
  if (score &gt;= 80) { return "отлично"; }
  if (score &gt;= 50) { return "зачёт"; }
  return "пересдача";
}
console.log(grade(87));   // отлично
console.log(grade(42));   // пересдача</pre>
<p>Разбор: <code>return</code> не только отдаёт значение — он <b>немедленно завершает</b> функцию. Сработал первый return — до остальных строк дело не дойдёт, поэтому else здесь даже не нужен: это паттерн «ранний выход», его любят на код-ревью. Такая функция отвечает на вопрос ответом-значением, и её удобно гонять автотестами с разными входами — ровно это делает практика ниже.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">5. && и || — склейка условий</h3>
<pre class="demo">if (age &gt;= 18 &amp;&amp; hasTicket) {
  console.log("Проходи");
}</pre>
<p>Разбор: <code>&amp;&amp;</code> — И: ветка выполнится, только если верны ОБА условия; хватит одного false — и всё условие false. <code>||</code> — ИЛИ: достаточно одного true. <code>!</code> — НЕ: переворачивает значение. Условие можно сохранить в переменную с говорящим именем — <code>const isAdult = age &gt;= 18;</code> — и писать <code>if (isAdult)</code>: код читается как обычное предложение.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">if (x = 5) { ... }</span> → <span class="now">if (x === 5) { ... }</span><br><span class="muted2">одиночное = кладёт 5 в x, и условие «истинно» всегда. Сравнение — только ===</span></span>
<span class="fix"><span class="was">if (score &gt;= 80) {...} if (score &gt;= 50) {...}</span> → <span class="now">if (score &gt;= 80) {...} else if (score &gt;= 50) {...}</span><br><span class="muted2">два отдельных if независимы: при score = 90 сработают ОБА. else if выполняет только первую подходящую ветку</span></span>
<span class="fix"><span class="was">if (age &gt;= 18 || age &lt;= 60)</span> → <span class="now">if (age &gt;= 18 &amp;&amp; age &lt;= 60)</span><br><span class="muted2">«от 18 до 60» — оба условия сразу, значит И. С || условие истинно вообще для любого возраста</span></span>`,
quiz:[
 {t:"output",q:"Что выведет console.log?",code:"const total = 4500;\nif (total >= 5000) {\n  console.log(\"Скидка 20%\");\n} else if (total >= 1000) {\n  console.log(\"Скидка 10%\");\n} else {\n  console.log(\"Без скидки\");\n}",o:["Скидка 10%","Скидка 20%","Без скидки","Скидка 10% и Без скидки"],a:0,e:"4500 меньше 5000 — первая ветка мимо; 4500 >= 1000 — true: печатается «Скидка 10%», остальные ветки пропускаются."},
 {t:"bug",q:"Код должен печатать «Совпало» только когда x равен 5. В какой строке ошибка?",code:["let x = 10;","if (x = 5) {","  console.log(\"Совпало\");","}"],a:1,e:"x = 5 — присваивание: оно кладёт 5 в x, и условие «истинно» всегда. Для сравнения нужно x === 5."},
 {q:"Что вернёт 10 === \"10\"?",o:["true","false","10","ошибку"],a:1,e:"Строгое сравнение учитывает тип: число ≠ строка → false."},
 {t:"order",q:"Собери фейс-контроль: сначала условие, потом альтернатива",lines:["if (age >= 18) {","  console.log(\"Проходи\");","} else {","  console.log(\"Нельзя\");","}"],e:"Сначала if с условием в круглых скобках и {, внутри — действие. Затем } else { и вторая ветка, в конце закрывающая }."},
 {t:"pairs",q:"Соедини оператор с его смыслом",pairs:[["&&","И — оба условия верны"],["||","ИЛИ — хотя бы одно верно"],["!","НЕ — переворачивает условие"],["===","равно, с учётом типа"]],e:"&& строже всех: нужно и то, и другое. Для || хватит одного. ! делает из true false и наоборот."}],
lab:[
 {kind:"fill",type:"js",
  prompt:`<p><b>Задание 1.</b> Фейс-контроль клуба: допиши функцию <code>canEnter</code>. Если <code>age</code> больше или равен 18 — <b>верни</b> строку «Проходи», иначе — «Нельзя». Обрати внимание на границу: ровно 18 — уже можно. «Проверить» вызовет функцию с несколькими возрастами.</p>`,
  starter:"// canEnter(20) → \"Проходи\", canEnter(15) → \"Нельзя\"\nfunction canEnter(age) {\n  // TODO: if — возраст от 18 и выше? верни \"Проходи\"\n\n  // TODO: иначе верни \"Нельзя\"\n}\n",
  tests:[
   {t:"canEnter — это функция",expr:"typeof canEnter",expect:"function"},
   {t:"canEnter(18) и canEnter(35) → 'Проходи' (ровно 18 — уже можно)",expr:"[canEnter(18), canEnter(35)]",expect:["Проходи","Проходи"]},
   {t:"canEnter(15) → 'Нельзя'",expr:"canEnter(15)",expect:"Нельзя"}]},
 {kind:"fix",type:"js",
  prompt:`<p><b>Задание 2.</b> Бот проверяет промокод, но принимает <b>любой</b> код — даже «ЛЕВЫЙ». Классическая ошибка из теории: внутри if стоит одиночное <code>=</code> (присваивание) вместо сравнения. <b>Почини</b>, чтобы скидку давал только код EMIL10.</p>`,
  starter:"// Должно быть: checkCode(\"EMIL10\") → \"Скидка активна\"\n//   любой другой код → \"Неверный код\"\nfunction checkCode(code) {\n  if (code = \"EMIL10\") {\n    return \"Скидка активна\";\n  }\n  return \"Неверный код\";\n}\n",
  tests:[
   {t:"checkCode — это функция",expr:"typeof checkCode",expect:"function"},
   {t:"checkCode('EMIL10') → 'Скидка активна'",expr:"checkCode('EMIL10')",expect:"Скидка активна"},
   {t:"checkCode('ЛЕВЫЙ') → 'Неверный код'",expr:"checkCode('ЛЕВЫЙ')",expect:"Неверный код"}]},
 {kind:"build",type:"js",
  prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> функцию <code>discount(total)</code> для магазина. Она возвращает <b>число</b> — процент скидки: меньше 1000 → <code>0</code>, от 1000 до 4999 → <code>10</code>, от 5000 → <code>20</code>. Используй цепочку if / else if / else или ранние return. Помни про границу: ровно 1000 — это уже скидка 10. Объявляй именно через <code>function discount(...)</code>.</p>`,
  starter:"// discount(500) → 0   discount(1000) → 10   discount(7000) → 20\n\n// TODO: объяви функцию discount(total) словом function\n// TODO: сначала самое строгое условие total >= 5000 (верни 20),\n//       потом total >= 1000 (верни 10), иначе верни 0\n",
  tests:[
   {t:"discount — это функция",expr:"typeof discount",expect:"function"},
   {t:"discount(500) → 0 (маленький заказ — без скидки)",expr:"discount(500)",expect:0},
   {t:"discount(1000) → 10 (граница: ровно 1000 уже даёт скидку)",expr:"discount(1000)",expect:10},
   {t:"discount(7000) → 20 (крупный заказ)",expr:"discount(7000)",expect:20}]}],
res:[
 ["learn.javascript.ru: условное ветвление if / else","url","https://learn.javascript.ru/ifelse"],
 ["MDN: if...else (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else"],
 ["learn.javascript.ru: операторы сравнения","url","https://learn.javascript.ru/comparison"],
 ["Условия в JavaScript: if, else, операторы сравнения","yt","javascript условия if else для начинающих"]]},
{id:"m6",title:"Циклы и массивы: много данных без копипасты",
theory:`
<p>🎯 <b>Зачем это тебе:</b> в реальных заказах данные приходят пачками — 50 товаров каталога, 200 комментариев, заказы магазина за день. Руками столько не перепечатаешь: <b>массив</b> хранит всю пачку в одной переменной, а <b>цикл</b> сам обрабатывает каждый элемент. Эта связка встречается в каждом проекте, и именно её спрашивают на первом же собеседовании джуна.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Массив: много значений в одной переменной</h3>
<p><b>Массив</b> (array) — список значений в одной переменной. Порядок элементов сохраняется:</p>
<pre class="demo">const hobbies = ["хоккей", "код", "англ.", "музыка"];
console.log(hobbies[0]);      // хоккей
console.log(hobbies.length);  // 4
hobbies.push("сон");          // добавить в конец
hobbies[1] = "видеомонтаж";   // заменить элемент</pre>
<p>Разбор построчно: элементы перечисляют в квадратных скобках через запятую. Достают их по <b>индексу</b> — номеру ячейки, и счёт идёт <b>с нуля</b>: <code>hobbies[0]</code> — первый элемент, <code>hobbies[3]</code> — четвёртый. <code>length</code> («длина») — свойство «сколько всего элементов», пишется без скобок. <code>push()</code> — метод «добавить в конец», со скобками. Через индекс можно и записывать: <code>hobbies[1] = ...</code> заменит старое значение новым. И заметь: push сработал, хотя массив объявлен через const — const запрещает перезаписать саму переменную целиком, а менять содержимое массива можно.</p>
<p>Формула, которую забывают чаще всего: элементов 4, а последний индекс — 3. Поэтому последний элемент — всегда <code>hobbies[hobbies.length - 1]</code>.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Цикл for: повторить N раз</h3>
<p><b>Цикл</b> повторяет блок кода, пока выполняется условие. Самый частый — <code>for</code> со счётчиком:</p>
<pre class="demo">for (let i = 0; i &lt; 3; i++) {
  console.log("Круг " + i);   // Круг 0, Круг 1, Круг 2
}</pre>
<p>Разбор трёх частей в круглых скобках: <code>let i = 0</code> — счётчик и его стартовое значение; <code>i &lt; 3</code> — условие «повторять, пока истинно»; <code>i++</code> — шаг: после каждого круга прибавить к i единицу. Тело в фигурных скобках выполнится три раза — при i = 0, 1 и 2. Когда i станет 3, условие 3 &lt; 3 даст false, и цикл остановится. Если условие не может стать false, цикл получится <b>бесконечным</b> и повесит вкладку — следи, чтобы счётчик реально двигался к финишу. Есть и цикл <code>while</code> («пока»): только условие, без счётчика — выручает, когда число повторов заранее неизвестно.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Классика: цикл проходит по массиву</h3>
<p>Теперь соединяем: счётчик i пробегает все номера ячеек, а <code>hobbies[i]</code> достаёт очередной элемент:</p>
<pre class="demo">for (let i = 0; i &lt; hobbies.length; i++) {
  console.log(hobbies[i]);
}</pre>
<p>Разбор: i идёт от 0 до <code>length - 1</code> — ровно по существующим индексам. Поэтому в условии строго <code>&lt;</code>, а не <code>&lt;=</code>: ячейки с номером length не существует, и лишний круг вернёт <code>undefined</code> («значения нет»). Вторая типовая беда — старт с i = 1: цикл молча потеряет первый элемент. Эта пара промахов называется <b>off-by-one</b>, «ошибка на единицу», — в практике ты будешь чинить именно её.</p>
<svg viewBox="0 0 600 150" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="m6loop" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#FF7A2F"/></marker></defs>
  <text x="315" y="14" text-anchor="middle" fill="#FF7A2F" font-size="11">цикл: i = 0 → 1 → 2 → 3</text>
  <path d="M115,54 C 200,20 440,20 545,52" fill="none" stroke="#FF7A2F" stroke-width="2" marker-end="url(#m6loop)"/>
  <text x="10" y="88" fill="#9BA39D" font-size="12">hobbies</text>
  <rect x="95" y="58" width="105" height="50" rx="8" fill="#1C201E" stroke="#B9FF47"/>
  <text x="147" y="88" text-anchor="middle" fill="#F4F6F2" font-size="12">"хоккей"</text>
  <rect x="215" y="58" width="105" height="50" rx="8" fill="#1C201E" stroke="#B9FF47"/>
  <text x="267" y="88" text-anchor="middle" fill="#F4F6F2" font-size="12">"код"</text>
  <rect x="335" y="58" width="105" height="50" rx="8" fill="#1C201E" stroke="#B9FF47"/>
  <text x="387" y="88" text-anchor="middle" fill="#F4F6F2" font-size="12">"англ."</text>
  <rect x="455" y="58" width="105" height="50" rx="8" fill="#1C201E" stroke="#B9FF47"/>
  <text x="507" y="88" text-anchor="middle" fill="#F4F6F2" font-size="12">"музыка"</text>
  <text x="147" y="128" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">0</text>
  <text x="267" y="128" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">1</text>
  <text x="387" y="128" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">2</text>
  <text x="507" y="128" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">3</text>
  <text x="315" y="145" text-anchor="middle" fill="#9BA39D" font-size="10">индексы — счёт с нуля · length = 4, последний индекс = 3</text>
</svg>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. for...of и копилка: приёмы на каждый день</h3>
<p>Когда номер ячейки не нужен, а нужны сами значения, пиши короче — <b>for...of</b>:</p>
<pre class="demo">for (const h of hobbies) {
  console.log(h);
}</pre>
<p>Разбор: читается «для каждого h из hobbies» — на каждом круге в <code>h</code> лежит очередной элемент. Ни счётчика, ни квадратных скобок — ошибиться почти негде. Правило выбора простое: нужен номер элемента — классический for, нужно просто обойти всё — for...of.</p>
<p>Второй приём — <b>копилка</b>: переменная, которая накапливает результат обхода. Так считают сумму заказов за день:</p>
<pre class="demo">const prices = [300, 450, 250];
let sum = 0;
for (const p of prices) {
  sum = sum + p;    // впитали очередную цену
}
console.log(sum);   // 1000</pre>
<p>Разбор: sum стартует с нуля и растёт на каждом круге: 0 → 300 → 750 → 1000. Важно, что копилка объявлена ДО цикла — внутри цикла она обнулялась бы на каждом круге. Та же схема делает счётчик: заведи <code>let count = 0</code> и прибавляй единицу внутри if — только подходящим элементам. Связка «копилка + цикл» закрывает половину задач с массивами: сумма, количество, поиск самой длинной строки — и всю сегодняшнюю практику.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">goals[1] // хочу первый элемент</span> → <span class="now">goals[0]</span><br><span class="muted2">счёт с нуля: [1] — это ВТОРОЙ элемент</span></span>
<span class="fix"><span class="was">arr.length()</span> → <span class="now">arr.length</span><br><span class="muted2">length — свойство, а не метод: со скобками получишь «arr.length is not a function»</span></span>
<span class="fix"><span class="was">for (let i = 1; i &lt;= arr.length; i++)</span> → <span class="now">for (let i = 0; i &lt; arr.length; i++)</span><br><span class="muted2">индексы идут от 0 до length - 1: старт с единицы теряет первый элемент, а &lt;= даёт лишний круг с undefined</span></span>`,
quiz:[
 {t:"output",q:"Что выведет console.log?",code:"const orders = [100, 250, 400];\nconsole.log(orders[1]);",o:["100","250","400","undefined"],a:1,e:"Индексы считаются с нуля: orders[0] — это 100, orders[1] — 250."},
 {t:"bug",q:"Цикл должен вывести ВСЕ товары, но теряет первый и в конце печатает undefined. В какой строке ошибка?",code:["const items = [\"чай\", \"кофе\", \"сахар\"];","for (let i = 1; i <= items.length; i++) {","  console.log(items[i]);","}"],a:1,e:"Двойной off-by-one: старт с i = 1 пропускает items[0], а условие <= length делает лишний круг — items[3] не существует, выйдет undefined. Нужно: let i = 0; i < items.length."},
 {t:"cloze",q:"Допиши цикл-копилку: сумма всех цен",code:"const prices = [300, 450, 250];\nlet sum = 0;\nfor (const p {0} prices) {\n  sum = sum + p;\n}\nconsole.log(sum); // {1}",gaps:["of",["1000","1 000"]],e:"for...of перебирает значения: p по очереди равно 300, 450 и 250, копилка sum дорастает до 1000."},
 {t:"pairs",q:"Соедини инструмент с его работой",pairs:[["arr.push(x)","добавить x в конец"],["arr.length","сколько элементов"],["arr[0]","первый элемент"],["arr[arr.length - 1]","последний элемент"]],e:"push — метод (со скобками), length — свойство (без скобок). Счёт с нуля: первый — [0], последний — [length - 1]."},
 {q:"Сколько раз выполнится тело цикла for (let i = 0; i < 3; i++)?",o:["2","3","4","бесконечно"],a:1,e:"Три круга: при i = 0, 1 и 2. Когда i станет 3, условие i < 3 даст false — цикл остановится."}],
lab:[
 {kind:"fill",type:"js",
  prompt:`<p><b>Задание 1.</b> Касса кафе: функция <code>sum(arr)</code> должна вернуть сумму всех чисел массива. Копилка <code>total</code> уже стоит на нуле — <b>допиши цикл</b> (for или for...of), который прибавляет к ней каждый элемент. Жми «Запустить», чтобы увидеть вывод, — а «Проверить» прогонит функцию с разными заказами, как автотесты.</p>`,
  starter:"// Касса кафе: сумма заказа\nfunction sum(arr) {\n  let total = 0;\n  // TODO: циклом (for или for...of) прибавь каждый элемент arr к total\n\n  return total;\n}\n\nconsole.log(sum([1, 2, 3])); // должно стать 6\nconsole.log(sum([]));        // пустой заказ → 0\n",
  tests:[
   {t:"sum — это функция",expr:"typeof sum",expect:"function"},
   {t:"sum([1, 2, 3]) → 6",expr:"sum([1, 2, 3])",expect:6},
   {t:"sum([]) → 0 — пустой заказ не ломает кассу",expr:"sum([])",expect:0}]},
 {kind:"fix",type:"js",
  prompt:`<p><b>Задание 2.</b> Функция <code>greetAll(guests)</code> должна поздороваться с <b>каждым</b> гостем, но в цикле классическая «ошибка на единицу»: первый гость потерян, а в конце вылезает лишний <code>undefined</code>. <b>Почини границы цикла</b> — счёт индексов идёт с нуля, а последний индекс равен <code>length - 1</code>.</p>`,
  starter:"// Вечеринка: приветствие для каждого гостя\n// Должно быть: [\"Привет, Аня!\", \"Привет, Тимур!\", \"Привет, Марат!\"]\nfunction greetAll(guests) {\n  const result = [];\n  for (let i = 1; i <= guests.length; i++) {\n    result.push(\"Привет, \" + guests[i] + \"!\");\n  }\n  return result;\n}\n\nconsole.log(greetAll([\"Аня\", \"Тимур\", \"Марат\"]));\n",
  tests:[
   {t:"greetAll — это функция",expr:"typeof greetAll",expect:"function"},
   {t:"greetAll(['Аня','Тимур','Марат']) → все три приветствия, начиная с первого гостя",expr:"greetAll(['Аня','Тимур','Марат'])",expect:["Привет, Аня!","Привет, Тимур!","Привет, Марат!"]},
   {t:"без лишнего круга: последним у greetAll(['Оля','Дан']) идёт 'Привет, Дан!', а не undefined",expr:"greetAll(['Оля','Дан'])[1]",expect:"Привет, Дан!"}]},
 {kind:"build",type:"js",
  prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> отчёт по спринту: функция <code>stats(tasks)</code> получает массив строк-задач и <b>возвращает объект</b> <code>{ total: ..., long: ... }</code>: <code>total</code> — сколько всего задач, <code>long</code> — счётчик задач длиннее 5 символов (внутри цикла проверяй <code>t.length &gt; 5</code>). Пустой массив — честный ответ <code>{ total: 0, long: 0 }</code>. Объявляй именно через <code>function stats(...)</code>.</p>`,
  starter:"// Отчёт по спринту: stats([\"выучить массивы\", \"чай\"]) → { total: 2, long: 1 }\n\n// TODO: объяви функцию stats(tasks) словом function\n// TODO: total — количество задач (подсказка: length)\n// TODO: long — копилка-счётчик: цикл + if (t.length > 5)\n// TODO: верни объект { total: total, long: long }\n\nconsole.log(stats([\"выучить массивы\", \"чай\"]));\n",
  tests:[
   {t:"stats — это функция",expr:"typeof stats",expect:"function"},
   {t:"stats(['выучить массивы','чай','погулять с собакой']) → { total: 3, long: 2 }",expr:"stats(['выучить массивы','чай','погулять с собакой'])",fn:got=>!!got&&got.total===3&&got.long===2},
   {t:"stats(['спорт','код']) → { total: 2, long: 0 } — слово из 5 букв ещё не «длинное»",expr:"stats(['спорт','код'])",fn:got=>!!got&&got.total===2&&got.long===0},
   {t:"stats([]) → { total: 0, long: 0 } — пустой спринт не роняет отчёт",expr:"stats([])",fn:got=>!!got&&got.total===0&&got.long===0}]}],
res:[
 ["learn.javascript.ru: циклы while и for","url","https://learn.javascript.ru/while-for"],
 ["learn.javascript.ru: массивы","url","https://learn.javascript.ru/array"],
 ["MDN: циклы и итерации (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Loops_and_iteration"],
 ["Циклы и массивы на практике","yt","javascript циклы и массивы для начинающих"]]},
{id:"m7",title:"Функции и объекты: строительные блоки",
theory:`
<p>🎯 <b>Зачем это тебе:</b> без функций код — это простыня повторов: поменять что-то одно значит править в десяти местах. Функции заворачивают логику в «детали», из которых собирается программа. А объекты складывают связанные данные вместе. Связка «функция возвращает объект» — это уже настоящий рабочий код: так устроены и корзина магазина, и профиль игрока.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Функция — машина: вход → работа → выход</h3>
<pre class="demo">function double(x) {
  return x * 2;
}
console.log(double(7));   // 14</pre>
<p>Разбор: слово <code>function</code> объявляет функцию, <code>x</code> — <b>параметр</b> (вход), <code>return</code> отдаёт <b>результат</b> (выход) и сразу завершает функцию. Вызов — имя со скобками: <code>double(7)</code>. Без <code>return</code> функция вернёт <code>undefined</code> — сделала работу, но ничего не отдала.</p>
<svg viewBox="0 0 600 130" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="m7a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker>
  <marker id="m7b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#37936F"/></marker></defs>
  <rect x="30" y="45" width="110" height="44" rx="10" fill="#141716" stroke="#FFD34D"/>
  <text x="85" y="64" text-anchor="middle" fill="#FFD34D" font-size="13" font-weight="700">вход: 7</text>
  <text x="85" y="80" text-anchor="middle" fill="#9BA39D" font-size="9">аргумент</text>
  <line x1="144" y1="67" x2="216" y2="67" stroke="#B9FF47" stroke-width="2" marker-end="url(#m7a)"/>
  <rect x="222" y="32" width="180" height="70" rx="12" fill="#1C201E" stroke="#B9FF47"/>
  <text x="312" y="60" text-anchor="middle" fill="#B9FF47" font-size="14" font-weight="700">double(x)</text>
  <text x="312" y="80" text-anchor="middle" fill="#9BA39D" font-size="10">return x * 2</text>
  <line x1="406" y1="67" x2="478" y2="67" stroke="#37936F" stroke-width="2" marker-end="url(#m7b)"/>
  <rect x="484" y="45" width="90" height="44" rx="10" fill="#141716" stroke="#37936F"/>
  <text x="529" y="64" text-anchor="middle" fill="#F4F6F2" font-size="13" font-weight="700">14</text>
  <text x="529" y="80" text-anchor="middle" fill="#9BA39D" font-size="9">результат</text>
</svg>
<p>Разбор схемы: у машины может быть несколько входов — <code>function card(name, level)</code> — но выход через <code>return</code> всегда один. Один раз написал машину — вызывай её сколько угодно раз с разными входами.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Объект — данные, собранные вместе</h3>
<pre class="demo">const player = {
  name: "Эмиль",
  level: 5
};
console.log(player.name);   // Эмиль</pre>
<p>Разбор: объект — набор пар «поле: значение» в фигурных скобках. Читают поля через точку: <code>player.name</code>. Так игрок носит свои данные одним «рюкзаком», а не россыпью переменных name1, level1, name2…</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Фабрика: функция, которая возвращает объект</h3>
<p>Соединяем: функция принимает данные и собирает из них объект. Это называют <b>фабрикой</b> — главный паттерн сегодняшней практики:</p>
<pre class="demo">function makePlayer(name, level) {
  return { name: name, level: level };
}
const p1 = makePlayer("Эмиль", 5);
const p2 = makePlayer("Аня", 12);</pre>
<p>Разбор: два вызова — два независимых объекта с одинаковой формой. Не нужно копировать фигурные скобки руками для каждого игрока: фабрика штампует их сама. Короткая запись: когда имя поля совпадает с именем переменной, можно писать просто <code>{ name, level }</code>.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Метод — функция внутри объекта</h3>
<pre class="demo">function makeHero(name, level) {
  return {
    name: name,
    level: level,
    describe() { return this.name + " (ур. " + this.level + ")"; }
  };
}
console.log(makeHero("Эмиль", 5).describe());   // Эмиль (ур. 5)</pre>
<p>Разбор: <code>describe() { ... }</code> — <b>метод</b>: функция, живущая в объекте. Внутри метода <code>this</code> — «тот объект, у которого метод вызвали»: правило простое — <b>кто слева от точки, тот и this</b>. Осторожно: у стрелочных функций <code>() => ...</code> своего this нет, поэтому методы объекта пиши обычной записью, как здесь.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">function sum(a,b){ a + b; }</span> → <span class="now">function sum(a,b){ return a + b; }</span><br><span class="muted2">без return функция посчитает и выбросит результат — наружу уйдёт undefined</span></span>
<span class="fix"><span class="was">console.log(double)</span> → <span class="now">console.log(double(7))</span><br><span class="muted2">без скобок ты передаёшь саму функцию, а не вызываешь её</span></span>
<span class="fix"><span class="was">hello: () => "Я " + this.name</span> → <span class="now">hello() { return "Я " + this.name; }</span><br><span class="muted2">у стрелок нет своего this — метод объекта пиши обычной записью</span></span>`,
quiz:[
 {q:"Что делает return внутри функции?",o:["Отдаёт результат и завершает функцию","Печатает текст в консоль","Повторяет функцию","Создаёт переменную"],a:0,e:"return — выход машины: отдал значение и остановился, код ниже не выполняется."},
 {t:"output",q:"Что выведет console.log?",code:"function greet(name) {\n  \"Привет, \" + name;\n}\nconsole.log(greet(\"Аня\"));",o:["Привет, Аня","undefined","Аня","ошибка"],a:1,e:"Строка собралась и потерялась: без return функция возвращает undefined."},
 {t:"cloze",q:"Дострой фабрику игрока",code:"function makePlayer(name, level) {\n  {0} { name: name, level: level };\n}\nconst p = makePlayer(\"Аня\", 3);\nconsole.log(p.{1});   // Аня",gaps:["return","name"],e:"Фабрика возвращает объект через return; поле читают через точку: p.name."},
 {t:"bug",q:"Метод сломан — в какой строке причина?",code:["const bot = {","  name: \"Бот\",","  hello: () => \"Я \" + this.name,","};"],a:2,e:"Стрелочная функция не имеет своего this — метод нужно записать как hello() { return \"Я \" + this.name; }."},
 {t:"pairs",q:"Соедини понятие с его ролью",pairs:[["параметр","вход функции"],["return","выход функции"],["метод","функция внутри объекта"],["this","кто слева от точки"]],e:"Параметры принимают вход, return отдаёт результат, метод живёт в объекте, this — объект, у которого метод вызвали."}],
lab:[
 {kind:"fill",type:"js",prompt:`<p><b>Задание 1.</b> Дострой фабрику <code>makePlayer(name, level)</code>: она должна <b>возвращать объект</b> с полями name и level. Обязательно объяви её словом <code>function</code>.</p>`,
  starter:"// Фабрика игроков для таблицы лидеров\nfunction makePlayer(name, level) {\n  // TODO: верни объект с полями name и level\n\n}\n\nconsole.log(makePlayer(\"Эмиль\", 5));",
  tests:[
   {t:"makePlayer — это функция",expr:"typeof makePlayer",expect:"function"},
   {t:"makePlayer('Эмиль', 5) → объект {name:'Эмиль', level:5}",expr:"makePlayer('Эмиль', 5)",fn:got=>!!got&&got.name==="Эмиль"&&got.level===5},
   {t:"Другой вход: makePlayer('Аня', 12) → {name:'Аня', level:12}",expr:"makePlayer('Аня', 12)",fn:got=>!!got&&got.name==="Аня"&&got.level===12}]},
 {kind:"fix",type:"js",prompt:`<p><b>Задание 2.</b> Бот должен представляться по имени, но метод написан <b>стрелочной функцией</b> — this потерялся, и вместо имени выходит ерунда. <b>Почини</b>: перепиши hello обычным методом <code>hello() { ... }</code>.</p>`,
  starter:"// Фабрика ботов поддержки\nfunction makeBot(name) {\n  return {\n    name: name,\n    hello: () => \"Я \" + this.name   // сломано: у стрелки нет this\n  };\n}\n\nconsole.log(makeBot(\"Дана\").hello());",
  tests:[
   {t:"makeBot — это функция",expr:"typeof makeBot",expect:"function"},
   {t:"makeBot('Дана').hello() → 'Я Дана'",expr:"makeBot('Дана').hello()",expect:"Я Дана"},
   {t:"Другой бот: makeBot('Макс').hello() → 'Я Макс'",expr:"makeBot('Макс').hello()",expect:"Я Макс"}]},
 {kind:"build",type:"js",prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> фабрику героя <code>makeHero(name, level)</code>. Герой умеет: <code>describe()</code> — вернуть строку вида <code>Эмиль (ур. 5)</code>, и <code>powerUp()</code> — поднять свой level на 1 (через this). Скобки и точка в строке — ровно как в примере.</p>`,
  starter:"// Фабрика героев: describe() и powerUp()\n// makeHero(\"Эмиль\", 5).describe() → \"Эмиль (ур. 5)\"\n\n// TODO: объяви function makeHero(name, level) и верни объект\n//       с полями и двумя методами\n",
  tests:[
   {t:"makeHero — это функция",expr:"typeof makeHero",expect:"function"},
   {t:"describe(): makeHero('Аня', 3).describe() → 'Аня (ур. 3)'",expr:"makeHero('Аня', 3).describe()",expect:"Аня (ур. 3)"},
   {t:"powerUp() поднимает уровень: после одного вызова герой 5-го стал 6-м",expr:"(function(){ const h = makeHero('Эмиль', 5); h.powerUp(); return h.describe(); })()",expect:"Эмиль (ур. 6)"},
   {t:"Два powerUp() подряд → +2 уровня",expr:"(function(){ const h = makeHero('Тимур', 1); h.powerUp(); h.powerUp(); return h.level; })()",expect:3}]}],
res:[
 ["learn.javascript.ru: Функции","url","https://learn.javascript.ru/function-basics"],
 ["learn.javascript.ru: Объекты","url","https://learn.javascript.ru/object"],
 ["MDN: Функции (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions"],
 ["Функции и объекты за 20 минут","yt","javascript функции и объекты для новичков"]]},
{id:"m12",title:"Массивы-профи: map, filter, reduce",
theory:`
<p>🎯 <b>Зачем это тебе:</b> каждый второй заказ — «обработай список»: посчитай корзину, убери отменённые позиции, подними цены на 10%. В m6 ты делал это циклом for с копилкой. Цикл работает, но у профи для списков есть три фирменных метода — map, filter и reduce. На них держится обработка данных почти в каждом React-проекте, и их обязательно спрашивают на собеседовании джуна. Сегодня соберёшь из них настоящий конвейер.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. map — преобразовать каждый элемент</h3>
<p><b>map</b> («преобразовать») прогоняет каждый элемент через твою функцию и собирает результаты в <b>новый массив той же длины</b>:</p>
<pre class="demo">const prices = [100, 200, 300];
const withMarkup = prices.map(p => p * 1.2);   // наценка 20%
console.log(withMarkup);   // [120, 240, 360]
console.log(prices);       // [100, 200, 300] — не тронут</pre>
<p>Разбор: метод вызывается у массива через точку, внутрь передаётся стрелочная функция из m7: «возьми элемент p, верни p * 1.2». Ни счётчика i, ни квадратных скобок с индексами — map сам обойдёт все элементы по очереди. Результат — новый массив, а исходный цел: старые данные не потеряны, и это спасает от целого класса багов.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. filter — отобрать подходящие</h3>
<p><b>filter</b> («отфильтровать») решает, кто останется. Его функция возвращает не новое значение, а вердикт — true или false:</p>
<pre class="demo">const check = [3200, 0, 1400, 5600];
const paid = check.filter(p => p &gt; 0);
console.log(paid);   // [3200, 1400, 5600]</pre>
<p>Разбор: условие p &gt; 0 — вопрос к каждому элементу: «ты больше нуля?». Ответил true — прошёл, false — вылетел. Нули (отменённые позиции чека) отсеялись. Длина результата — какая получится: хоть весь массив, хоть пустой. Главное отличие: map МЕНЯЕТ каждый элемент, filter только РЕШАЕТ, кто останется, — сами элементы он не трогает.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. reduce — свернуть в одно значение</h3>
<p><b>reduce</b> («свернуть») сжимает весь массив в одно значение: сумму, максимум, счётчик:</p>
<pre class="demo">const total = paid.reduce((sum, p) => sum + p, 0);
console.log(total);   // 10200</pre>
<p>Разбор: у функции внутри reduce два параметра: sum — копилка с накопленным, p — очередной элемент. Каждый шаг возвращает новое содержимое копилки: sum + p. Ноль после запятой — стартовое значение, с него начинается счёт. Это схема «копилка + цикл» из m6, свёрнутая в одну строку: reduce сам перебирает элементы и таскает копилку между шагами. Копилкой может быть что угодно — число, строка, даже объект.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Конвейер: цепочка методов</h3>
<p>map и filter возвращают массив — значит, к результату сразу цепляется следующий метод. Данные едут по конвейеру, как детали по заводу:</p>
<svg viewBox="0 0 600 150" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="m12ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#9BA39D"/></marker></defs>
  <rect x="8" y="42" width="98" height="66" rx="10" fill="#141716" stroke="#9BA39D"/>
  <text x="57" y="68" text-anchor="middle" fill="#F4F6F2" font-size="13" font-weight="700">сырьё</text>
  <text x="57" y="86" text-anchor="middle" fill="#9BA39D" font-size="9">чек: [3200, 0, 1400]</text>
  <line x1="106" y1="75" x2="126" y2="75" stroke="#9BA39D" stroke-width="2" marker-end="url(#m12ar)"/>
  <rect x="130" y="42" width="104" height="66" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="182" y="64" text-anchor="middle" fill="#FFD34D" font-size="14" font-weight="700">filter</text>
  <text x="182" y="82" text-anchor="middle" fill="#F4F6F2" font-size="10">отбор: p &gt; 0</text>
  <text x="182" y="97" text-anchor="middle" fill="#9BA39D" font-size="9">решает, кто прошёл</text>
  <line x1="234" y1="75" x2="254" y2="75" stroke="#9BA39D" stroke-width="2" marker-end="url(#m12ar)"/>
  <text x="244" y="128" text-anchor="middle" fill="#FFD34D" font-size="9">[3200, 1400]</text>
  <rect x="258" y="42" width="104" height="66" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="310" y="64" text-anchor="middle" fill="#B9FF47" font-size="14" font-weight="700">map</text>
  <text x="310" y="82" text-anchor="middle" fill="#F4F6F2" font-size="10">скидка: p * 0.9</text>
  <text x="310" y="97" text-anchor="middle" fill="#9BA39D" font-size="9">меняет каждого</text>
  <line x1="362" y1="75" x2="382" y2="75" stroke="#9BA39D" stroke-width="2" marker-end="url(#m12ar)"/>
  <text x="372" y="128" text-anchor="middle" fill="#B9FF47" font-size="9">[2880, 1260]</text>
  <rect x="386" y="42" width="104" height="66" rx="10" fill="#1C201E" stroke="#FF7A2F"/>
  <text x="438" y="64" text-anchor="middle" fill="#FF7A2F" font-size="14" font-weight="700">reduce</text>
  <text x="438" y="82" text-anchor="middle" fill="#F4F6F2" font-size="10">сумма, старт 0</text>
  <text x="438" y="97" text-anchor="middle" fill="#9BA39D" font-size="9">сворачивает в одно</text>
  <line x1="490" y1="75" x2="510" y2="75" stroke="#9BA39D" stroke-width="2" marker-end="url(#m12ar)"/>
  <rect x="514" y="42" width="78" height="66" rx="10" fill="#141716" stroke="#37936F"/>
  <text x="553" y="68" text-anchor="middle" fill="#37936F" font-size="13" font-weight="700">итог</text>
  <text x="553" y="86" text-anchor="middle" fill="#F4F6F2" font-size="11">4140</text>
  <text x="118" y="128" text-anchor="middle" fill="#9BA39D" font-size="9">поехали →</text>
  <text x="502" y="128" text-anchor="middle" fill="#37936F" font-size="9">одно число</text>
</svg>
<pre class="demo">const bill = check
  .filter(p => p &gt; 0)              // 1. убрать отменённые
  .map(p => p * 0.9)               // 2. скидка 10%
  .reduce((sum, p) => sum + p, 0); // 3. итог чека</pre>
<p>Разбор: читается сверху вниз, как рецепт: отфильтровать → уценить → сложить. Каждый станок делает одну операцию и передаёт результат дальше. Порядок не случаен: сначала отбор, потом преобразование — незачем считать скидку тому, что всё равно выкинем. Тот же код циклом — это копилка, if и пять строк, где смысл приходится вычислять в голове; здесь каждый шаг назван по имени.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">5. Как выбрать метод</h3>
<p>Правило из трёх вопросов. Нужен такой же массив, но с изменёнными элементами? — map. Нужна часть элементов, без изменений? — filter. Нужно одно значение из всего массива? — reduce. А цикл for оставь для случаев «просто повтори N раз», где массива вообще нет. Бонус к собеседованию: «чем map отличается от forEach?» — map возвращает новый массив и встраивается в цепочку, forEach лишь выполняет функцию для каждого элемента и возвращает undefined.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">prices.map(p => { p * 2 })</span> → <span class="now">prices.map(p => p * 2)</span><br><span class="muted2">у тела в фигурных скобках нужен return — без него каждый элемент превратится в undefined</span></span>
<span class="fix"><span class="was">check.filter(p => p * 0.9)</span> → <span class="now">check.map(p => p * 0.9)</span><br><span class="muted2">filter ждёт вердикт true/false и ничего не меняет; преобразовать каждый элемент — работа map</span></span>
<span class="fix"><span class="was">arr.reduce((s, p) => s + p)</span> → <span class="now">arr.reduce((s, p) => s + p, 0)</span><br><span class="muted2">без стартового значения reduce возьмёт первый элемент, а на пустом массиве упадёт с ошибкой — ставь 0</span></span>`,
quiz:[
 {t:"pairs",q:"Соедини метод с тем, что он возвращает",pairs:[["map","новый массив той же длины"],["filter","часть элементов, без изменений"],["reduce","одно значение из всего массива"],["стартовый 0 в reduce","с чего начинается копилка"]],e:"map преобразует каждый элемент, filter отбирает подходящие, reduce сворачивает всё в одно значение. Стартовое значение — второй аргумент reduce: на пустом массиве вернётся именно оно."},
 {t:"output",q:"Что выведет console.log?",code:"const nums = [4, -2, 7, 0];\nconsole.log(nums.filter(n => n > 0));",o:["[4, 7]","[4, -2, 7, 0]","[true, false, true, false]","11"],a:0,e:"filter оставил только элементы с вердиктом true: 4 и 7. Сами элементы он не меняет — массив из true/false вернул бы map с этим же условием, а 11 — reduce с суммой."},
 {t:"cloze",q:"Дополни конвейер кассы: отбор → скидка → сумма",code:"const total = prices\n  .{0}(p => p > 0)\n  .{1}(p => p * 0.9)\n  .{2}((sum, p) => sum + p, 0);",gaps:["filter","map","reduce"],e:"Сначала filter отбирает положительные цены, потом map превращает каждую (скидка), в конце reduce сворачивает всё в один итог со стартом 0."},
 {t:"bug",q:"Код должен удвоить цены, но выводит [undefined, undefined]. В какой строке ошибка?",code:["const prices = [100, 200];","const dbl = prices.map(p => { p * 2 });","console.log(dbl);"],a:1,e:"Стрелка с телом в фигурных скобках требует return: { p * 2 } ничего не возвращает, и map собрал массив из undefined. Пиши p => p * 2 или { return p * 2; }."},
 {q:"Что вернёт [1, 2, 3].reduce((s, n) => s + n, 10)?",o:["16","6","10","[11, 12, 13]"],a:0,e:"Копилка стартует с 10, дальше прибавляются 1, 2 и 3: получается 16. Второй аргумент reduce — стартовое значение копилки."}],
lab:[
 {kind:"fill",type:"js",prompt:`<p><b>Задание 1.</b> Касса магазина: в списке сумм есть возвраты (со знаком минус) и отмены (нули). Допиши тело функции <code>onlyPositive(nums)</code>: методом <code>filter</code> верни новый массив только из чисел больше нуля. Имя функции не меняй — его вызывают тесты. Жми «Запустить», потом «Проверить».</p>`,
  starter:"// Касса: в nums есть возвраты (минус) и отмены (0)\n// Оплата — только число БОЛЬШЕ нуля\n\nfunction onlyPositive(nums) {\n  // TODO: верни nums.filter(...) — только элементы > 0\n}\n\nconsole.log(onlyPositive([3200, -500, 1400, 0]));   // хотим [3200, 1400]\n",
  tests:[
   {t:"onlyPositive — функция (имя не менялось)",expr:"typeof onlyPositive",expect:"function"},
   {t:"onlyPositive([3200, -500, 1400, 0]) → [3200, 1400]",expr:"onlyPositive([3200, -500, 1400, 0])",expect:[3200,1400]},
   {t:"onlyPositive([-2, -7, 10]) → [10]",expr:"onlyPositive([-2, -7, 10])",expect:[10]},
   {t:"Пустой чек не ломает кассу: onlyPositive([]) → []",expr:"onlyPositive([])",expect:[]}]},
 {kind:"fix",type:"js",prompt:`<p><b>Задание 2.</b> Функция <code>total(nums)</code> должна складывать только <b>положительные</b> суммы, но total([10, -5, 20]) выдаёт 2 вместо 30: в конвейере вместо отбора стоит преобразование — map превратил числа в true/false, и reduce сложил вердикты. <b>Почини одно слово</b> в цепочке.</p>`,
  starter:"// Выручка смены: сумма ТОЛЬКО положительных чисел\n// Ждём: total([10, -5, 20]) → 30. Получаем: 2. Один метод — не тот…\n\nfunction total(nums) {\n  return nums\n    .map(n => n > 0)\n    .reduce((sum, n) => sum + n, 0);\n}\n\nconsole.log(total([10, -5, 20]));\n",
  tests:[
   {t:"total — функция",expr:"typeof total",expect:"function"},
   {t:"total([10, -5, 20]) → 30",expr:"total([10, -5, 20])",expect:30},
   {t:"total([100, -40, 60, -10]) → 160",expr:"total([100, -40, 60, -10])",expect:160},
   {t:"Одни возвраты: total([-5, -5]) → 0",expr:"total([-5, -5])",expect:0}]},
 {kind:"build",type:"js",prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> кассу распродажи: функция <code>cartTotal(products)</code> получает массив товаров вида <code>{ name, price, inStock }</code> и возвращает <b>число</b> — сумму цен только доступных товаров (<code>inStock: true</code>) со скидкой 10% (умножь на 0.9). Пустая корзина даёт 0. Конвейер: filter → reduce (или один reduce).</p>`,
  starter:"// Распродажа −10%: посчитай корзину\n// Товар: { name: \"кофе\", price: 200, inStock: true }\n// В сумму идут только доступные (inStock: true), к итогу — скидка 10%\n\nfunction cartTotal(products) {\n  // TODO: оставь доступные товары (filter)\n  // TODO: сложи их цены (reduce со стартом 0)\n  // TODO: верни сумму со скидкой — умножь на 0.9\n}\n\nconsole.log(cartTotal([\n  { name: \"кофе\", price: 200, inStock: true },\n  { name: \"чай\", price: 100, inStock: false },\n  { name: \"какао\", price: 300, inStock: true }\n]));   // хотим 450\n",
  tests:[
   {t:"cartTotal — функция",expr:"typeof cartTotal",expect:"function"},
   {t:"Кофе (200) + какао (300) со скидкой → 450, недоступный чай не в счёт",expr:"cartTotal([{name:'кофе',price:200,inStock:true},{name:'чай',price:100,inStock:false},{name:'какао',price:300,inStock:true}])",expect:450},
   {t:"Один доступный товар за 1000 → 900",expr:"cartTotal([{name:'сыр',price:1000,inStock:true}])",expect:900},
   {t:"Пустая корзина → 0",expr:"cartTotal([])",expect:0},
   {t:"Всё распродано (inStock: false) → 0",expr:"cartTotal([{name:'мёд',price:500,inStock:false},{name:'хлеб',price:700,inStock:false}])",expect:0}]}],
res:[
 ["learn.javascript.ru: методы массивов","url","https://learn.javascript.ru/array-methods"],
 ["MDN: Array.prototype.map (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map"],
 ["MDN: Array.prototype.filter (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"],
 ["MDN: Array.prototype.reduce (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"],
 ["Видео: map, filter, reduce на пальцах","yt","javascript map filter reduce для начинающих"]]},
{id:"m13",title:"Объекты глубже: this, деструктуризация, ?.",
theory:`
<p>🎯 <b>Зачем это тебе:</b> реальные данные приходят объектами — профиль игрока, заказ, ответ сервера. И эти данные дырявые: у половины пользователей не заполнен город, у новичка ещё нет статистики. Одно неосторожное обращение к полю — и приложение падает с «Cannot read properties of undefined» прямо на глазах заказчика. Сегодня — три инструмента, чтобы вскрывать объекты коротко, аккуратно и без падений.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Методы и this</h3>
<p>У объекта бывают не только поля, но и <b>методы</b> — функции внутри объекта:</p>
<pre class="demo">const player = {
  name: "Эмиль",
  level: 5,
  hello() { return "Я " + this.name; }
};
console.log(player.hello());   // Я Эмиль</pre>
<p>Разбор: hello() { ... } — короткая запись метода. Внутри него this — «тот объект, у которого метод вызвали». Вызвали player.hello() — значит this = player, и this.name даёт «Эмиль». Правило простое: <b>кто слева от точки — тот и this</b>. Скопируешь метод другому объекту и вызовешь у него — this станет уже им. Важно: у стрелочных функций своего this нет, поэтому методы объекта пиши обычной записью, как здесь.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Деструктуризация — распаковка одной строкой</h3>
<p>Доставать поля по одному — player.name, player.level — длинно. Есть распаковка:</p>
<pre class="demo">const { name, level } = player;
console.log(name, level);   // Эмиль 5

const { rank = "новичок" } = player;
console.log(rank);   // новичок — поля нет, взялся запасной</pre>
<p>Разбор: слева в фигурных скобках перечисляешь имена полей — и получаешь готовые переменные name и level. Имена должны совпадать с полями объекта: напишешь { nick } — получишь undefined, поля nick у player нет. Знак = внутри скобок задаёт значение по умолчанию на случай отсутствия поля. С массивами так же, только скобки квадратные и решает порядок, а не имя: const [first, second] = arr;</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Данные — это дерево, и в нём бывают дырки</h3>
<p>Объект в объекте — обычное дело: у user есть address, у address есть city. Путь до города — user.address.city, две точки, два шага вглубь дерева:</p>
<svg viewBox="0 0 600 150" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="53" width="104" height="44" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="76" y="72" text-anchor="middle" fill="#B9FF47" font-size="14" font-weight="700">user</text>
  <text x="76" y="88" text-anchor="middle" fill="#9BA39D" font-size="9">объект-профиль</text>
  <line x1="128" y1="64" x2="206" y2="30" stroke="#37936F" stroke-width="2"/>
  <rect x="210" y="10" width="168" height="40" rx="10" fill="#141716" stroke="#37936F"/>
  <text x="294" y="27" text-anchor="middle" fill="#F4F6F2" font-size="11">name: "Аня"</text>
  <text x="294" y="42" text-anchor="middle" fill="#37936F" font-size="9">поле на месте</text>
  <line x1="128" y1="86" x2="206" y2="115" stroke="#FF7A2F" stroke-width="2" stroke-dasharray="5 4"/>
  <rect x="210" y="96" width="168" height="44" rx="10" fill="#141716" stroke="#FF7A2F" stroke-dasharray="5 4"/>
  <text x="294" y="115" text-anchor="middle" fill="#FF7A2F" font-size="12" font-weight="700">address</text>
  <text x="294" y="131" text-anchor="middle" fill="#FF7A2F" font-size="9">может отсутствовать!</text>
  <line x1="378" y1="118" x2="448" y2="118" stroke="#FFD34D" stroke-width="2"/>
  <circle cx="413" cy="118" r="13" fill="#141716" stroke="#FFD34D"/>
  <text x="413" y="122" text-anchor="middle" fill="#FFD34D" font-size="11" font-weight="700">?.</text>
  <rect x="452" y="96" width="128" height="44" rx="10" fill="#141716" stroke="#FFD34D"/>
  <text x="516" y="115" text-anchor="middle" fill="#F4F6F2" font-size="11">city: "Казань"</text>
  <text x="516" y="131" text-anchor="middle" fill="#9BA39D" font-size="9">глубина 2</text>
  <text x="505" y="34" text-anchor="middle" fill="#9BA39D" font-size="9">безопасный путь вглубь:</text>
  <text x="505" y="52" text-anchor="middle" fill="#FFD34D" font-size="11" font-weight="700">user.address?.city</text>
  <text x="505" y="70" text-anchor="middle" fill="#B9FF47" font-size="11">?? "не указан"</text>
</svg>
<p>Разбор дерева: пока address на месте, путь работает. Но у Тимура адрес не заполнен: user.address — это undefined, а у undefined нельзя спросить .city — TypeError, программа умерла. Чужим данным верить нельзя: сервер, форма, старый сохранённый профиль — где-то обязательно окажется дырка.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Страховка: ?. и ??</h3>
<pre class="demo">const user = { name: "Аня" };   // адреса нет
console.log(user.address?.city);                  // undefined — не упало
console.log(user.address?.city ?? "не указан");   // не указан</pre>
<p>Разбор: ?. значит «если слева пусто (undefined или null) — стоп, верни undefined и не падай дальше». ?? значит «если слева вышло пусто — возьми запасное значение». Вместе они превращают падение в аккуратную заглушку. Тонкость: у ?? есть старший брат ||, но || затирает и честные значения — ноль или пустую строку, — а ?? срабатывает только на undefined и null: для счётчика побед бери wins ?? 0. И не лепи ?. на каждую точку подряд: если поле обязано существовать, пусть код честно упадёт при разработке, чем молча вернёт undefined на проде.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">user.address.city — а address бывает пуст</span> → <span class="now">user.address?.city ?? "—"</span><br><span class="muted2">одна пара символов спасает от «Cannot read properties of undefined»</span></span>
<span class="fix"><span class="was">hello: () => "Я " + this.name</span> → <span class="now">hello() { return "Я " + this.name; }</span><br><span class="muted2">у стрелочных функций нет своего this — метод объекта пиши обычной записью</span></span>
<span class="fix"><span class="was">const { nick } = player, когда поле зовут name</span> → <span class="now">const { name } = player (или const { name: nick } = player)</span><br><span class="muted2">имена в фигурных скобках должны совпадать с полями объекта, иначе получишь undefined</span></span>`,
quiz:[
 {q:"Что такое this внутри метода объекта?",o:["Объект, у которого метод вызвали — кто слева от точки","Сама функция","Первый параметр метода","Любая переменная с именем this"],a:0,e:"Правило одно: кто слева от точки при вызове — тот и this. player.hello() → this = player."},
 {t:"output",q:"Что выведет console.log?",code:"const user = { name: \"Аня\" };\nconsole.log(user.stats?.wins ?? 0);",o:["0","undefined","Ошибка TypeError","null"],a:0,e:"Поля stats нет, но ?. вместо падения вернул undefined, а ?? тут же заменил его на запасной 0."},
 {t:"cloze",q:"Безопасно достань город: без падения и с запасным значением",code:"const city = user.address{0}city {1} \"не указан\";",gaps:["?.","??"],e:"?. останавливает цепочку, если address пуст, а ?? подставляет запасное значение вместо undefined."},
 {t:"pairs",q:"Соедини инструмент с его работой",pairs:[["точка .","падает, если слева undefined"],["?.","вернёт undefined без падения"],["??","подставит запасное значение"],["const { name } = user","поле в переменную одной строкой"]],e:"Обычная точка требует объект слева; ?. прощает пустоту; ?? даёт запасной вариант; деструктуризация распаковывает поля в переменные."},
 {t:"bug",q:"У половины пользователей нет address. Какая строка уронит программу?",code:["const { name } = user;","console.log(name);","console.log(user.address.city);","console.log(user.stats?.wins ?? 0);"],a:2,e:"user.address — undefined, и у него нельзя читать .city → TypeError. Четвёртая строка безопасна: там ?. и ??."}],
lab:[
 {kind:"fill",type:"js",prompt:`<p><b>Задание 1.</b> Таблица лидеров: допиши функцию <code>introduce(player)</code>. Внутри достань <code>name</code> и <code>level</code> <b>деструктуризацией</b> — <code>const { name, level } = player;</code> — и верни строку вида <code>Эмиль, уровень 5</code>: имя, запятая, слово «уровень», число. Имя функции не меняй.</p>`,
  starter:"// Таблица лидеров: представь игрока одной строкой\n\nfunction introduce(player) {\n  // TODO: const { name, level } = player;\n  // TODO: верни строку вида \"Эмиль, уровень 5\"\n}\n\nconsole.log(introduce({ name: \"Эмиль\", level: 5 }));\n",
  tests:[
   {t:"introduce — функция (имя не менялось)",expr:"typeof introduce",expect:"function"},
   {t:"introduce({name:'Эмиль', level:5}) → 'Эмиль, уровень 5'",expr:"introduce({name:'Эмиль',level:5})",expect:"Эмиль, уровень 5"},
   {t:"Лишние поля не мешают: {name:'Аня', level:12, coins:300} → 'Аня, уровень 12'",expr:"introduce({name:'Аня',level:12,coins:300})",expect:"Аня, уровень 12"}]},
 {kind:"fix",type:"js",prompt:`<p><b>Задание 2.</b> Статистика по городам падает: у части пользователей нет поля <code>address</code>, и <code>user.address.city</code> роняет программу с TypeError. <b>Почини одну строку</b>: добавь <code>?.</code> после address и <code>??</code> с запасной строкой <code>"не указан"</code>.</p>`,
  starter:"// Города пользователей. Но у половины город не указан!\n// cityOf({ name: \"Тимур\" }) → TypeError: Cannot read properties of undefined\n\nfunction cityOf(user) {\n  return user.address.city;   // почини: ?. после address и ?? \"не указан\"\n}\n\nconsole.log(cityOf({ name: \"Аня\", address: { city: \"Казань\" } }));\nconsole.log(cityOf({ name: \"Тимур\" }));   // 💥 сейчас падает\n",
  tests:[
   {t:"cityOf — функция",expr:"typeof cityOf",expect:"function"},
   {t:"С адресом: cityOf({name:'Аня', address:{city:'Казань'}}) → 'Казань'",expr:"cityOf({name:'Аня',address:{city:'Казань'}})",expect:"Казань"},
   {t:"Без адреса не падает: cityOf({name:'Тимур'}) → 'не указан'",expr:"cityOf({name:'Тимур'})",expect:"не указан"},
   {t:"Другой город: cityOf({address:{city:'Пермь'}}) → 'Пермь'",expr:"cityOf({address:{city:'Пермь'}})",expect:"Пермь"}]},
 {kind:"build",type:"js",prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> «броневик» для чужих данных: функция <code>profile(user)</code> возвращает объект <code>{ name, city, wins }</code>, где name — это user.name, city — <code>user.address?.city</code> или «—», если города нет, wins — <code>user.stats?.wins</code> или 0. Функция не должна падать даже на пустом объекте.</p>`,
  starter:"// Карточка профиля из «дырявых» данных сервера\n\nfunction profile(user) {\n  // TODO: верни объект { name: ..., city: ..., wins: ... }\n  //   name — user.name\n  //   city — user.address?.city, если нет — \"—\"\n  //   wins — user.stats?.wins, если нет — 0\n}\n\nconsole.log(profile({ name: \"Эмиль\", address: { city: \"Казань\" }, stats: { wins: 10 } }));\nconsole.log(profile({}));   // ждём { name: undefined, city: \"—\", wins: 0 }\n",
  tests:[
   {t:"profile — функция",expr:"typeof profile",expect:"function"},
   {t:"Полный профиль: name, city и wins на месте",expr:"profile({name:'Эмиль',address:{city:'Казань'},stats:{wins:10}})",fn:got=>!!got&&got.name==="Эмиль"&&got.city==="Казань"&&got.wins===10},
   {t:"Без address: city → '—', остальное живо",expr:"profile({name:'Тимур',stats:{wins:5}})",fn:got=>!!got&&got.name==="Тимур"&&got.city==="—"&&got.wins===5},
   {t:"Без stats: wins → 0",expr:"profile({name:'Аня',address:{city:'Пермь'}})",fn:got=>!!got&&got.name==="Аня"&&got.city==="Пермь"&&got.wins===0},
   {t:"Пустой объект {} не роняет: city '—', wins 0",expr:"profile({})",fn:got=>!!got&&got.city==="—"&&got.wins===0}]}],
res:[
 ["learn.javascript.ru: деструктурирующее присваивание","url","https://learn.javascript.ru/destructuring-assignment"],
 ["learn.javascript.ru: опциональная цепочка ?.","url","https://learn.javascript.ru/optional-chaining"],
 ["MDN: Optional chaining ?. (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Optional_chaining"],
 ["MDN: Деструктурирующее присваивание (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"],
 ["Видео: this, деструктуризация и ?. на пальцах","yt","javascript деструктуризация optional chaining this для начинающих"]]},
{id:"m14",title:"Строки и шаблоны: работа с текстом",
theory:`
<p>🎯 <b>Зачем это тебе:</b> всё, что пользователь видит на экране, — это текст: имена, цены, сообщения, подписи кнопок. И почти весь этот текст собирается из кусочков — «Привет, » плюс имя плюс «!». Потерянный пробел или лишняя кавычка мгновенно выдают новичка и в коде, и на экране. Сегодня научишься собирать строки чисто — шаблонами — и приводить в порядок то, что вводит пользователь.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Строка — цепочка символов</h3>
<p><b>Строка</b> (string) — любой текст в кавычках: ник игрока, адрес, сообщение об ошибке. Для JavaScript это цепочка символов, где каждый символ стоит на своём номере, и счёт идёт с нуля:</p>
<pre class="demo">const nick = "Эмиль";
console.log(nick.length);   // 5 — сколько символов
console.log(nick[0]);       // Э — символ с номером 0</pre>
<p>Разбор: <code>length</code> — свойство, а не метод, поэтому без скобок. <code>nick[0]</code> достаёт символ по номеру — как в массивах, первая буква живёт под номером 0. Кавычки годятся и двойные, и одинарные, лишь бы открывающая совпадала с закрывающей. И важная особенность: строка <b>неизменяемая</b> — переписать одну букву внутри нельзя, можно только собрать новую строку и сохранить её.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. Шаблонные строки: текст собирается из кусочков</h3>
<p>Половина задач с текстом — вставить значение переменной в середину фразы. Старый способ — склейка плюсами:</p>
<pre class="demo">const name = "Эмиль", level = 5;
const old = "Привет, " + name + "! Уровень " + level;</pre>
<p>Работает, но хрупко: пробелы теряются, кавычки путаются, длинная фраза разваливается на куски. Поэтому в современном JavaScript есть <b>шаблонные строки</b> — текст в <b>обратных кавычках</b> <code>\` \`</code> (клавиша слева от цифры 1), куда значение вставляют прямо в текст через <code>\${...}</code>:</p>
<pre class="demo">const msg = \`Привет, \${name}! Уровень \${level}\`;
console.log(msg);   // Привет, Эмиль! Уровень 5</pre>
<p>Разбор: браузер читает шаблон слева направо и собирает строку из кусочков — обычный текст идёт как есть, а на месте <code>\${name}</code> оказывается текущее значение переменной. Внутри <code>\${}</code> можно писать любое выражение: <code>\${level + 1}</code> или <code>\${name.toUpperCase()}</code> — подставится результат вычисления.</p>
<svg viewBox="0 0 600 170" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="s14a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#37936F"/></marker></defs>
  <text x="300" y="20" text-anchor="middle" fill="#9BA39D" font-size="11">шаблон \`Привет, \${name}!\` — три кусочка</text>
  <rect x="40" y="34" width="150" height="52" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="115" y="56" text-anchor="middle" fill="#B9FF47" font-size="13" font-weight="700">Привет,␣</text>
  <text x="115" y="74" text-anchor="middle" fill="#9BA39D" font-size="10">текст как есть</text>
  <text x="207" y="66" text-anchor="middle" fill="#F4F6F2" font-size="18">+</text>
  <rect x="225" y="34" width="150" height="52" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="300" y="56" text-anchor="middle" fill="#FFD34D" font-size="13" font-weight="700">\${name}</text>
  <text x="300" y="74" text-anchor="middle" fill="#9BA39D" font-size="10">значение: «Эмиль»</text>
  <text x="392" y="66" text-anchor="middle" fill="#F4F6F2" font-size="18">+</text>
  <rect x="410" y="34" width="150" height="52" rx="10" fill="#1C201E" stroke="#FF7A2F"/>
  <text x="485" y="56" text-anchor="middle" fill="#FF7A2F" font-size="13" font-weight="700">!</text>
  <text x="485" y="74" text-anchor="middle" fill="#9BA39D" font-size="10">текст как есть</text>
  <line x1="300" y1="90" x2="300" y2="116" stroke="#37936F" stroke-width="2" marker-end="url(#s14a)"/>
  <rect x="170" y="122" width="260" height="40" rx="10" fill="#141716" stroke="#37936F"/>
  <text x="300" y="147" text-anchor="middle" fill="#F4F6F2" font-size="14" font-weight="700">«Привет, Эмиль!»</text>
</svg>
<p>Разбор схемы: шаблон — конструктор. Куски текста переходят в результат без изменений — вместе с пробелами, которые ты в них написал (символ ␣ на схеме — тот самый пробел после запятой), — а каждая подстановка заменяется значением. Бонус: шаблонная строка может занимать несколько строк — жмёшь Enter прямо внутри неё, тогда как обычной строке для переноса нужен спецсимвол \\n.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. Методы: строка умеет приводить себя в порядок</h3>
<p>У строки есть встроенные <b>методы</b> — команды, которые вызывают через точку. Главная пятёрка:</p>
<table class="simple"><tr><th>Метод</th><th>Что делает</th><th>Пример</th></tr>
<tr><td><code>trim()</code></td><td>срезает пробелы по краям</td><td>"  hi  " → "hi"</td></tr>
<tr><td><code>toUpperCase()</code></td><td>ВСЁ заглавными (обратный — toLowerCase)</td><td>"код" → "КОД"</td></tr>
<tr><td><code>includes(x)</code></td><td>есть ли подстрока (true/false)</td><td>"заказ".includes("каз") → true</td></tr>
<tr><td><code>slice(от, до)</code></td><td>вырезает кусок по номерам</td><td>"кофе".slice(0, 1) → "к"</td></tr>
<tr><td><code>replace(a, b)</code></td><td>заменяет первое вхождение</td><td>"1-2".replace("-", "+") → "1+2"</td></tr></table>
<p>Разбор: у методов одно общее правило — каждый возвращает <b>новую</b> строку, оригинал не меняется. Вызвал <code>raw.trim()</code> и не сохранил результат — чистая версия испарилась, поэтому пишем <code>const clean = raw.trim()</code>. Отдельно заметь <code>includes</code>: он возвращает не строку, а true/false — готовое условие для if, именно так делают живой поиск по списку.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Комбо: чистим ввод пользователя</h3>
<p>Пользователь вводит имя как попало: «&nbsp;&nbsp;эмиль&nbsp;». Приводим в порядок цепочкой методов:</p>
<pre class="demo">const raw = "  эмиль ";
const t = raw.trim();                                   // "эмиль"
const nice = t.slice(0, 1).toUpperCase() + t.slice(1);  // "Эмиль"
console.log(\`Привет, \${nice}!\`);                     // Привет, Эмиль!</pre>
<p>Разбор: <code>trim()</code> срезает пробелы по краям. Дальше <code>slice(0, 1)</code> берёт первую букву, <code>toUpperCase()</code> делает её заглавной, а <code>slice(1)</code> отдаёт остаток строки с номера 1 и до конца — склеиваем плюсом и получаем аккуратное «Эмиль». Эта связка называется <b>капитализация</b>: её любят спрашивать на собеседованиях, и именно она понадобится в сегодняшней практике.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">'Привет, \${name}!' — в одинарных кавычках</span> → <span class="now">\`Привет, \${name}!\` — в обратных</span><br><span class="muted2">подстановка \${} работает только в обратных кавычках; в обычных это просто символы на экране</span></span>
<span class="fix"><span class="was">raw.trim(); и дальше работать с raw</span> → <span class="now">const clean = raw.trim();</span><br><span class="muted2">методы строк не меняют оригинал — результат нужно сохранить в переменную</span></span>
<span class="fix"><span class="was">nick.toUpperCase — без скобок</span> → <span class="now">nick.toUpperCase()</span><br><span class="muted2">метод вызывают со скобками, иначе получишь саму функцию вместо результата</span></span>`,
quiz:[
 {t:"output",q:"Что выведет console.log?",code:"const name = \"Аня\";\nconst lvl = 3;\nconsole.log(`Игрок ${name}, уровень ${lvl}`);",o:["Игрок Аня, уровень 3","Игрок ${name}, уровень ${lvl}","Игрок name, уровень lvl","ошибка"],a:0,e:"Обратные кавычки включают подстановку: на месте ${name} и ${lvl} окажутся значения переменных."},
 {t:"bug",q:"В какой строке подстановка не сработает?",code:["const name = \"Аня\";","const msg = 'Привет, ${name}!';","console.log(msg);"],a:1,e:"Строка записана в одинарных кавычках — ${name} останется просто текстом. Подстановка работает только в обратных кавычках."},
 {t:"cloze",q:"Дополни код: убрать пробелы по краям и сделать первую букву заглавной",code:"const t = raw.{0}();\nconst nice = t.slice(0, 1).{1}() + t.slice(1);",gaps:["trim","toUpperCase"],e:"trim() срезает пробелы по краям, а toUpperCase() переводит вырезанную первую букву в верхний регистр."},
 {t:"pairs",q:"Соедини выражение с результатом",pairs:[["'  hi  '.trim()","'hi'"],["'код'.toUpperCase()","'КОД'"],["'заказ'.includes('каз')","true"],["'кофе'.slice(0, 1)","'к'"]],e:"trim чистит края, toUpperCase поднимает регистр, includes отвечает true/false, slice вырезает кусок по номерам позиций."},
 {q:"Что вернёт \"  hi  \".trim() и что станет с исходной строкой?",o:["Вернёт \"hi\", исходная не изменится","Вернёт \"hi\" и перезапишет исходную","Изменит исходную, ничего не вернёт","Вернёт true"],a:0,e:"Методы строк не трогают оригинал: trim() возвращает новую строку, и её надо сохранить в переменную."}],
lab:[
 {kind:"fill",type:"js",
  prompt:`<p><b>Задание 1.</b> Функция <code>clean(raw)</code> должна наводить порядок в имени: убирать пробелы по краям и делать первую букву заглавной. Каркас готов — <b>допиши</b> тело по TODO: сначала <code>trim()</code>, потом <code>slice(0, 1).toUpperCase() + slice(1)</code>. Жми «Запустить», чтобы увидеть вывод, потом «Проверить».</p>`,
  starter:"function clean(raw) {\n  // TODO 1: убери пробелы по краям и сохрани: const t = raw.trim()\n\n  // TODO 2: верни первую букву заглавной + остаток строки:\n  //         t.slice(0, 1).toUpperCase() + t.slice(1)\n\n}\n\nconsole.log(clean(\"  эмиль \"));   // должно быть: Эмиль\nconsole.log(clean(\"аня\"));        // должно быть: Аня\n",
  tests:[
   {t:"clean — это функция",expr:"typeof clean",expect:"function"},
   {t:"clean('  эмиль ') → 'Эмиль' (пробелы срезаны, буква заглавная)",expr:"clean('  эмиль ')",expect:"Эмиль"},
   {t:"clean('аня') → 'Аня' (работает и без лишних пробелов)",expr:"clean('аня')",expect:"Аня"}]},
 {kind:"fix",type:"js",
  prompt:`<p><b>Задание 2.</b> Приветствие склеено плюсами, и пробелы потерялись: выходит «Привет,Аня!Уровень3». <b>Перепиши</b> return одной шаблонной строкой — обратные кавычки, подстановки <code>\${name}</code> и <code>\${level}</code> — так, чтобы получилось <code>Привет, Аня! Уровень 3</code>.</p>`,
  starter:"function greet(name, level) {\n  return \"Привет,\" + name + \"!Уровень\" + level;\n}\n\nconsole.log(greet(\"Аня\", 3));\n// сейчас:      Привет,Аня!Уровень3\n// должно быть: Привет, Аня! Уровень 3\n",
  tests:[
   {t:"greet — это функция",expr:"typeof greet",expect:"function"},
   {t:"greet('Аня', 3) → 'Привет, Аня! Уровень 3'",expr:"greet('Аня', 3)",expect:"Привет, Аня! Уровень 3"},
   {t:"greet('Эмиль', 7) → 'Привет, Эмиль! Уровень 7'",expr:"greet('Эмиль', 7)",expect:"Привет, Эмиль! Уровень 7"}]},
 {kind:"build",type:"js",
  prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> функцию <code>badge(name, level)</code> — бейдж игрока. Очисти имя (trim + первая буква заглавной) и верни строку вида <code>[LVL 5] Эмиль</code>, собранную шаблонной строкой. Крайний случай: если после trim() имя пустое — подставь вместо него <code>Гость</code>. Объявляй именно через <code>function badge(...)</code>.</p>`,
  starter:"// badge(\"  эмиль \", 5) → \"[LVL 5] Эмиль\"\n// badge(\"\", 1)         → \"[LVL 1] Гость\"\n\n// TODO: объяви функцию badge(name, level) словом function\n// TODO: очисти имя — trim(), потом первая буква заглавной (slice + toUpperCase)\n// TODO: если после trim() имя пустое — используй \"Гость\"\n// TODO: верни шаблонную строку: [LVL уровень] Имя\n",
  tests:[
   {t:"badge — это функция",expr:"typeof badge",expect:"function"},
   {t:"badge('  эмиль ', 5) → '[LVL 5] Эмиль'",expr:"badge('  эмиль ', 5)",expect:"[LVL 5] Эмиль"},
   {t:"badge('аня', 2) → '[LVL 2] Аня'",expr:"badge('аня', 2)",expect:"[LVL 2] Аня"},
   {t:"пустое имя: badge('', 1) → '[LVL 1] Гость'",expr:"badge('', 1)",expect:"[LVL 1] Гость"},
   {t:"имя из одних пробелов: badge('   ', 9) → '[LVL 9] Гость'",expr:"badge('   ', 9)",expect:"[LVL 9] Гость"}]}],
res:[
 ["learn.javascript.ru: строки","url","https://learn.javascript.ru/string"],
 ["MDN: шаблонные строки (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals"],
 ["Видео: строки и шаблонные литералы в JS","yt","javascript строки методы шаблонные литералы для начинающих"]]},
{id:"m15",title:"Ошибки под контролем: try / catch / throw",
theory:`
<p>🎯 <b>Зачем это тебе:</b> в реальном мире всё идёт не по плану: интернет отваливается, сервер молчит, пользователь вставляет ерунду вместо данных. Код без защиты от этого падает — и заказчик видит мёртвую страницу. Junior отличается от новичка именно тем, что его код <b>переживает</b> ошибку: не умирает, а показывает понятное сообщение. Сегодня ставим эту броню: try, catch и throw.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">1. Почему одна ошибка убивает весь скрипт</h3>
<p>Некоторые операции опасны по своей природе. Классика — разбор данных:</p>
<pre class="demo">const data = JSON.parse("это не JSON");   // 💥 падение
console.log("эта строка уже не выполнится");</pre>
<p>Разбор: <code>JSON.parse</code> умеет разбирать только корректный JSON. Получив ерунду, он не возвращает «пусто» — он <b>бросает ошибку</b> (исключение). Если её никто не поймал, выполнение скрипта останавливается: всё, что ниже, не сработает, кнопки перестанут отвечать. Пользователь видит «сайт сломался», хотя причина была в одной кривой строке данных.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">2. try / catch — страховка вокруг рискованного кода</h3>
<p>Опасное место оборачивают конструкцией «попробуй — и поймай, если упало»:</p>
<pre class="demo">try {
  const data = JSON.parse(text);   // может упасть
  console.log(data.name);
} catch (e) {
  console.log("Не смог разобрать данные:", e.message);
}</pre>
<p>Разбор: код внутри <code>try</code> выполняется как обычно; пока всё хорошо, блок <code>catch</code> просто пропускается. Но если внутри try что-то падает — выполнение мгновенно прыгает в catch, и программа живёт дальше. В скобках <code>catch (e)</code> лежит объект ошибки: его свойство <code>e.message</code> — текст причины, который можно показать пользователю или записать в лог.</p>
<svg viewBox="0 0 600 180" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="e15o" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#37936F"/></marker>
  <marker id="e15e" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#FF7A2F"/></marker>
  <marker id="e15g" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#FFD34D"/></marker></defs>
  <rect x="25" y="65" width="140" height="52" rx="10" fill="#141716" stroke="#B9FF47"/>
  <text x="95" y="87" text-anchor="middle" fill="#B9FF47" font-size="14" font-weight="700">try { код }</text>
  <text x="95" y="105" text-anchor="middle" fill="#9BA39D" font-size="10">рискованное место</text>
  <line x1="170" y1="78" x2="300" y2="45" stroke="#37936F" stroke-width="2" marker-end="url(#e15o)"/>
  <text x="228" y="40" text-anchor="middle" fill="#37936F" font-size="11">ошибок нет</text>
  <rect x="310" y="18" width="265" height="50" rx="10" fill="#141716" stroke="#37936F"/>
  <text x="442" y="39" text-anchor="middle" fill="#F4F6F2" font-size="13" font-weight="700">результат</text>
  <text x="442" y="56" text-anchor="middle" fill="#9BA39D" font-size="10">catch пропускается, код идёт дальше</text>
  <line x1="170" y1="104" x2="300" y2="137" stroke="#FF7A2F" stroke-width="2" marker-end="url(#e15e)"/>
  <text x="228" y="148" text-anchor="middle" fill="#FF7A2F" font-size="11">ошибка 💥</text>
  <rect x="310" y="112" width="120" height="50" rx="10" fill="#141716" stroke="#FF7A2F"/>
  <text x="370" y="133" text-anchor="middle" fill="#FF7A2F" font-size="13" font-weight="700">catch (e)</text>
  <text x="370" y="150" text-anchor="middle" fill="#9BA39D" font-size="10">ловим объект e</text>
  <line x1="434" y1="137" x2="466" y2="137" stroke="#FFD34D" stroke-width="2" marker-end="url(#e15g)"/>
  <rect x="470" y="112" width="105" height="50" rx="10" fill="#141716" stroke="#FFD34D"/>
  <text x="522" y="133" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">сообщение</text>
  <text x="522" y="150" text-anchor="middle" fill="#9BA39D" font-size="10">e.message</text>
</svg>
<p>Разбор схемы: у рискованного кода два выхода. Ошибок нет — catch не выполняется вовсе, результат идёт дальше. Ошибка есть — прыжок в catch, и вместо падения пользователь получает аккуратное сообщение. В обоих случаях страница остаётся живой.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">3. throw — сам объявляешь данные негодными</h3>
<p>Иногда формально всё в порядке — JSON разобрался, — но по смыслу данные негодные: у заказа нет id, возраст отрицательный. Тогда ошибку бросаешь ты сам:</p>
<pre class="demo">function checkAge(age) {
  if (age < 0) throw new Error("возраст не может быть отрицательным");
  return age;
}</pre>
<p>Разбор: <code>throw new Error("...")</code> создаёт объект ошибки с твоим текстом и «бросает» его. Функция немедленно прекращает работу — до return дело не дойдёт, — а управление улетает в ближайший catch выше по цепочке вызовов. Бросай именно объект <code>new Error(...)</code>, а не голую строку: у объекта есть <code>.message</code> и стек вызовов — след, по которому ошибку потом ищут.</p>

<h3 style="margin:14px 0 4px;font-family:var(--font-display)">4. Боевой паттерн: разбор + проверка + один catch</h3>
<p>Так выглядит типичный приём данных в настоящем приложении:</p>
<pre class="demo">try {
  const order = JSON.parse(input);
  if (!order.id) throw new Error("нет id");
  console.log(\`Заказ №\${order.id} принят\`);
} catch (e) {
  console.log("Ошибка заказа:", e.message);
}</pre>
<p>Разбор: сломаться может в двух местах — кривая строка уронит JSON.parse, а заказ без id мы отбраковываем сами через throw. Оба сценария ловит <b>один</b> catch и печатает человеческое сообщение из e.message. Есть и третий блок — <code>finally { ... }</code>: он выполняется в любом случае, была ошибка или нет; туда кладут «уборку» вроде «спрятать спиннер загрузки». Нужен он реже, но знай, что он существует.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">throw "текст ошибки"</span> → <span class="now">throw new Error("текст ошибки")</span><br><span class="muted2">у голой строки нет .message и стека вызовов — такой отчёт об ошибке не отладить</span></span>
<span class="fix"><span class="was">catch (e) { } — пустой блок</span> → <span class="now">catch (e) { console.log(e.message) }</span><br><span class="muted2">проглоченная ошибка — худший баг: программа молча делает не то, и никто не знает почему</span></span>
<span class="fix"><span class="was">try вокруг всего файла</span> → <span class="now">try вокруг одной рискованной операции</span><br><span class="muted2">чем уже try, тем понятнее, что именно упало и как это чинить</span></span>`,
quiz:[
 {q:"Что делает блок catch, когда в try всё прошло без ошибок?",o:["Выполняется после try","Не выполняется вообще","Выполняется перед try","Стирает переменные из try"],a:1,e:"catch — запасной план: он срабатывает только если в try брошена ошибка; при удачном сценарии его просто пропускают."},
 {t:"output",q:"Что выведет console.log?",code:"try {\n  JSON.parse(\"это не JSON\");\n  console.log(\"разобрал\");\n} catch (e) {\n  console.log(\"поймал\");\n}",o:["разобрал","поймал","разобрал, потом поймал","красная ошибка — программа падает"],a:1,e:"JSON.parse падает на кривой строке — до console.log(\"разобрал\") дело не доходит, управление сразу уходит в catch."},
 {t:"order",q:"Собери безопасный разбор данных по порядку",lines:["try {","  const data = JSON.parse(input);","  console.log(data.name);","} catch (e) {","  console.log(\"Ошибка: \" + e.message);","}"],e:"Сначала try с рискованным кодом, затем catch (e) с понятным сообщением из e.message."},
 {t:"bug",q:"В какой строке брошено не то?",code:["function check(x) {","  if (x < 0) throw \"минус\";","  return x;","}"],a:1,e:"Бросать нужно объект: throw new Error(\"минус\") — у голой строки нет .message и стека вызовов."},
 {q:"Где лежит текст ошибки внутри catch (e)?",o:["e.text","e.message","e.value","catch.message"],a:1,e:"У объекта Error есть свойство message — тот самый текст, что передали в new Error(\"...\")."}],
lab:[
 {kind:"fill",type:"js",
  prompt:`<p><b>Задание 1.</b> Функция <code>safeParse(json)</code> должна разбирать JSON без падений: внутри <code>try</code> верни результат <code>JSON.parse(json)</code>, а в <code>catch</code> верни <code>null</code>. <b>Допиши</b> две строки по TODO и проверь на хорошей и кривой строке — «Запустить», потом «Проверить».</p>`,
  starter:"function safeParse(json) {\n  try {\n    // TODO: верни результат JSON.parse(json)\n\n  } catch (e) {\n    // TODO: верни null\n\n  }\n}\n\nconsole.log(safeParse('{\"a\":1}'));        // объект {a: 1}\nconsole.log(safeParse(\"кривая строка\"));  // null\n",
  tests:[
   {t:"safeParse — это функция",expr:"typeof safeParse",expect:"function"},
   {t:"валидный JSON: safeParse('{\"a\":1}') → объект {a:1}",expr:"safeParse('{\"a\":1}')",expect:{a:1}},
   {t:"кривая строка → null, программа не падает",expr:"safeParse('кривая строка')",expect:null}]},
 {kind:"fix",type:"js",
  prompt:`<p><b>Задание 2.</b> Тут две беды: ошибка брошена <b>голой строкой</b> (у неё нет .message), а <code>catch</code> пустой — молча проглатывает проблему. <b>Почини</b>: бросай объект <code>throw new Error("имя пустое")</code>, а в catch верни строку <code>"Ошибка: " + e.message</code>, чтобы вызвавший код увидел причину.</p>`,
  starter:"function checkName(name) {\n  if (name.trim() === \"\") throw \"имя пустое\";   // 1) брошена строка — так нельзя\n  return \"Привет, \" + name + \"!\";\n}\n\nfunction safeGreet(name) {\n  try {\n    return checkName(name);\n  } catch (e) {\n    // 2) пусто — ошибка молча проглатывается\n  }\n}\n\nconsole.log(safeGreet(\"Аня\"));   // Привет, Аня!\nconsole.log(safeGreet(\"\"));      // должна вернуться строка с текстом ошибки\n",
  tests:[
   {t:"safeGreet — это функция",expr:"typeof safeGreet",expect:"function"},
   {t:"safeGreet('Аня') → 'Привет, Аня!'",expr:"safeGreet('Аня')",expect:"Привет, Аня!"},
   {t:"checkName('') бросает именно объект Error",expr:"(function(){ try { checkName(''); } catch (e) { return e instanceof Error; } return false; })()",expect:true},
   {t:"safeGreet('') возвращает сообщение с текстом «имя пустое»",expr:"safeGreet('')",fn:got=>typeof got==="string"&&got.indexOf("имя пустое")!==-1}]},
 {kind:"build",type:"js",
  prompt:`<p><b>Задание 3.</b> <b>Собери с нуля</b> приёмщик заказов <code>parseOrder(json)</code>: в <code>try</code> разбери строку через <code>JSON.parse</code>; если у заказа нет поля <code>id</code> — брось <code>new Error("нет id")</code>; при успехе верни шаблонной строкой <code>Заказ №7</code> (номер — из id). Любую ошибку лови в <code>catch (e)</code> и возвращай <code>"Ошибка: " + e.message</code>. Кривой JSON не должен ронять программу.</p>`,
  starter:"// parseOrder('{\"id\":7}')          → \"Заказ №7\"\n// parseOrder('{\"title\":\"кофе\"}')  → \"Ошибка: нет id\"\n// parseOrder(\"кривой json\")       → \"Ошибка: ...\" (программа не падает)\n\n// TODO: объяви функцию parseOrder(json) словом function\n// TODO: в try — JSON.parse, проверка поля id (нет → throw new Error(\"нет id\")),\n//       при успехе верни шаблонную строку: Заказ №id\n// TODO: в catch (e) — верни \"Ошибка: \" + e.message\n",
  tests:[
   {t:"parseOrder — это функция",expr:"typeof parseOrder",expect:"function"},
   {t:"валидный заказ: parseOrder('{\"id\":7}') → 'Заказ №7'",expr:"parseOrder('{\"id\":7}')",expect:"Заказ №7"},
   {t:"без id: parseOrder('{\"title\":\"кофе\"}') → 'Ошибка: нет id'",expr:"parseOrder('{\"title\":\"кофе\"}')",expect:"Ошибка: нет id"},
   {t:"кривой JSON не роняет программу: ответ начинается с «Ошибка: »",expr:"parseOrder('кривой json')",fn:got=>typeof got==="string"&&got.indexOf("Ошибка: ")===0&&got.length>"Ошибка: ".length},
   {t:"другой валидный заказ: parseOrder('{\"id\":42}') → 'Заказ №42'",expr:"parseOrder('{\"id\":42}')",expect:"Заказ №42"}]}],
res:[
 ["learn.javascript.ru: try...catch","url","https://learn.javascript.ru/try-catch"],
 ["MDN: try...catch (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/try...catch"],
 ["Видео: обработка ошибок в JavaScript","yt","javascript try catch throw обработка ошибок для начинающих"]]},
{id:"m8",title:"DOM: JavaScript управляет страницей",
theory:"\n<p>🎯 <b>Зачем это тебе:</b> DOM — это то, за что платят во фронтенде: живые интерфейсы. «По клику открой меню», «посчитай сумму корзины», «проверь форму перед отправкой» — каждый такой заказ решается через DOM.</p>\n<p><b>DOM</b> (Document Object Model — «документ как модель объектов») — страница глазами JavaScript: браузер превращает каждый HTML-тег в объект, который можно найти и изменить. Именно так работает весь этот тренажёр: очки, кнопки, прогресс — это JS, который дёргает DOM.</p>\n<p><b>Шаг 1 — найти элемент:</b></p>\n<pre class=\"demo\">const title = document.querySelector(\"h1\");      // по тегу\nconst btn = document.querySelector(\"#myBtn\");     // по id (#)\nconst card = document.querySelector(\".card\");     // по классу (.)</pre>\n<p>Разбор: <code>document</code> — объект всей страницы; <code>querySelector</code> ищет по тем же селекторам, что и CSS: имя тега без знаков, <code>#</code> — id, точка — класс. Возвращается <b>первый</b> подходящий элемент, а если ничего не нашлось — <code>null</code> («пусто»). Нужны все совпадения сразу — есть <code>querySelectorAll</code>. Совет: находи элемент один раз, сохраняй в <code>const</code> наверху скрипта и дальше работай с переменной — не ищи заново в каждом обработчике.</p>\n<p><b>Шаг 2 — изменить:</b></p>\n<pre class=\"demo\">title.textContent = \"Новый текст\";   // заменить текст\ntitle.style.color = \"lime\";          // поменять CSS-стиль\ncard.classList.add(\"active\");        // добавить CSS-класс</pre>\n<p>Разбор: <code>textContent</code> — текст внутри элемента, его можно и читать, и перезаписывать; <code>style</code> — стили прямо из JS; <code>classList.add/remove</code> — включать и выключать готовые классы из твоего CSS (обычно удобнее, чем менять стили поштучно).</p>\n<p>Рядом с <code>textContent</code> есть <code>innerHTML</code> — он вставляет строку как HTML-разметку, вместе с тегами. Удобно для готовых кусков интерфейса, но осторожно: не вставляй через него текст пользователя как есть — вместе с текстом можно занести чужой скрипт (атака XSS). Для обычного текста всегда бери <code>textContent</code>.</p>\n<p><b>Шаг 3 — реагировать на события:</b></p>\n<pre class=\"demo\">btn.addEventListener(\"click\", () => {\n  title.textContent = \"Кнопка нажата!\";\n});</pre>\n<p>Разбор: <code>addEventListener</code> «вешает» на элемент <b>обработчик</b> — функцию, которую браузер сам вызовет, когда случится событие. Первый аргумент — имя события строкой (<code>\"click\"</code>, <code>\"input\"</code>, <code>\"submit\"</code>), второй — функция. Обрати внимание: функцию передаём, а не вызываем — без скобок вызова.</p>\n<p><b>Формы:</b> текст из поля ввода — <code>input.value</code>:</p>\n<pre class=\"demo\">const input = document.querySelector(\"#name\");\nbtn.addEventListener(\"click\", () => {\n  title.textContent = `Привет, ${input.value}!`;\n});</pre>\n<p>Разбор: <code>value</code> читаем <b>внутри</b> обработчика — в момент клика, когда пользователь уже что-то ввёл. Прочитаешь заранее, при загрузке страницы, — получишь пустую строку.</p>\n<p>Другие события подключаются так же, меняется только имя-строка: <code>\"input\"</code> — каждое изменение поля, <code>\"submit\"</code> — отправка формы, <code>\"keydown\"</code> — нажатие клавиши:</p>\n<pre class=\"demo\">input.addEventListener(\"input\", () => {\n  title.textContent = input.value;   // обновляется на лету\n});</pre>\n<p>Разбор: обработчик срабатывает на каждый введённый символ — так делают живой предпросмотр и поиск-фильтр.</p>\n<p>Запомни схему любого интерактива: <b>найти → повесить обработчик → изменить</b>. Выучишь её — соберёшь что угодно: табы, модалки, валидацию, счётчики.</p>\n<svg viewBox=\"0 0 600 150\" class=\"diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n   <marker id=\"m8a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#B9FF47\"/></marker>\n   <marker id=\"m8b\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#37936F\"/></marker></defs>\n  <rect x=\"20\" y=\"52\" width=\"118\" height=\"46\" rx=\"10\" fill=\"#141716\" stroke=\"#FFD34D\"/>\n  <text x=\"79\" y=\"72\" text-anchor=\"middle\" fill=\"#FFD34D\" font-size=\"12\" font-weight=\"700\">document</text>\n  <text x=\"79\" y=\"88\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">вся страница</text>\n  <line x1=\"140\" y1=\"75\" x2=\"206\" y2=\"75\" stroke=\"#B9FF47\" stroke-width=\"2\" marker-end=\"url(#m8a)\"/>\n  <text x=\"173\" y=\"66\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"9\">querySelector</text>\n  <rect x=\"210\" y=\"52\" width=\"128\" height=\"46\" rx=\"10\" fill=\"#1C201E\" stroke=\"#B9FF47\"/>\n  <text x=\"274\" y=\"72\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"12\" font-weight=\"700\">element</text>\n  <text x=\"274\" y=\"88\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">найденный тег</text>\n  <line x1=\"340\" y1=\"75\" x2=\"404\" y2=\"75\" stroke=\"#37936F\" stroke-width=\"2\" marker-end=\"url(#m8b)\"/>\n  <rect x=\"410\" y=\"28\" width=\"168\" height=\"40\" rx=\"10\" fill=\"#141716\" stroke=\"#37936F\"/>\n  <text x=\"494\" y=\"45\" text-anchor=\"middle\" fill=\"#F4F6F2\" font-size=\"11\" font-weight=\"700\">изменить</text>\n  <text x=\"494\" y=\"60\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">textContent · style · class</text>\n  <rect x=\"410\" y=\"82\" width=\"168\" height=\"40\" rx=\"10\" fill=\"#141716\" stroke=\"#37936F\"/>\n  <text x=\"494\" y=\"99\" text-anchor=\"middle\" fill=\"#F4F6F2\" font-size=\"11\" font-weight=\"700\">реагировать</text>\n  <text x=\"494\" y=\"114\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">addEventListener</text>\n</svg>\n<p>⚠️ <b>Частые ошибки:</b></p>\n<span class=\"fix\"><span class=\"was\">querySelector(\"btn\")</span> → <span class=\"now\">querySelector(\"#btn\")</span><br><span class=\"muted2\">Без # ищется тег &lt;btn&gt;, которого нет — вернётся null, а дальше «Cannot read properties of null»</span></span>\n<span class=\"fix\"><span class=\"was\">btn.addEventListener(\"click\", show())</span> → <span class=\"now\">btn.addEventListener(\"click\", show)</span><br><span class=\"muted2\">Со скобками функция вызовется сразу при загрузке, а не по клику — передавай саму функцию</span></span>\n<span class=\"fix\"><span class=\"was\">&lt;script&gt; в &lt;head&gt; без defer</span> → <span class=\"now\">&lt;script&gt; в конце &lt;body&gt;</span><br><span class=\"muted2\">Скрипт выше разметки запускается, когда элементов ещё нет, — querySelector вернёт null</span></span>",
quiz:[{"q":"Что делает document.querySelector(\"#btn\")?","o":["Создаёт кнопку","Находит первый элемент с id=\"btn\"","Удаляет элемент","Меняет стиль кнопки"],"a":1,"e":"querySelector ищет элемент по CSS-селектору; # — поиск по id."},{"t":"output","q":"На странице есть <div class=\"card\">. Что выведет код?","code":"const el = document.querySelector(\"card\");\nconsole.log(el);","o":["<div class=\"card\">","null","ошибка"],"a":1,"e":"\"card\" без точки — поиск тега <card>, а такого на странице нет: querySelector вернёт null. Класс ищут через \".card\"."},{"q":"Как поменять текст элемента el?","o":["el.text = \"...\"","el.textContent = \"...\"","el.write(\"...\")","text(el)"],"a":1,"e":"textContent — свойство с текстом внутри элемента: его можно читать и перезаписывать."},{"t":"pairs","q":"Соедини инструмент с задачей","pairs":[["querySelector","найти элемент на странице"],["addEventListener","повесить обработчик события"],["textContent","заменить текст элемента"],["classList.add","добавить элементу CSS-класс"]],"e":"Это и есть схема интерактива: найти → повесить обработчик → изменить (текст, классы, стили)."},{"q":"Как прочитать, что пользователь ввёл в поле input?","o":["input.text","input.value","input.data","read(input)"],"a":1,"e":"input.value — текущее содержимое поля; читай его внутри обработчика, в момент события."}],
lab:[
{kind:"fill",type:"html",prompt:"<p><b>Задание 1.</b> Оживи кнопку: найди заголовок и кнопку, повесь на кнопку обработчик клика и по клику <b>поменяй текст заголовка</b>. Схема: найти → повесить обработчик → изменить.</p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <h1 id=\"title\">Привет</h1>\n  <button id=\"btn\">Нажми меня</button>\n  <script>\n    // TODO: найди #title и #btn через document.querySelector\n    // TODO: btn.addEventListener(\"click\", () => { ... })\n    // TODO: внутри поменяй title.textContent\n  </script>\n</body>\n</html>",tests:[{t:"На странице есть <h1> и <button>",fn:(d)=>!!d.querySelector('h1') && !!d.querySelector('button')},{t:"Клик по кнопке меняет текст заголовка",fn:(d,w)=>{ const h=d.querySelector('h1'), b=d.querySelector('button'); if(!h||!b) return false; const before=h.textContent; b.click(); return h.textContent!==before && h.textContent.trim().length>0; }}]},
{kind:"fix",type:"html",prompt:"<p><b>Задание 2.</b> Живой предпросмотр сломан: текст должен обновляться на <b>каждый ввод</b> в поле, но сейчас ничего не происходит. Причина — код читает значение один раз при загрузке и не слушает событие <code>\"input\"</code>. <b>Почини</b>.</p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <input id=\"name\" placeholder=\"введи имя\">\n  <p id=\"out\"></p>\n  <script>\n    const name = document.querySelector(\"#name\");\n    const out = document.querySelector(\"#out\");\n    // сломано: значение читается один раз при загрузке, поле пустое\n    out.textContent = name.value;\n    // TODO: сделай так, чтобы out обновлялся на КАЖДЫЙ ввод (событие \"input\")\n  </script>\n</body>\n</html>",tests:[{t:"Есть поле ввода и элемент #out",fn:(d)=>!!d.querySelector('input') && !!d.querySelector('#out')},{t:"Ввод текста сразу обновляет #out",fn:(d,w)=>{ const inp=d.querySelector('input'), out=d.querySelector('#out'); if(!inp||!out) return false; inp.value='Эмиль'; inp.dispatchEvent(new w.Event('input')); return /Эмиль/.test(out.textContent); }}]},
{kind:"build",type:"html",prompt:"<p><b>Задание 3.</b> <b>Собери счётчик кликов с нуля.</b> На странице <code>&lt;span id=\"count\"&gt;0&lt;/span&gt;</code> и кнопка. Каждый клик увеличивает число на 1 и показывает его. Храни счёт в переменной, обновляй <code>textContent</code>.</p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <p>Кликов: <span id=\"count\">0</span></p>\n  <button id=\"add\">+1</button>\n  <script>\n    // TODO: заведи переменную счёта = 0\n    // TODO: по клику по #add увеличивай её и показывай в #count\n  </script>\n</body>\n</html>",tests:[{t:"Есть #count и кнопка",fn:(d)=>!!d.querySelector('#count') && !!d.querySelector('button')},{t:"Два клика подряд → счёт становится 2",fn:(d,w)=>{ const b=d.querySelector('button'), c=d.querySelector('#count'); if(!b||!c) return false; b.click(); b.click(); return c.textContent.trim()==='2'; }}]}],
res:[["learn.javascript.ru: Поиск в DOM","url","https://learn.javascript.ru/searching-elements-dom"],
 ["learn.javascript.ru: Изменение документа","url","https://learn.javascript.ru/modifying-document"],
 ["MDN: Введение в DOM (рус.)","url","https://developer.mozilla.org/ru/docs/Web/API/Document_Object_Model/Introduction"],
 ["DOM для начинающих","yt","javascript dom для начинающих querySelector"]]},
{id:"m16",title:"События глубже: клики и делегирование",
theory:"\n<p>🎯 <b>Зачем это тебе:</b> любое приложение — это реакция на действия: клик, ввод, отправка. А когда элементов много (список товаров, задач, сообщений), вешать обработчик на каждый — тупик. Делегирование решает это одним слушателем.</p>\n\n<p><b>Событие</b> — то, что происходит на странице: клик, ввод текста, наведение. Ловят его методом <code>addEventListener</code>:</p>\n<pre class=\"demo\">const btn = document.querySelector(\"#send\");\nbtn.addEventListener(\"click\", () => {\n  console.log(\"Нажали!\");\n});</pre>\n<p>Разбор: первым аргументом — <b>тип</b> события (<code>\"click\"</code>, <code>\"input\"</code>, <code>\"submit\"</code>), вторым — функция, которая выполнится, когда событие случится. Эта функция называется <b>обработчик</b> (handler).</p>\n\n<p>У обработчика есть объект события <code>e</code>, а в нём <code>e.target</code> — <b>элемент, на котором событие случилось</b>:</p>\n<pre class=\"demo\">list.addEventListener(\"click\", (e) => {\n  console.log(e.target.textContent);  // текст того, куда кликнули\n});</pre>\n<p>Разбор: <code>e.target</code> — не тот, на кого повесили слушатель, а конкретный элемент под пальцем. Это ключ к делегированию.</p>\n\n<p><b>Делегирование</b> — повесить <b>один</b> слушатель на родителя вместо сотни на детей. Событие «всплывает» от ребёнка к родителю, и родитель ловит его за всех:</p>\n<pre class=\"demo\">todoList.addEventListener(\"click\", (e) => {\n  const item = e.target.closest(\"li\");\n  if (item) item.remove();   // удалить задачу по клику\n});</pre>\n<p>Разбор: клик по любому <code>&lt;li&gt;</code> всплывает до <code>todoList</code>. <code>e.target.closest(\"li\")</code> находит ближайший сверху <code>&lt;li&gt;</code> (даже если кликнули по вложенной иконке). Добавили новую задачу — она работает сразу, без нового слушателя. Ещё пригодится <code>e.target.dataset.id</code> — чтение атрибута <code>data-id</code> с элемента.</p>\n\n<svg viewBox=\"0 0 600 160\" class=\"diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"m16up\" markerWidth=\"9\" markerHeight=\"9\" refX=\"4\" refY=\"7\" orient=\"auto\"><path d=\"M4,0 L8,7 L0,7 Z\" fill=\"#FFD34D\"/></marker></defs>\n  <rect x=\"150\" y=\"20\" width=\"300\" height=\"126\" rx=\"12\" fill=\"#141716\" stroke=\"#B9FF47\"/>\n  <text x=\"164\" y=\"40\" fill=\"#B9FF47\" font-size=\"12\" font-weight=\"700\">&lt;ul&gt; — ОДИН слушатель на всех</text>\n  <rect x=\"176\" y=\"52\" width=\"248\" height=\"26\" rx=\"6\" fill=\"#1C201E\" stroke=\"#37936F\"/>\n  <text x=\"188\" y=\"69\" fill=\"#9BA39D\" font-size=\"11\">&lt;li&gt; задача 1</text>\n  <rect x=\"176\" y=\"84\" width=\"248\" height=\"26\" rx=\"6\" fill=\"#1C201E\" stroke=\"#FFD34D\"/>\n  <text x=\"188\" y=\"101\" fill=\"#FFD34D\" font-size=\"11\">&lt;li&gt; сюда кликнули 👆</text>\n  <rect x=\"176\" y=\"116\" width=\"248\" height=\"22\" rx=\"6\" fill=\"#1C201E\" stroke=\"#37936F\"/>\n  <text x=\"188\" y=\"131\" fill=\"#9BA39D\" font-size=\"10\">&lt;li&gt; задача 3</text>\n  <line x1=\"300\" y1=\"84\" x2=\"300\" y2=\"60\" stroke=\"#FFD34D\" stroke-width=\"2\" marker-end=\"url(#m16up)\"/>\n  <text x=\"470\" y=\"86\" fill=\"#9BA39D\" font-size=\"10\">клик всплывает</text>\n  <text x=\"470\" y=\"102\" fill=\"#9BA39D\" font-size=\"10\">от li вверх к ul</text>\n</svg>\n<p>⚠️ <b>Частые ошибки:</b></p>\n<span class=\"fix\"><span class=\"was\">addEventListener(\"click\", handler())</span> → <span class=\"now\">addEventListener(\"click\", handler)</span><br><span class=\"muted2\">передавай функцию без скобок — со скобками ты вызовешь её сразу, а не по клику</span></span>\n<span class=\"fix\"><span class=\"was\">слушатель на каждом элементе списка</span> → <span class=\"now\">один слушатель на родителе + e.target.closest</span><br><span class=\"muted2\">делегирование работает и для элементов, добавленных позже</span></span>\n<span class=\"fix\"><span class=\"was\">e.target когда кликнули по вложенной иконке</span> → <span class=\"now\">e.target.closest('li')</span><br><span class=\"muted2\">target — самый глубокий элемент; closest поднимается к нужному контейнеру</span></span>",
quiz:[{"q":"Что делает второй аргумент addEventListener?","o":["Это функция-обработчик, которая сработает при событии","Это цвет элемента","Это id элемента","Это тип события"],"a":0,"e":"Второй аргумент — функция, которая выполнится, когда событие случится."},{"t":"output","q":"Что не так с этим кодом?","code":"btn.addEventListener(\"click\", greet());","o":["Всё верно","greet вызовется сразу, а не по клику","click написан с ошибкой","btn не существует"],"a":1,"e":"greet() со скобками выполняется немедленно; нужно передать greet без скобок."},{"t":"cloze","q":"Дополни делегирование: найти ближайший li и прочитать target","code":"list.addEventListener(\"click\", (e) => {\n  const li = e.{0}.closest(\"{1}\");\n});","gaps":["target","li"],"e":"e.target — элемент под кликом, closest('li') поднимается к ближайшему li."},{"t":"pairs","q":"Соедини понятие с ролью","pairs":[["addEventListener","повесить обработчик"],["e.target","элемент под кликом"],["closest('li')","ближайший родитель-li"],["e.target.dataset.id","чтение data-id"]],"e":"addEventListener вешает обработчик, target — цель события, closest ищет родителя, dataset читает data-атрибуты."},{"q":"Чем делегирование лучше слушателя на каждом элементе?","o":["Один слушатель работает и для новых элементов","Оно делает страницу цветной","Оно не требует HTML","Никакой разницы"],"a":0,"e":"Один слушатель на родителе ловит клики по всем детям, включая добавленных позже."}],
lab:[
{kind:"fill",type:"html",prompt:"<p><b>Задание 1.</b> Список задач: клик по любому пункту удаляет его. Повесь <b>ОДИН</b> обработчик на список (делегирование), внутри найди ближайший <code>&lt;li&gt;</code> через <code>e.target.closest(\"li\")</code> и удали его.</p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <ul id=\"list\">\n    <li>Выучить события</li>\n    <li>Сделать проект</li>\n    <li>Найти работу</li>\n  </ul>\n  <script>\n    const list = document.querySelector(\"#list\");\n    // TODO: повесь ОДИН обработчик \"click\" на list\n    // TODO: внутри — const li = e.target.closest(\"li\"); if (li) li.remove();\n  </script>\n</body>\n</html>",tests:[{t:"В списке минимум 3 пункта <li>",fn:(d)=>d.querySelectorAll('#list li').length>=3},{t:"Клик по пункту удаляет именно его",fn:(d,w)=>{ const list=d.querySelector('#list'); const li=list&&list.querySelector('li'); if(!li) return false; const n0=list.querySelectorAll('li').length; li.click(); return list.querySelectorAll('li').length===n0-1; }},{t:"Работает делегирование: удаляется и пункт, добавленный позже",fn:(d,w)=>{ const list=d.querySelector('#list'); if(!list) return false; const li=d.createElement('li'); li.textContent='Новый пункт'; list.appendChild(li); const n0=list.querySelectorAll('li').length; li.click(); return list.querySelectorAll('li').length===n0-1; }}]},
{kind:"fix",type:"html",prompt:"<p><b>Задание 2.</b> Клик по пункту должен его удалять, но ничего не работает. Причина классическая: обработчик передан <b>с вызовом</b> — <code>del()</code> вместо <code>del</code>, поэтому функция сработала один раз при загрузке, а не по клику. <b>Почини.</b></p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <ul id=\"list\">\n    <li>Первая</li>\n    <li>Вторая</li>\n  </ul>\n  <script>\n    const list = document.querySelector(\"#list\");\n    function del(e) {\n      if (!e) return;\n      const li = e.target.closest(\"li\");\n      if (li) li.remove();\n    }\n    // сломано: del() вызывается сразу, обработчик не назначен\n    list.addEventListener(\"click\", del());\n    // TODO: передай функцию БЕЗ скобок вызова\n  </script>\n</body>\n</html>",tests:[{t:"Есть список с пунктами",fn:(d)=>d.querySelectorAll('#list li').length>=2},{t:"Клик по пункту удаляет его",fn:(d,w)=>{ const list=d.querySelector('#list'); const li=list&&list.querySelector('li'); if(!li) return false; const n0=list.querySelectorAll('li').length; li.click(); return list.querySelectorAll('li').length===n0-1; }}]},
{kind:"build",type:"html",prompt:"<p><b>Задание 3.</b> <b>Собери переключатель «сделано».</b> Клик по пункту списка добавляет ему класс <code>done</code>, повторный клик — снимает (используй <code>classList.toggle</code>). Через <b>один</b> обработчик на списке.</p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <style>.done { text-decoration: line-through; opacity: .5; }</style>\n  <ul id=\"list\">\n    <li>Задача A</li>\n    <li>Задача B</li>\n  </ul>\n  <script>\n    const list = document.querySelector(\"#list\");\n    // TODO: один обработчик \"click\" на list\n    // TODO: e.target.closest(\"li\") -> classList.toggle(\"done\")\n  </script>\n</body>\n</html>",tests:[{t:"Клик по пункту добавляет класс done",fn:(d,w)=>{ const li=d.querySelector('#list li'); if(!li) return false; li.click(); return li.classList.contains('done'); }},{t:"Повторный клик снимает класс (toggle, а не add)",fn:(d,w)=>{ const li=d.querySelector('#list li'); if(!li) return false; li.click(); return !li.classList.contains('done'); }}]}],
res:[["learn.javascript.ru: Делегирование событий","url","https://learn.javascript.ru/event-delegation"],
 ["learn.javascript.ru: Всплытие и погружение","url","https://learn.javascript.ru/bubbling-and-capturing"],
 ["MDN: Введение в события (рус.)","url","https://developer.mozilla.org/ru/docs/Learn/JavaScript/Building_blocks/Events"],
 ["Делегирование событий за 10 минут","yt","javascript делегирование событий делегирование"]]},
{id:"m17",title:"localStorage: страница помнит",
theory:"\n<p>🎯 <b>Зачем это тебе:</b> обычная страница забывает всё при перезагрузке. Корзина, тема оформления, черновик, прогресс — всё это должно сохраняться. localStorage даёт браузеру маленькую память прямо на устройстве. Кстати, этот тренажёр хранит твой прогресс именно так.</p>\n\n<p><b>localStorage</b> — хранилище «ключ → значение» внутри браузера. Живёт после перезагрузки и закрытия вкладки. Два главных метода:</p>\n<pre class=\"demo\">localStorage.setItem(\"theme\", \"dark\");   // записать\nconst t = localStorage.getItem(\"theme\");  // прочитать → \"dark\"\nlocalStorage.removeItem(\"theme\");          // удалить</pre>\n<p>Разбор: <code>setItem(ключ, значение)</code> сохраняет, <code>getItem(ключ)</code> достаёт (вернёт <code>null</code>, если ключа нет), <code>removeItem</code> стирает. Всё привязано к конкретному сайту — чужие сайты твои данные не видят.</p>\n\n<p><b>Важно:</b> localStorage хранит <b>только строки</b>. Объект или массив надо превратить в строку через <code>JSON.stringify</code>, а при чтении — обратно через <code>JSON.parse</code>:</p>\n<pre class=\"demo\">const cart = [\"кофе\", \"чай\"];\nlocalStorage.setItem(\"cart\", JSON.stringify(cart));   // сохранили массив\n\nconst saved = JSON.parse(localStorage.getItem(\"cart\")); // достали массив\nconsole.log(saved[0]);   // кофе</pre>\n<p>Разбор: <code>JSON.stringify</code> превращает массив в строку <code>'[\"кофе\",\"чай\"]'</code> — её можно хранить. <code>JSON.parse</code> делает обратное: строку снова в массив, с которым работает код. Забыл parse — получишь строку вместо массива и <code>saved[0]</code> вернёт один символ.</p>\n\n<svg viewBox=\"0 0 600 165\" class=\"diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n   <marker id=\"m17a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#B9FF47\"/></marker>\n   <marker id=\"m17b\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#37936F\"/></marker></defs>\n  <rect x=\"20\" y=\"30\" width=\"150\" height=\"44\" rx=\"10\" fill=\"#1C201E\" stroke=\"#B9FF47\"/>\n  <text x=\"95\" y=\"49\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"12\" font-weight=\"700\">объект / массив</text>\n  <text x=\"95\" y=\"65\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">[\"кофе\",\"чай\"]</text>\n  <line x1=\"172\" y1=\"52\" x2=\"252\" y2=\"52\" stroke=\"#B9FF47\" stroke-width=\"2\" marker-end=\"url(#m17a)\"/>\n  <text x=\"212\" y=\"44\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"9\">JSON.stringify</text>\n  <rect x=\"256\" y=\"30\" width=\"130\" height=\"44\" rx=\"10\" fill=\"#141716\" stroke=\"#FFD34D\"/>\n  <text x=\"321\" y=\"49\" text-anchor=\"middle\" fill=\"#FFD34D\" font-size=\"12\" font-weight=\"700\">\"строка\"</text>\n  <text x=\"321\" y=\"65\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">только текст</text>\n  <line x1=\"388\" y1=\"52\" x2=\"452\" y2=\"52\" stroke=\"#FFD34D\" stroke-width=\"2\" marker-end=\"url(#m17a)\"/>\n  <text x=\"420\" y=\"44\" text-anchor=\"middle\" fill=\"#FFD34D\" font-size=\"9\">setItem</text>\n  <rect x=\"456\" y=\"24\" width=\"122\" height=\"56\" rx=\"10\" fill=\"#141716\" stroke=\"#37936F\"/>\n  <text x=\"517\" y=\"46\" text-anchor=\"middle\" fill=\"#5BC79A\" font-size=\"12\" font-weight=\"700\">💾 браузер</text>\n  <text x=\"517\" y=\"62\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"8\">переживёт</text>\n  <text x=\"517\" y=\"72\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"8\">перезагрузку</text>\n  <line x1=\"452\" y1=\"112\" x2=\"172\" y2=\"112\" stroke=\"#37936F\" stroke-width=\"2\" marker-end=\"url(#m17b)\"/>\n  <text x=\"312\" y=\"104\" text-anchor=\"middle\" fill=\"#37936F\" font-size=\"9\">обратно: getItem → JSON.parse → снова объект</text>\n  <text x=\"312\" y=\"132\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">так этот тренажёр помнит твой прогресс</text>\n</svg>\n<p>⚠️ <b>Частые ошибки:</b></p>\n<span class=\"fix\"><span class=\"was\">localStorage.setItem(\"cart\", cart)</span> → <span class=\"now\">localStorage.setItem(\"cart\", JSON.stringify(cart))</span><br><span class=\"muted2\">объект без stringify сохранится как бесполезное \"[object Object]\"</span></span>\n<span class=\"fix\"><span class=\"was\">const a = localStorage.getItem(\"cart\"); a.push(...)</span> → <span class=\"now\">const a = JSON.parse(localStorage.getItem(\"cart\"))</span><br><span class=\"muted2\">getItem даёт строку — без parse у неё нет методов массива</span></span>\n<span class=\"fix\"><span class=\"was\">JSON.parse(localStorage.getItem(\"x\")) когда ключа нет</span> → <span class=\"now\">const raw = localStorage.getItem(\"x\"); const v = raw ? JSON.parse(raw) : []</span><br><span class=\"muted2\">parse(null) падает — проверь, что данные есть</span></span>",
quiz:[{"q":"Что вернёт localStorage.getItem по несуществующему ключу?","o":["Пустую строку","null","Ошибку","undefined"],"a":1,"e":"getItem возвращает null, если ключа нет."},{"t":"output","q":"Что выведет код?","code":"localStorage.setItem(\"n\", 5);\nconst x = localStorage.getItem(\"n\");\nconsole.log(x + 1);","o":["6","51","NaN","ошибка"],"a":1,"e":"localStorage хранит строки: getItem вернёт \"5\", и \"5\"+1 склеится в \"51\"."},{"t":"cloze","q":"Дополни: сохранить массив и прочитать обратно","code":"localStorage.setItem(\"cart\", JSON.{0}(cart));\nconst back = JSON.{1}(localStorage.getItem(\"cart\"));","gaps":["stringify","parse"],"e":"stringify превращает массив в строку для хранения, parse — обратно в массив."},{"t":"bug","q":"В какой строке ошибка — массив сохранён неправильно?","code":["const cart = [\"кофе\"];","localStorage.setItem(\"cart\", cart);","const back = JSON.parse(localStorage.getItem(\"cart\"));"],"a":1,"e":"Массив надо сохранять через JSON.stringify(cart), иначе запишется \"[object Object]\" или строка, и parse потом упадёт."},{"q":"Что переживает перезагрузку страницы?","o":["Обычные переменные let/const","Данные в localStorage","Ничего","Только console.log"],"a":1,"e":"Переменные обнуляются при перезагрузке; localStorage сохраняется на устройстве."}],
lab:[
{kind:"fill",type:"html",prompt:"<p><b>Задание 1.</b> Счётчик с памятью: при загрузке читает число из <code>localStorage</code> (ключ <code>\"count\"</code>, через <code>JSON.parse</code>, иначе 0), а по клику увеличивает и <b>сохраняет</b> его через <code>setItem</code> + <code>JSON.stringify</code>.</p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <p>Счёт: <span id=\"n\">0</span></p>\n  <button id=\"add\">+1</button>\n  <script>\n    // TODO: прочитай сохранённое число: JSON.parse(localStorage.getItem(\"count\")) || 0\n    // TODO: покажи его в #n\n    // TODO: по клику увеличивай, показывай и сохраняй (setItem + JSON.stringify)\n  </script>\n</body>\n</html>",tests:[{t:"Есть #n и кнопка",fn:(d)=>!!d.querySelector('#n') && !!d.querySelector('button')},{t:"Клик увеличивает счёт и пишет его в localStorage как JSON",fn:(d,w)=>{ const c=d.querySelector('#n'), b=d.querySelector('button'); if(!c||!b) return false; const base=parseInt(c.textContent,10)||0; b.click(); let v; try{ v=JSON.parse(w.localStorage.getItem('count')); }catch(e){ return false; } return v===base+1 && parseInt(c.textContent,10)===base+1; }}]},
{kind:"fix",type:"html",prompt:"<p><b>Задание 2.</b> Корзина сохраняется неправильно: массив кладут в <code>localStorage</code> <b>без</b> <code>JSON.stringify</code>, поэтому обратно читается мусор. <b>Почини</b> запись и чтение (<code>JSON.stringify</code> при сохранении, <code>JSON.parse</code> при чтении).</p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <input id=\"item\" placeholder=\"товар\">\n  <button id=\"add\">В корзину</button>\n  <p>Товаров: <span id=\"c\">0</span></p>\n  <script>\n    let cart = [];\n    const raw = localStorage.getItem(\"cart\");\n    if (raw) cart = raw;              // сломано: строка вместо массива\n    document.querySelector(\"#add\").addEventListener(\"click\", () => {\n      cart.push(document.querySelector(\"#item\").value);\n      localStorage.setItem(\"cart\", cart);   // сломано: без JSON.stringify\n      document.querySelector(\"#c\").textContent = cart.length;\n    });\n    // TODO: почини чтение (JSON.parse) и запись (JSON.stringify)\n  </script>\n</body>\n</html>",tests:[{t:"После добавления двух товаров в localStorage лежит корректный JSON-массив",fn:(d,w)=>{ const inp=d.querySelector('#item'), b=d.querySelector('#add'); if(!inp||!b) return false; w.localStorage.removeItem('cart'); inp.value='кофе'; b.click(); inp.value='чай'; b.click(); let a; try{ a=JSON.parse(w.localStorage.getItem('cart')); }catch(e){ return false; } return Array.isArray(a) && a.indexOf('кофе')>-1 && a.indexOf('чай')>-1; }}]},
{kind:"build",type:"html",prompt:"<p><b>Задание 3.</b> <b>Список дел с памятью.</b> Поле + кнопка «Добавить»: новая задача попадает в массив, массив сохраняется в <code>localStorage</code> как JSON (ключ <code>\"todos\"</code>) и показывается на странице. Так список переживёт перезагрузку.</p>",starter:"<!DOCTYPE html>\n<html>\n<body>\n  <input id=\"task\" placeholder=\"новая задача\">\n  <button id=\"add\">Добавить</button>\n  <ul id=\"list\"></ul>\n  <script>\n    // TODO: при загрузке восстанови массив из localStorage (JSON.parse) или []\n    // TODO: покажи задачи в #list\n    // TODO: по клику добавляй задачу в массив, сохраняй (JSON.stringify) и дорисовывай список\n  </script>\n</body>\n</html>",tests:[{t:"Добавленная задача сохраняется в localStorage массивом (JSON)",fn:(d,w)=>{ const inp=d.querySelector('#task'), b=d.querySelector('#add'); if(!inp||!b) return false; w.localStorage.removeItem('todos'); inp.value='Выучить JS'; b.click(); let a; try{ a=JSON.parse(w.localStorage.getItem('todos')); }catch(e){ return false; } return Array.isArray(a) && a.indexOf('Выучить JS')>-1; }},{t:"Добавленная задача появляется на странице",fn:(d,w)=>{ const inp=d.querySelector('#task'), b=d.querySelector('#add'); if(!inp||!b) return false; inp.value='Сделать проект'; b.click(); return /Сделать проект/.test(d.body.textContent); }}]}],
res:[["learn.javascript.ru: LocalStorage","url","https://learn.javascript.ru/localstorage"],
 ["learn.javascript.ru: JSON.stringify / parse","url","https://learn.javascript.ru/json"],
 ["MDN: Window.localStorage (рус.)","url","https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage"],
 ["localStorage простыми словами","yt","javascript localstorage для начинающих"]]},
{id:"m9",title:"fetch и async/await: данные из интернета",
theory:"\n<p>🎯 <b>Зачем это тебе:</b> почти любой реальный заказ — показать данные «из мира»: погоду, курсы валют, товары, профиль пользователя. Эти данные живут на серверах, и <code>fetch</code> с <code>async/await</code> — стандартный способ их достать.</p>\n<p>Данные отдаёт <b>API</b> (Application Programming Interface — «интерфейс для программ»): сервер, который на запрос отвечает не страницей, а данными в формате <b>JSON</b> (JavaScript Object Notation) — текстом, похожим на объект JS: <code>{\"name\": \"Emil\", \"level\": 3}</code>.</p>\n<p><b>fetch</b> отправляет запрос и возвращает <b>промис</b> (Promise — «обещание»): не сами данные, а обещание отдать их, когда сервер ответит. Ответ идёт по сети десятки и сотни миллисекунд, и JS это время не стоит на месте, а продолжает работать.</p>\n<pre class=\"demo\">async function getUser() {\n  const res = await fetch(\"https://api.github.com/users/octocat\");\n  const data = await res.json();   // JSON → объект JS\n  console.log(data.name);\n}\ngetUser();</pre>\n<p>Разбор построчно: <code>async</code> перед function помечает функцию как асинхронную — только внутри такой работает <code>await</code>. <code>await fetch(...)</code> — «дождись ответа сервера»: в <code>res</code> попадает ответ (статус, заголовки), но ещё не данные. <code>await res.json()</code> — второй await: разбор JSON-текста в объект — тоже асинхронная операция, она тоже возвращает промис. После этого <code>data</code> — обычный объект: берём <code>data.name</code> через точку, как в модуле про объекты.</p>\n<p>Порядок всегда один: <b>fetch → json → использовать</b>. Два await, а не один — самое частое место, где путаются.</p>\n<p>Ответы бывают вложенными — тогда точки складываются в цепочку: <code>data.company.name</code>. Списки приходят массивами: <code>data.users[0].name</code> — имя первого пользователя. Правило простое: сначала выведи <code>console.log(data)</code> целиком, посмотри структуру ответа — и только потом доставай нужные поля.</p>\n<p>Что будет без await? <code>console.log(fetch(url))</code> напечатает <code>Promise { &lt;pending&gt; }</code> — «обещание в ожидании». Это главный симптом: видишь pending — значит где-то потерял await.</p>\n<p><b>Ошибки.</b> Сеть ненадёжна: интернет пропал, сервер упал. Такие сбои ловят через <code>try/catch</code>:</p>\n<pre class=\"demo\">try {\n  const res = await fetch(url);\n  if (!res.ok) throw new Error(\"Сервер ответил \" + res.status);\n  const data = await res.json();\n} catch (err) {\n  console.log(\"Ошибка: \" + err.message);\n}</pre>\n<p>Разбор: <code>try</code> — «пробуем выполнить», <code>catch</code> — «если внутри что-то упало, выполни это»: программа не падает, а показывает сообщение. Тонкость: fetch НЕ считает ответы 404 или 500 ошибкой (запрос-то дошёл), поэтому проверяем <code>res.ok</code> — он равен false, когда статус не 2xx, — и бросаем ошибку сами через <code>throw</code>.</p>\n<p>Кстати, любая async-функция и сама возвращает промис — поэтому её результат снаружи тоже получают через await. Но на верхнем уровне достаточно просто вызвать <code>getUser();</code> — вывод случится, когда данные придут.</p>\n<p>Тренажёр офлайн, поэтому в практике «сервер» имитирует функция <code>fakeApi()</code> — промис с данными и задержкой. Механика с твоей стороны та же: async-функция, await, объект с данными.</p>\n<svg viewBox=\"0 0 600 150\" class=\"diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n   <marker id=\"m9a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#B9FF47\"/></marker>\n   <marker id=\"m9b\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#37936F\"/></marker></defs>\n  <rect x=\"20\" y=\"46\" width=\"120\" height=\"48\" rx=\"10\" fill=\"#141716\" stroke=\"#B9FF47\"/>\n  <text x=\"80\" y=\"66\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"12\" font-weight=\"700\">ваш код</text>\n  <text x=\"80\" y=\"82\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">async / await</text>\n  <line x1=\"142\" y1=\"70\" x2=\"236\" y2=\"70\" stroke=\"#B9FF47\" stroke-width=\"2\" marker-end=\"url(#m9a)\"/>\n  <text x=\"189\" y=\"60\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"9\">await fetch(url)</text>\n  <text x=\"189\" y=\"86\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"8\">1-й await</text>\n  <rect x=\"240\" y=\"46\" width=\"120\" height=\"48\" rx=\"10\" fill=\"#1C201E\" stroke=\"#FFD34D\"/>\n  <text x=\"300\" y=\"66\" text-anchor=\"middle\" fill=\"#FFD34D\" font-size=\"12\" font-weight=\"700\">🌐 сервер</text>\n  <text x=\"300\" y=\"82\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">отдаёт JSON</text>\n  <line x1=\"362\" y1=\"70\" x2=\"456\" y2=\"70\" stroke=\"#37936F\" stroke-width=\"2\" marker-end=\"url(#m9b)\"/>\n  <text x=\"409\" y=\"60\" text-anchor=\"middle\" fill=\"#37936F\" font-size=\"9\">await res.json()</text>\n  <text x=\"409\" y=\"86\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"8\">2-й await</text>\n  <rect x=\"460\" y=\"46\" width=\"118\" height=\"48\" rx=\"10\" fill=\"#141716\" stroke=\"#37936F\"/>\n  <text x=\"519\" y=\"66\" text-anchor=\"middle\" fill=\"#F4F6F2\" font-size=\"12\" font-weight=\"700\">объект data</text>\n  <text x=\"519\" y=\"82\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">data.name</text>\n  <text x=\"300\" y=\"126\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"10\" font-style=\"italic\">два await, а не один — самое частое место ошибок</text>\n</svg>\n<p>⚠️ <b>Частые ошибки:</b></p>\n<span class=\"fix\"><span class=\"was\">const res = fetch(url)</span> → <span class=\"now\">const res = await fetch(url)</span><br><span class=\"muted2\">Без await в res лежит промис, а не ответ — увидишь Promise { &lt;pending&gt; } вместо данных</span></span>\n<span class=\"fix\"><span class=\"was\">const data = res.json()</span> → <span class=\"now\">const data = await res.json()</span><br><span class=\"muted2\">json() тоже возвращает промис — нужен второй await</span></span>\n<span class=\"fix\"><span class=\"was\">function load() { await fetch(url) }</span> → <span class=\"now\">async function load() { await fetch(url) }</span><br><span class=\"muted2\">await работает только внутри функции со словом async — иначе SyntaxError</span></span>",
quiz:[{"q":"Что возвращает fetch()?","o":["Сразу данные","Промис — обещание результата","Строку HTML","Ошибку"],"a":1,"e":"Ответ идёт по сети не мгновенно, поэтому fetch сразу возвращает промис, а данные приходят потом."},{"t":"cloze","q":"Дополни запрос к API","code":"async function load() {\n  const res = {0} fetch(url);\n  const data = await res.{1}();\n  console.log(data.name);\n}","gaps":["await","json"],"e":"await — «дождись ответа», res.json() превращает JSON-текст в объект. Оба шага асинхронные — оба ждём."},{"t":"order","q":"Собери запрос: fetch → json → использовать","lines":["async function getUser() {","  const res = await fetch(\"https://api.example.com/user\");","  const data = await res.json();","  console.log(data.name);","}"],"e":"Порядок всегда один: сначала await fetch (ответ сервера), потом await res.json() (данные), потом используем data."},{"q":"JSON — это…","o":["Язык программирования","Текстовый формат данных «ключ: значение»","База данных","Фреймворк"],"a":1,"e":"Формат обмена данными: выглядит как объект JS, но это текст — res.json() превращает его в настоящий объект."},{"q":"Зачем нужен try/catch при запросах?","o":["Ускорить запрос","Поймать ошибку, если запрос не удался","Красиво оформить код","Он обязателен в любом коде"],"a":1,"e":"Сеть ненадёжна: если интернет пропал или сервер упал, catch перехватит ошибку и программа не рухнет."}],
practice:{type:"js",task:"<p><b>Что делаем:</b> тренажёр офлайн, поэтому сервер имитирует <code>fakeApi()</code> — промис с данными через секунду, как настоящий API. Получи данные и покажи их, не уронив программу при ошибке.</p><p><b>Шаги:</b></p><ol><li>Напиши <code>async</code>-функцию <code>load()</code>.</li><li>Внутри, в блоке <code>try</code>, дождись данных: <code>const data = await fakeApi();</code></li><li>Выведи <code>data.name</code> и <code>data.level</code> через <code>console.log</code>.</li><li>В <code>catch</code> выведи сообщение об ошибке.</li><li>В конце вызови <code>load()</code>.</li></ol>",starter:"function fakeApi() {\n  return new Promise(resolve => {\n    setTimeout(() => resolve({ name: \"Emil\", level: \"junior soon\" }), 1000);\n  });\n}\n\n// TODO асинхронная функция load, внутри — try и catch\n// TODO дождись результата fakeApi и выведи имя и уровень\n// TODO в конце вызови функцию\n",checks:[{t:"объявлена async-функция",fn:c=>/async\s+function|async\s*\(|async\s+\w+\s*=>/.test(c)},{t:"данные получены через await fakeApi()",fn:c=>/await\s+fakeApi\s*\(/.test(c)},{t:"есть try/catch на случай ошибки",fn:c=>/try\s*\{[\s\S]*catch/.test(c)},{t:"выведены data.name и data.level",fn:c=>/console\.log/.test(c)&&/\.name/.test(c)&&/\.level/.test(c)},{t:"функция вызвана в конце",fn:c=>/^\s*load\s*\(/m.test(c)}],hint:"async function load() { try { const data = await fakeApi(); console.log(data.name, data.level); } catch (e) { console.log(\"Ошибка\", e); } } load();"},
res:[["learn.javascript.ru: Fetch","url","https://learn.javascript.ru/fetch"],
 ["learn.javascript.ru: async/await","url","https://learn.javascript.ru/async-await"],
 ["MDN: Использование Fetch (рус.)","url","https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch"],
 ["async/await и fetch для новичков","yt","javascript async await fetch для начинающих"]]},
{id:"m18",title:"JSON и REST: данные как в реальных приложениях",
theory:"\n<p>🎯 <b>Зачем это тебе:</b> настоящие приложения не хранят данные внутри себя — они запрашивают их у сервера: список товаров, погоду, профиль. Формат этого обмена — JSON, а сам обмен — REST-запросы. Это то, что делает приложение «живым».</p>\n\n<p><b>JSON</b> (JavaScript Object Notation) — текстовый формат данных, похожий на объект JS. На нём разговаривают все API мира:</p>\n<pre class=\"demo\">{ \"name\": \"Эмиль\", \"level\": 5, \"skills\": [\"html\", \"js\"] }</pre>\n<p>Разбор: это <b>строка</b> с данными. Ключи и строковые значения — в двойных кавычках. Приходит такой текст с сервера — превращаем в объект через <code>JSON.parse</code>, отправляем на сервер — превращаем объект в текст через <code>JSON.stringify</code>.</p>\n\n<p><b>REST-запрос</b> через <code>fetch</code> — просишь у сервера данные по адресу. Ответ приходит асинхронно, поэтому <code>async/await</code>:</p>\n<pre class=\"demo\">async function loadUser() {\n  const res = await fetch(\"/api/user\");   // ждём ответ\n  const data = await res.json();           // разбираем JSON в объект\n  console.log(data.name);\n}</pre>\n<p>Разбор: <code>await fetch(url)</code> отправляет запрос и ждёт ответ — объект <code>res</code>. <code>await res.json()</code> читает тело ответа и разбирает JSON в готовый объект. Два await, потому что и запрос, и чтение тела — асинхронные.</p>\n\n<p>Сеть капризна, поэтому боевой код всегда в защите <code>try/catch</code>:</p>\n<pre class=\"demo\">async function load() {\n  try {\n    const res = await fetch(\"/api/user\");\n    const data = await res.json();\n    return data;\n  } catch (e) {\n    console.log(\"Не удалось загрузить:\", e.message);\n  }\n}</pre>\n<p>Разбор: если сети нет или сервер молчит — <code>fetch</code> падает, и управление уходит в <code>catch</code>, где показываем понятное сообщение вместо белого экрана. Это отличает код джуна от студенческого.</p>\n\n<svg viewBox=\"0 0 600 155\" class=\"diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs>\n   <marker id=\"m18a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#B9FF47\"/></marker>\n   <marker id=\"m18b\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#37936F\"/></marker></defs>\n  <rect x=\"22\" y=\"50\" width=\"118\" height=\"46\" rx=\"10\" fill=\"#141716\" stroke=\"#B9FF47\"/>\n  <text x=\"81\" y=\"70\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"12\" font-weight=\"700\">приложение</text>\n  <text x=\"81\" y=\"86\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">fetch(url)</text>\n  <line x1=\"142\" y1=\"73\" x2=\"228\" y2=\"73\" stroke=\"#B9FF47\" stroke-width=\"2\" marker-end=\"url(#m18a)\"/>\n  <text x=\"185\" y=\"64\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"9\">запрос</text>\n  <rect x=\"232\" y=\"50\" width=\"130\" height=\"46\" rx=\"10\" fill=\"#1C201E\" stroke=\"#FFD34D\"/>\n  <text x=\"297\" y=\"70\" text-anchor=\"middle\" fill=\"#FFD34D\" font-size=\"12\" font-weight=\"700\">сервер (REST)</text>\n  <text x=\"297\" y=\"86\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">{\"name\":\"Эмиль\"}</text>\n  <line x1=\"364\" y1=\"73\" x2=\"450\" y2=\"73\" stroke=\"#37936F\" stroke-width=\"2\" marker-end=\"url(#m18b)\"/>\n  <text x=\"407\" y=\"64\" text-anchor=\"middle\" fill=\"#37936F\" font-size=\"9\">res.json()</text>\n  <rect x=\"454\" y=\"50\" width=\"124\" height=\"46\" rx=\"10\" fill=\"#141716\" stroke=\"#37936F\"/>\n  <text x=\"516\" y=\"70\" text-anchor=\"middle\" fill=\"#F4F6F2\" font-size=\"12\" font-weight=\"700\">объект JS</text>\n  <text x=\"516\" y=\"86\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">data.name</text>\n  <text x=\"300\" y=\"128\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"10\" font-style=\"italic\">JSON — текст в пути; parse превращает его в рабочий объект</text>\n</svg>\n<p>⚠️ <b>Частые ошибки:</b></p>\n<span class=\"fix\"><span class=\"was\">const data = fetch(url)</span> → <span class=\"now\">const data = await fetch(url)</span><br><span class=\"muted2\">без await получишь Promise, а не ответ — «зависший» объект</span></span>\n<span class=\"fix\"><span class=\"was\">const data = await fetch(url); data.name</span> → <span class=\"now\">const data = await res.json(); data.name</span><br><span class=\"muted2\">fetch возвращает ответ-обёртку; сами данные достаёт res.json()</span></span>\n<span class=\"fix\"><span class=\"was\">запрос без try/catch</span> → <span class=\"now\">try { await fetch(...) } catch (e) { ... }</span><br><span class=\"muted2\">сеть падает регулярно — без защиты приложение умрёт молча</span></span>",
quiz:[{"q":"Что такое JSON?","o":["Текстовый формат обмена данными","Язык программирования","База данных","Тег HTML"],"a":0,"e":"JSON — текстовый формат данных, на нём общаются приложение и сервер."},{"t":"cloze","q":"Дополни загрузку данных с сервера","code":"const res = {0} fetch(url);\nconst data = await res.{1}();","gaps":["await","json"],"e":"await ждёт ответ fetch, res.json() разбирает тело ответа в объект."},{"t":"order","q":"Собери правильный порядок загрузки данных","lines":["async function load() {","  const res = await fetch(url);","  const data = await res.json();","  console.log(data.name);","}"],"e":"Сначала объявляем async-функцию, ждём fetch, затем разбираем json, потом используем данные."},{"t":"output","q":"Что окажется в data без await у fetch?","code":"const data = fetch(\"/api\");\nconsole.log(typeof data);","o":["object (Promise)","string","undefined","массив"],"a":0,"e":"Без await fetch возвращает Promise — «обещание» ответа, а не сам ответ."},{"q":"Куда попадёт управление, если fetch упадёт из-за сети?","o":["В блок catch","Программа падает белым экраном","В console.log","Никуда"],"a":0,"e":"Ошибку fetch ловит окружающий try/catch — там показывают понятное сообщение."}],
practice:{type:"js",task:"<p><b>Что делаем:</b> безопасную загрузку данных с учебного сервера fakeApi и вывод результата.</p><p><b>Шаги:</b></p><ol><li>Оставь готовую функцию fakeApi (она имитирует сервер).</li><li>Напиши async-функцию load с блоком try.</li><li>Внутри: await fakeApi(), затем выведи поле из данных через console.log.</li><li>Добавь catch (e) с сообщением об ошибке. Вызови load().</li></ol>",starter:"// учебный сервер: отдаёт данные через 300мс\nfunction fakeApi(){return new Promise(res=>setTimeout(()=>res({name:\"Эмиль\",level:5}),300));}\n\n// TODO: напиши асинхронную функцию load, которая дождётся данных от fakeApi\n//       и выведет их; оберни в защиту от ошибок и вызови функцию\n",checks:[{t:"Функция помечена async",fn:c=>/async/.test(c)},{t:"Данные ожидаются через await",fn:c=>/await\s+fakeApi\s*\(/.test(c)},{t:"Есть защита try/catch",fn:c=>/try\s*\{/.test(c)&&/catch\s*\(/.test(c)},{t:"Результат выведен через console.log",fn:c=>/console\.log\s*\(/.test(c)}],hint:"async function load(){ try{ const d=await fakeApi(); console.log(d.name, d.level);}catch(e){console.log('Ошибка:',e.message);} } load();"},
res:[["learn.javascript.ru: JSON","url","https://learn.javascript.ru/json"],
 ["learn.javascript.ru: Fetch","url","https://learn.javascript.ru/fetch"],
 ["MDN: Работа с JSON (рус.)","url","https://developer.mozilla.org/ru/docs/Learn/JavaScript/Objects/JSON"],
 ["Что такое REST API простыми словами","yt","rest api простыми словами для начинающих"]]},
{id:"m19",title:"ES-модули: import и export",
theory:"\n<p>🎯 <b>Зачем это тебе:</b> реальный проект — это не один файл на тысячу строк, а десятки маленьких, каждый за своё. Модули позволяют разбить код на файлы и подключать нужное друг к другу. Без этого не собрать ни один современный проект, и это фундамент под React в следующем акте.</p>\n\n<p><b>export</b> — «отдать наружу» то, чем поделится файл. <b>import</b> — «взять» это в другом файле.</p>\n<pre class=\"demo\">// файл math.js — отдаём функцию\nexport function add(a, b) {\n  return a + b;\n}</pre>\n<pre class=\"demo\">// файл app.js — берём и используем\nimport { add } from \"./math.js\";\nconsole.log(add(2, 3));   // 5</pre>\n<p>Разбор: в <code>math.js</code> перед функцией стоит <code>export</code> — значит, она доступна снаружи. В <code>app.js</code> пишем <code>import { add } from \"./math.js\"</code> — берём именно <code>add</code> из соседнего файла. Имя в фигурных скобках должно совпадать с тем, что экспортировали.</p>\n\n<p>Бывает <b>export default</b> — «главное, что отдаёт файл», его можно импортировать под любым именем без скобок:</p>\n<pre class=\"demo\">// файл user.js\nexport default { name: \"Эмиль\" };\n\n// файл app.js\nimport user from \"./user.js\";   // без фигурных скобок</pre>\n<p>Разбор: <code>default</code>-экспорт в файле один. При импорте фигурные скобки не нужны, а имя выбираешь сам. Именованных (через <code>{ }</code>) экспортов может быть сколько угодно.</p>\n\n<p>В браузере модули подключают так: <code>&lt;script type=\"module\" src=\"app.js\"&gt;&lt;/script&gt;</code>. Слово <code>module</code> включает поддержку import/export.</p>\n\n<svg viewBox=\"0 0 600 150\" class=\"diagram\" xmlns=\"http://www.w3.org/2000/svg\">\n  <defs><marker id=\"m19a\" markerWidth=\"8\" markerHeight=\"8\" refX=\"6\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6\" fill=\"#B9FF47\"/></marker></defs>\n  <rect x=\"30\" y=\"34\" width=\"210\" height=\"80\" rx=\"12\" fill=\"#141716\" stroke=\"#FFD34D\"/>\n  <text x=\"46\" y=\"56\" fill=\"#FFD34D\" font-size=\"12\" font-weight=\"700\">math.js</text>\n  <text x=\"46\" y=\"80\" fill=\"#B9FF47\" font-size=\"12\" font-family=\"monospace\">export</text>\n  <text x=\"120\" y=\"80\" fill=\"#F4F6F2\" font-size=\"12\" font-family=\"monospace\">function add()</text>\n  <text x=\"46\" y=\"100\" fill=\"#9BA39D\" font-size=\"9\">отдаёт наружу</text>\n  <line x1=\"242\" y1=\"74\" x2=\"356\" y2=\"74\" stroke=\"#B9FF47\" stroke-width=\"2\" marker-end=\"url(#m19a)\"/>\n  <text x=\"299\" y=\"64\" text-anchor=\"middle\" fill=\"#B9FF47\" font-size=\"11\" font-family=\"monospace\">import { add }</text>\n  <text x=\"299\" y=\"90\" text-anchor=\"middle\" fill=\"#9BA39D\" font-size=\"9\">from \"./math.js\"</text>\n  <rect x=\"360\" y=\"34\" width=\"210\" height=\"80\" rx=\"12\" fill=\"#141716\" stroke=\"#37936F\"/>\n  <text x=\"376\" y=\"56\" fill=\"#5BC79A\" font-size=\"12\" font-weight=\"700\">app.js</text>\n  <text x=\"376\" y=\"80\" fill=\"#F4F6F2\" font-size=\"12\" font-family=\"monospace\">add(2, 3)</text>\n  <text x=\"376\" y=\"100\" fill=\"#9BA39D\" font-size=\"9\">берёт и использует</text>\n</svg>\n<p>⚠️ <b>Частые ошибки:</b></p>\n<span class=\"fix\"><span class=\"was\">import { add } from \"math.js\"</span> → <span class=\"now\">import { add } from \"./math.js\"</span><br><span class=\"muted2\">путь к своему файлу начинается с ./ — иначе браузер ищет не там</span></span>\n<span class=\"fix\"><span class=\"was\">import add from \"./math.js\" (для именованного экспорта)</span> → <span class=\"now\">import { add } from \"./math.js\"</span><br><span class=\"muted2\">именованный экспорт импортируют в фигурных скобках, default — без них</span></span>\n<span class=\"fix\"><span class=\"was\">&lt;script src=\"app.js\"&gt;</span> → <span class=\"now\">&lt;script type=\"module\" src=\"app.js\"&gt;</span><br><span class=\"muted2\">без type=\"module\" браузер не понимает import и выдаёт ошибку</span></span>",
quiz:[{"q":"Что делает export перед функцией?","o":["Делает её доступной для импорта в других файлах","Запускает её сразу","Удаляет её","Делает её приватной"],"a":0,"e":"export открывает функцию наружу, чтобы её можно было импортировать."},{"t":"cloze","q":"Дополни: отдать функцию и взять её в другом файле","code":"// math.js\n{0} function add(a,b){ return a+b; }\n\n// app.js\n{1} { add } from \"./math.js\";","gaps":["export","import"],"e":"export отдаёт наружу, import берёт в другом файле."},{"t":"bug","q":"В какой строке ошибка в импорте именованного экспорта?","code":["// math.js: export function add(a,b){return a+b}","import add from \"./math.js\";","console.log(add(2,3));"],"a":1,"e":"Именованный экспорт импортируют в фигурных скобках: import { add } from ..."},{"t":"pairs","q":"Соедини запись с её смыслом","pairs":[["export","отдать наружу"],["import","взять в другом файле"],["export default","главный экспорт файла"],["type=\"module\"","включить модули в браузере"]],"e":"export отдаёт, import берёт, default — главный экспорт, type=module включает поддержку."},{"q":"Как импортируют export default?","o":["Без фигурных скобок, под любым именем","Только в фигурных скобках","Через require","Никак"],"a":0,"e":"default-экспорт берут без { } и называют как хочешь."}],
practice:{type:"js",task:"<p><b>Что делаем:</b> разложить код на два «файла» — один отдаёт функцию, другой её берёт. (Здесь два файла показаны комментариями в одном окне; кнопка «Запустить» для модулей не сработает — проверка идёт по коду.)</p><p><b>Шаги:</b></p><ol><li>В блоке «файл math.js» напиши функцию и поставь перед ней export.</li><li>В блоке «файл app.js» импортируй её: import { имя } from \"./math.js\".</li><li>Вызови функцию и подготовь вывод результата.</li></ol>",starter:"// ===== файл math.js =====\n// TODO: объяви функцию и отдай её наружу ключевым словом\n\n// ===== файл app.js =====\n// TODO: возьми функцию из соседнего файла ./math.js и вызови её\n",checks:[{t:"Есть export (функции, const или default)",fn:c=>/export\s+(default\s+|function\s+|const\s+|let\s+|class\s+)/.test(c)},{t:"Есть import ... from \"./...\"",fn:c=>/import\s+[\s\S]*?from\s+["']\.\//.test(c)},{t:"Импорт именованного экспорта в фигурных скобках или default",fn:c=>/import\s+(\{[^}]+\}|[A-Za-z_$][\w$]*)\s+from/.test(c)}],hint:"// math.js\\nexport function add(a,b){return a+b;}\\n// app.js\\nimport { add } from \"./math.js\";\\nconsole.log(add(2,3));"},
res:[["learn.javascript.ru: Модули, введение","url","https://learn.javascript.ru/modules-intro"],
 ["learn.javascript.ru: Экспорт и импорт","url","https://learn.javascript.ru/import-export"],
 ["MDN: Модули JavaScript (рус.)","url","https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Modules"],
 ["ES-модули import/export просто","yt","javascript модули import export для начинающих"]]},
{id:"c0",title:"C++ · Инструменты и первая программа",
theory:`
<p>🎯 <b>Зачем это тебе:</b> код сам по себе — просто текст. Чтобы он заработал, нужен <b>компилятор</b> — он переводит твой C++ в настоящую программу. Настроим окружение и запустим первую программу: это Этап 0, без него дальше никак.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Что нужно поставить</h3>
<ul style="margin:6px 0 6px 18px;padding:0">
<li><b>Компилятор</b> — превращает <code>.cpp</code> в программу. macOS: в терминале <code>xcode-select --install</code> (даст <code>clang++</code>). Windows: MinGW-w64. Быстрый старт без установки — онлайн-компилятор (ссылка ниже).</li>
<li><b>Редактор</b> — VS Code + расширение C/C++.</li>
<li><b>Терминал</b> — где ты запускаешь компиляцию.</li>
</ul>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Первая программа</h3>
<pre class="demo">#include &lt;iostream&gt;
using namespace std;

int main() {
    cout &lt;&lt; "Hello, world!" &lt;&lt; endl;
    return 0;
}</pre>
<p>Разбор построчно: <code>#include &lt;iostream&gt;</code> подключает ввод-вывод. <code>using namespace std;</code> — чтобы писать <code>cout</code>, а не <code>std::cout</code>. <code>int main()</code> — точка входа, отсюда программа стартует. <code>cout &lt;&lt; ...</code> печатает в консоль, <code>endl</code> — перевод строки. <code>return 0;</code> — «программа завершилась успешно».</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Как скомпилировать и запустить</h3>
<pre class="demo">clang++ main.cpp -o main
./main</pre>
<p>Разбор: первая команда компилирует <code>main.cpp</code> в исполняемый файл <code>main</code>. Вторая — запускает его. Это и есть суть компилируемого языка: сначала перевели весь код в программу, потом запустили.</p>
<svg viewBox="0 0 600 120" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="c0a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker></defs>
  <rect x="18" y="40" width="130" height="46" rx="9" fill="#1C201E" stroke="#B9FF47"/>
  <text x="83" y="60" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700" font-family="monospace">main.cpp</text>
  <text x="83" y="76" text-anchor="middle" fill="#9BA39D" font-size="9">твой текст</text>
  <line x1="150" y1="63" x2="216" y2="63" stroke="#B9FF47" stroke-width="2" marker-end="url(#c0a)"/>
  <text x="183" y="54" text-anchor="middle" fill="#B9FF47" font-size="9">clang++</text>
  <rect x="220" y="40" width="150" height="46" rx="9" fill="#1C201E" stroke="#FFD34D"/>
  <text x="295" y="60" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700" font-family="monospace">main</text>
  <text x="295" y="76" text-anchor="middle" fill="#9BA39D" font-size="9">готовая программа</text>
  <line x1="372" y1="63" x2="438" y2="63" stroke="#B9FF47" stroke-width="2" marker-end="url(#c0a)"/>
  <text x="405" y="54" text-anchor="middle" fill="#B9FF47" font-size="9">./main</text>
  <rect x="442" y="40" width="140" height="46" rx="9" fill="#141716" stroke="#37936F"/>
  <text x="512" y="60" text-anchor="middle" fill="#F4F6F2" font-size="12" font-weight="700">Hello, world!</text>
  <text x="512" y="76" text-anchor="middle" fill="#9BA39D" font-size="9">вывод в терминал</text>
</svg>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">забыл ; в конце строки</span> → <span class="now">cout &lt;&lt; "Hi";</span><br><span class="muted2">почти каждая команда в C++ заканчивается точкой с запятой</span></span>
<span class="fix"><span class="was">нет #include &lt;iostream&gt;</span> → <span class="now">добавь его сверху</span><br><span class="muted2">без него компилятор не знает, что такое cout</span></span>
<span class="fix"><span class="was">запускаю .cpp напрямую</span> → <span class="now">сначала компилируй, потом ./main</span><br><span class="muted2">C++ — компилируемый язык: файл-исходник сам не запускается</span></span>`,
quiz:[
 {q:"Что делает компилятор?",o:["Превращает исходный код в исполняемую программу","Открывает сайты","Рисует интерфейс","Хранит файлы"],a:0,e:"Компилятор переводит твой .cpp в программу, которую можно запустить."},
 {t:"order",q:"Собери программу «Hello, world»",lines:["#include <iostream>","using namespace std;","int main() {","    cout << \"Hello, world!\" << endl;","    return 0;","}"],e:"Подключаем ввод-вывод, открываем main, печатаем, возвращаем 0, закрываем скобку."},
 {t:"output",q:"Что выведет программа?",code:"int x = 5;\ncout << x * 2;",o:["10","5","x * 2","52"],a:0,e:"x равен 5, 5 * 2 = 10."},
 {t:"bug",q:"В какой строке ошибка?",code:["#include <iostream>","using namespace std;","int main() {","    cout << \"Hi\"","    return 0;","}"],a:3,e:"После cout << \"Hi\" пропущена точка с запятой ;"},
 {t:"cloze",q:"Дострой программу",code:"{0} <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hi\";\n    {1} 0;\n}",gaps:["#include","return"],e:"#include подключает библиотеку, return 0 завершает main."},
 {q:"Чем компилируемый язык (C++) отличается от интерпретируемого?",o:["Компилятор заранее переводит весь код в программу, а интерпретатор выполняет построчно на лету","Ничем","Компилируемый медленнее","Интерпретируемый не нужен"],a:0,e:"C++ компилируется целиком заранее — потому и быстрый; JS в браузере интерпретируется на лету."}],
drill:{
 intro:`<p><b>Что делаем:</b> ставим окружение и запускаем первую программу у себя. Отмечай задачи по мере выполнения — за все получишь XP.</p>`,
 tasks:[
  {t:"Установи компилятор и редактор (macOS: <code>xcode-select --install</code>; Windows: MinGW-w64; + VS Code с расширением C/C++).",link:["VS Code: настройка C++","url","https://code.visualstudio.com/docs/languages/cpp"]},
  {t:"Скомпилируй и запусти «Hello, world» из терминала: <code>clang++ main.cpp -o main && ./main</code>. Пока нет установки — попробуй в онлайн-компиляторе.",link:["Онлайн-компилятор C++","url","https://www.programiz.com/cpp-programming/online-compiler/"]},
  {t:"Заведи аккаунты на Stepik и Codeforces — там будет практика с автопроверкой.",link:["Stepik — курсы C++","url","https://stepik.org/catalog/search?query=C%2B%2B"]}]},
res:[
 ["C++ с нуля — плейлист","yt","c++ для начинающих с нуля первый урок"],
 ["learncpp.com — эталонный справочник","url","https://www.learncpp.com"],
 ["Stepik — курсы по C++","url","https://stepik.org/catalog/search?query=C%2B%2B"],
 ["acmp.ru — задачи для начинающих","url","https://acmp.ru/index.asp?main=tasks"]]},

{id:"c1",title:"C++ · Переменные, типы и ввод-вывод",
theory:`
<p>🎯 <b>Зачем это тебе:</b> любая программа работает с данными: числа, текст, флаги. <b>Переменные</b> их хранят, а <code>cin</code>/<code>cout</code> — общаются с пользователем. Это первый настоящий кирпич: дальше на нём стоят условия, циклы и всё остальное.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Типы данных</h3>
<p>В C++ у каждой переменной есть <b>тип</b> — что именно в ней лежит:</p>
<table class="simple"><tr><th>Тип</th><th>Что хранит</th><th>Пример</th></tr>
<tr><td><code>int</code></td><td>целое число</td><td>42, -7</td></tr>
<tr><td><code>double</code></td><td>дробное число</td><td>3.14</td></tr>
<tr><td><code>char</code></td><td>один символ</td><td>'A'</td></tr>
<tr><td><code>bool</code></td><td>да / нет</td><td>true, false</td></tr>
<tr><td><code>string</code></td><td>текст</td><td>"hello"</td></tr></table>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Объявление и присваивание</h3>
<pre class="demo">int age = 20;
double pi = 3.14;
string name = "Emil";</pre>
<p>Разбор: сначала тип, потом имя, потом (по желанию) <code>=</code> и значение. Переменная — это «коробка с ярлыком»: у неё есть имя, тип и содержимое, которое можно менять.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Ввод и вывод</h3>
<pre class="demo">int n;
cin &gt;&gt; n;              // прочитать число с клавиатуры
cout &lt;&lt; n * n;         // вывести квадрат</pre>
<p>Разбор: <code>cout &lt;&lt; ...</code> печатает на экран (стрелки «толкают» данные в вывод). <code>cin &gt;&gt; ...</code> читает то, что ввёл пользователь, в переменную. Можно печатать несколько значений подряд: <code>cout &lt;&lt; "Ответ: " &lt;&lt; n;</code>.</p>
<svg viewBox="0 0 600 120" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="c1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker></defs>
  <rect x="16" y="40" width="140" height="48" rx="9" fill="#1C201E" stroke="#B9FF47"/>
  <text x="86" y="60" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700">клавиатура</text>
  <text x="86" y="77" text-anchor="middle" fill="#9BA39D" font-size="9" font-family="monospace">cin (ввод)</text>
  <line x1="158" y1="64" x2="222" y2="64" stroke="#B9FF47" stroke-width="2" marker-end="url(#c1a)"/>
  <rect x="226" y="36" width="150" height="56" rx="10" fill="#141716" stroke="#FFD34D"/>
  <text x="301" y="58" text-anchor="middle" fill="#FFD34D" font-size="13" font-weight="800">n = 5</text>
  <text x="301" y="76" text-anchor="middle" fill="#9BA39D" font-size="9">переменная (коробка)</text>
  <line x1="378" y1="64" x2="442" y2="64" stroke="#B9FF47" stroke-width="2" marker-end="url(#c1a)"/>
  <rect x="446" y="40" width="140" height="48" rx="9" fill="#1C201E" stroke="#37936F"/>
  <text x="516" y="60" text-anchor="middle" fill="#F4F6F2" font-size="12" font-weight="700">экран</text>
  <text x="516" y="77" text-anchor="middle" fill="#9BA39D" font-size="9" font-family="monospace">cout (вывод)</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Арифметика и коварное деление</h3>
<pre class="demo">cout &lt;&lt; 7 / 2;    // 3, а не 3.5 — целочисленное деление!
cout &lt;&lt; 7 % 2;    // 1 — остаток от деления
cout &lt;&lt; 7.0 / 2;  // 3.5 — если хоть одно дробное</pre>
<p>Разбор: если оба числа целые (<code>int</code>), деление <code>/</code> отбрасывает дробную часть. Оператор <code>%</code> даёт остаток. Хочешь дробный результат — сделай одно из чисел <code>double</code> (например <code>7.0</code>). Это ошибка №1 у новичков.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">int x = 3.14;</span> → <span class="now">double x = 3.14;</span><br><span class="muted2">int обрежет дробную часть до 3</span></span>
<span class="fix"><span class="was">cout &lt;&lt; 7 / 2 (ждёшь 3.5)</span> → <span class="now">cout &lt;&lt; 7.0 / 2;</span><br><span class="muted2">целые дают целое — сделай число дробным</span></span>
<span class="fix"><span class="was">if (x = 5)</span> → <span class="now">if (x == 5)</span><br><span class="muted2">= это присваивание, == это сравнение</span></span>`,
quiz:[
 {t:"output",q:"Что выведет код?",code:"int x = 7;\ncout << x / 2;",o:["3","3.5","4","3,5"],a:0,e:"Оба числа целые → целочисленное деление: 7 / 2 = 3 (дробь отбрасывается)."},
 {q:"Какой тип подходит для числа 3.14?",o:["int","double","char","bool"],a:1,e:"Дробные числа хранит double."},
 {t:"pairs",q:"Соедини тип с примером значения",pairs:[["int","42"],["double","3.14"],["char","'A'"],["string","\"hello\""]],e:"int — целое, double — дробное, char — один символ, string — текст."},
 {t:"cloze",q:"Дострой ввод и вывод",code:"int n;\n{0} n;\n{1} n * n;",gaps:[["cin >>","cin>>"],["cout <<","cout<<"]],e:"cin >> читает в переменную, cout << печатает результат."},
 {t:"output",q:"Что выведет код?",code:"cout << 5 % 2;",o:["1","2","2.5","0"],a:0,e:"% — остаток от деления: 5 = 2*2 + 1, остаток 1."},
 {t:"bug",q:"В какой строке ошибка?",code:["int x = 5;","double pi = 3.14;","cout << x","cout << pi;"],a:2,e:"После cout << x пропущена точка с запятой ;"},
 {t:"order",q:"Собери программу: прочитать число и вывести его квадрат",lines:["int n;","cin >> n;","cout << n * n;"],e:"Объявляем переменную, читаем в неё, выводим квадрат."},
 {q:"Чему равно 10 / 3 в C++ (оба int)?",o:["3","3.33","4","3.3"],a:0,e:"Целочисленное деление: дробная часть отбрасывается, остаётся 3."}],
drill:{
 intro:`<p><b>Что делаем:</b> закрепляем переменные и ввод-вывод на реальных задачах с автопроверкой. Отмечай по мере решения.</p>`,
 tasks:[
  {t:"Реши 5–7 простых задач на ввод-вывод и арифметику (сумма, произведение, остаток).",link:["acmp.ru — задачи для начинающих","url","https://acmp.ru/index.asp?main=tasks"]},
  {t:"Пройди тему «Переменные, ввод и вывод» на курсе по C++ (там автопроверка каждой задачи).",link:["Stepik — курсы C++","url","https://stepik.org/catalog/search?query=C%2B%2B"]},
  {t:"Напиши сам: программа читает два целых числа и выводит их сумму, произведение и остаток от деления.",link:["Онлайн-компилятор C++","url","https://www.programiz.com/cpp-programming/online-compiler/"]}]},
res:[
 ["Переменные и типы в C++","yt","c++ переменные типы данных для начинающих"],
 ["learncpp.com — переменные","url","https://www.learncpp.com/cpp-tutorial/introduction-to-objects-and-variables/"],
 ["Stepik — курсы по C++","url","https://stepik.org/catalog/search?query=C%2B%2B"],
 ["acmp.ru — задачи для начинающих","url","https://acmp.ru/index.asp?main=tasks"]]}

];

/* ============ CONTENT: ENGLISH ============ */
const ENG=[
{id:"l1",title:"Present Simple vs Present Continuous",
theory:`
<p>🎯 <b>Зачем это тебе:</b> это два самых частых времени в английском — и их путают чаще всего. Твоё «I'm learn English» из теста как раз отсюда. Разберёшься — сможешь спокойно рассказать и про свой режим («учусь каждый день»), и про то, что происходит прямо сейчас («сейчас пишу код»). Без этого любая фраза о себе звучит криво.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Present Simple — регулярно, вообще, всегда</h3>
<p>Используем для привычек, фактов, расписания — того, что происходит <b>обычно</b>, а не в конкретный момент.</p>
<pre class="demo">I learn English every day.       (+)
I don't learn Spanish.           (−)
Do you learn English?  — Yes, I do. (?)</pre>
<p>Разбор: в утверждении глагол в начальной форме. Отрицание — через <code>don't</code>, вопрос — через <code>do</code> в начале. Но для <b>he / she / it</b> всё меняется — появляется <b>-s</b>, а помощник становится <code>does / doesn't</code>:</p>
<table class="simple"><tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td>+</td><td>I work</td><td>She work<b>s</b></td></tr>
<tr><td>−</td><td>I <b>don't</b> work</td><td>She <b>doesn't</b> work</td></tr>
<tr><td>?</td><td><b>Do</b> you work?</td><td><b>Does</b> she work?</td></tr></table>
<p><b>Правило -s</b> для he/she/it: обычно просто <code>+s</code> (work→works). После <code>o, s, sh, ch, x</code> добавляем <code>-es</code>: <code>go→goes</code>, <code>watch→watches</code>. Если слово кончается на согласную + <code>y</code>, меняем на <code>-ies</code>: <code>study→studies</code>, <code>try→tries</code>.</p>
<p><b>Маркеры Simple</b> (слова-подсказки): <code>every day</code>, <code>usually</code>, <code>often</code>, <code>always</code>, <code>sometimes</code>, <code>never</code>, <code>on Mondays</code>.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Present Continuous — прямо сейчас</h3>
<p>Действие идёт <b>в момент речи</b> или в текущий период («в эти дни»). Формула: <b>am / is / are + глагол-ing</b>.</p>
<pre class="demo">I am learning English now.        (+)
He is not (isn't) sleeping.       (−)
Are you working at the moment?    (?)</pre>
<p>Разбор: <code>I am</code>, <code>he / she / it is</code>, <code>you / we / they are</code>. Отрицание — просто <code>not</code> после am/is/are. Вопрос — am/is/are в начало.</p>
<p><b>Правило -ing:</b> обычно <code>+ing</code> (go→going). Немую <code>-e</code> на конце убираем: <code>make→making</code>, <code>write→writing</code>. Короткое слово «гласная+согласная» — согласную удваиваем: <code>run→running</code>, <code>sit→sitting</code>.</p>
<p><b>Маркеры Continuous:</b> <code>now</code>, <code>right now</code>, <code>at the moment</code>, <code>Look!</code>, <code>Listen!</code>, <code>today</code>, <code>these days</code>.</p>

<svg viewBox="0 0 600 165" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <text x="30" y="28" fill="#B9FF47" font-size="12" font-weight="700">Present Simple · I learn</text>
  <line x1="30" y1="48" x2="565" y2="48" stroke="#37936F" stroke-width="2"/>
  <polygon points="575,48 563,43 563,53" fill="#37936F"/>
  <circle cx="90" cy="48" r="5" fill="#B9FF47"/>
  <circle cx="190" cy="48" r="5" fill="#B9FF47"/>
  <circle cx="290" cy="48" r="5" fill="#B9FF47"/>
  <circle cx="390" cy="48" r="5" fill="#B9FF47"/>
  <circle cx="490" cy="48" r="5" fill="#B9FF47"/>
  <text x="30" y="72" fill="#9BA39D" font-size="10">повторяется снова и снова · every day</text>
  <text x="30" y="112" fill="#FFD34D" font-size="12" font-weight="700">Present Continuous · I am learning</text>
  <line x1="30" y1="132" x2="565" y2="132" stroke="#37936F" stroke-width="2"/>
  <polygon points="575,132 563,127 563,137" fill="#37936F"/>
  <circle cx="297" cy="132" r="15" fill="none" stroke="#FFD34D" stroke-opacity="0.35" stroke-width="2"/>
  <circle cx="297" cy="132" r="7" fill="#FFD34D"/>
  <text x="297" y="158" text-anchor="middle" fill="#FFD34D" font-size="10" font-weight="700">прямо сейчас · now</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Как выбрать за секунду</h3>
<p>Спроси себя: «это вообще / всегда» или «именно сейчас»? «Каждый день, обычно» → Simple. «Сейчас, в этот момент, смотри!» → Continuous. Сравни: <i>I <b>read</b> books</i> (я вообще читаю книги) vs <i>I <b>am reading</b> a book</i> (сейчас читаю конкретную).</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Глаголы состояния — не бывают в -ing</h3>
<p>Есть глаголы про чувства и мысли, а не про действие: <code>want, like, love, need, know, understand, believe</code>. Их <b>не ставят</b> в Continuous, даже если «прямо сейчас»:</p>
<pre class="demo">I want coffee now.      (НЕ "I am wanting")
I understand you.       (НЕ "I am understanding")</pre>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">5. Полезные фразы о себе</h3>
<p>Их можно выучить целиком и говорить о себе уже сегодня:</p>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>I live in Russia.</td><td>Я живу в России.</td></tr>
<tr><td>I'm learning to code.</td><td>Я учусь программировать.</td></tr>
<tr><td>I usually study in the evening.</td><td>Обычно я занимаюсь вечером.</td></tr>
<tr><td>Right now I'm working on a project.</td><td>Прямо сейчас я работаю над проектом.</td></tr>
<tr><td>I don't speak English well yet.</td><td>Я пока не очень хорошо говорю по-английски.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I'm learn English</span> → <span class="now">I'm learning English</span><br><span class="muted2">после am/is/are глагол всегда с -ing (твоя ошибка из теста)</span></span>
<span class="fix"><span class="was">She go to work</span> → <span class="now">She goes to work</span><br><span class="muted2">he/she/it в Present Simple требует -s</span></span>
<span class="fix"><span class="was">Does she works?</span> → <span class="now">Does she work?</span><br><span class="muted2">-s уже есть в does — сам глагол без -s</span></span>
<span class="fix"><span class="was">I am wanting coffee</span> → <span class="now">I want coffee</span><br><span class="muted2">глаголы состояния (want, like, know) не ставят в -ing</span></span>`,
ex:[
 {t:"mc",q:"She ___ to work every day.",o:["go","goes","going","is going"],a:1,e:"he/she/it + -s, а «every day» = Present Simple."},
 {t:"mc",q:"Quiet, please! I ___ to the news right now.",o:["listen","am listening","listening","am listen"],a:1,e:"«Right now» = Continuous: am + listening."},
 {t:"fill",q:"He ___ (study) English on Mondays.",a:["studies"],e:"study → studies (согласная + y → -ies)."},
 {t:"mc",q:"___ she work at a bank?",o:["Do","Does","Is","Are"],a:1,e:"he/she/it в вопросе Present Simple → Does."},
 {t:"cloze",q:"Дострой оба времени в одном предложении",code:"Every day I {0} (drink) coffee, but right now I {1} (drink) tea.",gaps:["drink",["am drinking","'m drinking"]],e:"«Every day» → Simple (drink); «right now» → Continuous (am drinking)."},
 {t:"order",q:"Собери предложение (что происходит сейчас)",lines:["I","am","writing","code","now"],e:"Present Continuous: подлежащее + am/is/are + V-ing. → I am writing code now."},
 {t:"pairs",q:"Соедини маркер с его временем",pairs:[["every day","Present Simple"],["now","Present Continuous"],["usually","Present Simple"],["Look!","Present Continuous"]],e:"Регулярность (every day, usually) → Simple. Момент речи (now, Look!) → Continuous."},
 {t:"fill",q:"My brother ___ (not/like) coffee.",a:["doesn't like","does not like"],e:"Отрицание в Simple для he: doesn't + глагол без -s.",w:200},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I usually drink tea.","She is working now.","He go to school every day.","They are playing football."],a:2,e:"He go → He goes: для he/she/it в Present Simple нужно -s."},
 {t:"mc",q:"Выбери верное. «Я хочу кофе прямо сейчас»:",o:["I am wanting coffee now","I want coffee now","I wanting coffee now","I am want coffee now"],a:1,e:"want — глагол состояния, его не ставят в -ing, даже со словом now."},
 {t:"mc",q:"«Я учу английский, потому что хочу стать разработчиком»:",o:["I'm learn English because I will be a developer","I'm learning English because I want to become a developer","I learning English because I be developer","I am learn English for be developer"],a:1,e:"am + learning (сейчас) + want to become (цель)."}],
res:[
 ["Present Simple vs Continuous — разбор","yt","present simple vs present continuous разница для начинающих"],
 ["engblog.ru: грамматика времён","url","https://engblog.ru/grammar"],
 ["British Council: грамматика","url","https://learnenglish.britishcouncil.org/grammar"],
 ["BBC Learning English","url","https://www.bbc.co.uk/learningenglish/english/grammar"]]},

{id:"l2",title:"Past Simple: говорим о прошлом",
theory:`
<p>🎯 <b>Зачем это тебе:</b> вся твоя история — «я бросил хоккей», «я начал учить код» — это прошедшее время. Past Simple рассказывает о законченных действиях в прошлом. Без него не расскажешь ни про свой путь, ни про то, что сделал вчера.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Правильные глаголы: просто + -ed</h3>
<pre class="demo">I played hockey for ten years.
She worked late yesterday.</pre>
<p>Разбор: к обычным глаголам добавляем <b>-ed</b>. Мелкие правила написания: если слово кончается на <code>-e</code>, добавляем только <code>-d</code> (<code>like→liked</code>). Согласная + <code>y</code> → <code>-ied</code> (<code>study→studied</code>, <code>try→tried</code>). Короткое «гласная+согласная» — согласную удваиваем (<code>stop→stopped</code>, <code>plan→planned</code>).</p>
<p><b>Маркеры прошлого:</b> <code>yesterday</code>, <code>last week / year</code>, <code>two days ago</code>, <code>in 2019</code>, <code>when I was young</code>.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Неправильные глаголы — учат наизусть</h3>
<p>Самые частые формы стоит просто запомнить — они встречаются постоянно:</p>
<table class="simple"><tr><th>Глагол</th><th>Прошедшее</th><th>Перевод</th></tr>
<tr><td>go</td><td>went</td><td>идти</td></tr><tr><td>see</td><td>saw</td><td>видеть</td></tr>
<tr><td>have</td><td>had</td><td>иметь</td></tr><tr><td>make</td><td>made</td><td>делать</td></tr>
<tr><td>get</td><td>got</td><td>получать</td></tr><tr><td>take</td><td>took</td><td>брать</td></tr>
<tr><td>begin</td><td>began</td><td>начинать</td></tr><tr><td>write</td><td>wrote</td><td>писать</td></tr>
<tr><td>read</td><td>read</td><td>читать (пишется так же, читается «ред»)</td></tr>
<tr><td>find</td><td>found</td><td>находить</td></tr></table>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. was / were — «был / была / были»</h3>
<p>У глагола <code>to be</code> в прошлом две формы: <code>was</code> (I / he / she / it) и <code>were</code> (you / we / they).</p>
<pre class="demo">I was a hockey player.       They were tired.
I wasn't ready.              Were you at home?</pre>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Отрицание и вопрос — через did</h3>
<pre class="demo">I didn't see the film.   (НЕ "didn't saw")
Did you finish the task? (НЕ "Did you finished")</pre>
<p>Разбор: <code>did</code> уже несёт прошедшее время, поэтому сам глагол возвращается в <b>начальную форму</b>. Это правило спотыкает почти всех — держи его в голове. (С <code>was/were</code> помощник <code>did</code> не нужен: <i>Were you...?</i>, <i>I wasn't...</i>.)</p>

<svg viewBox="0 0 600 145" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="80" x2="565" y2="80" stroke="#37936F" stroke-width="2"/>
  <polygon points="575,80 563,75 563,85" fill="#37936F"/>
  <line x1="500" y1="52" x2="500" y2="96" stroke="#FFD34D" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="500" y="112" text-anchor="middle" fill="#FFD34D" font-size="11" font-weight="700">СЕЙЧАС</text>
  <circle cx="150" cy="80" r="12" fill="#1C201E" stroke="#B9FF47" stroke-width="2"/>
  <text x="150" y="85" text-anchor="middle" fill="#B9FF47" font-size="13" font-weight="800">✓</text>
  <text x="150" y="52" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700">I watched</text>
  <text x="150" y="112" text-anchor="middle" fill="#9BA39D" font-size="9">yesterday · ago · last week</text>
  <text x="315" y="76" fill="#9BA39D" font-size="10" font-style="italic">действие закончилось в прошлом</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">5. Полезные фразы о своём пути</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>I was born in 2005.</td><td>Я родился в 2005.</td></tr>
<tr><td>I played hockey for many years.</td><td>Я много лет играл в хоккей.</td></tr>
<tr><td>Last year I started learning to code.</td><td>В прошлом году я начал учиться кодить.</td></tr>
<tr><td>I used to play sports.</td><td>Раньше я занимался спортом.</td></tr>
<tr><td>It was difficult, but I didn't give up.</td><td>Было трудно, но я не сдался.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I didn't saw it</span> → <span class="now">I didn't see it</span><br><span class="muted2">после did/didn't глагол в начальной форме</span></span>
<span class="fix"><span class="was">Did you finished?</span> → <span class="now">Did you finish?</span><br><span class="muted2">did уже показывает прошлое — глагол без -ed</span></span>
<span class="fix"><span class="was">I goed home</span> → <span class="now">I went home</span><br><span class="muted2">go — неправильный глагол, форму учат наизусть</span></span>
<span class="fix"><span class="was">I was play hockey</span> → <span class="now">I played hockey</span><br><span class="muted2">не смешивай was и глагол — либо was (был), либо played (играл)</span></span>`,
ex:[
 {t:"fill",q:"I ___ (watch) a film yesterday.",a:["watched"],e:"Правильный глагол + -ed: watched."},
 {t:"fill",q:"She ___ (study) all day yesterday.",a:["studied"],e:"study → studied (согласная + y → -ied)."},
 {t:"pairs",q:"Соедини глагол с его прошедшей формой",pairs:[["go","went"],["see","saw"],["have","had"],["make","made"]],e:"Это неправильные глаголы — их формы просто запоминают."},
 {t:"mc",q:"I ___ my homework an hour ago.",o:["finish","finished","have finished","finishing"],a:1,e:"«ago» = законченное прошлое → finished."},
 {t:"mc",q:"They ___ tired after the game.",o:["was","were","did","are"],a:1,e:"they → were (были)."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I watched a good film.","She went home early.","He didn't saw the message.","They played chess yesterday."],a:2,e:"didn't saw → didn't see: после did глагол в начальной форме."},
 {t:"cloze",q:"Впиши прошедшие формы (оба глагола неправильные)",code:"Yesterday she {0} (go) to Moscow and {1} (write) a letter.",gaps:["went","wrote"],e:"go → went, write → wrote."},
 {t:"order",q:"Собери вопрос в прошедшем времени",lines:["Did","you","play","hockey","yesterday"],e:"Вопрос через did + начальная форма: Did you play hockey yesterday?"},
 {t:"fill",q:"I ___ (not/have) time yesterday.",a:["didn't have","did not have"],e:"didn't + have (начальная форма, не had!).",w:200},
 {t:"mc",q:"Last year I ___ learning to code.",o:["start","started","was start","did started"],a:1,e:"Правильный глагол в прошлом: started."},
 {t:"mc",q:"«Я закончил хоккейную карьеру»:",o:["I finish my hockey career","I finished my hockey career","I have finish hockey carrera","I was finish my career"],a:1,e:"finished + career (career, не carrera — это испанский)."}],
res:[
 ["Past Simple простыми словами","yt","past simple прошедшее время английский для начинающих"],
 ["Неправильные глаголы: таблица","url","https://engblog.ru/irregular-verbs"],
 ["British Council: Past simple","url","https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/past-simple"],
 ["YouGlish — услышать в речи","url","https://youglish.com"]]},

{id:"l3",title:"Будущее и цели: will, going to, want to become",
theory:`
<p>🎯 <b>Зачем это тебе:</b> ты идёшь к цели — стать разработчиком. Чтобы говорить о планах и мечтах («я собираюсь выучить JavaScript», «хочу получить работу»), нужны формы будущего. Это самые важные фразы для твоего пути, и именно в них у тебя были ошибки.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. will — решение и обещание в момент речи</h3>
<pre class="demo">I will help you.            (+)
I won't (will not) forget.  (−)
Will you come? — Yes, I will. (?)</pre>
<p>Разбор: <code>will + глагол</code> в начальной форме, для всех лиц одинаково (I will, he will, they will). Отрицание — <code>won't</code>. Используем, когда решаем <b>прямо сейчас</b>: «телефон звонит — I'll answer», или обещаем: «I'll practise every day».</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. going to — план, который уже есть</h3>
<pre class="demo">I'm going to learn JavaScript.
She's going to look for a job.
Are you going to study tonight?</pre>
<p>Разбор: <code>am / is / are + going to + глагол</code>. Используем, когда решение принято <b>заранее</b>, есть намерение. Сравни: <i>I'll call him</i> (решил сейчас) vs <i>I'm going to call him</i> (уже собирался).</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Волшебное «to» после want / need / would like / goal</h3>
<p>После этих слов всегда идёт <b>to + глагол</b>. Пропустить <code>to</code> — самая частая ошибка (у тебя тоже была: «i need be»).</p>
<pre class="demo">I want <b>to</b> become a developer.
I need <b>to</b> practise every day.
I'd like <b>to</b> get a junior job.
My goal is <b>to</b> earn my first money in code.</pre>
<table class="simple"><tr><th>Форма</th><th>Когда</th><th>Пример</th></tr>
<tr><td><b>will + V</b></td><td>решение сейчас, обещание</td><td>I will help you</td></tr>
<tr><td><b>going to + V</b></td><td>план (уже решил)</td><td>I'm going to learn JS</td></tr>
<tr><td><b>want to + V</b></td><td>желание, цель</td><td>I want to become a dev</td></tr>
<tr><td><b>need to + V</b></td><td>необходимость</td><td>I need to practise</td></tr></table>

<svg viewBox="0 0 600 170" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="188" y="82" width="387" height="26" fill="#B9FF47" fill-opacity="0.06"/>
  <line x1="30" y1="95" x2="565" y2="95" stroke="#37936F" stroke-width="2"/>
  <polygon points="575,95 563,90 563,100" fill="#37936F"/>
  <line x1="188" y1="72" x2="188" y2="118" stroke="#FFD34D" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="188" y="132" text-anchor="middle" fill="#FFD34D" font-size="10" font-weight="700">СЕЙЧАС</text>
  <text x="470" y="128" text-anchor="middle" fill="#9BA39D" font-size="10">будущее →</text>
  <rect x="212" y="20" width="108" height="44" rx="8" fill="#1C201E" stroke="#B9FF47"/>
  <text x="266" y="39" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700">will + V</text>
  <text x="266" y="55" text-anchor="middle" fill="#9BA39D" font-size="9">решил сейчас</text>
  <rect x="330" y="20" width="120" height="44" rx="8" fill="#1C201E" stroke="#FFD34D"/>
  <text x="390" y="39" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">going to + V</text>
  <text x="390" y="55" text-anchor="middle" fill="#9BA39D" font-size="9">план заранее</text>
  <rect x="460" y="20" width="108" height="44" rx="8" fill="#1C201E" stroke="#37936F"/>
  <text x="514" y="39" text-anchor="middle" fill="#5BC79A" font-size="12" font-weight="700">want to + V</text>
  <text x="514" y="55" text-anchor="middle" fill="#9BA39D" font-size="9">цель, желание</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Полезные фразы о целях</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>My goal is to become a junior developer.</td><td>Моя цель — стать джуном.</td></tr>
<tr><td>I'm planning to build my first project.</td><td>Я планирую сделать свой первый проект.</td></tr>
<tr><td>In a year I want to get a job in IT.</td><td>Через год я хочу получить работу в IT.</td></tr>
<tr><td>I'm going to practise every single day.</td><td>Я собираюсь заниматься каждый день.</td></tr>
<tr><td>I won't give up.</td><td>Я не сдамся.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I want become a developer</span> → <span class="now">I want to become a developer</span><br><span class="muted2">после want нужен to</span></span>
<span class="fix"><span class="was">I need be the greatest version</span> → <span class="now">I need to be the greatest version</span><br><span class="muted2">после need тоже нужен to</span></span>
<span class="fix"><span class="was">My goal is become junior</span> → <span class="now">My goal is to become a junior</span><br><span class="muted2">goal is → to become</span></span>
<span class="fix"><span class="was">I will to help</span> → <span class="now">I will help</span><br><span class="muted2">а вот после will частицы to НЕ бывает</span></span>`,
ex:[
 {t:"mc",q:"«Я хочу стать разработчиком»:",o:["I will developer","I want to become a developer","I want become developer","I be a developer"],a:1,e:"want + to + become + a developer."},
 {t:"mc",q:"I ___ learn CSS next week. I've already made a plan.",o:["will","am going to","want","going"],a:1,e:"План, решённый заранее → am going to."},
 {t:"mc",q:"— The phone is ringing! — OK, I ___ answer it.",o:["going to","will","want","am"],a:1,e:"Решение прямо сейчас → will."},
 {t:"mc",q:"Выбери верное. После will:",o:["I will to practise","I will practise","I will practising","I will practised"],a:1,e:"После will — глагол в начальной форме, без to."},
 {t:"cloze",q:"Впиши пропуски (про цель)",code:"My goal {0} to {1} a junior developer.",gaps:["is","become"],e:"My goal IS TO become a junior developer."},
 {t:"order",q:"Собери план на будущее",lines:["I","am","going","to","learn","JavaScript"],e:"Going to для плана: I am going to learn JavaScript."},
 {t:"pairs",q:"Соедини форму с её значением",pairs:[["will + V","решение сейчас"],["going to + V","план заранее"],["want to + V","желание, цель"],["need to + V","необходимость"]],e:"will — спонтанно, going to — план, want to — мечта, need to — надо."},
 {t:"mc",q:"I need ___ every day.",o:["practise","to practise","practising","for practise"],a:1,e:"После need нужен to + глагол."},
 {t:"fill",q:"She ___ (not/will) come tomorrow.",a:["won't","will not"],e:"will not = won't."},
 {t:"fill",q:"I'd like ___ (get) a job in IT.",a:["to get"],e:"После would like (I'd like) нужен to + глагол."},
 {t:"mc",q:"«Я не сдамся»:",o:["I don't give up","I won't give up","I'm not give up","I not give up"],a:1,e:"Будущее отрицание: won't + начальная форма."}],
res:[
 ["will или going to — разница","yt","will vs going to разница простыми словами"],
 ["engblog.ru: будущее время","url","https://engblog.ru/grammar"],
 ["Инфинитив с частицей to","yt","инфинитив с частицей to в английском"],
 ["British Council: грамматика","url","https://learnenglish.britishcouncil.org/grammar"]]},

{id:"l4",title:"Работа над ошибками: твой тест + артикли",
theory:`
<p>🎯 <b>Зачем это тебе:</b> самый полезный урок — разбор твоих собственных фраз. Ошибки здесь настоящие, твои, а не из учебника. Починим их — и сразу станет видно три направления роста: времена, «to» после want/need, и артикли a / an / the.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Твои фразы — до и после</h3>
<span class="fix"><span class="was">i'm learn english because i will be a developer</span><br>
<span class="now">I'm learning English because I want to become a developer.</span><br>
<span class="muted2">am + V-ing; want to become; I — всегда с большой буквы.</span></span>
<span class="fix"><span class="was">i'm 20 yars old and i start lerning new lenguge</span><br>
<span class="now">I'm 20 years old and I started learning a new language.</span><br>
<span class="muted2">years, learning, language; started — прошедшее.</span></span>
<span class="fix"><span class="was">i need be a greatest version on me</span><br>
<span class="now">I need to be the greatest version of myself.</span><br>
<span class="muted2">need TO be; the greatest; version OF myself.</span></span>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Артикли: a / an / the</h3>
<p>Артикль — маленькое слово перед существительным. Их у тебя не хватало («very interesting guy» без <code>a</code>).</p>
<ul style="margin:6px 0 6px 18px;padding:0">
<li><b>a / an</b> — «какой-то один, любой», когда говорим о предмете <b>впервые</b> или вообще: <i>I want <b>a</b> job.</i></li>
<li><b>an</b> — та же «a», но перед <b>гласным звуком</b>: <i>an apple, an hour, an interesting guy.</i></li>
<li><b>the</b> — «тот самый, конкретный», уже известный или единственный: <i><b>the</b> job I told you about, <b>the</b> greatest version.</i></li>
<li><b>без артикля</b> — с множественным «вообще» и с языками: <i>I like <b>books</b>. I speak <b>English</b>.</i></li>
</ul>
<svg viewBox="0 0 600 135" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="24" y="28" width="168" height="82" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="108" y="58" text-anchor="middle" fill="#B9FF47" font-size="20" font-weight="800">a</text>
  <text x="108" y="80" text-anchor="middle" fill="#F4F6F2" font-size="11">любой один</text>
  <text x="108" y="97" text-anchor="middle" fill="#9BA39D" font-size="9">a developer, a job</text>
  <rect x="204" y="28" width="168" height="82" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="288" y="58" text-anchor="middle" fill="#FFD34D" font-size="20" font-weight="800">an</text>
  <text x="288" y="80" text-anchor="middle" fill="#F4F6F2" font-size="11">один + гласный звук</text>
  <text x="288" y="97" text-anchor="middle" fill="#9BA39D" font-size="9">an apple, an hour</text>
  <rect x="384" y="28" width="192" height="82" rx="10" fill="#1C201E" stroke="#37936F"/>
  <text x="480" y="58" text-anchor="middle" fill="#5BC79A" font-size="20" font-weight="800">the</text>
  <text x="480" y="80" text-anchor="middle" fill="#F4F6F2" font-size="11">конкретный, известный</text>
  <text x="480" y="97" text-anchor="middle" fill="#9BA39D" font-size="9">the greatest version</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Мелочи, которые выдают уровень</h3>
<ul style="margin:6px 0 6px 18px;padding:0">
<li><b>I</b> — всегда с большой буквы, где бы ни стояло.</li>
<li><b>to look forward to</b> = ждать с нетерпением: <i>I look forward to my new life.</i></li>
<li><b>years old</b>, не «yars»; <b>a lot of</b>, не «alot».</li>
<li><b>of</b> = «из / чего-то»: <i>the best version <b>of</b> myself</i>.</li>
</ul>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Собери рассказ о себе</h3>
<p>Выучи этот абзац целиком — это готовое самопредставление:</p>
<pre class="demo">Hi! I'm Emil. I'm 20 years old and I live in Russia.
I used to play hockey, but now I'm learning to code.
My goal is to become a developer.
I'm not afraid of mistakes — I learn from them.
Wish me luck!</pre>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I am very interesting guy</span> → <span class="now">I am a very interesting guy</span><br><span class="muted2">перед «один любой» ставим a</span></span>
<span class="fix"><span class="was">good luck for me</span> → <span class="now">wish me luck</span><br><span class="muted2">устойчивое выражение — запомни целиком</span></span>
<span class="fix"><span class="was">version on me</span> → <span class="now">version of myself</span><br><span class="muted2">of = «чего-то»; myself = «себя»</span></span>`,
ex:[
 {t:"mc",q:"I am ___ interesting guy.",o:["very","a very","the very","an very"],a:1,e:"a + very + interesting + guy: перед «один любой» нужен артикль a."},
 {t:"mc",q:"I waited for ___ hour.",o:["a","an","the","—"],a:1,e:"hour начинается с гласного звука (h не читается) → an."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I am a developer.","I need to practise every day.","I look forward to my job.","I want become a developer."],a:3,e:"want become → want to become: после want нужен to."},
 {t:"cloze",q:"Впиши пропущенные слова",code:"I need {0} be {1} greatest version of myself.",gaps:["to","the"],e:"need TO be; THE greatest (конкретный, единственный лучший)."},
 {t:"mc",q:"«I look forward to my first job» означает:",o:["Я смотрю вперёд на работу","Я с нетерпением жду первую работу","Я ищу первую работу","Я боюсь первой работы"],a:1,e:"look forward to = ждать с нетерпением."},
 {t:"fill",q:"I'm 20 ___ old.",a:["years"],e:"years old (не yars)."},
 {t:"pairs",q:"Соедини ошибку с исправлением",pairs:[["I'm learn","I'm learning"],["want become","want to become"],["need be","need to be"],["iinteristing","interesting"]],e:"Твои реальные фразы из теста и их правильные формы."},
 {t:"order",q:"Собери свою главную фразу",lines:["I","want","to","become","a","developer"],e:"I want to become a developer — цель через want to + a developer."},
 {t:"fill",q:"The best version ___ myself. (предлог)",a:["of"],e:"version OF myself — of = «чего-то»."},
 {t:"mc",q:"Фраза без ошибок:",o:["I'm learn English every day","I learning English every day","I learn English every day","I am learn English every day"],a:2,e:"I learn (Simple) или I am learning (сейчас) — но не «I'm learn»."}],
res:[
 ["Артикли a / an / the простыми словами","yt","артикли a an the английский простыми словами"],
 ["engblog.ru: артикли","url","https://engblog.ru/articles-in-english"],
 ["British Council: Articles","url","https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/articles-1"],
 ["YouGlish — произношение фраз","url","https://youglish.com"]]},
{id:"l5",title:"Present Perfect: прошлое, которое важно сейчас",
theory:`
<p>🎯 <b>Зачем это тебе:</b> Present Perfect — про опыт и результат: «я уже сделал», «я никогда не был», «я только что закончил». Русскоязычные его вечно путают с простым прошедшим. Разберёшься — сможешь говорить о том, что успел в жизни, и это звучит по-взрослому.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Форма: have / has + V3</h3>
<pre class="demo">I have finished the task.     (have + V3)
She has finished the task.    (has для he/she/it)
I haven't started yet.        (−)
Have you finished?            (?)</pre>
<p>Разбор: <b>V3</b> — третья форма глагола (past participle). У правильных она совпадает с <code>-ed</code> (<code>finish→finished</code>), у неправильных её учат: <code>go→gone</code>, <code>see→seen</code>, <code>do→done</code>. Для he/she/it — <code>has</code>, для остальных — <code>have</code>.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Три случая, когда нужен Perfect</h3>
<ul style="margin:6px 0 6px 18px;padding:0">
<li><b>Опыт</b> («когда-нибудь / никогда»): <i>I <b>have</b> never <b>been</b> abroad. <b>Have</b> you ever <b>tried</b> Python?</i></li>
<li><b>Результат виден сейчас</b> (just / already / yet): <i>I <b>have just finished</b>. She <b>has already left</b>. I haven't done it <b>yet</b>.</i></li>
<li><b>Незаконченный период</b> (this week, today): <i>I <b>have written</b> three commits today.</i></li>
</ul>

<svg viewBox="0 0 600 150" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="95" x2="565" y2="95" stroke="#37936F" stroke-width="2"/>
  <polygon points="575,95 563,90 563,100" fill="#37936F"/>
  <line x1="470" y1="60" x2="470" y2="110" stroke="#FFD34D" stroke-width="2" stroke-dasharray="4 3"/>
  <text x="470" y="126" text-anchor="middle" fill="#FFD34D" font-size="11" font-weight="700">СЕЙЧАС</text>
  <circle cx="140" cy="95" r="9" fill="#1C201E" stroke="#B9FF47" stroke-width="2"/>
  <text x="140" y="70" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700">I have done it</text>
  <path d="M140,86 Q305,22 468,86" fill="none" stroke="#B9FF47" stroke-width="2" stroke-dasharray="5 4"/>
  <text x="305" y="42" text-anchor="middle" fill="#9BA39D" font-size="10">сделал в прошлом — а результат важен сейчас</text>
  <text x="140" y="120" text-anchor="middle" fill="#9BA39D" font-size="9">время НЕ указано</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Perfect или Past Simple?</h3>
<p>Простое правило: <b>есть конкретное время в прошлом</b> (yesterday, in 2019, an hour ago) → Past Simple. <b>Времени нет</b>, важен опыт/результат → Present Perfect.</p>
<pre class="demo">I have seen this film.        (когда — неважно)
I saw this film yesterday.    (есть "yesterday" → Past)</pre>
<table class="simple"><tr><th>V1</th><th>V2 (прошедшее)</th><th>V3 (participle)</th></tr>
<tr><td>go</td><td>went</td><td>gone</td></tr><tr><td>see</td><td>saw</td><td>seen</td></tr>
<tr><td>do</td><td>did</td><td>done</td></tr><tr><td>write</td><td>wrote</td><td>written</td></tr>
<tr><td>be</td><td>was/were</td><td>been</td></tr><tr><td>have</td><td>had</td><td>had</td></tr></table>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Полезные фразы</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>I've just started learning to code.</td><td>Я только что начал учиться кодить.</td></tr>
<tr><td>Have you ever built a website?</td><td>Ты когда-нибудь делал сайт?</td></tr>
<tr><td>I've never given up.</td><td>Я никогда не сдавался.</td></tr>
<tr><td>I haven't finished the course yet.</td><td>Я ещё не закончил курс.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I have saw it</span> → <span class="now">I have seen it</span><br><span class="muted2">после have/has нужна V3 (seen), а не V2 (saw)</span></span>
<span class="fix"><span class="was">I have finished it yesterday</span> → <span class="now">I finished it yesterday</span><br><span class="muted2">есть «yesterday» → это Past Simple, не Perfect</span></span>
<span class="fix"><span class="was">Did you ever try it?</span> → <span class="now">Have you ever tried it?</span><br><span class="muted2">про опыт «когда-нибудь» — Present Perfect</span></span>`,
ex:[
 {t:"mc",q:"I ___ finished my first project.",o:["have","has","am","did"],a:0,e:"I + have + V3 (finished)."},
 {t:"mc",q:"She ___ never been to London.",o:["have","has","is","did"],a:1,e:"he/she/it → has."},
 {t:"fill",q:"I ___ (see) this film before.",a:["have seen","'ve seen"],e:"have + V3: seen (не saw).",w:200},
 {t:"cloze",q:"Дострой Present Perfect",code:"I {0} (just/finish) the task, but I {1} (not/start) the next one yet.",gaps:[["have just finished","'ve just finished"],["haven't started","have not started"]],e:"have just finished; haven't started yet — результат важен сейчас."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I have seen it.","She has gone home.","They have did it.","We have finished."],a:2,e:"have did → have done: после have нужна V3 (done)."},
 {t:"order",q:"Собери вопрос об опыте",lines:["Have","you","ever","been","abroad"],e:"Have you ever been abroad? — опыт «когда-нибудь»."},
 {t:"pairs",q:"Соедини глагол с его V3 (participle)",pairs:[["go","gone"],["see","seen"],["do","done"],["write","written"]],e:"Третья форма для Present Perfect — её учат наизусть."},
 {t:"mc",q:"I ___ him yesterday.",o:["have seen","saw","seen","have saw"],a:1,e:"Есть «yesterday» → конкретное прошлое → Past Simple: saw."},
 {t:"fill",q:"___ you ___ (finish) the course? (вопрос)",a:["have finished","have you finished"],e:"Have you finished the course?",w:220},
 {t:"mc",q:"«Я никогда не был за границей»:",o:["I never was abroad","I have never been abroad","I didn't been abroad","I have never be abroad"],a:1,e:"have + never + been (V3)."}],
res:[
 ["engblog.ru: Present Perfect","url","https://engblog.ru/present-perfect-tense"],
 ["Present Perfect простыми словами","yt","present perfect простыми словами для начинающих"],
 ["British Council: Present perfect","url","https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/present-perfect"],
 ["Неправильные глаголы (3 формы)","url","https://engblog.ru/irregular-verbs"]]},

{id:"l6",title:"Артикли a / the / без артикля — уверенно",
theory:`
<p>🎯 <b>Зачем это тебе:</b> артикли — первое, что выдаёт уровень. В твоём тесте их не хватало («very interesting guy» без a). Это маленькие слова, но без них речь звучит как у робота. Разложим по полочкам, когда какой.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. a / an — «какой-то один»</h3>
<p>Ставим, когда говорим о предмете <b>впервые</b> или «один из многих». Только с исчисляемым в единственном числе.</p>
<pre class="demo">I want a job.            (какую-то работу, вообще)
I'm a developer.         (профессия — всегда с a/an)
It was an interesting day. (an перед гласным звуком)</pre>
<p>Разбор: <b>an</b> — та же «a», но перед <b>гласным звуком</b>: <code>an apple</code>, <code>an hour</code> (h не читается), <code>an interesting guy</code>. Смотри на звук, а не на букву: <code>a university</code> (звучит «ю»).</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. the — «тот самый, конкретный»</h3>
<p>Ставим, когда собеседник понимает, о чём речь: уже упоминали, единственный в мире, или превосходная степень.</p>
<pre class="demo">I have a plan. The plan is simple.  (2-е упоминание → the)
The sun is a star.                  (единственное → the)
This is the best day.               (the + превосходная)</pre>

<svg viewBox="0 0 600 120" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="18" width="132" height="84" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="80" y="46" text-anchor="middle" fill="#B9FF47" font-size="18" font-weight="800">a</text>
  <text x="80" y="68" text-anchor="middle" fill="#F4F6F2" font-size="10">один из многих</text>
  <text x="80" y="85" text-anchor="middle" fill="#9BA39D" font-size="9">a job, a bug</text>
  <rect x="156" y="18" width="132" height="84" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="222" y="46" text-anchor="middle" fill="#FFD34D" font-size="18" font-weight="800">an</text>
  <text x="222" y="68" text-anchor="middle" fill="#F4F6F2" font-size="10">+ гласный звук</text>
  <text x="222" y="85" text-anchor="middle" fill="#9BA39D" font-size="9">an app, an hour</text>
  <rect x="298" y="18" width="132" height="84" rx="10" fill="#1C201E" stroke="#37936F"/>
  <text x="364" y="46" text-anchor="middle" fill="#5BC79A" font-size="18" font-weight="800">the</text>
  <text x="364" y="68" text-anchor="middle" fill="#F4F6F2" font-size="10">конкретный</text>
  <text x="364" y="85" text-anchor="middle" fill="#9BA39D" font-size="9">the best, the sun</text>
  <rect x="440" y="18" width="146" height="84" rx="10" fill="#141716" stroke="#5b6560" stroke-dasharray="4 3"/>
  <text x="513" y="46" text-anchor="middle" fill="#9BA39D" font-size="15" font-weight="800">— без артикля</text>
  <text x="513" y="68" text-anchor="middle" fill="#F4F6F2" font-size="10">мн.ч. и языки вообще</text>
  <text x="513" y="85" text-anchor="middle" fill="#9BA39D" font-size="9">I like books · English</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Без артикля (zero)</h3>
<ul style="margin:6px 0 6px 18px;padding:0">
<li>Множественное «вообще»: <i>I like <b>books</b>. <b>Developers</b> write code.</i></li>
<li>Неисчисляемое «вообще»: <i>I drink <b>coffee</b>. I need <b>money</b>.</i></li>
<li>Языки, большинство стран и имён: <i>I speak <b>English</b>. I live in <b>Russia</b>.</i></li>
</ul>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Полезные фразы</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>I'm a self-taught developer.</td><td>Я разработчик-самоучка.</td></tr>
<tr><td>I want to get a good job.</td><td>Хочу получить хорошую работу.</td></tr>
<tr><td>This is the best decision of my life.</td><td>Это лучшее решение в моей жизни.</td></tr>
<tr><td>I speak Russian and I'm learning English.</td><td>Я говорю по-русски и учу английский.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I am developer</span> → <span class="now">I am a developer</span><br><span class="muted2">профессия — всегда с a/an</span></span>
<span class="fix"><span class="was">I like a books</span> → <span class="now">I like books</span><br><span class="muted2">множественное «вообще» — без артикля</span></span>
<span class="fix"><span class="was">the English is hard</span> → <span class="now">English is hard</span><br><span class="muted2">языки — без the</span></span>`,
ex:[
 {t:"mc",q:"I'm ___ developer.",o:["—","a","an","the"],a:1,e:"Профессия в единственном числе → a developer."},
 {t:"mc",q:"___ sun is very bright today.",o:["A","An","The","—"],a:2,e:"Солнце единственное → the sun."},
 {t:"fill",q:"I waited for ___ hour. (артикль)",a:["an"],e:"hour начинается с гласного звука (h немая) → an."},
 {t:"cloze",q:"Впиши артикли",code:"I have {0} idea. It's {1} best idea ever!",gaps:["an","the"],e:"an idea (гласный звук), the best (превосходная степень)."},
 {t:"pairs",q:"Соедини пример с правилом",pairs:[["a job","один из многих"],["the sun","единственный"],["English","язык — без артикля"],["an apple","гласный звук"]],e:"a — новый/любой, the — конкретный, языки/мн.ч. — без артикля, an — перед гласным."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I am a developer.","The Moon is bright.","I like a books.","She has an idea."],a:2,e:"a books → books: множественное «вообще» идёт без артикля."},
 {t:"mc",q:"I speak ___ English fluently one day.",o:["a","an","the","—"],a:3,e:"Языки — без артикля."},
 {t:"order",q:"Собери предложение с превосходной степенью",lines:["She","is","the","best","in","the","team"],e:"the + превосходная степень: She is the best in the team."},
 {t:"fill",q:"I have a plan. ___ plan is simple. (артикль на 2-е упоминание)",a:["The"],e:"Второе упоминание того же → the.",w:120},
 {t:"mc",q:"«Я хочу получить хорошую работу»:",o:["I want to get good job","I want to get a good job","I want to get the good job","I want get good job"],a:1,e:"a good job — новая, «какая-то» работа."}],
res:[
 ["Артикли a / an / the — просто","yt","артикли a an the английский простыми словами"],
 ["engblog.ru: артикли","url","https://engblog.ru/articles-in-english"],
 ["British Council: Articles","url","https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/articles-1"],
 ["Reverso Context — примеры","url","https://context.reverso.net"]]},

{id:"l7",title:"Предлоги in / on / at: время и место",
theory:`
<p>🎯 <b>Зачем это тебе:</b> крошечные слова, огромные ошибки. «in Monday» вместо «on Monday» сразу выдаёт новичка. Хорошая новость: у in/on/at есть чёткая логика — от точки к большому периоду.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Время: от точного к общему</h3>
<ul style="margin:6px 0 6px 18px;padding:0">
<li><b>at</b> — точное время и точки суток: <i>at 7 o'clock, at noon, at night, at the weekend.</i></li>
<li><b>on</b> — дни и даты: <i>on Monday, on Friday, on July 5, on my birthday.</i></li>
<li><b>in</b> — месяцы, годы, части суток, большие периоды: <i>in July, in 2025, in the morning, in winter.</i></li>
</ul>

<svg viewBox="0 0 600 165" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <text x="30" y="22" fill="#B9FF47" font-size="12" font-weight="700">ВРЕМЯ — от точки к периоду →</text>
  <rect x="30" y="32" width="150" height="42" rx="9" fill="#1C201E" stroke="#B9FF47"/>
  <text x="105" y="52" text-anchor="middle" fill="#B9FF47" font-size="13" font-weight="700">at</text>
  <text x="105" y="68" text-anchor="middle" fill="#9BA39D" font-size="9">at 7:00 · at night</text>
  <rect x="192" y="32" width="150" height="42" rx="9" fill="#1C201E" stroke="#FFD34D"/>
  <text x="267" y="52" text-anchor="middle" fill="#FFD34D" font-size="13" font-weight="700">on</text>
  <text x="267" y="68" text-anchor="middle" fill="#9BA39D" font-size="9">on Monday · on July 5</text>
  <rect x="354" y="32" width="222" height="42" rx="9" fill="#1C201E" stroke="#37936F"/>
  <text x="465" y="52" text-anchor="middle" fill="#5BC79A" font-size="13" font-weight="700">in</text>
  <text x="465" y="68" text-anchor="middle" fill="#9BA39D" font-size="9">in July · in 2025 · in the morning</text>
  <text x="30" y="102" fill="#FFD34D" font-size="12" font-weight="700">МЕСТО</text>
  <rect x="30" y="112" width="176" height="42" rx="9" fill="#141716" stroke="#B9FF47"/>
  <text x="118" y="132" text-anchor="middle" fill="#B9FF47" font-size="13" font-weight="700">at</text>
  <text x="118" y="148" text-anchor="middle" fill="#9BA39D" font-size="9">точка · at home, at work</text>
  <rect x="216" y="112" width="176" height="42" rx="9" fill="#141716" stroke="#FFD34D"/>
  <text x="304" y="132" text-anchor="middle" fill="#FFD34D" font-size="13" font-weight="700">on</text>
  <text x="304" y="148" text-anchor="middle" fill="#9BA39D" font-size="9">поверхность · on the table</text>
  <rect x="402" y="112" width="174" height="42" rx="9" fill="#141716" stroke="#37936F"/>
  <text x="489" y="132" text-anchor="middle" fill="#5BC79A" font-size="13" font-weight="700">in</text>
  <text x="489" y="148" text-anchor="middle" fill="#9BA39D" font-size="9">внутри · in Russia, in a room</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Место: точка / поверхность / внутри</h3>
<ul style="margin:6px 0 6px 18px;padding:0">
<li><b>at</b> — точка, место события: <i>at home, at work, at the station.</i></li>
<li><b>on</b> — на поверхности: <i>on the table, on the wall, on the screen.</i></li>
<li><b>in</b> — внутри чего-то: <i>in the room, in Russia, in the box.</i></li>
</ul>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Полезные фразы</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>I study in the evening.</td><td>Я занимаюсь по вечерам.</td></tr>
<tr><td>See you on Monday!</td><td>Увидимся в понедельник!</td></tr>
<tr><td>I work from home.</td><td>Я работаю из дома.</td></tr>
<tr><td>The meeting is at 10 a.m.</td><td>Встреча в 10 утра.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">in Monday</span> → <span class="now">on Monday</span><br><span class="muted2">дни недели — с on</span></span>
<span class="fix"><span class="was">at the morning</span> → <span class="now">in the morning</span><br><span class="muted2">части суток — с in (кроме at night)</span></span>
<span class="fix"><span class="was">I am in home</span> → <span class="now">I am at home</span><br><span class="muted2">home как место — at home (устойчиво)</span></span>`,
ex:[
 {t:"mc",q:"See you ___ Monday!",o:["in","on","at","—"],a:1,e:"Дни недели — с on."},
 {t:"mc",q:"The meeting is ___ 7 o'clock.",o:["in","on","at","—"],a:2,e:"Точное время — с at."},
 {t:"mc",q:"I was born ___ 2005.",o:["in","on","at","—"],a:0,e:"Годы — с in."},
 {t:"cloze",q:"Впиши предлоги времени",code:"I usually study {0} the morning and sometimes {1} night.",gaps:["in","at"],e:"in the morning, но at night — это исключение."},
 {t:"pairs",q:"Соедини выражение с правилом",pairs:[["at 7:00","точное время"],["on Monday","день недели"],["in July","месяц"],["at home","место-точка"]],e:"at — точка (время/место), on — день/поверхность, in — период/внутри."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I live in Russia.","See you on Friday.","The keys are on the table.","I get up at the morning."],a:3,e:"at the morning → in the morning: части суток идут с in."},
 {t:"fill",q:"The laptop is ___ the table. (предлог места)",a:["on"],e:"На поверхности — on the table.",w:120},
 {t:"mc",q:"I work ___ home most days.",o:["in","on","at","to"],a:2,e:"at home — устойчивое выражение места."},
 {t:"order",q:"Собери предложение",lines:["I","will","call","you","in","the","evening"],e:"in the evening — часть суток с in."},
 {t:"fill",q:"We have a standup ___ Mondays. (предлог)",a:["on"],e:"Дни недели (даже во множественном) — с on.",w:120}],
res:[
 ["Предлоги in on at — просто","yt","предлоги in on at времени и места английский"],
 ["engblog.ru: предлоги времени","url","https://engblog.ru/predlogi-vremeni-in-on-at"],
 ["British Council: Prepositions of time","url","https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/prepositions-time"],
 ["Reverso Context — примеры","url","https://context.reverso.net"]]},

{id:"l8",title:"Сравнения: bigger, the best, as … as",
theory:`
<p>🎯 <b>Зачем это тебе:</b> сравнивать приходится постоянно: «этот язык проще», «он лучший в команде», «мой код быстрее». Пара простых правил — и ты свободно сравниваешь что угодно.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Сравнительная степень: «более …»</h3>
<p>Короткое слово (1 слог) → <b>+er</b>. Длинное (2+ слога) → <b>more</b> перед словом. После — <code>than</code> («чем»).</p>
<pre class="demo">Python is easier than Java.        (easy → easier)
This task is more difficult than that one. (long → more)</pre>
<p>Мелочи написания: <code>big→bigger</code> (удвоение), <code>easy→easier</code> (y→i).</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Превосходная степень: «самый …»</h3>
<p>Короткое → <b>the …est</b>, длинное → <b>the most …</b>. Часто с <code>in</code> («в группе»).</p>
<pre class="demo">He is the fastest coder in the team.
This is the most useful app.</pre>

<svg viewBox="0 0 600 150" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="70" y="86" width="90" height="40" rx="6" fill="#1C201E" stroke="#B9FF47"/>
  <text x="115" y="112" text-anchor="middle" fill="#9BA39D" font-size="10">большой</text>
  <text x="115" y="142" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700">big</text>
  <rect x="250" y="56" width="90" height="70" rx="6" fill="#1C201E" stroke="#FFD34D"/>
  <text x="295" y="94" text-anchor="middle" fill="#9BA39D" font-size="10">больше</text>
  <text x="295" y="142" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">bigger</text>
  <rect x="430" y="26" width="90" height="100" rx="6" fill="#1C201E" stroke="#37936F"/>
  <text x="475" y="64" text-anchor="middle" fill="#9BA39D" font-size="10">самый</text>
  <text x="475" y="142" text-anchor="middle" fill="#5BC79A" font-size="12" font-weight="700">the biggest</text>
  <text x="300" y="16" text-anchor="middle" fill="#F4F6F2" font-size="11">-er … than · the -est … in</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Исключения и as … as</h3>
<table class="simple"><tr><th>Слово</th><th>Сравнит.</th><th>Превосх.</th></tr>
<tr><td>good</td><td>better</td><td>the best</td></tr>
<tr><td>bad</td><td>worse</td><td>the worst</td></tr>
<tr><td>far</td><td>further</td><td>the furthest</td></tr></table>
<p><b>as … as</b> = «такой же … как» (равенство): <i>This laptop is <b>as fast as</b> mine.</i></p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Полезные фразы</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>I'm getting better every day.</td><td>Я становлюсь лучше с каждым днём.</td></tr>
<tr><td>This is the best decision I've made.</td><td>Это лучшее решение, что я принял.</td></tr>
<tr><td>Coding is easier than it looks.</td><td>Кодить проще, чем кажется.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">He is more faster</span> → <span class="now">He is faster</span><br><span class="muted2">либо -er, либо more — не оба сразу</span></span>
<span class="fix"><span class="was">the goodest</span> → <span class="now">the best</span><br><span class="muted2">good — исключение: better / the best</span></span>
<span class="fix"><span class="was">easier then Java</span> → <span class="now">easier than Java</span><br><span class="muted2">«чем» = than, а не then</span></span>`,
ex:[
 {t:"mc",q:"This bug is ___ than the last one.",o:["hard","harder","hardest","more hard"],a:1,e:"Короткое слово → +er: harder + than."},
 {t:"mc",q:"He is the ___ developer in the team.",o:["good","better","best","goodest"],a:2,e:"good → the best (исключение)."},
 {t:"fill",q:"JavaScript is ___ (easy) than C++.",a:["easier"],e:"easy → easier (y меняется на i)."},
 {t:"cloze",q:"Впиши обе степени",code:"This task is {0} (difficult) than the last one, but it's not the {1} (difficult).",gaps:[["more difficult"],["most difficult"]],e:"Длинное слово: more difficult / the most difficult."},
 {t:"pairs",q:"Соедини слово со сравнительной формой",pairs:[["good","better"],["bad","worse"],["big","bigger"],["far","further"]],e:"good/bad/far — исключения, big — удвоение согласной."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["She is taller than me.","This is the best day.","He is more faster.","I feel better now."],a:2,e:"more faster → faster: нельзя ставить и more, и -er вместе."},
 {t:"mc",q:"This laptop is as fast ___ mine.",o:["as","than","then","that"],a:0,e:"as … as — равенство: as fast as."},
 {t:"order",q:"Собери сравнение",lines:["Python","is","easier","than","Java"],e:"easier than: короткое прилагательное + er + than."},
 {t:"fill",q:"This is the ___ (good) app I've ever used.",a:["best"],e:"good → the best.",w:120},
 {t:"mc",q:"«Он лучший в команде»:",o:["He is more good in team","He is the best in the team","He is goodest in team","He is better in the team"],a:1,e:"the best in the team — превосходная степень с the и in."}],
res:[
 ["Степени сравнения — просто","yt","степени сравнения прилагательных английский"],
 ["engblog.ru: степени сравнения","url","https://engblog.ru/stepeni-sravneniya-prilagatelnyh"],
 ["British Council: Comparatives","url","https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/comparative-and-superlative-adjectives"],
 ["Reverso Context — примеры","url","https://context.reverso.net"]]},
{id:"l9",title:"Phrasal verbs: как говорят носители",
theory:`
<p>🎯 <b>Зачем это тебе:</b> носители говорят фразовыми глаголами постоянно — <i>get up, turn on, look for, give up</i>. Без них речь звучит «по учебнику», и, главное, ты не понимаешь их на слух в видео и подкастах. Разберём самые частые.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Что это такое</h3>
<p><b>Фразовый глагол</b> = глагол + маленькое слово (up, on, for, out). Вместе они дают <b>новый смысл</b>, который не всегда угадаешь по частям.</p>
<pre class="demo">give   = давать
give up = сдаться   (совсем другой смысл!)
look    = смотреть
look for = искать</pre>

<svg viewBox="0 0 600 120" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="38" width="120" height="46" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="90" y="60" text-anchor="middle" fill="#B9FF47" font-size="14" font-weight="700">give</text>
  <text x="90" y="76" text-anchor="middle" fill="#9BA39D" font-size="9">давать</text>
  <text x="168" y="68" text-anchor="middle" fill="#F4F6F2" font-size="20" font-weight="700">+</text>
  <rect x="186" y="38" width="110" height="46" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="241" y="60" text-anchor="middle" fill="#FFD34D" font-size="14" font-weight="700">up</text>
  <text x="241" y="76" text-anchor="middle" fill="#9BA39D" font-size="9">вверх</text>
  <text x="314" y="68" text-anchor="middle" fill="#F4F6F2" font-size="20" font-weight="700">=</text>
  <rect x="332" y="34" width="240" height="54" rx="10" fill="#141716" stroke="#37936F"/>
  <text x="452" y="58" text-anchor="middle" fill="#5BC79A" font-size="15" font-weight="800">give up</text>
  <text x="452" y="76" text-anchor="middle" fill="#9BA39D" font-size="10">сдаться — совсем новый смысл</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Частотные — выучи наизусть</h3>
<table class="simple"><tr><th>Глагол</th><th>Значение</th><th>Пример</th></tr>
<tr><td>get up</td><td>вставать</td><td>I get up at 7.</td></tr>
<tr><td>turn on / off</td><td>включить / выключить</td><td>Turn off the TV.</td></tr>
<tr><td>look for</td><td>искать</td><td>I'm looking for a job.</td></tr>
<tr><td>give up</td><td>сдаваться</td><td>Never give up.</td></tr>
<tr><td>find out</td><td>выяснять</td><td>I found out the answer.</td></tr>
<tr><td>figure out</td><td>разобраться</td><td>I can't figure out this bug.</td></tr></table>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Для кода и сайтов</h3>
<table class="simple"><tr><th>Глагол</th><th>Значение</th></tr>
<tr><td>log in / log out</td><td>войти / выйти из аккаунта</td></tr>
<tr><td>sign up</td><td>зарегистрироваться</td></tr>
<tr><td>set up</td><td>настроить, установить</td></tr>
<tr><td>back up</td><td>сделать резервную копию</td></tr></table>
<p>Мелочь: некоторые можно «разрывать» местоимением — <i>turn <b>it</b> on</i>, <i>set <b>it</b> up</i>. А <code>look for</code> не разрывается: <i>look for it</i>.</p>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I look my keys</span> → <span class="now">I look for my keys</span><br><span class="muted2">«искать» — это look FOR, без for это «смотреть»</span></span>
<span class="fix"><span class="was">Don't give up on coding... wait</span> → <span class="now">Don't give up</span><br><span class="muted2">«сдаться» = give up (частицу up не теряй)</span></span>
<span class="fix"><span class="was">turn on it</span> → <span class="now">turn it on</span><br><span class="muted2">местоимение ставим внутрь: turn it on</span></span>`,
ex:[
 {t:"mc",q:"I ___ at 7 every morning.",o:["get up","get","up get","getting"],a:0,e:"get up = вставать."},
 {t:"pairs",q:"Соедини фразовый глагол со значением",pairs:[["give up","сдаться"],["look for","искать"],["turn on","включить"],["find out","выяснить"]],e:"Глагол + частица = новый смысл."},
 {t:"cloze",q:"Впиши фразовые глаголы",code:"Don't {0} up! You'll {1} out how it works.",gaps:["give","find"],e:"give up = сдаться, find out = выяснить."},
 {t:"mc",q:"I'm looking ___ a new job.",o:["for","at","on","up"],a:0,e:"look for = искать."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["Please turn on the light.","I gave up smoking.","I look my phone every morning.","She found out the truth."],a:2,e:"look my phone → look for my phone (искать) или just look at."},
 {t:"order",q:"Собери предложение",lines:["I","want","to","set","up","my","project"],e:"set up = настроить: I want to set up my project."},
 {t:"mc",q:"To create an account, you need to ___.",o:["sign up","sign","up sign","signing"],a:0,e:"sign up = зарегистрироваться."},
 {t:"fill",q:"I can't ___ ___ (figure) this bug ___. (разобраться)",a:["figure out","figure it out"],e:"figure out = разобраться.",w:220},
 {t:"pairs",q:"IT-фразовые глаголы",pairs:[["log in","войти в аккаунт"],["sign up","зарегистрироваться"],["set up","настроить"],["back up","сделать копию"]],e:"Эти слова встречаются в каждом приложении и доке."},
 {t:"mc",q:"«Никогда не сдавайся»:",o:["Never give","Never give up","Never up give","Never giving"],a:1,e:"give up = сдаться."}],
res:[
 ["Фразовые глаголы — топ-25","yt","фразовые глаголы английский самые частые"],
 ["mmmEnglish: phrasal verbs","yt","mmmEnglish phrasal verbs"],
 ["engblog.ru: фразовые глаголы","url","https://engblog.ru/phrasal-verbs"],
 ["Reverso Context — примеры","url","https://context.reverso.net"]]},

{id:"l10",title:"Условные предложения: if …",
theory:`
<p>🎯 <b>Зачем это тебе:</b> «если выучу — получу работу», «если бы у меня было больше времени…». Условные фразы — про планы, мечты и последствия. Их три типа, и разница простая: насколько это реально.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Zero — всегда правда (факт)</h3>
<pre class="demo">If you heat water, it boils.
If I don't sleep, I feel tired.</pre>
<p>Разбор: закон природы, привычка. Схема: <b>If + Present, Present</b>. Можно заменить <code>if</code> на <code>when</code> — смысл тот же.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. First — реально в будущем</h3>
<pre class="demo">If I practise every day, I will get a job.
If you help me, I'll finish faster.</pre>
<p>Разбор: реальная возможность в будущем. Схема: <b>If + Present, will + глагол</b>. Важно: после <code>if</code> — <b>Present</b>, <code>will</code> туда НЕ ставят.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Second — мечта / нереально сейчас</h3>
<pre class="demo">If I had more time, I would travel.
If I were you, I would start today.</pre>
<p>Разбор: воображаемая ситуация, желание. Схема: <b>If + Past, would + глагол</b>. В мечтах для «быть» часто говорят <code>were</code> для всех лиц: <i>If I were rich…</i></p>

<svg viewBox="0 0 600 165" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="30" y="20" width="540" height="40" rx="9" fill="#1C201E" stroke="#B9FF47"/>
  <text x="46" y="38" fill="#B9FF47" font-size="12" font-weight="700">Zero · факт</text>
  <text x="46" y="53" fill="#9BA39D" font-size="10">If you heat water, it boils. — If + Present, Present</text>
  <rect x="30" y="66" width="540" height="40" rx="9" fill="#1C201E" stroke="#FFD34D"/>
  <text x="46" y="84" fill="#FFD34D" font-size="12" font-weight="700">First · реально в будущем</text>
  <text x="46" y="99" fill="#9BA39D" font-size="10">If I practise, I will get a job. — If + Present, will + V</text>
  <rect x="30" y="112" width="540" height="40" rx="9" fill="#1C201E" stroke="#37936F"/>
  <text x="46" y="130" fill="#5BC79A" font-size="12" font-weight="700">Second · мечта / нереально</text>
  <text x="46" y="145" fill="#9BA39D" font-size="10">If I had time, I would travel. — If + Past, would + V</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Полезные фразы</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>If I get the job, I'll be happy.</td><td>Если получу работу, буду счастлив.</td></tr>
<tr><td>If I were you, I'd practise more.</td><td>На твоём месте я бы больше занимался.</td></tr>
<tr><td>I'll succeed if I don't give up.</td><td>Я добьюсь, если не сдамся.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">If I will practise, I will improve</span> → <span class="now">If I practise, I will improve</span><br><span class="muted2">после if в First — Present, без will</span></span>
<span class="fix"><span class="was">If I would have time, I would travel</span> → <span class="now">If I had time, I would travel</span><br><span class="muted2">в Second после if — Past, без would</span></span>
<span class="fix"><span class="was">easier then before</span> → <span class="now">If … then …</span><br><span class="muted2">then («тогда») — не путай с than («чем»)</span></span>`,
ex:[
 {t:"mc",q:"If you heat water, it ___.",o:["boils","will boil","would boil","boiled"],a:0,e:"Zero conditional (факт): If + Present, Present."},
 {t:"mc",q:"If I practise every day, I ___ a job.",o:["get","will get","would get","got"],a:1,e:"First conditional: If + Present, will + V."},
 {t:"mc",q:"If I ___ more time, I would travel.",o:["have","will have","had","would have"],a:2,e:"Second conditional: If + Past (had), would + V."},
 {t:"cloze",q:"Дострой First conditional",code:"If I {0} (get) the job, I {1} (buy) a new laptop.",gaps:[["get"],["will buy","'ll buy"]],e:"If + Present (get), will + V (will buy)."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["If it rains, we stay home.","If I will practise, I will improve.","If I had money, I would help.","If you heat ice, it melts."],a:1,e:"If I will practise → If I practise: после if в First нет will."},
 {t:"order",q:"Собери мечту (Second conditional)",lines:["If","I","had","time","I","would","learn","Spanish"],e:"If + Past (had), would + V: If I had time, I would learn Spanish."},
 {t:"pairs",q:"Соедини тип с формулой",pairs:[["Zero (факт)","If + Present, Present"],["First (будущее)","If + Present, will"],["Second (мечта)","If + Past, would"]],e:"Разница — насколько реально: факт → будущее → мечта."},
 {t:"fill",q:"If I ___ (be) you, I would start today.",a:["were","was"],e:"В Second для «быть» часто were: If I were you.",w:160},
 {t:"mc",q:"«Если я выучу английский, я найду работу»:",o:["If I will learn English, I will find a job","If I learn English, I will find a job","If I learn English, I find a job","If I learned English, I will find a job"],a:1,e:"First: If + Present (learn), will + V (will find)."},
 {t:"cloze",q:"Дострой Second conditional",code:"If I {0} (be) a developer, I {1} (work) remotely.",gaps:[["were","was"],["would work","'d work"]],e:"If + Past (were), would + V (would work)."}],
res:[
 ["Условные предложения — просто","yt","условные предложения английский conditionals 0 1 2"],
 ["engblog.ru: условные предложения","url","https://engblog.ru/uslovnye-predlozheniya-v-anglijskom-yazyke"],
 ["British Council: Conditionals","url","https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/conditionals-1"],
 ["Reverso Context — примеры","url","https://context.reverso.net"]]},

{id:"l11",title:"Модальные глаголы: can, should, must, might",
theory:`
<p>🎯 <b>Зачем это тебе:</b> модальные глаголы добавляют «оттенок»: умею, стоит, обязан, возможно. Это то, чем каждый день описывают способности, советы и планы — «I can code», «you should practise», «I might get the job».</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Главное правило</h3>
<p>После модального — <b>глагол в начальной форме, без to и без -s</b>. Один на всех лиц.</p>
<pre class="demo">I can code.      He can code.   (НЕ "cans", НЕ "can to")
You should rest.  She might come.</pre>

<svg viewBox="0 0 600 120" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="14" y="20" width="138" height="82" rx="10" fill="#1C201E" stroke="#B9FF47"/>
  <text x="83" y="48" text-anchor="middle" fill="#B9FF47" font-size="15" font-weight="800">can</text>
  <text x="83" y="70" text-anchor="middle" fill="#F4F6F2" font-size="10">умею / могу</text>
  <text x="83" y="86" text-anchor="middle" fill="#9BA39D" font-size="9">I can code</text>
  <rect x="160" y="20" width="138" height="82" rx="10" fill="#1C201E" stroke="#FFD34D"/>
  <text x="229" y="48" text-anchor="middle" fill="#FFD34D" font-size="15" font-weight="800">should</text>
  <text x="229" y="70" text-anchor="middle" fill="#F4F6F2" font-size="10">совет, стоит</text>
  <text x="229" y="86" text-anchor="middle" fill="#9BA39D" font-size="9">you should rest</text>
  <rect x="306" y="20" width="138" height="82" rx="10" fill="#1C201E" stroke="#37936F"/>
  <text x="375" y="48" text-anchor="middle" fill="#5BC79A" font-size="15" font-weight="800">must</text>
  <text x="375" y="70" text-anchor="middle" fill="#F4F6F2" font-size="10">обязан, надо</text>
  <text x="375" y="86" text-anchor="middle" fill="#9BA39D" font-size="9">I must go</text>
  <rect x="452" y="20" width="134" height="82" rx="10" fill="#1C201E" stroke="#C98BFF"/>
  <text x="519" y="48" text-anchor="middle" fill="#C98BFF" font-size="15" font-weight="800">might</text>
  <text x="519" y="70" text-anchor="middle" fill="#F4F6F2" font-size="10">возможно</text>
  <text x="519" y="86" text-anchor="middle" fill="#9BA39D" font-size="9">I might apply</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Кто что значит</h3>
<ul style="margin:6px 0 6px 18px;padding:0">
<li><b>can / can't</b> — умение и возможность: <i>I can build a simple site. I can't fix it yet.</i></li>
<li><b>should</b> — совет («стоит»): <i>You should read the docs.</i></li>
<li><b>must / have to</b> — обязанность («надо»): <i>I must practise. I have to work tomorrow.</i></li>
<li><b>might / may</b> — вероятность («возможно»): <i>I might get the job.</i></li>
</ul>
<p>Особый случай — <code>have to</code>: это тоже «надо», но ведёт себя как обычный глагол (has to для he, do/does в вопросе): <i>Does he have to go?</i></p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Полезные фразы</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>I can build a simple website.</td><td>Я умею сделать простой сайт.</td></tr>
<tr><td>You should practise every day.</td><td>Тебе стоит заниматься каждый день.</td></tr>
<tr><td>I might apply for a junior job soon.</td><td>Возможно, скоро подам на джуна.</td></tr>
<tr><td>Can you help me with this?</td><td>Можешь помочь мне с этим?</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I can to code</span> → <span class="now">I can code</span><br><span class="muted2">после модального — без to</span></span>
<span class="fix"><span class="was">He can codes</span> → <span class="now">He can code</span><br><span class="muted2">после модального глагол без -s, даже для he</span></span>
<span class="fix"><span class="was">I must to go</span> → <span class="now">I must go</span><br><span class="muted2">must тоже без to (а вот have TO — с to)</span></span>`,
ex:[
 {t:"mc",q:"I ___ speak a little English.",o:["can","can to","cans","am can"],a:0,e:"can + начальная форма, без to."},
 {t:"mc",q:"You ___ read the documentation. (совет)",o:["must","should","might","can"],a:1,e:"should = совет, «тебе стоит»."},
 {t:"mc",q:"I ___ go now, I'm late. (обязан)",o:["should","might","must","can"],a:2,e:"must = обязанность, «надо»."},
 {t:"cloze",q:"Впиши модальные (умение / необходимость)",code:"I {0} build a simple site, but I {1} practise more to improve.",gaps:[["can"],["must","need to","should","have to"]],e:"can = умею; must/need to = надо."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I can code.","He can codes.","You should rest.","I must go now."],a:1,e:"can codes → can code: после модального глагол без -s."},
 {t:"mc",q:"I ___ go now.",o:["must","must to","have go","should to"],a:0,e:"must + глагол без to."},
 {t:"pairs",q:"Соедини модальный с его смыслом",pairs:[["can","умею / могу"],["should","совет"],["must","обязан"],["might","возможно"]],e:"can — умение, should — совет, must — обязанность, might — вероятность."},
 {t:"order",q:"Собери совет",lines:["You","should","read","the","documentation"],e:"should + начальная форма: You should read the documentation."},
 {t:"fill",q:"He ___ (can/not) come today. (сокращённо)",a:["can't","cannot"],e:"can't = не могу / не умею.",w:150},
 {t:"mc",q:"«Тебе стоит читать документацию»:",o:["You must to read the documentation","You should read the documentation","You should to read the documentation","You can reads the documentation"],a:1,e:"should + начальная форма, без to."}],
res:[
 ["Модальные глаголы — просто","yt","модальные глаголы английский can must should"],
 ["engblog.ru: модальные глаголы","url","https://engblog.ru/modalnye-glagoly-v-anglijskom-yazyke"],
 ["British Council: Modals","url","https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/modal-verbs"],
 ["Reverso Context — примеры","url","https://context.reverso.net"]]},
{id:"l12",title:"Английский для IT: лексика и git",
theory:`
<p>🎯 <b>Зачем это тебе:</b> вся разработка — на английском: команды git, сообщения об ошибках, названия действий. Знать эти 20–30 слов важнее, чем идеальная грамматика: без них ты не поймёшь ни туториал, ни коллегу. Это прямой мостик к работе.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Базовые слова разработчика</h3>
<table class="simple"><tr><th>Слово</th><th>Перевод</th><th>В деле</th></tr>
<tr><td>bug</td><td>ошибка в коде</td><td>I found a bug.</td></tr>
<tr><td>fix</td><td>чинить / починка</td><td>I fixed the bug.</td></tr>
<tr><td>feature</td><td>функция, возможность</td><td>a new feature</td></tr>
<tr><td>issue</td><td>проблема / задача</td><td>Open an issue.</td></tr>
<tr><td>release</td><td>выпуск версии</td><td>the next release</td></tr>
<tr><td>deploy</td><td>выкатить на сервер</td><td>Deploy to production.</td></tr></table>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Git — язык командной работы</h3>
<p>Git хранит историю кода. Его команды — обычные английские глаголы, и понимание слов = понимание процесса:</p>
<svg viewBox="0 0 600 130" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="l12a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker></defs>
  <rect x="18" y="46" width="118" height="44" rx="9" fill="#1C201E" stroke="#B9FF47"/>
  <text x="77" y="65" text-anchor="middle" fill="#B9FF47" font-size="12" font-weight="700">commit</text>
  <text x="77" y="81" text-anchor="middle" fill="#9BA39D" font-size="9">сохранить</text>
  <line x1="138" y1="68" x2="196" y2="68" stroke="#B9FF47" stroke-width="2" marker-end="url(#l12a)"/>
  <rect x="200" y="46" width="118" height="44" rx="9" fill="#1C201E" stroke="#FFD34D"/>
  <text x="259" y="65" text-anchor="middle" fill="#FFD34D" font-size="12" font-weight="700">push</text>
  <text x="259" y="81" text-anchor="middle" fill="#9BA39D" font-size="9">отправить</text>
  <line x1="320" y1="68" x2="378" y2="68" stroke="#B9FF47" stroke-width="2" marker-end="url(#l12a)"/>
  <rect x="382" y="46" width="130" height="44" rx="9" fill="#1C201E" stroke="#5BC79A"/>
  <text x="447" y="65" text-anchor="middle" fill="#5BC79A" font-size="12" font-weight="700">pull request</text>
  <text x="447" y="81" text-anchor="middle" fill="#9BA39D" font-size="9">просьба влить</text>
  <line x1="514" y1="68" x2="560" y2="68" stroke="#B9FF47" stroke-width="2" marker-end="url(#l12a)"/>
  <rect x="516" y="20" width="70" height="30" rx="8" fill="#141716" stroke="#37936F"/>
  <text x="551" y="39" text-anchor="middle" fill="#F4F6F2" font-size="10" font-weight="700">merge</text>
</svg>
<table class="simple"><tr><th>Команда</th><th>Дословно</th><th>Что делает</th></tr>
<tr><td>commit</td><td>зафиксировать</td><td>сохранить изменения в историю</td></tr>
<tr><td>push</td><td>толкнуть</td><td>отправить код на сервер</td></tr>
<tr><td>pull</td><td>тянуть</td><td>забрать свежий код себе</td></tr>
<tr><td>merge</td><td>слить</td><td>объединить ветки кода</td></tr>
<tr><td>branch</td><td>ветка</td><td>отдельная линия разработки</td></tr></table>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Фразы, которые реально пишут</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>I fixed the login bug.</td><td>Я починил баг со входом.</td></tr>
<tr><td>Please review my pull request.</td><td>Посмотри, пожалуйста, мой PR.</td></tr>
<tr><td>The build is failing.</td><td>Сборка падает.</td></tr>
<tr><td>I'll push my changes tonight.</td><td>Залью изменения вечером.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I make a commit yesterday</span> → <span class="now">I made a commit yesterday</span><br><span class="muted2">yesterday → прошедшее: made</span></span>
<span class="fix"><span class="was">I have a lot of bug</span> → <span class="now">I have a lot of bugs</span><br><span class="muted2">bug исчисляемое: во множественном — bugs</span></span>
<span class="fix"><span class="was">merge to the branch (произносят «мёрж»)</span> → <span class="now">merge /mɜːrdʒ/</span><br><span class="muted2">читается «мёрдж», не «мерге»</span></span>`,
ex:[
 {t:"pairs",q:"Соедини слово с переводом",pairs:[["bug","ошибка в коде"],["fix","починить"],["feature","функция"],["deploy","выкатить на сервер"]],e:"Базовые слова, без которых не понять ни туториал, ни коллегу."},
 {t:"pairs",q:"Соедини git-команду с действием",pairs:[["commit","сохранить изменения"],["push","отправить на сервер"],["pull","забрать свежий код"],["merge","слить ветки"]],e:"Команды git — это обычные английские глаголы."},
 {t:"mc",q:"«Я нашёл баг во входе»:",o:["I find a bug in login","I found a bug in the login","I founded a bug","I have find a bug"],a:1,e:"found (прошедшее от find) + a bug."},
 {t:"fill",q:"Please ___ (review) my pull request.",a:["review"],e:"review = проверить код: Please review my PR."},
 {t:"cloze",q:"Впиши IT-слова",code:"I {0} (починил) the bug and I will {1} (залить) my changes.",gaps:[["fixed"],["push"]],e:"fixed the bug; push my changes."},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I fixed the bug.","The build is failing.","I have a lot of bug.","She merged the branch."],a:2,e:"a lot of bug → a lot of bugs: bug исчисляемое."},
 {t:"mc",q:"To save your changes in git history, you ___.",o:["deploy","commit","review","merge"],a:1,e:"commit = сохранить изменения в историю."},
 {t:"order",q:"Собери рабочую фразу",lines:["I","will","push","my","changes","tonight"],e:"I will push my changes tonight — залью изменения вечером."},
 {t:"mc",q:"A ___ is a separate line of development in git.",o:["branch","bug","build","board"],a:0,e:"branch = ветка, отдельная линия разработки."},
 {t:"fill",q:"We need to ___ (deploy) the app to production.",a:["deploy"],e:"deploy = выкатить на сервер.",w:150}],
res:[
 ["english4it.com — английский для IT","url","https://www.english4it.com"],
 ["Speak Tech English","url","https://speaktechenglish.com"],
 ["Английский для программистов","yt","английский для программистов лексика IT"],
 ["Git — глоссарий (GitHub)","url","https://docs.github.com/en/get-started/quickstart/git-and-github-learning-resources"]]},

{id:"l13",title:"Чтение документации на английском",
theory:`
<p>🎯 <b>Зачем это тебе:</b> лучшая документация — MDN, React, Node — только на английском. Читать её — навык №1 для джуна: 80% работы это гуглить и читать доки. Хорошая новость: язык доков простой и повторяющийся, его быстро осваиваешь.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. Повелительное наклонение (императив)</h3>
<p>Доки говорят командами: глагол в начале, без подлежащего. Это и есть инструкции.</p>
<pre class="demo">Install the package.      Открой/установи пакет.
Add this to your file.    Добавь это в файл.
Return the result.        Верни результат.
Do not modify this line.  Не меняй эту строку.</pre>
<p>Разбор: <code>Install…</code>, <code>Add…</code>, <code>Return…</code> — просто глагол командой. Отрицание — <code>Do not / Don't + глагол</code>.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Слова-сигналы в доках</h3>
<table class="simple"><tr><th>Слово</th><th>Значение</th></tr>
<tr><td>returns</td><td>возвращает (что выдаёт функция)</td></tr>
<tr><td>takes / accepts</td><td>принимает (аргументы)</td></tr>
<tr><td>required / optional</td><td>обязательный / необязательный</td></tr>
<tr><td>default</td><td>значение по умолчанию</td></tr>
<tr><td>deprecated</td><td>устарело, не используй</td></tr>
<tr><td>throws</td><td>выбрасывает ошибку</td></tr></table>

<svg viewBox="0 0 600 120" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="24" width="560" height="74" rx="10" fill="#141716" stroke="#37936F"/>
  <text x="34" y="46" fill="#5BC79A" font-size="11" font-family="monospace" font-weight="700">map(callback)</text>
  <text x="300" y="46" text-anchor="middle" fill="#9BA39D" font-size="10">← читаем как инструкцию</text>
  <text x="34" y="68" fill="#F4F6F2" font-size="11" font-family="monospace"><tspan fill="#FFD34D">takes</tspan> a callback, <tspan fill="#FFD34D">returns</tspan> a new array.</text>
  <text x="34" y="88" fill="#9BA39D" font-size="10">«принимает функцию, возвращает новый массив» — и всё понятно</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Пассив — доки любят «безличность»</h3>
<p>Часто пишут не «ты делаешь», а «это делается». Форма: <b>is / are + V3</b>.</p>
<pre class="demo">The value is returned as a string.  Значение возвращается строкой.
This method is called automatically. Метод вызывается автоматически.</pre>
<p>Разбор: <code>is returned</code>, <code>is called</code> — действие происходит «само», без указания, кто делает. Понимай это как «возвращается / вызывается».</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">4. Полезные фразы</h3>
<table class="simple"><tr><th>Фраза в доке</th><th>Перевод</th></tr>
<tr><td>See the example below.</td><td>Смотри пример ниже.</td></tr>
<tr><td>This parameter is optional.</td><td>Этот параметр необязательный.</td></tr>
<tr><td>Note: this is deprecated.</td><td>Внимание: это устарело.</td></tr>
<tr><td>Make sure the server is running.</td><td>Убедись, что сервер запущен.</td></tr></table>

<p>⚠️ <b>Частые ошибки при чтении:</b></p>
<span class="fix"><span class="was">«deprecated» = рекомендовано</span> → <span class="now">deprecated = устарело, НЕ используй</span><br><span class="muted2">частая ловушка: слово похоже на «предпочтительно», но смысл обратный</span></span>
<span class="fix"><span class="was">«optional» = обязательно</span> → <span class="now">optional = по желанию, можно пропустить</span><br><span class="muted2">optional ≠ обязательный; обязательный — required</span></span>
<span class="fix"><span class="was">«it returns» перевожу как прошедшее</span> → <span class="now">returns = возвращает (настоящее)</span><br><span class="muted2">-s здесь про функцию (it), а не про прошлое</span></span>`,
ex:[
 {t:"pairs",q:"Соедини слово из доки с переводом",pairs:[["returns","возвращает"],["required","обязательный"],["optional","необязательный"],["deprecated","устарело"]],e:"Слова-сигналы, которые встречаются в каждой документации."},
 {t:"mc",q:"В доке написано «This parameter is optional». Значит:",o:["Параметр обязателен","Параметр можно не указывать","Параметр устарел","Параметр — ошибка"],a:1,e:"optional = по желанию, можно пропустить."},
 {t:"mc",q:"«Install the package» — это:",o:["Вопрос","Команда-инструкция (императив)","Прошедшее время","Пассив"],a:1,e:"Глагол в начале без подлежащего — повелительное наклонение (инструкция)."},
 {t:"mc",q:"«This method is called automatically» — как понять?",o:["Метод вызывает сам","Метод вызывается автоматически","Метод сломан","Метод устарел"],a:1,e:"is called — пассив: действие происходит «само»."},
 {t:"cloze",q:"Дострой строку из доки",code:"map() {0} a callback and {1} a new array.",gaps:[["takes","accepts"],["returns"]],e:"takes a callback (принимает), returns a new array (возвращает)."},
 {t:"bug",q:"Где НЕВЕРНЫЙ перевод сигнального слова?",code:["returns — возвращает","required — обязательный","deprecated — рекомендуется","optional — необязательный"],a:2,e:"deprecated = устарело, НЕ используй (а не «рекомендуется»)."},
 {t:"order",q:"Собери инструкцию из доки",lines:["Make","sure","the","server","is","running"],e:"Make sure the server is running — «убедись, что сервер запущен»."},
 {t:"mc",q:"«The value is returned as a string» — это:",o:["Активный залог","Пассивный залог (is + V3)","Будущее время","Вопрос"],a:1,e:"is returned — пассив: is/are + V3."},
 {t:"fill",q:"Note: this feature is ___ (устарело, не используй).",a:["deprecated"],e:"deprecated = устарело.",w:170},
 {t:"mc",q:"«See the example below» просит тебя:",o:["Написать пример","Посмотреть пример ниже","Удалить пример","Скачать пример"],a:1,e:"below = ниже; «смотри пример ниже»."}],
res:[
 ["MDN — документация (читать)","url","https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
 ["english4it.com","url","https://www.english4it.com"],
 ["Как читать документацию","yt","как читать техническую документацию английский"],
 ["Reverso Context — примеры","url","https://context.reverso.net"]]},

{id:"l14",title:"Собеседование junior на английском",
theory:`
<p>🎯 <b>Зачем это тебе:</b> финальная цель — работа. Многие вакансии и компании требуют базовый английский, и часть собеседования проходит на нём. Хорошая новость: вопросы junior-собеседования почти всегда одни и те же. Выучишь заготовки — будешь готов.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">1. «Tell me about yourself» — расскажи о себе</h3>
<p>Первый вопрос почти всегда этот. Готовь короткий рассказ (30–40 секунд):</p>
<pre class="demo">Hi, I'm Emil. I'm a self-taught developer.
I've been learning web development for a year.
I can build simple websites with HTML, CSS and JavaScript.
I'm looking for my first junior job.
I learn fast and I'm not afraid of hard tasks.</pre>
<p>Разбор: настоящее (кто ты), Present Perfect (<code>I've been learning</code> — сколько учишься), <code>can</code> (что умеешь), цель (<code>I'm looking for</code>). Всё из прошлых уроков.</p>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">2. Частые вопросы и заготовки</h3>
<table class="simple"><tr><th>Вопрос</th><th>Заготовка ответа</th></tr>
<tr><td>Why do you want this job?</td><td>I want to grow as a developer and work in a real team.</td></tr>
<tr><td>What are your strengths?</td><td>I'm persistent and I learn quickly.</td></tr>
<tr><td>What's your weakness?</td><td>I'm still improving my English, but I practise every day.</td></tr>
<tr><td>Do you have experience?</td><td>I've built a few personal projects.</td></tr></table>

<svg viewBox="0 0 600 120" class="diagram" xmlns="http://www.w3.org/2000/svg">
  <defs><marker id="l14a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="#B9FF47"/></marker></defs>
  <rect x="18" y="44" width="120" height="46" rx="9" fill="#1C201E" stroke="#B9FF47"/>
  <text x="78" y="64" text-anchor="middle" fill="#B9FF47" font-size="11" font-weight="700">кто я сейчас</text>
  <text x="78" y="80" text-anchor="middle" fill="#9BA39D" font-size="9">I'm a developer</text>
  <line x1="140" y1="67" x2="188" y2="67" stroke="#B9FF47" stroke-width="2" marker-end="url(#l14a)"/>
  <rect x="192" y="44" width="120" height="46" rx="9" fill="#1C201E" stroke="#FFD34D"/>
  <text x="252" y="64" text-anchor="middle" fill="#FFD34D" font-size="11" font-weight="700">что умею</text>
  <text x="252" y="80" text-anchor="middle" fill="#9BA39D" font-size="9">I can build…</text>
  <line x1="314" y1="67" x2="362" y2="67" stroke="#B9FF47" stroke-width="2" marker-end="url(#l14a)"/>
  <rect x="366" y="44" width="120" height="46" rx="9" fill="#1C201E" stroke="#5BC79A"/>
  <text x="426" y="64" text-anchor="middle" fill="#5BC79A" font-size="11" font-weight="700">чего хочу</text>
  <text x="426" y="80" text-anchor="middle" fill="#9BA39D" font-size="9">I'm looking for…</text>
  <text x="300" y="24" text-anchor="middle" fill="#F4F6F2" font-size="11">структура рассказа о себе</text>
</svg>

<h3 style="margin:16px 0 4px;font-family:var(--font-display)">3. Спасательные фразы (если не понял)</h3>
<table class="simple"><tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td>Could you repeat that, please?</td><td>Повторите, пожалуйста.</td></tr>
<tr><td>Sorry, could you speak more slowly?</td><td>Извините, можно помедленнее?</td></tr>
<tr><td>Let me think for a second.</td><td>Дайте секунду подумать.</td></tr>
<tr><td>That's a good question.</td><td>Хороший вопрос.</td></tr></table>

<p>⚠️ <b>Частые ошибки:</b></p>
<span class="fix"><span class="was">I have 20 years</span> → <span class="now">I'm 20 (years old)</span><br><span class="muted2">возраст — через to be, не have</span></span>
<span class="fix"><span class="was">I no understand</span> → <span class="now">I don't understand / Sorry, I didn't catch that</span><br><span class="muted2">отрицание через don't, а не «no + глагол»</span></span>
<span class="fix"><span class="was">I want work here</span> → <span class="now">I want to work here</span><br><span class="muted2">после want — to</span></span>`,
ex:[
 {t:"mc",q:"Лучшее начало ответа на «Tell me about yourself»:",o:["I have 20 years","Hi, I'm Emil, a self-taught developer","I no speak English","Me developer"],a:1,e:"Начни с имени и кто ты; возраст — через I'm, не «I have»."},
 {t:"pairs",q:"Соедини вопрос с темой ответа",pairs:[["Tell me about yourself","кто ты и цель"],["What are your strengths?","сильные стороны"],["Do you have experience?","проекты, опыт"],["Why this job?","мотивация"]],e:"Вопросы junior-собеседования почти всегда одни и те же — готовь заготовки."},
 {t:"cloze",q:"Дострой рассказ о себе",code:"I {0} (умею) build simple websites, and I'm {1} for my first job.",gaps:[["can"],["looking"]],e:"I can build…; I'm looking for my first job."},
 {t:"mc",q:"Ты не расслышал вопрос. Что сказать?",o:["I no understand","Could you repeat that, please?","Repeat!","What you say?"],a:1,e:"Вежливая просьба повторить: Could you repeat that, please?"},
 {t:"bug",q:"Найди предложение с ошибкой",code:["I'm 20 years old.","I want to work here.","I have experience with JavaScript.","I no understand the question."],a:3,e:"I no understand → I don't understand: отрицание через don't."},
 {t:"order",q:"Собери фразу о цели",lines:["I","am","looking","for","my","first","job"],e:"I am looking for my first job — «ищу первую работу»."},
 {t:"mc",q:"«Мне 20 лет»:",o:["I have 20 years","I'm 20 years old","I am 20 years","My age 20"],a:1,e:"Возраст — через to be: I'm 20 years old."},
 {t:"fill",q:"That's a good ___. Let me think for a second.",a:["question"],e:"That's a good question — «хороший вопрос» (тянем время вежливо)."},
 {t:"mc",q:"«I've been learning to code for a year» означает:",o:["Я выучил код за год","Я учусь кодить уже год","Я буду учить код год","Я учил код год назад"],a:1,e:"Present Perfect Continuous: действие длится до сих пор — «уже год»."},
 {t:"mc",q:"Вежливо попросить говорить медленнее:",o:["Speak slow!","Could you speak more slowly, please?","You speak fast","Slowly please talk"],a:1,e:"Could you speak more slowly, please? — вежливая просьба."}],
res:[
 ["Собеседование на английском (IT)","yt","собеседование junior разработчик английский вопросы"],
 ["Speak Tech English — interview","url","https://speaktechenglish.com"],
 ["english4it.com — interview","url","https://www.english4it.com"],
 ["Tell me about yourself — примеры","yt","tell me about yourself answer developer"]]}
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
