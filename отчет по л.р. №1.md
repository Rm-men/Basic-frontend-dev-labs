<p align = center>МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ
<p align = center>РОССИЙСКОЙ ФЕДЕРАЦИИ
<p align = center>ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ
<p align = center>«ВЯТСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»
<p align = center>Институт математики и информационных систем
<p align = center>Факультет автоматики и вычислительной техники
<p align = center>Кафедра систем автоматизации управления
<p align = right>
<font size="2">Дата сдачи на проверку:</font>
<p align = right>
<font size="2">«___» ________________ 2021 г.</font>
<p align = right>
<font size="2">Проверено:</font>
<p align = right>
<font size="2">«___» ________________ 2021 г.</font>
<p align = center> Работа на HTML4 и HTML5
<p align = center>Отчет по лабораторной работе № 1
<p align = center>по дисциплине
<p align = center>«Основы frontend разработки и организации человеко-машинного интерфейса»
<p align = center>Вариант 3
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<p align = right>Разработал студент гр. ИТб-1301-01-00 ____________ /Суслов Р.В./
<p align = right>Проверил преподаватель _________________ /Земцов М.А./
<p align = right>Оценка работы	«___________» 
«____»_____________ 2021 г.
<br/>
<br/>
<br/>
<br/>
<br/>
<p align = center>Киров 2021

-----------
<p align = justify style="text-indent: 25px;">
Цель: изучения базовых методов образения с языком разметки страниц HTML4 и HTML5.
<p align = justify style="text-indent: 25px;">Задачи лабораторной работы:

1. Организовать рабочее пространство и процессы разработки html5 документов.
2. Изучить структуру html5 документа
3. Исследовать функциональные возможности инструментов разработчика на стороне браузера
4. Изучить типовые элементы структуры html5 документа
5. Составить отчет по выполненным задачам
Защитить лабораторную работу


<p style="text-indent: 25px;">Ход выполнения:

1. Организовать рабочее пространство и процессы разработки html5 документов.

<p align = justify style="text-indent: 25px;">
В процессе организации рабочего пространства была установлена среда программирования VisualStudioCode с набором необходимых плагинов, система контроля версий GitHub, были созданы репозиторий и ветка для работы, а так же изучена необходимая документация для работы. 

*[Cсылка на репозиторий](https://github.com/Rm-men/Basic-frontend-dev-labs)*
</p>



2. Изучить структуру html5 документа

<p align = justify style="text-indent: 25px;">


<p align = justify style="text-indent: 25px;">
Задание №1: Создайте HTML-страницу index4.html, разделенную на фреймы в соответствии с номером варианта. В качестве заголовка страницы используйте ваше имя, отчество и фамилию. Фреймы должны содержать:

№1 – номер зачетной книжки;

№2 – таблицу (варианты приведены на рис.3);

№3 – ваше имя, отчество и фамилию;

№4 – список дисциплин и преподавателей текущего семестра.

<p style="text-indent: 25px;">Задание для 3 варианта представлено на рисунках 1 и 2.

<p align="center">
  <img src=./imges/img_1.png />
</p>

<p align = center>Рисунок 1 - задание №1, макет общей таблицы

<p align="center">
  <img src=./imges/img_2.png />
</p>

<p align = center>Рисунок 2 - задание №1, макет маленькой таблицы

<p align = center>2

-----------
<p  align = justify style="text-indent: 25px;">




<p style="text-indent: 25px;">
На рисунке 3 представлена HTML страница index4.html в браузере. Листинг кода index4.html представлен в приложении А.
<p align="center">
  <img src=./imges/img_3.png />
</p>

<p align = center>Рисунок 3 - вид страницы с заданием 1 в браузере

<p align="center">
  <img src=./imges/img_4.png />
</p>

<p align = center>Рисунок 4 - результат валидации задания 1 


<p style="text-indent: 25px;">
При проверке кода на валидацию допущены следующие ошибки:

1. *Line 7, Column 19*: **there is no attribute "ROWS"**
2. *Line 7, Column 30*: **element "FRAMESET" undefined**
3. *Line 8, Column 20*: **there is no attribute "COLS"**
4. *Line 8, Column 31*: **element "FRAMESET" undefined**
5. *Line 9, Column 18*: **there is no attribute "SRC"**
6. *Line 9, Column 38*: **there is no attribute "NAME"**
7. *Line 9, Column 44*: **element "FRAME" undefined"**
8. *Line 10, Column 44*: **element "FRAME" undefined"**
9. *Line 12, Column 46*: **element "FRAME" undefined"**
10. *Line 13, Column 44*: **element "FRAME" undefined"**
11. *Line 18, Column 7*: **end tag for "HTML" which is not finished**

Все ошибки поиявились из-за использования обычного типа документа без приставки “ Frameset”

<p align = center>3

-------

<p align = justify>Задание 2: Создайте файл index.html, используя html5 разметку. Файл должен реализовывать предыдущее задание с использованием языка html5. Готовым решением будет успешное прохождение проверки валидации. Листинг кода index.html представлен в приложении Б.


<p style="text-indent: 25px;">
Файл index.html представлен на рисунке 4, а результат валидации на рисунке 5.

<p align="center">
  <img src=./imges/img_5.png />
</p>
<p align = center>Рисунок 5 - вид страницы с заданием 2 в браузере

<p align="center">
  <img src=./imges/img_6.png />
</p>
<p align = center>Рисунок 6 - результат валидации кода 2 задания
<p align = center>4

---------
<p align = justify style="text-indent: 25px;">

<p style="text-indent: 25px;">
3. Исследовать функциональные возможности инструментов разработчика на стороне браузера
<p style="text-indent: 25px;">
Был бегло рассмотрен браузер Google Chrome с его документацией по работе с devtools, в котором прочитаны описания основных панелей.

4. Изучить типовые элементы структуры html5 документа

<p style="text-indent: 25px;">
Задание 3: Прочитайте про теги разметки текста. Описание тегов приведено по ссылке: https://html5book.ru/html-text.

По результатам ответьте на следующие вопросы:

- Какие из тегов являются тегами форматирования абзацев?
- В чем различие тегов h?
- Для чего применяется тег code как его использовать?
- В чем различие тегов code, kbd, samp, var, pre?
- В чем отличие тегов оформления цитат и определений от тегов обычного форматирования текста?
- Для чего применяются теги p, br и hr?
- Какая разница в тегах span и p?
- В чем разница между тегами b и strong?

Ответы на вопросы:

- Теги i (курсив), b (полужирный) p (отступы после абзаца), br (перенос строки без абзаца).
- Теги h используются при задании заголовков. Больше цифра - меньше уровень.
- Тег code используется для отображения симфолов с влияением на них программного кода.
- Тег kbd выделяет текст, который должен быть введён пользователем с клавиатуры. Тег samp используется для вывода текста после обработки программного кода. Тег var отображет их курсивом переменные. Тег pre выводит текст на прямую без какого либо форматирования.
- Теги оформления цитат предназначены для выделения необходимых цитат по определенным правилам, которые можно вызвать одним тегом, вместо применения комбинации для достижении того же результата.
- Теги p, br и hr нужны разделения текста. Тег p - текстовый абзац. Тег br - перенос строки без абзаца. Тег hr - горизонтальная линия.
- Тег span - определение строчных элементов, выделение части информации внутри других тегов и установление стиля.
- Тег b выделяет жирным менее отчетливо.
<p align = justify>Задание 4: Используя методы разметки текста реализуйте текущее расписание занятий на 2 недели. При реализации необходимо чтобы ссылки на онлайн лекции были меньше и выделены жирным курсивом, фамилия преподавателя была курсивом, а название дисциплины было h4. Использованием стилей недопустимо.

Задание 4  выполнено, ссылка на него: https://github.com/Rm-men/Basic-frontend-dev-labs/tree/lab1/TimeTable

<p align = justify>Вывод: в ходе работы было организовано рабочее место для взаимодействия с HTML4 при помощи VSCode и GitHub, изучены: основные различия HTML4 и HTML5, рассмотрены основные функциональные возможности инструментов разработка на строне браузера, типовые элементы структуры html документов, возможности языка разметки markdown.

<p align = center>5

-----
<p align = center>Приложение А

<p align = center>(обязательное) 

<p align = center>Листинг базовой HTML-страница index4.html

  
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN">
    <html>
     <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>Таблица на HTML4</title>
     </head>
     <frameset rows = "350,100,*">
      <frameset cols = " 90%, 10%">
        <frame src = "i4_tabl.html" name="tabl">
        <frame src = "i4_numb.html" name="numb">
      </frameset>
      <frame src = "i4_panel.html" name = "panel">
      <frame src = "i4_text.html" name = "text">
      <noframes>
        sorry,there is not a frame support in your browser.
      </noframes>
    </frameset>
    </html>
<br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/>
<p align = center>6

---------
<p align = center>Приложение Б

<p align = center>(обязательное) 

<p align = center>Листинг базовой HTML-страница index.html

    <!DOCTYPE html>
    <html lang="en">
     <head>
        <meta charset="UTF-8">
        <title>Таблица на HTML5</title>
        <link rel="stylesheet" type="text/css" href="style.css">
        <script src="script.js"></script>   
     </head>
     <body>
       <table>
    <tr>
      <td><iframe src="i5_tabl.html" height="350" width="700"></iframe></td>
      <td><iframe src="i5_numb.html" height="350" width="300"></iframe></td>
    </tr>
    <tr><td colspan =2><iframe src="i5_panel.html" height="150" width="1008"></    iframe></td></tr>
    <tr><td colspan =2><iframe src="i5_text.html" height="105" width="1008"></iframe></td></tr>
    </table>
    </body>
    </html>
<br/>
<br/>
<br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/>
<p align = center>7

------

<p align = center>Приложение В

<p align = center>(справочное)

<p align = center>Библиографический список

- <https://gist.github.com/Jekins/2bf2d0638163f1294637>
- <https://githowto.com/ru> 
- <https://git-scm.com/book/ru/v2> 
- <https://techrocks.ru/2019/12/11/quoting-in-html/>
- <http://htmlbook.ru/samhtml/vvedenie-v-html> 
- <https://html5book.ru/html-html5/> 
- <https://ru.stackoverflow.com/>
- <https://habr.com/ru/company/simbirsoft/blog/337116/> 
- <https://gist.github.com/Jekins/2bf2d0638163f1294637> 
- <https://www.vyatsu.ru/uploads/file/1604/101_2004.pdf>

<br/>
<br/>
<br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/><br/>
<br/>
<p align = center>8

------
