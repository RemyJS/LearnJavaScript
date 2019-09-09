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