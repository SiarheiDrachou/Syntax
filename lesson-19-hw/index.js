//Переменные
let name = "Джон";
let admin = name;
alert(admin);

let planetName, visiterSiteName;

//Типы данных
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

//Преобразование типов
"" + 1 + 0   //10
"" - 1 + 0   //-1
true + false   //1
6 / "3"   //2
"2" * "3"   //6
4 + 5 + "px"   //9px
"$" + 4 + 5   //$45
"4" - 2   //2
"4px" - 2   //NaN
7 / 0   //Infinity
"  -9  " + 5   //"  -9  5"
"  -9  " - 5   //-14
null + 1   //1
undefined + 1   //NaN
" \t \n" - 2   //-2

//Операторы
let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
let a = 2;
let x = 1 + (a *= 2);//а=4  х=5

//Операторы сравнения
5 > 4   //true
"ананас" > "яблоко"   //false
"2" > "12"   //true
undefined == null   //true
undefined === null   //false
null == "\n0\n"   //false
null === +"\n0\n"   //false

//Условные операторы
if ("0") {
    alert( 'Привет' ); //выведется
  }


let name = prompt('Какое «официальное» название JavaScript?');

if(name == "ECMAscript") {
    alert( 'Правильно' );
}
else {
    alert( 'You dont know? “ECMAScript”!' );
}

                            //Логические операторы
alert( null || 2 || undefined ); //2
alert( alert(1) || 2 || alert(3) ); //1,2
alert( 1 && null && 2 ); //null
alert( alert(1) && alert(2) ); //1
alert( null || 2 && 3 || 4 ); //3

//Проверка значения из диапазона
let age = prompt('введите возраст');
if (age>=14 && age <= 90 ) {
    alert("true");
}
else {
    alert("false");
}

//Проверка значения вне диапазона
let age = prompt('введите возраст');
if (age<=14 || age >= 90 ) {
    alert("true");
}
else {
    alert("false");
}

let age = prompt('введите возраст');
if ( !(age >= 14 && age <= 90) ) {
    alert("true");
}
else {
    alert("false");
}


//Проверка логина
let login = prompt("Who's there?")
while(true){
    if(login == "Админ") {
        let password = prompt("Пароль?")
        if (password == "Я Главный") {
            alert("Здравствуйте!");
            break;
        }
        else if (pass == '' || pass == null){
            alert("отменено");
            break;
        }
        else {
            alert("Неверный пароль");
            break;
        }
    }
    else if (pass == '' || pass == null) {
        alert("отменено");
        break;
    }
    else {
        alert("I don't know you");
        break;
    }
}

                                    //Циклы
//Последнее значение цикла
let i = 3;
while (i) {
  alert( i-- );
} //выведет 1


//Какие значения выведет цикл while?
let i = 0;
while (++i < 5) alert( i ); //закончит на 4

let i = 0;
while (i++ < 5) alert( i ); //закончит на 5

//Какие значения выведет цикл for?
for (let i = 0; i < 5; i++) alert( i ); // закончит на 4

for (let i = 0; i < 5; ++i) alert( i ); // закончит на 4

//Выведите чётные числа
for (let i = 0; i<11; i++){
    if (i%2==0) {
        alert(i);
    }
}

//Замените for на while
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
}

//Повторять цикл, пока ввод неверен
do {
    num = prompt("Введите число, большее 100?", 0);
} while (num <= 100);

//Вывести простые числа
for (let i = 0; i<11; i++){
        if(i == 2 || i == 3) {
            alert(i);
        }
        else if (i%2 == 0 || i%3 == 0) {
            continue;
        }

        else {
            alert(i);
        }
    }

                            //конструкция switch

//Напишите "if", аналогичный "switch"
let brouser = prompt("выберите браузер");
while(true){
    if(brouser == 'Edge') {
        alert( "You've got the Edge!" );
        break;
    }

    if(brouser == 'Chrome' || brouser == 'Firefox' || brouser == 'Safari' || brouser == 'Opera') {
        alert( 'Okay we support these browsers too' );
        break;
    }

    else {
        alert( 'We hope that this page looks ok!' );
        break;
    }
}

//Переписать условия "if" на "switch"
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
  
    case 1:
        alert('Вы ввели число 1');
        break;
  
    default:
        alert('Вы ввели число 2, а может и 3');
  }

