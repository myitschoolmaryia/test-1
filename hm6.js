1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.

var ex = 'aaa@bbb@ccc';

console.log(ex.replace(/@/g, '!'));

2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.

let ex = "2025-12-31";

let regex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;

console.log( ex.replace(regex, '$<day>/$<month>/$<year>'));

3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).

let ex = "Я учу javascript!";

console.log(ex.substr(2,3), ex.substr(5,11));

console.log(ex.substring(2,5), ex.substring(6,16));

console.log(ex.slice(2,5), ex.slice(6,16));

4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let ex = [4, 2, 5, 19, 13, 0, 10], result = 0;

for (let i = 0; i < ex.length; i++)
{
  result += Math.pow(ex[i], 3);
}

console.log(Math.sqrt(result));

5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.

let a = 3, b = 5;

let c = a - b;

console.log(Math.abs(c));

6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).

let date = new Date();

function add(num)
{
  if (num > 0 && num < 10)
  {
    return '0' + num;
  }
  else return num;
}

console.log(add(date.getHours()) + ':' + add(date.getMinutes()) + ':' + add(date.getSeconds() + ' ' + add(date.getDate()) + '.' + add(date.getMonth() + 1) + '.' + date.getFullYear()));

7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.

let str = 'aa aba abba abbba abca abea';

console.log(str.replace(/ab+a+/g, 'found'));

8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.

function validation(phone, str){
if (phone.test(str))
{
   console.log("true");
}

else console.log("false");
}

validation(/^\+(375|80)(29|33|44|17)\w{7}$/, '+375291815823');


9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.

Функция должна возвращать true или false. Используйте регулярные
выражения.


function validation(mail, str){
if (mail.test(str))
{
   console.log("true");
}

else console.log("false");
}

validation(/^[A-Za-z]{1}[A-Za-z0-9-_]{2,11}@[A-Za-z]{2,5}\.[a-z]{2,11}$/, 'kalevich-v@mail.ru');

10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив.

function validation(domen, str){
if (domen.match(str))
{
   reutrn
}

else reurn
}

validation(/^(https):\/\/[a-zA-Z0-0-9]+\.[a-zA-Z0-0-9]+\.(by|com|ru|org)$/, '(https://tech.onliner.by/)(2018/04/26/smart-do-200/)(?utm_source=main_tile&utm_medium=smartdo200)(#zag3'));

^\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/[A-Za-z0-9-]+\/$

^\?[A-Za-z0-9_=&]+

^#[a-z0-9]+$
