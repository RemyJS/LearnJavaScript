'use strict';
//json 1
let vasilyIvanovich = {
  name: "Василий Иванович",
  age: 35
};
let json_vasilyIvanovich = JSON.stringify(vasilyIvanovich);
let parse_vasilyIvanovich = JSON.parse(json_vasilyIvanovich);
//json 2 
let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

let json_meetup = JSON.stringify(meetup, function (key, value) {
  if (key != '' && value == meetup) {
    return undefined;
  } else {
    return value;
  }
});
// замыкания 
let clouser_sum = function (x) {
  return function (n) {
    return x + n;
  }
}
// console.log(clouser_sum(4)(1)); 
let filter_arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
  return function (el) {
    return el >= a && el <= b;
  }
}
function inArray(arr) {
  // ...your code...
  return function (e) {
    return (arr.indexOf(e) != -1)
  }
}
let clouser_users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(field) {
  return function (a, b) {
    if (a[field] > b[field]) {
      return 1;
    } else {
      return -1;
    }
  }
}
//console.log(clouser_users.sort(byField('name')));
function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let shooter = function () { // функция shooter
      let counter = i;
      return function () {
        alert(counter); // должна выводить порядковый номер
      }

    };

    shooters.push(shooter());
    i++;
  }
  // for(let i = 0; i < 10;i++){
  //   let shooter = function(){
  //     return alert(i);
  //   }
  //   shooters.push(shooter);
  // }

  return shooters;
}

let army = makeArmy();
//nfe 
function nfe_makeCounter() {

  function counter() {
    return counter.count++;
  }

  counter.set = function (newValue) {
    counter.count = newValue;
  }
  counter.decrease = function () {
    return counter.count--;
  }
  counter.count = 0;
  return counter;
}
let nfe_counter = nfe_makeCounter();

function nfe_sum(add = 0) {
  nfe_sum.sum = nfe_sum.sum||0;
  nfe_sum.sum += add;
  nfe_sum.reset = function(){
    nfe_sum.sum = 0;
    return "обнуление!"
  }
  function plus (n){
    return nfe_sum(n);
  }
  plus.toString = function (){
    return nfe_sum.sum;
  }
  return plus;
}

// https://learn.javascript.ru/task/output-numbers-100ms
function si_printNumbers(from,to){
  let timerid = setInterval(() => {
    from += 1;
    console.log(from); 
    if(from == to){
      clearInterval(timerid);
    }
  },1000);
 return `считаю от ${from} до ${to} через setInterval`;
}
function st_printNumbers(from,to){
  let timerid = setTimeout(function tick(){
    from += 1;
    console.log(from);
    if(from < to){
      timerid = setTimeout(tick,1000);
    }else{
      clearTimeout(timerid);
      console.log(`все, вроде посчитал, можно и раслабиться`);
    }
  },1000);
  return `считаю от ${from} до ${to} рекурсивно через setTimeOut ;)`;
}
// https://learn.javascript.ru/task/spy-decorator
function spy_decorator(func) {
  let cache = [];
  
  function f () {
    cache.push([...arguments]);
    let res = func.apply(this,arguments);
    return res;
  }
  f.calls = cache;
  return f;
}
//https://learn.javascript.ru/task/delay
function delay_decorator (func,ms){
  return function(){
    let self = this;
    setTimeout(function(){
      return func.apply(self,arguments);
    },ms,...arguments);
  }
}
// https://learn.javascript.ru/call-apply-decorators#dekorator-debounce
function debounce_decorator(func,ms){
  let self = this;
  let isWorking = false; 
  return function(){
    if(!isWorking){
      isWorking = true;
      setTimeout(function(){
        isWorking = false;
        return func.apply(self,arguments);
      },ms,...arguments);
    }
  }
}
// let fdd = debounce_decorator(alert,1500);
// fdd(1);
// fdd(2);

// setTimeout( () => fdd(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => fdd(4), 2100); // выполняется
//https://learn.javascript.ru/call-apply-decorators#tormozyaschiy-throttling-dekorator
function throttle_dec(func,ms){
  let self = this;
  let free = true;
  let stack = [];
  let timerId;
  return function(){
    if(free){
      free = false;
      return func.apply(self,arguments);
    }else{
      clearTimeout(timerId);
      stack.push(func);
      timerId = setTimeout(function(){
        func = stack.pop();
        free = true;
        return func.apply(self,arguments);
      },ms,...arguments);

    }
  }
}

function func_throttle(a){
  console.log(a);
}
//пока не решена! 19,09,19
// let ft1000 = throttle_dec(func_throttle,1000);

// ft1000(1);
// ft1000(2);
// ft1000(3);

function askPassword_bind(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user_bind1 = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

// askPassword_bind( user.loginOk.bind(user_bind1), user.loginFail.bind(user_bind1) );

function askPassword_bind2(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "Connor") ok();
  else fail();
}

let user_bind2 = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' Come with me if you wanna live' : ' Get out!') );
  }
};
askPassword_bind2(user_bind2.login.bind(user_bind2,true),()=> user_bind2.login(false));