"use strict";
var out = document.getElementById("jsOut");

function MarketSum() {
	console.log("Кассовый апарат,для завершения рассчета введите любую клавишу");
	var a = +prompt('Введите стойомсть товара', "");
	var itog = 0;
	while (!isNaN(a)) {
		a *= 100;
		itog += a;
		a = prompt("a", "");
	}
	itog /= 100; // Возвращаем в центы
	itog = itog.toFixed(2) + " $"; // Округляем до 2 знаком после запятой 
	out.innerHTML = "С Вас " + itog;
	return itog;
}

function fBine(n) {
	console.log("формула бине");
	var sq5 = Math.sqrt(5);
	var one = (1 + sq5) / 2;
	var two = (1 - sq5) / 2;
	var formula = (Math.pow(one, n) - Math.pow(two, n)) / sq5;
	return formula;
}

function minMaxRandom(min, max) {
	return (min + Math.random() * (max - min)).toFixed(0);
}

function anylize() {
	var one, two, three, four, five, six;
	one = two = three = four = five = six = 0;

	for (var i = 0; i < 100; i++) {

		//var x = +minMaxRandom(1,6);
		var x = +randomIntegerFloat(1, 6);
		switch (x) {
			case 1:
				one++;
				break;
			case 2:
				two++;
				break;
			case 3:
				three++;
				break;
			case 4:
				four++;
				break;
			case 5:
				five++;
				break;
			case 6:
				six++;
				break;
			default:
				console.log("непонятно " + x);
		}

	} //end for
	console.log(one, two, three, four, five, six);

}

function randomIntegerFloat(min, max) {
	//learn.javasrtipt решение
	var rand = min + Math.random() * (max + 1 - min);
	rand = Math.floor(rand);
	return rand;
}

function ruletka(r) {
	var shoot = randomIntegerFloat(1, 6);
	r = r % 7;
	if (r == 0) {
		r++
	};
	console.log('вы выбрали ', r);
	var res;
	if (r == shoot) {
		res = 'вы застрелились'
	} else {
		res = 'вы живы';
	}
	return res;
}

function ucFirst(n) {
	//увеличить первую букву
	var newName = n.slice(1);
	var char = n.charAt(0).toUpperCase();
	n = char + newName;
	return n;
}
//объекты
var salaries = {
	"Максим": 130,
	"Витя": 150,
	"Андрей": 140,
	"Володя": 120
};

function sumSal(obj) {
	var res = 0;
	for (var key in obj) {
		res += obj[key];
	}
	return res;
};

//console.log( sumSal(salaries) );

function bigSal(obj) {
	var res = 0;
	var name;
	for (var key in obj) {
		if (obj[key] > res) {
			res = obj[key];
			name = key;
		}
	}
	if (res == 0) {
		return str = "нет сотрудников";
	}
	var str = name + " с зарплатой в " + res + " $"
	return str;
}
//console.log(bigSal(salaries));

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplySal(obj) {

	for (var key in obj) {

		if (isNumeric(obj[key])) {
			obj[key] *= 2;
		}

	};
	return obj;
};

//масивы
/*
var styles = ['jazz','blues',true,1.5,10,'pop'];
styles[styles.length] = 'rock-n-roll';
styles[styles.length - 2] = 'classic';
styles.shift();
console.log(styles);
styles.unshift('rap','reggy');

function stylesRand() {
  var maxL = styles.length;
  var rand = Math.floor(Math.random() * maxL);
  console.log(rand);
  return styles[rand];
}

function simpleCalc(){
  var arr = [];
  var slog = prompt('enter numb','0');

  while (slog != '') {

    if (slog === null || isNaN(slog) ) break;

    arr.push(+slog);
    slog = prompt('enter numb', '0');
  }
  var res = 0;
  for (var i = 0; i < arr.length; i++) {
    res += arr[i];
  }
  return res;
};

function find(arr, value) {
  for (var i = 0; i < arr.length; i++) {
    if (value === arr[i]) return i;
  }
  return 'none';
}

var arr1 = [5, 4, 3, 8, 0];

function filterRange(arr,a,b){
  var res = [];
  if(a > b){
    var tmp = a;
    a = b;
    b = tmp;
  }
  for (var i = 0; i <arr.length ; i++){
      
    if (a <= arr[i] && arr[i] <= b){
      res.push(arr[i]);
      }
  }
  return res;
}

var filtered = filterRange(arr1, 5, 3);

var hundred = function (){
  var res =[];
  for (var i = 1; i<101; i++){
    res[i-1]=i;
  }
  return res;
}();

function eratosfen(n){
  //написать решето где n длина массива;
  return sum;
};
*/
/*
//убил пол дня а написал такую херню!
function getMaxSubSum(arr){

  var sum = 0;
  var maxEl = 0;
  var place = 0;
  var tmpArr = [];
  
  for (var j = 0; j < arr.length; j++){
    
    sum += arr[j];
    if(arr[j] > maxEl){
      maxEl = arr[j];
      place = j;
    }
  };

  if (maxEl > sum) {

    function createTmp(p) {
      if (p > 0) {
        if (arr[p - 1] > 0) {
          tmpArr.push(arr[p - 1]);
          createTmp(p - 1);
        }
      } else if (arr.length - 1 < p) {
        if (arr[p + 1] > 0) {
          tmpArr.push(arr[p + 1]);
          createTmp(p + 1);
        }
      }
     return tmpArr;
    };
    createTmp(place);

    tmpArr.push(maxEl);

    var mss = 0;

    for (var j = 0; j < tmpArr.length; j++) {
      mss += tmpArr[j];
    };

    return mss;
  }

  var shiftSum = 0 ;
  for (var j = 1; j < arr.length; j++){
    shiftSum += arr[j];
  }

  var popSum = 0 ;
  for (var j = 0; j < arr.length-1; j++){
    popSum += arr[j];
  }

  if (shiftSum > sum){
    arr.shift();
    getMaxSubSum(arr);
  }else if (popSum > sum){
    arr.pop();
    getMaxSubSum(arr);
  }
  var mss= 0;

  for (var j = 0; j < arr.length; j++){
    
    mss += arr[j];
    
  };

  return mss;
};

function getMaxSubSum2(arr) {
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}
//сравнение моего метода и метода быстрого
console.log ( getMaxSubSum ([100, -10, 5,100, -10, 5]) );

console.log ( getMaxSubSum2([100, -10, 5,100, -10, 5]) );
*/
/*
var obj1 = {
  className: 'open menu'
}

function addClass(obj, cls) {
  var classes;
  if (obj.className){
   classes = obj.className.split(' ');
  }else{
    classes = [];
  }
  for( var i = 0; i < classes.length ;i++){
    if(classes[i] == cls) return;
  }
  classes.push(cls);
  obj.className = classes.join(' ');
};

addClass(obj1, 'new');
addClass(obj1, 'open');
addClass(obj1, 'me');
var obj2 = {name:'boris'};
addClass(obj2,'new');
console.log(obj2.className) // open menu new me
*/
/*
function camelize(str){
  var arr = str.split('');

  for ( var i = 0; i < arr.length ; i++){
    if(arr[i] == '-'){
      if(i+1<arr.length) {
        arr[i+1] = arr[i+1].toUpperCase();
      };
      arr.splice(i,1);
    }
  };
  
  str = arr.join('');
  console.log(str);
  return str;
}

function camelize2(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    // преобразовать: первый символ с большой буквы
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  str = arr.join('');
  console.log(str);
  return str;
}

camelize("-background-colo-r");
camelize2("-background-colo-r");
*/
var obj1 = {
	name: 'open menu menu zero'
}

function removeClass(obj, cls) {
	var classes;
	if (obj.className) {
		var classes = obj.className.split(' ');
	} else {
		return; //console.log('wrong!');
	}

	for (var i = 0; i < classes.length; i++) {
		if (classes[i] == cls) {
			classes.splice(i, 1);
			i--;
		}
	}

	obj.className = classes.join(' ');
	return obj;
};

removeClass(obj1, 'menu');

var arr4 = ["HTML", "JavaScript", "CSS"];

var arr4s = arr4.concat();

arr4.splice(arr4.length - 1, 1);

//console.log(arr4s);
/*
//случайная перетусовка массива
var arr5 = [1, 2, 3, 4, 5,6,7,8,9,10];

function mRand(){

  return Math.random()-0.5;

};

arr5.sort(mRand);
*/
//--------------------------------------------//
//односвязный список на JS 

var list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null
			}
		}
	}
};

//цикл прямой вывод
function printList(list) {
	var tmp = list;
	//tmp – исключительно обход списка
	while (tmp) {
		console.log(tmp.value);
		tmp = tmp.next;
	}
	return 'цикл прямой вывод';
}
//цикл обратный вывод
function printListReverse(list) {
	//мой вариант
	var arr = [];
	while (list.next !== null) {
		arr.unshift(list.value);
		list = list.next;
	}
	arr.unshift(list.value);

	for (var i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
	return 'цикл обратный вывод';
}

//обратный вызов в цикле не мой вариант
function printReverseList(list) {

	var arr = [];
	var tmp = list;

	while (tmp) {
		arr.push(tmp.value);
		//добавлять в конец списка быстрее чем в начало!
		tmp = tmp.next;
	}

	for (var i = arr.length - 1; i >= 0; i--) {
		//цикл начинает считывать массив в обратном порядке
		console.log(arr[i]);
	}
}

//printReverseList(list);

// рекурсия прямой вызов
function printListR(list) {
	console.log(list.value);
	if (list.next === null) {
		return;
	}
	printListR(list.next);
	return 'рекурсия прямой вызов';
}

//рекурсия обратный вызов
function printListRR(list) {
	if (list.next === null) {
		console.log(list.value);
		return;
	}
	printListRR(list.next);
	console.log(list.value);
	return 'рекурсия обратный вызов';
}
//--------------------------------------------//
/* массив с уникальными значениями */
var strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", "8-()"
];

function uniqueSlow(arr) {
	/* медленный метод!, но мой*/
	var unique = [];
	var tmp;

	function add(tmp) {

		if (!unique.length) {
			unique[0] = tmp
		};

		for (var i = 0; i < unique.length; i++) {
			if (unique[i] == tmp) return;
		}

		unique.push(tmp);

	}
	for (var i = 0; i < arr.length; i++) {
		tmp = arr[i];
		add(tmp)
	}
	return unique;
}

function uniqueFast(arr) {
	var obj = {};

	for (var i = 0; i < arr.length; i++) {
		var str = arr[i];
		obj[str] = i; // запомнить строку в виде свойства объекта
	}

	return Object.keys(obj); // метод возвращает массив имен свойств(keys) данного объекта(obj)
}

//console.log( uniqueSlow(strings) ); // кришна, харе, 8-()
//console.log( uniqueFast(strings) );
var anagrams = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор", "полковник", "клоПовник", "кортес"];
//мой вариант , не совсем верный
function acleanMy(arr) {
	var obj = {}

	for (var i = 0; i < arr.length; i++) {
		var tmp = arr[i].toLowerCase();
		if (tmp == 'воз' || tmp == 'зов') {
			arr[i] = 'зов';
		}
		if (tmp == 'гробик' || tmp == 'киборг') {
			arr[i] = 'киборг';
		}
		if (tmp == 'корсет' || tmp == 'костер') {
			arr[i] = 'сектор';
		}

		var str = arr[i];
		obj[str] = i;
	}
	return Object.keys(obj);
}
//верный вариант 
function acleanL(arr) {
	var obj = {};
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		var key = arr[i].toLowerCase().split('').sort().join('')
		//console.log(key);
		obj[key] = arr[i];
	}
	for (var keys in obj) {
		res.push(obj[keys]);
	}
	return res;
}
//-----------------------------------------------------------
//масивы методы
var arr7 = ["Есть", "жизнь", "на", "Марсе"];

var CamelArr = arr7.map(function (name) {
	return name.split('').map(function (ch, i) {
		if (!(i % 2)) {
			return ch.toUpperCase() + ch.slice(1);
		} else {
			return ch;
		}
	}).join('');
});

//console.log(CamelArr);

var arr8 = [1, 2, 3, 4, 5];

function getSums(arr) {
	var altSum = [];

	if (!arr.length) {
		return altSum;
	}

	function block(a, b) {
		altSum.push(a);
		return a + b;
	}
	// var res = arr.reduce(block);

	//  altSum.push(res);
	altSum.push(arr.reduce(block));
	return altSum;
};

//console.log(getSums(arr8));

//===================================
//Псевдомассив аргументов "arguments"
function argSum() {
	var res = 0;
	for (var i = 0; i < arguments.length; i++) {
		res += arguments[i];
	}
	return res;
};

function presenceOfArg() {
	if (arguments.length) {
		return 'true';
	} else {
		return 'none';
	}
}

//===================================
//дата и время
console.log(performance.now(), 'MS');

function getWeekDay(date) {
	var day = date.getDay();
	switch (day) {
		case 1:
			return 'пн';
		case 2:
			return 'вт';
		case 3:
			return 'ср';
		case 4:
			return 'чт';
		case 5:
			return 'пт';
		case 6:
			return 'сб';
		case 0:
			return 'вс';
		default:
			return 'ERor';
	}
};

var now = new Date();
//console.log(getWeekDay(weekDay));

function getDateAgo(date, a) {
	var newDate = new Date(date);

	newDate.setDate(newDate.getDate() - a);
	return newDate.getDay();
};

//console.log(getDateAgo(weekDay,1));

function getLastDayOfMonth(year, month) {
	var date = new Date();
	date.setFullYear(year);
	date.setMonth(month + 1);
	date.setDate(0);
	return date.getDate();
}

//console.log(getLastDayOfMonth(2018,11));

function getSecondsToday() {
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var res = h * 3600 + m * 60 + s;
	return res;
}

function getSecondsTomorrow() {
	var tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	tomorrow.setHours(0, 0, 0, 0);

	var date = new Date(2018, 10, 23, 23, 59, 0, 0);

	return (tomorrow - date) / 1000;
}

function formatDate(d) {
	var day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	};
	var month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}
	var year = d.getFullYear();
	year = '' + year;
	year = year[2] + year[3];
	return day + '.' + month + '.' + year;
};
var sen9 = new Date(2018, 10, 23);
//console.log(formatDate(sen9));

function formatDate2(date) {

	var now = new Date();
	var res = now - date;

	if (res <= 1000) {
		return 'только что';
	}
	var sec = Math.floor(res / 1000);
	if (sec < 60) {
		return sec + ' сек. назад'
	}
	var min = Math.floor(res / 60000);
	if (min <= 5) {
		return min + ' мин. назад';
	}

	return formatDate(date) + ' ' + date.getHours() + ':' + date.getMinutes();


};
//console.log(formatDate2( new Date(new Date - 5 * 60 * 1000)) );

function formatDate3(d) {
	//c learn.javascript 
	d = [
		'0' + d.getDate(),
		'0' + (d.getMonth() + 1),
		'' + d.getFullYear(),
		'0' + d.getHours(),
		'0' + d.getMinutes()
	];
	//масив в котором доб.0 перед значеями
	for (var i = 0; i < d.length; i++) {
		d[i] = d[i].slice(-2);
		//d[i] два последних символа
	}

	return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
};
//console.log(formatDate3(now));

//структуры данных оконченны 
//==========================================
//Замыкания, область видимости
//Локальные переменные для объекта
//#1 Напишите функцию sum, которая работает так: sum(a)(b) = a+b.
function zSum(a) {
	//при вызове без значений вернет 0
	a = a || 0; //значеніе по умолчанию 
	return function (b) {
		b = b || 0; //значеніе по умолчанию 
		return a + b;
	}
};
//zSum(a)(b);
/*реализовать строковый буфер на функциях в JavaScript */
function makeBuffer(str) {
	var buf = '';


	function buffer(str) {
		if (str === undefined) {
			return buf;
		}
		return buf += str;
	}

	buffer.clear = function () {
		buf = '';
		return 'буфер очищен';
	}

	return buffer;

}
var buffer = makeBuffer();

// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

//
var zUsers = [{
	name: "Вася",
	surname: 'Иванов',
	age: 20
}, {
	name: "Петя",
	surname: 'Чапаев',
	age: 25
}, {
	name: "Маша",
	surname: 'Медведева',
	age: 18
}];

function byField(field) {
	console.log('сортировка по возрастанию поля ' + field);
	return function (a, b) {
		return a.field > b.field ? 1 : -1;
		// если а.фиелд больше б.фиелд то 1 иначе -1;
		// ?(if):(else);
	}

};
/*
//вызовы функций 
zUsers.sort(byField('name')); //сортировка по имени 

zUsers.forEach(function(user) {
  console.log( user.name );
}); // Вася, Маша, Петя

zUsers.sort(byField('age')); //по возрасту!

zUsers.forEach(function(user) {
  console.log( user.name );
}); // Маша, Вася, Петя
*/
/* 
Создайте функцию filter(arr, func), которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true.
Создайте набор «готовых фильтров»: inBetween(a,b) – «между a,b», inArray([...]) – "в массиве [...]". Использование должно быть таким:
filter(arr, inBetween(3,6)) – выберет только числа от 3 до 6,
filter(arr, inArray([1,2,3])) – выберет только элементы, совпадающие с одним из значений массива.
*/
var arr8 = [1, 2, 3, 4, 5, 6, 7];

function filter(arr8, func) {
	var res = [];

	for (var i = 0; i < arr8.length; i++) {
		var tmp = arr8[i];
		if (func(tmp)) {
			res.push(arr8[i]);
		}
	}
	return res;
}
/*
console.log(filter(arr8, function(a) {
  return a % 2 == 0
}));
*/
function inBetween(a, b) {

	return function (x) {
		if (a <= x && x <= b) {
			return true
		} else {
			return false
		}
	}
};

function inArray(arr) {
	return function (x) {
		for (var i = 0; i < arr.length; i++) {
			if (x == arr[i]) {
				return true;
			}
		}
		return false;
	}
}
//console.log( inArray([1, 2, 3]) (2) );
//inBetween(arr8,3, 6);
//console.log( filter(arr8, inBetween(3, 6) ) ); // 3,4,5,6

//console.log( filter(arr8, inArray([1, 2, 10])) ); // 1,2

function makeArmy() {

	var shooters = [];

	for (var i = 0; i < 10; i++)(function (i) {

		var shooter = function () {
			console.log(i);
		};

		shooters.push(shooter);

	})(i);

	return shooters;
}
var army = makeArmy();

//army[0](); // стрелок выводит 10, а должен 0
//army[5](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2..

//Модуль 
(function () {
	console.log('модуль тест')
})();
//this calculator;

var calculator = {
	a: 0, //свойства по умочанию, защита от ошибки
	b: 0,
	read: function () {
		var a = +prompt('enter a', '0');
		var b = +prompt('enter b', '0');
		this.a = a;
		this.b = b;
		this.c = a - b; //создаст новое свойство у объекта
	},
	sum: function () {
		return this.a + this.b;
		//при вызове без read будет расчитано значение по умолчанию 
		//если бы их не было возвращало бы NaN, так как а и b не были свойствами объекта калькулятор calc.a = undefeden :) 
	},
	mul: function () {
		return this.a * this.b;
	}
};

//задача лестинца 

var ladder = {
	step: 0,
	up: function () { // вверх по лестнице
		this.step++;
		return this;
	},
	down: function () { // вниз по лестнице
		this.step--;
		return this; //возвращает объект из которого была вызвана функция,
		//соответсвенно можно вызывать у этого(this) объекта (ladder) снова свойсвтва Up or down
	},
	showStep: function () { // вывести текущую ступеньку
		console.log('текущая ступенька = ' + this.step);
	}
};

ladder.up().up().down().up().showStep();

// zSum 2 
function zum(a) {
	var currentSum = a;

	function f(b) {
		currentSum += b;
		return f;
	}
	f.toString = function () {
		return currentSum;
	}
	return f;
}
// Animalthis и animal обсолютно одинаково работают!
function Animalthis(name) {
	// this = {};//это строка не работает буквально
	//так как this указывает на функцию , а функция это и есть объект

	// в this пишем свойства, методы
	this.name = name;
	this.canWalk = true;

	// return this;//это работает возвращает созданый объект в конструкторе, условие по умолчанию
}

function Animal(name) {
	var obj = {};
	//здесь объект создается чеерз переменую а не this 
	obj.name = name;
	obj.canWalk = true;

	return obj;
};

//var e = new Animal('ejik');
//alert(e);

//Возможны ли такие функции A и B в примере ниже, (задача)
function AS() {
	this.station = 'Станция';
	toString: this.station;
	valueOf: this.station;
	return toString;
};

function BS() {
	this.station = 'Станция';
	toString: this.station;
	valueOf: this.station;
	return toString;
}
//cal через конструктов
function CalculatorConstr() {
	var a;
	var b;
	this.read = function () {
		a = +prompt('a', 0);
		b = +prompt('b', 0);
	}
	this.sum = function () {
		return a + b;
	}
	this.mul = function () {
		return a * b;
	}
}
var calculatorCon = new CalculatorConstr();

function Accumulator(a) {
	this.value = a;
	this.read = function () {
		var t = +prompt('t', 0);
		this.value += t;
	}
}

var accumulator = new Accumulator(1);
/*
function calculate (str){
  for ( var i = 0; i < str.length ; i++){
    var a,b,c ='';
    if ( isNumeric (str[i]) ) {
      c +=str[i];
      continue;
    }else{
      a = c;
    }
    b = c;

   
  }
  console.log(a,b);
}
*/
//мой калькулятор из темы конструктор
function СС2() {
	var methods = {
		"+": function (a, b) {
			return a + b;
		},
		"-": function (a, b) {
			return a - b;
		}
	}

	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}

	this.addMethod = function (ch, func) {
		methods[ch] = func;
		console.log('добавлено', ch);
	}

	this.calculate = function (str) {
		var a = '',
			b = '',
			m = '';
		for (var i = 0; i < str.length; i++) {
			if (isNumeric(str[i])) {
				a += str[i];
			} else {
				break;
			}
		}
		i++;
		while (str[i] != ' ') {
			m += str[i];
			i++;
		}
		b = str.substring(i);
		console.log(a, ' ', b, ' ', m);
		return methods[m](+a, +b);
	}
}
var calc = new СС2;
console.log(calc.calculate("3 + 7")); // 10
console.log(calc.addMethod('*', function (a, b) {
	return a * b;
}));

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/*
  Функция isFinite(n) преобразует аргумент к числу и возвращает true,
  если это не Infinity/-Infinity/NaN.
Таким образом, правая часть отсеет заведомо не-числа, 
но оставит такие значения как true/false/null и пустую строку '', 
так как они корректно преобразуются в числа.
Для их проверки нужна левая часть.
 Вызов parseFloat(true/false/null/'') вернёт NaN для этих значений.
Так устроена функция parseFloat: она преобразует аргумент к строке,
 то есть true/false/null становятся "true"/"false"/"null", 
а затем считывает из неё число, при этом пустая строка даёт NaN.
*/

//  дескриптор
function UserD(fullName) {
	this.fullName = fullName;
	Object.defineProperties(this, {

		firstName: {
			get: function () {
				var spl = this.fullName.split(' ');
				return spl[0];
			},
			set: function (val) {
				var spl = this.fullName.split(' ');
				spl[0] = val;
				this.fullName = spl.join(' ');;
			}
		},
		secondName: {
			get: function () {
				return this.fullName.split(' ')[1];
			},
			set: function (val) {
				this.fullName = this.firstName + ' ' + val;
			}
		}
	});
}

var vasya = new UserD("Василий Попкин");
/*
Object.defineProperty(vasya,'firstName',{
  get: function(){
   var spl =this.fullName.split(' ');
   //spl = spl;
   return spl[0];
  }
});
*/
//Статические и фабричные методы

function Article() {
	this.created = new Date;
	Article.created = this.created;
	Article.count++;
}

Article.count = 0;

Article.showStats = function () {
	var c = this.count;
	var d = this.created;
	return 'count = ' + c + ' / ' + d;
}

new Article();
new Article();

console.log(Article.showStats()); // Всего: 2, Последняя: (дата)

new Article();
console.log(Article.showStats());
//Примениняет функцию к аргументам
function sumArgs() {
	var argArray = [].slice.call(arguments);
	var sum = argArray.reduce(function (a, b) {
		return a + b;
	})
	return sum;
}
console.log(sumArgs(1, 2, 3));

function applyAll() {
	var func = arguments[0];
	var arr = []
	for (var i = 1; i < arguments.length; i++) {
		arr[i - 1] = arguments[i];
	}
	return func.apply(null, arr);
};

//console.log( applyAll(sumArgs,4,5,6) );

function ask(question, answer, ok, fail) {
	var result = prompt(question, '');
	if (result.toLowerCase() == answer.toLowerCase()) ok();
	else fail();
}

var user = {
	login: 'Василий',
	password: '12345',

	loginOk: function () {
		alert(this.login + ' вошёл в сайт');
	},

	loginFail: function () {
		alert(this.login + ': ошибка входа');
	},

	checkPassword: function () {
		//ask("Ваш пароль?", this.password, this.loginOk, this.loginFail); //условие
		//решение через bind

		var ok = this.loginOk.bind(this);
		var fail = this.loginFail.bind(this);
		ask("Ваш пароль?", this.password, ok, fail);

		//через замыкание
		//var ok = function (){user.loginOk};
		var self = this;
		var fail = function () {
			return self.loginFail()
		};

		ask('Ваш пароль', this.password, function () {
			self.loginOk()
		}, fail);
	}
};
/*
var vasya = user;
user = null;
vasya.checkPassword();
*/
/*
//повтор замыкания свойство функции
function makeCounter() {
  function counter() {
    return  ++counter.currentCount;
  };
  counter.currentCount = 0;

  return counter;
}

var c1 = makeCounter();
console.log('вызввана раз = 1',c1()); // 1
console.log('вызввана раз = 2',c1()); // 2
console.log('будто вызвана была 5 раз ',c1.currentCount = 5); //5
console.log('вызввана раз = 6',c1());  // 5 !
console.log('не увеличивается 6',c1.currentCount );//6
console.log('вызввана раз = 7',c1()); //6
console.log('8',c1()); //7
*/
//усложненый вариант задачи выше 
function ask2(question, answer, ok, fail) {
	var result = prompt(question, '');
	if (result.toLowerCase() == answer.toLowerCase()) ok();
	else fail();
}

var user2 = {
	login: 'Василий',
	password: '123',

	// метод для вызова из ask
	loginDone: function (result) {
		alert(this.login + (result ? ' вошёл в сайт' : ' ошибка входа'));
	},
	/*
	checkPassword: function() {
	  var self = this; //Через замыкание , легкая читаймость
	  ask("Ваш пароль?", this.password,
	    function() {
	     self.loginDone(true);

	    },
	    function() {
	     self.loginDone(false);
	    }
	  );
	}
	*/
	checkPassword: function () {

		ask("Ваш пароль?", this.password,
			this.loginDone.bind(this, true),
			this.loginDone.bind(this, false)
		);
	}

};

//user2.checkPassword();

// var vasya2 = user2;
// user2 = null;
// vasya2.checkPassword();
//=======================================
//декораторы

// вспомогательная функция для проверки на число
function checkNumber(value) {
	return typeof value == 'number';
}

// декоратор, проверяющий типы для f
// второй аргумент checks - массив с функциями для проверки
function typeCheck(f, checks) {
	return function () {
		for (var i = 0; i < arguments.length; i++) {
			if (!checks[i](arguments[i])) {
				alert("Некорректный тип аргумента номер " + i + " " + arguments[i]);
				return;
			}
		} //ретурн не сработает если хоть раз сработает ретурн выше
		return f.apply(this, arguments); //можно передать null , нет смысла передчи с контекстом, по сути просто фильтр 

	}
}

function sum(a, b) {
	return a + b;
}

// обернём декоратор для проверки
sum = typeCheck(sum, [checkNumber, checkNumber]); // оба аргумента - числа

function work(a, b) {
	/* ... */ // work - произвольная функция, один аргумент
	return a + b;
}

function makeLogging(f, log) {
	/* ваш код */
	return function () { //a и b  аргументы f , анонимная функция обложка ( wrapper )
		var arr = []
		for (var i = 0; i < arguments.length; i++) {
			arr.push(arguments[i]);
		}
		log.push(arr.join('+')); // добавляет аргументы a и b как массив , в массив, получается двухмерный массив
		var res = f.apply(this, arguments);
		return res;
	};
};

var log = [];
work = makeLogging(work, log);

// console.log( work(1,9) ); //  добавлено в log
// console.log( work(5,4) ); //  добавлено в log

// for (var i = 0; i < log.length ;i++){
//   console.log('log : '+log[i]);
// }

function fcash(x) {
	var res = (Math.random() * 10).toFixed(0) + +x; // random для удобства тестирования
	return +res;
}
var keyCash = {};

function makeCaching(func) {
	/* ваш код */
	//  var keyCash = {}; 
	return function (c) {
		var res = func.apply(this, arguments)
		// c = c.toString();
		if (c in keyCash) {
			return keyCash[c]
		} else {
			keyCash[c] = res;
		}
		return res;
	}
}

fcash = makeCaching(fcash);

var a, b;

a = fcash(0);
b = fcash(0);

function formatDate4(date) {

	if (Array.isArray(date)) {
		// date = date.join(', ');
		date = new Date(date[0], date[1], date[2]);
	}

	var type = typeof (date);
	console.log(type);
	if (type == "string") {
		date = Date.parse(date);
		type = typeof (date);
	}

	if (type == "number") {
		date = new Date(date);
	}

	// var res = clearDate(date);
	//мой вариант
	function clearDate(d) {
		//c learn.javascript 
		d = [
			'0' + d.getDate(),
			'0' + (d.getMonth() + 1),
			'' + d.getFullYear(),
		];
		//масив в котором доб.0 перед значеями
		for (var i = 0; i < d.length; i++) {
			d[i] = d[i].slice(-2);
			//d[i] два последних символа
		}
		return d.slice(0, 3).join('.');
	};
	//альтернативный вывод
	return date.toLocaleString("ru", {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit'
	});
	//return res;
};

//Json 
var leader = {
	name: "Василий Иванович",
	age: 35,
	toJSON: function () {
		return {
			name: this.name,
			age: this.age
		}
	}
};
var strL = JSON.stringify(leader);
//var strObj = JSON.parse(strL);

var soldier = {
	name: "Петька",
	toJSON: function () {
		return {
			name: this.name
		}
	}
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

var teamStr = JSON.stringify(team);

//таймеры 
// function printNumbersInterval (){
//   var i = 0;
//   var consolePrint = setInterval(function(){
//     console.log(++i);
//   },100);
//   setTimeout(function(){
//     clearInterval(consolePrint)
//   },2000);
//   return i;
// }
// var i = 0;
// var timerRec = setTimeout(function tick(){
//   console.log(++i);
//   if (i == 20 ) return;
//   timerRec = setTimeout(tick,100);
// },100)

function fn(x) {
	alert(x);
	return x;
};
//короче хз в чем отличие

//не смог решить да и не понял
function debounce(f, ms) {
	var timerId = 1;
	return function () {
		var thisSaved = this;
		var argumentsSaved = arguments;
		clearTimeout(timerId);
		timerId = setTimeout(function () {
			return f.apply(thisSaved, argumentsSaved);

		}, ms);
	}
}


let fn1 = debounce(fn, 1000);

// fn1(1); // вызов отложен на 1000 мс
// fn1(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// // через 1 секунду появится alert(2)

// setTimeout( function() { fn1(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
// setTimeout( function() { fn1(4) }, 1200); // игнорируем вызов (3)


// через 2200 мс от начала выполнения появится alert(4)

//===================================
//тормозилка
//мой код, не проходит тест

function throttle(func, ms) {
	var timer = 0;

	return function () {

		var saved = this;
		var arg = arguments;

		if (timer == 0) {
			timer = arg;
			func.apply(saved, arg)

		} else {
			clearTimeout(timer);

			timer = setTimeout(function () {
				func.apply(saved, arg);
			}, ms);

		}
	}
}


var fs = function (a) {
	console.log(performance.now());
	console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var fs1 = throttle(fs, 1000);

//fs1(1); // выведет 1
//fs1(2); // (тормозим, не прошло 1000 мс)
//fs1(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется
//eval 
// var evpromt = prompt('расчитать? ','2+2*3');

// alert (eval(evpromt));
//==========//
// ООП 
//===========//

function CoffeeMachine(power) {
	this.waterAmount = 0;

	var WATER_HEAT_CAPACITY = 4200;
	var timerID;

	var self = this;

	function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	function onReady() {
		alert('Кофе готово!');
	}

	self.run = function () {
		timerID = setTimeout(onReady, getBoilTime());
	};

	self.stop = function () {
		clearTimeout(timerID);
	};
}

var cf1 = new CoffeeMachine(50000);
cf1.waterAmount = 200;

//coffeeMachine.run();
//coffeeMachine.stop();

function User() {
	/* ваш код */
	var name, surname;
	this.setFirstName = function (n) {
		name = n;
	};
	this.setSurname = function (sur) {
		surname = sur;
	};
	this.getFullName = function () {
		return name + ' ' + surname;
	};
}

var vas3 = new User();
vas3.setFirstName("Петя");
vas3.setSurname("Иванов");

//alert( vas3.getFullName() );

function CoffeeMachine2(power, capacity) {
	var waterAmount = 0;
	var timerID;
	var WATER_HEAT_CAPACITY = 4200;

	function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.setWaterAmount = function (amount) {
		// ... проверки пропущены для краткости
		waterAmount = amount;
	};

	this.getWaterAmount = function (amount) {
		return waterAmount;
	};

	function onReady() {
		alert('Кофе готов!');
	}

	this.setOnReady = function (newOnReady) {
		onReady = newOnReady;
	};

	this.run = function () {
		timerID = setTimeout(function () {
			timerID = null;
			onReady();
		}, getTimeToBoil());
	};

	this.isRunning = function () {
		return !!timerID;
	}
}
/*
var cf2 = new CoffeeMachine2(20000, 550);

cf2.setWaterAmount(150);

cf2.setOnReady(function() {
  var amount = cf2.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});


alert( 'До: ' + cf2.isRunning() ); // До: false

cf2.run();
alert( 'В процессе: ' + cf2.isRunning() ); // В процессе: true

cf2.setOnReady(function() {
  alert( "После: " + cf2.isRunning() ); // После: false
});

alert( 'До2: ' + cf2.isRunning() ); // До: false
*/
function Machine(power) {
	this._enabled = false;

	var self = this;
	this.enable = function () {
		self._enabled = true;
		console.log('вкл')
	};

	this.disable = function () {
		self._enabled = false;
		if (self.timerID) {
			console.log('отключение');
			clearTimeout(self.timerID);
		} else {
			console.log('Выкл')
		};
	}
}

function CoffeeMachine3(power) {
	Machine.apply(this, arguments);

	this.timerID = 0;

	this.waterAmount = 0;

	this.setWaterAmount = function (amount) {
		this.waterAmount = amount;
	};

	function onReady() {
		console.log('29.12.18');
	}

	this.run = function () {
		if (!this._enabled) {
			throw new Error('кофеварка отключена');
		}
		console.log('подготовка 4 сек');

		this.timerID = setTimeout(onReady, 4000);
	}

}

var cf3 = new CoffeeMachine3(50);

//cf3.enable();
//cf3.run();
//cf3.disable();

function Fridge(power) {
	Machine.apply(this, arguments);

	var food = [];

	var V = power / 100;

	var self = this;
	var parentDisable = self.disable;

	self.disable = function () {
		if (food.length) {
			console.log('Холодильник не пуст');
		} else {
			parentDisable();
		}
	};

	this.addFood = function () {
		if (!this._enabled) {
			throw new Error('Включите Холодильник!');
		}
		for (var i = 0; i < arguments.length; i++) {
			if (food.length < V) {
				food.push(arguments[i]);
			} else {
				alert('Холодильник полон!');
				break;
			}
		}
	}

	this.getFood = function () {
		// var copyfood = [];
		// for(var i = 0; i < food.length ; i++){
		//   copyfood[i]=food[i];
		// }
		// return copyfood;
		return food.slice();
	}
	this.removeFood = function (del) {
		food.forEach(function (elem, i, arr) {
			if (elem.title == del) {
				arr.splice(i, 1);
			}
		});
	};

	this.filterFood = function (filter) {
		return food.filter(filter);
	};
};


var hol = new Fridge(500);

hol.enable();


hol.addFood({
	title: "сок",
	calories: 30
});
hol.addFood({
	title: "зелень",
	calories: 10
});


hol.removeFood("сок");

console.log(hol.getFood());

// var dietItems = hol.filterFood(function(item) {
//   return item.calories < 50;
// });
//ооп в прототипном стиле
var head = {
	glasses: 1
};

var table = {
	pen: 3,
	__proto__: head
};

var bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table
};

var pockets = {
	money: 2000,
	__proto__: bed
};

function OBJ() {
	this.isw = true;
}

OBJ.prototype = {
	constructor: OBJ
}

let tobj = new OBJ();

let tobj2 = new tobj.constructor();

console.log(tobj.isw);
console.log(tobj2.isw);

//Встроенные "классы" в JavaScript

Function.prototype.defer = function (ms) {
	var f = this;

	function res() {
		var a = arguments;
		var con = this;
		setTimeout(function () {
			f.apply(con, a);
		}, ms)
	}
	return res;
};

function ftest(a, b) {
	alert(a + b);
}

//ftest.defer(1000)(1,2);

//класс с использованием прототипа 

function CoffeeMachineP(power) {
	this._waterAmount = 0;

	this._power = power;
};

CoffeeMachineP.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachineP.prototype._getTimeToBoil = function () {
	return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachineP.prototype.run = function () {
	setTimeout(function () {
		alert('Кофе готов 777');
	}, this._getTimeToBoil());
};

CoffeeMachineP.prototype.setWaterAmount = function (amount) {
	this._waterAmount = amount;
};



// var newCoffeeMachine = new CoffeeMachineP(5000);
// newCoffeeMachine.setWaterAmount(50);
// newCoffeeMachine.run();

function Clock(options) {
	this._template = options.template;
}

Clock.prototype._render = function () {
	this._date = new Date();

	this._hours = this._date.getHours();
	if (this._hours < 10) this._hours = '0' + this._hours;

	this._min = this._date.getMinutes();
	if (this._min < 10) this._min = '0' + this._min;

	this._seconds = this._date.getSeconds();
	if (this._seconds < 10) this._seconds = '0' + this._seconds;

	this._output = this._template.replace('h', this._hours).replace('m', this._min).replace('s', this._seconds);

	console.log(this._output);
};

Clock.prototype._stop = function () {
	clearInterval(this._timer);
}

Clock.prototype.start = function () {
	this._render();
	var self = this;
	this._timer = setInterval(function () {
		self._render()
	}, 1000)
}

var clock = new Clock({
	template: 'h:m:s'
})
//clock.start();
//наследование класса 
function ExtendedClock(options) {
	Clock.apply(this, arguments);
	this._precision = +options.precision;
}

ExtendedClock.prototype = Object.create(Clock.prototype);
ExtendedClock.prototype.constructor = ExtendedClock;

ExtendedClock.prototype.start = function () {
	//Clock.prototype.start.apply(this,arguments);
	this._render();
	let pr = this._precision;
	let self = this;
	this._timer = setInterval(function () {
		self._render()
	}, pr);

}

let newClock = new ExtendedClock({
	template: 'h:m:s',
	precision: 10000
})

//newClock.start();
//===========
function Menu(state) {
	this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function () {
	this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function () {
	this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function () {
	switch (this._state) {
		case Menu.STATE_OPEN:
			return 'открыто';

		case Menu.STATE_CLOSED:
			return 'закрыто';
	}
};

Menu.prototype.showState = function () {
	alert(this._stateAsString());
};

function AnimatingMenu() {
	Menu.apply(this, arguments);

}



AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function () {
	let self = this;
	this._state = this.STATE_ANIMATING;
	this._timer = setTimeout(function () {
		Menu.apply(self);
	}, 1000);
};

AnimatingMenu.prototype.close = function () {
	clearTimeout(this._timer);
	Menu.apply(this);
};

AnimatingMenu.prototype._stateAsString = function () {
	switch (this._state) {
		case this.STATE_ANIMATING:
			return 'Анимация';
		default:
			return Menu.prototype._stateAsString.apply(this);
	}
}
// использование..

// var menu =  new AnimatingMenu();

// menu.showState(); // закрыто

// menu.open();
// menu.showState(); // анимация

// setTimeout(function() {
//   menu.showState(); // открыто

//   menu.close();
//   menu.showState(); // закрыто (закрытие без анимации)
// }, 1000);

function FormatError(FormatEr) {
	//  Error.call(this,FormatEr);

	this.name = 'Format Error';
	this.FormatEr = FormatEr;
	this.message = "Ошибка в свойстве " + FormatEr;

	if (Error.captureStackTrace) {
		Error.captureStackTrace(this, this.constructor);
	} else {
		this.stack = (new Error()).stack;
	}

}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

var err = new FormatError("ошибка форматирования");

console.log(err.message); // ошибка форматирования
console.log(err.name); // FormatError
console.log(err.stack); // стек на момент генерации ошибки

console.info(err instanceof Error); // своя проверка 

console.info(err instanceof SyntaxError); // true , условие задачи

// dom
var data = {
	"Рыбы": {
		"Форель": {},
		"Щука": {}
	},

	"Деревья": {
		"Хвойные": {
			"Лиственница": {},
			"Ель": {}
		},
		"Цветковые": {
			"Берёза": {},
			"Тополь": {}
		}
	}
};

/* ваш код */
let createTree = function (elem, dat) {
	let ul = document.createElement('ul');
	elem.appendChild(ul);

	let forIn = function (el, obj) {
		for (const key in obj) {
			let li = document.createElement('li');
			li.innerHTML = key
			li.style.border = "1px solid black";
			li.style.margin = "1px";
			el.appendChild(li);

			if (typeof (obj[key]) === 'object' & Object.keys(obj[key]).length != 0) {

				let ul = document.createElement('ul');
				li.appendChild(ul);


				forIn(ul, obj[key]);
			}

		}
	};

	forIn(ul, dat);
};

createTree(document.getElementById('tree'), data);

// treeWithNumbers next TASK

let p = treeWithNumbers;
lineSearch(p);


function lineSearch(list) {
	for (let i = 0; i < list.childElementCount; i++) {

		if (list.children[i].childElementCount) {

			let value = list.children[i].firstChild.data.trim() + " [" + list.children[i].getElementsByTagName('li').length +
				"]";
			let tagName = list.children[i];
			tagName.firstChild.data = value;
			console.log(tagName, value);
			lineSearch(list.children[i].firstElementChild);
		}

	}; //end for
}
//календарь 
function createCalendar(id, year, month) {
	var elem = document.getElementById(id);
	let div = document.createElement('div');
	elem.appendChild(div);

	let table = document.createElement('table');

	let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
	let d = new Date(year, month - 1);

	const start = d.getDay() - 1;
	const startMonth = d.getMonth();

	let nameMonth = d.toLocaleString('ru', {
		month: 'long'
	});
	let h2 = document.createElement('h2');
	h2.innerHTML = nameMonth + ' ' + year;
	h2.style.color = "red";
	h2.style.textAlign = "center";


	for (let i = 0; i < 7; i++) {
		let row = table.insertRow();
		for (let j = 0; j < 7; j++) {
			let cell = row.insertCell();
			if (i == 0) {
				cell.innerHTML = week[j];
				cell.style.backgroundColor = "#d3d3d3";
				cell.style.fontWeight = "bold";

			} else if (i == 1) {

				if (j < start) continue;

				cell.innerHTML = d.getDate();

				d.setDate(d.getDate() + 1);
				console.log(d.toLocaleString("ru", {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				}), "от рождества Христова");

			} else {
				if (startMonth != d.getMonth()) continue;
				cell.innerHTML = d.getDate();
				d.setDate(d.getDate() + 1);
				console.log(d.toLocaleString("ru", {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric'
				}), "от рождества Христова");
			}

		}
	}
	div.appendChild(h2);
	div.appendChild(table);

	// ... ваш код, который генерирует в elem календарь
}

createCalendar('calendar', 2019, 1);
createCalendar('calendar', 2019, 2);
createCalendar('calendar', 2019, 3);
createCalendar('calendar', 2020, 1);
createCalendar('calendar', 2020, 2);
createCalendar('calendar', 2020, 3);

function clock2() {
	let d = new Date();
	timeNow.innerHTML = "";

	let dot = ":";
	let spanDot = document.createElement('span');
	spanDot.innerText = dot;

	let h = d.getHours();
	if (h < 10) {
		h = "0" + h
	};
	let hour = document.createElement('span');
	hour.style.color = "red";
	hour.innerHTML = h;
	timeNow.appendChild(hour);
	timeNow.appendChild(spanDot);


	let m = d.getMinutes();
	if (m < 10) {
		m = "0" + m
	};
	let min = document.createElement('span');
	min.style.color = "green";
	min.innerHTML = m;
	timeNow.appendChild(min);
	timeNow.appendChild(spanDot.cloneNode(true));

	let s = d.getSeconds();
	if (s < 10) {
		s = "0" + s
	};
	let sec = document.createElement('span');
	sec.style.color = "blue";
	sec.innerHTML = s;
	timeNow.appendChild(sec);

}

let stopTimeNow;
stopTimeNow = setInterval(clock2, 1000);

let bStep = 0;

function bubleSort() {
	let flag = false;

	for (let i = 1; i < table.rows.length - 1; i++) {
		let j = i + 1;
		let cTd = table.rows[i];
		let nTd = table.rows[j];
		let cVal = +table.rows[i].cells[2].innerHTML;
		let nVal = +table.rows[j].cells[2].innerHTML;


		if (cVal > nVal) {
			flag = true;

			nTd.insertAdjacentElement('afterEnd', cTd);

		}
		if (flag) {
			bubleSort();
		}
		bStep++;
	}

}
//своя каруселька №2 можно добавлять различное количество li с длинной 130px
let arrows = document.querySelectorAll('.arrow');
let left = arrows[0];
let right = arrows[arrows.length - 1];
let currentPossition = +listC.style.left;

let liEnter = listC.getElementsByTagName('li');
let imgW = (liEnter.length - 3) * 130;

left.onclick = function () {
	console.log('left');
	if (currentPossition < 0) {
		if ((currentPossition + 390) <= 0) {
			currentPossition += 390;
			listC.style.left = currentPossition + 'px';
		} else {
			console.log('left else');
			currentPossition += (-currentPossition);
			listC.style.left = currentPossition + 'px';
		}
	}
}

right.onclick = function () {
	console.log('right');
	if (currentPossition != (-imgW)) {

		if ((currentPossition - 390) > (-imgW)) {
			currentPossition -= 390;
			listC.style.left = currentPossition + 'px';
		} else {
			console.log('right else')
			currentPossition -= (imgW + currentPossition);
			listC.style.left = currentPossition + 'px';
		}

	}
}
field.onclick = function (event) {

	let ballSize = ball.clientWidth; //размер мяча
	let outLeft = field.offsetLeft + field.clientLeft; //положение относительно документа и границ
	let outTop = field.offsetTop + field.clientTop;

	let newTop = event.pageY - outTop;
	if (newTop < (ballSize / 2)) newTop = (ballSize / 2); // предотварщает смещение за верхнюю границу
	let newLeft = event.pageX - outLeft;
	if (newLeft < (ballSize / 2)) newLeft = (ballSize / 2); // предотварщает смещение за левую границу

	//границы площадки , размеры
	let borderX = field.clientWidth - ballSize / 2;
	let borderY = field.clientHeight - ballSize / 2;


	ball.style.top = Math.min(newTop, borderY) + 'px'; // предотварщает смещение за нижнюю границу
	ball.style.left = Math.min(newLeft, borderX) + 'px'; // предотварщает смещение за правую границу
}
// делегирование событий
delMessages.onclick = function (event) {
	let target = event.target;
	if (target.className != 'remove-button') return;
	let removeButton = target.closest('.pane');
	removeButton.style.display = 'none';
}
//задача 2 
let tree3 = document.querySelector('.tree3');
let arrayLi = tree3.getElementsByTagName('li');

let addSpan = function (elem) {
	let span = document.createElement('span');
	elem.insertBefore(span, elem.firstChild);
	span.appendChild(span.nextSibling);
}
for (let i = 0; i < arrayLi.length; i++) {
	addSpan(arrayLi[i]);
}

tree3.onclick = function (event) {
	let target = event.target;
	if (target.tagName != "SPAN") return;
	let li = target.closest('li');
	// console.log(li)
	if (li.childElementCount > 1) {
		// console.log(li.children[1]);
		li.children[1].classList.toggle('hide');
		// li.children[1].hidden = !li.children[1].hidden;
	}
}

grid.onclick = function (event) {
	let bTime = 0;
	let d = new Date();
	let target = event.target;
	let select;
	if (target.getAttribute('data-type') == 'number') {
		select = 0;
	} else if (target.getAttribute('data-type') == 'string') {
		select = 1;
	} else return;

	let bStep = 0;

	function bubblesort(tab) { //БаблСортировка без рекурсии
		let len = tab.rows.length;
		let rows = tab.rows;
		let i = 0;
		let j = 0;
		for (i = 1; i < len; i++) {
			let cTd = rows[i];
			let cValue;
			if (select) {
				cValue = rows[i].cells[select].innerHTML;
			} else {
				cValue = +rows[i].cells[select].innerHTML;
			}

			j = i - 1;
			while (j > 0 && (rows[j].cells[select].innerHTML) > cValue) {

				rows[j - 1].insertAdjacentElement('afterEnd', cTd);
				j--;
				bStep++;
			};
			bStep++;
		}

	};
	bubblesort(grid);
	bTime += new Date() - d;
	console.log(target, bTime + ' ms', bStep + ' Steps');
}
// Поведение "подсказка"
let behaviorTooltip = document.querySelector(".behaviorTooltip");
behaviorTooltip.onmouseover = function (event) {
	let target = event.target;

	if (!target.getAttribute('data-tooltip')) return;
	let span = document.createElement('span');
	span.className += 'spanTip';
	span.innerHTML = target.getAttribute('data-tooltip');
	target.insertAdjacentElement('beforebegin', span);
	let top = target.getBoundingClientRect().top - span.offsetHeight - 5;
	span.style.top = top + 'px';
	if (top < 0) {
		span.style.top = target.getBoundingClientRect().bottom + 5 + 'px';
	}
};
behaviorTooltip.onmouseout = function (event) {
	let target = event.target;
	if (!target.getAttribute('data-tooltip')) return;
	let span = document.querySelector('.spanTip');
	span.remove();

}
// действия браузера по умолчанию
contents.onclick = function (event) {
	let target = event.target;
	while (target != this) {
		if (target.tagName == 'A') break;
		target = target.parentNode;
	}
	if (target.tagName != 'A') return;
	let msg = 'перейти по адресу ' + target.getAttribute('href');
	let transfer = confirm(msg);
	if (!transfer) return false;
}
thumbs.onclick = function (event) {
	let target = event.target;
	if (target.tagName != 'A' && target.tagName != 'IMG') return;
	let a = target.parentNode.getAttribute('href') || target.getAttribute('href');
	let t = target.parentNode.getAttribute('title') || target.getAttribute('title');
	largeImgForGallery.setAttribute('src', a);
	largeImgForGallery.setAttribute('alt', t);
	return false;
}
// -------
//tast#1
let lastClick;
Vinni.onmousedown = function (event) {
	return false; //подсмотрел способ
}
Vinni.onclick = function (event) {
	event.preventDefault();
	let target = event.target;
	if (target.tagName != "LI") return;
	//ctrl
	if (event.ctrlKey || event.metaKey) {
		// console.log('ctrl ',event.ctrlKey);
		target.classList.toggle('selected');
		lastClick = target;
		return;
	};
	//shift
	if (event.shiftKey) {
		let len = this.childElementCount;
		let clickA, clickB, start, end = 0;

		for (let i = 0; i < len; i++) {
			if (this.children[i] == target) clickA = i;
			if (this.children[i] == lastClick) clickB = i;
		}
		start = Math.min(clickA, clickB);
		end = Math.max(clickA, clickB);

		for (start; start <= end; start++) {
			this.children[start].classList.add('selected');
		}

		lastClick = target;
		return false;

	}
	//singleClick
	let len = this.childElementCount;
	for (let i = 0; i < len; i++) {
		this.children[i].classList.remove('selected');
	}
	target.classList.toggle('selected');
	lastClick = target;
}

function clickText(event, target) {
	let bool;
	let span = document.createElement('span');
	span.innerText = target.firstChild.nodeValue;
	target.insertBefore(span, target.firstChild);

	let y = span.getBoundingClientRect().bottom > event.clientY;
	let x = span.getBoundingClientRect().right > event.clientX;
	bool = (x && y);

	span.remove();

	return !bool;
}
tree2.onclick = function (evt) {
	var evt = evt || event;
	var target = evt.target || evt.srcElement;

	if (clickText(evt, target)) return;
	/* раскрыть-закрыть детей */
	var node = target.getElementsByTagName('ul')[0];
	if (!node) return; // нет детей
	// console.log(node);
	node.style.display = node.style.display ? '' : 'none';

}

// Поведение "подсказка"2
house.onmouseover = function (event) {
	let target = event.target;

	while (target != this) {
		if (target.getAttribute('data-tooltip')) break; //искать у родителя
		target = target.parentElement;
	}
	// console.log(target);
	// if (!target.getAttribute('data-tooltip')) return;
	let span = document.createElement('span');
	span.className += 'spanTip';
	span.innerHTML = target.getAttribute('data-tooltip');
	target.insertAdjacentElement('beforebegin', span);
	let top = target.getBoundingClientRect().top - span.offsetHeight - 5;
	span.style.top = top + 'px';
	if (top < 0) {
		span.style.top = target.getBoundingClientRect().bottom + 5 + 'px';
	}
	// центр над элементом
	let left = target.getBoundingClientRect().left + (target.offsetWidth - span.offsetWidth) / 2;
	if (left < 0) left = 0;
	span.style.left = left + 'px';
};
house.onmouseout = function (event) {
	let target = event.target;
	// if (!target.getAttribute('data-tooltip')) return;
	while (target != this) {
		if (target.getAttribute('data-tooltip')) break;
		target = target.parentElement;
	}
	let span = document.querySelector('.spanTip');
	span.remove();

}
let timerClockH;
clockH.onmouseenter = function () {
	let self = this;
	timerClockH = setTimeout(
		function () {
			console.log(self);
			tooltipH.hidden = false;
		}, 150);
}
clockH.onmouseleave = function () {
	tooltipH.hidden = true;
	clearTimeout(timerClockH);
}
// drag'n'drop

thumb.onmousedown = function (e) {

	moveAt(e);

	thumb.style.zIndex = 999;

	function moveAt(e) {
		let left = e.pageX - dragSlider.offsetLeft;

		if (left > dragSlider.offsetWidth - 10) {
			left = dragSlider.offsetWidth - 10;
		} else if (left < 0) {
			left = 0;
		}
		thumb.style.left = left + 'px';
		// console.log(thumb.style.left);
	}

	document.onmousemove = function (e) {
		moveAt(e);
	};

	document.onmouseup = function () {
		document.onmousemove = null;
		document.onmouseup = null;
	};
};
//superHeroes

sheroes.onmousedown = function (e) {
	let target = e.target;
	target.ondragstart = function () {
		return false;
	};

	if (!target.classList.contains('draggable')) return;
	let coords = getCoords(target);
	let shiftX = e.pageX - coords.left;
	let shiftY = e.pageY - coords.top;
	// console.log(target.offsetWidth,target.offsetHeight);

	target.style.position = 'absolute';
	moveAt(e)
	target.style.zIndex = 999;

	function moveAt(e) {
		let left = e.pageX - shiftX;
		let top = e.pageY - shiftY;

		if (left > (sheroes.clientLeft + sheroes.offsetLeft + sheroes.clientWidth) - target
			.offsetWidth
		) { //определнеие рамки поля( толщина бордер+отступ слева + ширина поля - ширина элемента)
			left = (sheroes.clientLeft + sheroes.offsetLeft + sheroes.clientWidth) - target.offsetWidth;

		} else if (left < sheroes.clientLeft + sheroes.offsetLeft) {
			left = sheroes.clientLeft + sheroes.offsetLeft; //толщина + отступ слева
		}

		if (top > sheroes.clientHeight + sheroes.offsetTop + sheroes.clientTop - target
			.offsetHeight) { //высота поля+ отступ поля сверху+ бордер сверху - элемента высота
			// console.log('top > ')
			top = sheroes.clientHeight + sheroes.offsetTop + sheroes.clientTop - target.offsetHeight;

		} else if (top < (sheroes.clientTop + sheroes.offsetTop)) { // < бордер + отступ
			// console.log('top<0')
			top = sheroes.clientTop + sheroes.offsetTop;
		}

		target.style.left = left + 'px';
		target.style.top = top + 'px';
	}

	sheroes.onmousemove = function (e) {
		//движение только в поле sheroes , движение вне поля не двигает элемент в поле
		moveAt(e);
	};
	// sheroes.onmouseleave = function () {
	//    console.log('ch')
	//    sheroes.onmousemove = null; //отключение при выходе за границы поля
	// }

	document.onmouseup = function () {
		sheroes.onmousemove = null; // отключение при подъеме мыши
		document.onmouseup = null;
	};

	target.ondragstart = function () {
		return false;
	};

	function getCoords(elem) { // кроме IE8-
		var box = elem.getBoundingClientRect();
		return {
			top: box.top + pageYOffset,
			left: box.left + pageXOffset
		};
	}
}
// end sheroes tasks
//end drag'n'drop 
// mousewheel
let scaleDiv = document.getElementsByClassName('scaleDiv');
let multiplierFactor = 1;
let screamerMon = true;
scaleDiv[0].onwheel = function (event) {

	let wight = this.getBoundingClientRect().width;
	if (wight > document.documentElement.clientWidth && screamerMon) {
		screamerMon = false;
		scaleDiv[0].classList.add("sreamer_mon");
		setTimeout(function () {
			scaleDiv[0].classList.remove("sreamer_mon");
		}, 500);
		let a = new Audio;
		// a.src = "https://www.partnersinrhyme.com/files/sounds1/MP3/human/ascream3.mp3";
		a.src = "sounds/ascream3.mp3"
		a.play();
	}
	let cf = event.deltaY;
	cf > 0 ? multiplierFactor += 0.1 : multiplierFactor -= 0.1;

	this.style.transform = 'scale(' + multiplierFactor + ')';
	event.preventDefault();
}

tmarea.onwheel = function (event) {

	let top = this.scrollTop + this.clientHeight;
	let scroll = this.scrollHeight;

	if ((top == scroll) && (event.deltaY > 0)) {
		// console.log(event.deltaY);
		return false;
	}
	if ((this.scrollTop == 0) && (event.deltaY < 0)) {
		// console.log(event.deltaY, "-");
		return false;
	}
	// console.log('clear')
	return;
}
// endmousewheel
//keybordkeys
// вспомогательная функция, если понадобится

function getChar(event) {
	if (event.which == null) {
		if (event.keyCode < 32) return null;
		return String.fromCharCode(event.keyCode) // IE
	}

	if (event.which != 0 && event.charCode != 0) {
		if (event.which < 32) return null;
		return String.fromCharCode(event.which) // остальные
	}

	return null; // специальная клавиша
}
onlynum.onkeypress = function (e) {
	let char = getChar(e);
	// console.log(typeof(char),e.keyCode);
	if (char) {
		if (e.keyCode < 48 || e.keyCode > 58) return false;
	}
}

//task 2 
function checkPressButtons(pressButtons) {
	for (const key in pressButtons) {
		if (pressButtons.hasOwnProperty(key)) {
			const element = pressButtons[key];
			if (element == false) return false;
		}
	}
	return true;
}
function runOnKeys(func) {
	let pressButtons = {};
	let arr = [].slice.call(arguments, 1);
	for (let i = 0; i < arr.length; i++) {
		pressButtons[arr[i]] = false;
	}
	document.onkeydown = function (e) {
		if (pressButtons.hasOwnProperty(e.keyCode)) {
			pressButtons[e.keyCode] = true;
			// console.log(pressButtons);
		}
		if (checkPressButtons(pressButtons)) {
			for (let i = 0; i < arr.length; i++) {
				pressButtons[arr[i]] = false;
			}
			func();
		}
	};

	document.onkeyup = function (e) {
		if (pressButtons.hasOwnProperty(e.keyCode)) {
			pressButtons[e.keyCode] = false;
			// console.log(pressButtons);
		}
	}
}

runOnKeys(
	function () { alert("Вы зажали несколько клавишь одновременно!") },
	"Q".charCodeAt(0),
	"W".charCodeAt(0),
	"V".charCodeAt(0)
);
//end keybord keys
//  onload onerror 
//first task
let searchImg = imgforsearch.getElementsByTagName('img');
let dsb = searchbox.getElementsByTagName('div');
for (let i = 0; i < searchImg.length; i++) {
	searchImg[i].onload = function () {
		dsb[i].innerHTML = '';
		dsb[i].appendChild(this);
	}
	searchImg[i].onerror = function () {
		this.hidden = true;
		console.log("Ошибка: " + this.src);
	};
}
// form elements 
let formTask1 = document.forms.addOption;
let selectT1 = formTask1.elements[0];

let spanOption = document.createElement('span');
let i = selectT1.options.selectedIndex;
spanOption.innerHTML = 'выбранное значение по умолчанию ' + selectT1.options[i].innerText;
formElement.appendChild(spanOption);
let newOption = new Option('классика js', 'classic', true, true);
selectT1.appendChild(newOption);

// forus blur 
//задача 1 

(function () {
	var input = focusBlur1.querySelector('[data-placeholder]');

	showPlaceholder(input);

	// Показать placeholder внутри input
	// Также можно сделать это при помощи вёрстки, отдельным элементом
	function showPlaceholder(input) {
		input.classList.add('placeholder');
		input.value = input.dataset.placeholder;
	}
	function fcs() {
		let tip = document.createElement('span');
		tip.innerHTML = this.dataset.placeholder;
		tip.classList.add('placeholder-tooltip');
		let top = this.getBoundingClientRect().top - 25;
		tip.style.top = top + 'px';
		this.parentElement.insertBefore(tip, input);
		this.value = '';
		this.classList.remove('placeholder');
	}
	function blr() {
		let del = focusBlur1.querySelector('.placeholder-tooltip');
		let info = focusBlur1.querySelector('.placeholder-tooltip').innerText;
		if (this.value == '' || this.value == 'E-mail') {
			this.dataset.placeholder = info;
			this.value = info;
			this.classList.add('placeholder');
		}
		del.remove();

	}
	// ...ваш код для input...
	input.addEventListener('focus', fcs, true);

	input.addEventListener('blur', blr, true);
}());
//2 
mouse1.onfocus = function () {
	let height = this.offsetHeight;
	let width = this.offsetWidth;

	mouse1.onkeydown = function (event) {
		let e = event.which;
		if (e == 37) mouse1.style.left = (parseInt(mouse1.style.left) || 0) - width + 'px';
		if (e == 38) mouse1.style.top = (parseInt(mouse1.style.top) || 0) - height + 'px';
		if (e == 39) mouse1.style.left = (parseInt(mouse1.style.left) || 0) + width + 'px';
		if (e == 40) mouse1.style.top = (parseInt(mouse1.style.top) || 0) + height + 'px';
	}
}
//3
document.onkeydown = function (e) {
	if (e.keyCode == 27) {
		area1.style.display = 'none';
		view1.style.display = 'block';
	}
	if (!e.ctrlKey) return;
	e.preventDefault();
	if (e.keyCode == 69) {
		area1.value = view1.innerText;
		area1.style.display = 'block';
		view1.style.display = 'none';
		area1.focus();
	}
	if (e.keyCode == 83) {
		view1.innerText = area1.value;
		area1.style.display = 'none';
		view1.style.display = 'block';
	}

}
//5
plhldr.onclick = function () {
	inputPl.focus();
}
inputPl.onfocus = function () {
	plhldr.hidden = true;
}
// 6
let CLstate;
capsInput.onkeydown = function (event) {
	CLstate = event.getModifierState("CapsLock");
	capsInput.onfocus();
}
capsInput.onfocus = function () {
	if (CLstate) {
		capsIndicator.style.display = 'block';
		// capsIndicator.hidden = false;
	} else {
		capsIndicator.style.display = '';
		// capsIndicator.hidden = true;
	}
}
// event change 
function compound (x,n,chked){
	const PR = 0.12;
	let sum;
 if(chked){
		// SUM = X * (1 + p*d/y)n
		let prc = 1+ PR + 0.00683; 
		sum =Math.round(x * Math.pow(prc ,n/12));
 }else{
		 sum = Math.round(x *Math.pow(1+PR,n/12));
 }
 let green = document.getElementById('height-after');
 let height = (sum/x)*100||100;
 green.style.height = height +'px';
 // console.log(sum/x);
 moneyBefore.innerHTML = x||0;
 moneyAfter.innerHTML =sum;
 return sum;
}
// moneyInput.oncut = 
moneyInput.onpaste = moneyInput.oninput = function(){
 let curMoney = moneyInput.value;
 let i = termMonths.selectedIndex;
 let term = +termMonths[i].value;
 let cap = capitalization.checked;
 let res = compound(curMoney,term,cap);
 console.log(res);
}
termMonths.onchange = function (){
 let curMoney = moneyInput.value;
 let i = termMonths.selectedIndex;
 let term = +termMonths[i].value;
 let cap = capitalization.checked;
 let res = compound(curMoney,term,cap);
 console.log(res);
}
capitalization.onchange = function (){
 let curMoney = moneyInput.value;
 let i = termMonths.selectedIndex;
 let term = +termMonths[i].value;
 let cap = capitalization.checked;
 let res = compound(curMoney,term,cap);
 console.log(res);
}