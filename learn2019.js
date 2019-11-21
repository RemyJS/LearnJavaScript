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
  nfe_sum.sum = nfe_sum.sum || 0;
  nfe_sum.sum += add;
  nfe_sum.reset = function () {
    nfe_sum.sum = 0;
    return "обнуление!"
  }
  function plus(n) {
    return nfe_sum(n);
  }
  plus.toString = function () {
    return nfe_sum.sum;
  }
  return plus;
}

// https://learn.javascript.ru/task/output-numbers-100ms
function si_printNumbers(from, to) {
  let timerid = setInterval(() => {
    from += 1;
    console.log(from);
    if (from == to) {
      clearInterval(timerid);
    }
  }, 1000);
  return `считаю от ${from} до ${to} через setInterval`;
}
function st_printNumbers(from, to) {
  let timerid = setTimeout(function tick() {
    from += 1;
    console.log(from);
    if (from < to) {
      timerid = setTimeout(tick, 1000);
    } else {
      clearTimeout(timerid);
      console.log(`все, вроде посчитал, можно и раслабиться`);
    }
  }, 1000);
  return `считаю от ${from} до ${to} рекурсивно через setTimeOut ;)`;
}
// https://learn.javascript.ru/task/spy-decorator
function spy_decorator(func) {
  let cache = [];

  function f() {
    cache.push([...arguments]);
    let res = func.apply(this, arguments);
    return res;
  }
  f.calls = cache;
  return f;
}
//https://learn.javascript.ru/task/delay
function delay_decorator(func, ms) {
  return function () {
    let self = this;
    setTimeout(function () {
      return func.apply(self, arguments);
    }, ms, ...arguments);
  }
}
// https://learn.javascript.ru/call-apply-decorators#dekorator-debounce
function debounce_decorator(func, ms) {
  let self = this;
  let isWorking = false;
  return function () {
    if (!isWorking) {
      isWorking = true;
      setTimeout(function () {
        isWorking = false;
        return func.apply(self, arguments);
      }, ms, ...arguments);
    }
  }
}
// let fdd = debounce_decorator(alert,1500);
// fdd(1);
// fdd(2);

// setTimeout( () => fdd(3), 100); // проигнорирован (прошло только 100 мс)
// setTimeout( () => fdd(4), 2100); // выполняется
//https://learn.javascript.ru/call-apply-decorators#tormozyaschiy-throttling-dekorator
function throttle_dec(func, ms) {
  let self = this;
  let free = true;
  let stack = [];
  let timerId;
  return function () {
    if (free) {
      free = false;
      return func.apply(self, arguments);
    } else {
      clearTimeout(timerId);
      stack.push(func);
      timerId = setTimeout(function () {
        func = stack.pop();
        free = true;
        return func.apply(self, arguments);
      }, ms, ...arguments);

    }
  }
}

function func_throttle(a) {
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
    alert(this.name + (result ? ' Come with me if you wanna live' : ' Get out!'));
  }
};
//askPassword_bind2(user_bind2.login.bind(user_bind2,true),()=> user_bind2.login(false));
let head_prot1 = {
  glasses: 1
};

let table_prot1 = {
  pen: 3,
  __proto__: head_prot1
};

let bed_prot1 = {
  sheet: 1,
  pillow: 2,
  __proto__: table_prot1
};

let pockets_prot1 = {
  money: 2000,
  __proto__: bed_prot1
};

let hamster_prot1 = {
  //stomach: [],

  eat(food) {
    this.stomach = [];
    this.stomach.push(food);
  }
};
// https://learn.javascript.ru/native-prototypes#dobavit-funktsiyam-metod-f-defer-ms
function funcForDefer1() {
  console.log('hello');
};

Function.prototype.defer1 = function (ms) {
  setTimeout(this, ms);
  return `${this.name} сработает через ${ms}`;
};

//https://learn.javascript.ru/native-prototypes#dobavte-funktsiyam-dekoriruyuschiy-metod-defer

function sumFordef(a, b) {
  alert(a + b);
  return a + b;
}

Function.prototype.defer2 = function (ms) {
  let self = this;
  return function () {
    let arg = Array.from(arguments).join(', ');
    setTimeout(self, ms, ...arguments);
    return `${self.name} сработает через ${ms} с аргументами: ${arg}`
  }
}
// 
// let dictionary = Object.create(null,{
//   toString: {enumerable:false,
//     get: function(){
//       return Object.keys(this).join(', ');
//     }
//   }
// });
let dictionaryMeth = Object.create(null);

// ваш код, который добавляет метод dictionary.toString
dictionaryMeth.toString = function () {
  return Object.keys(this).join(', ');
}
Object.defineProperty(dictionaryMeth, 'toString', {
  enumerable: false
});

// добавляем немного данных
dictionaryMeth.apple = "Apple";
dictionaryMeth.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }

// ваш метод toString в действии
//alert(dictionary); // "apple,__proto__"

// https://learn.javascript.ru/class-inheritance#oshibka-sozdaniya-ekzemplyara-klassa
class ClockClass {
  timer;
  constructor(obj) {
    this.template = obj.template;
  }
  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }
  start() {
    this.render();
    this.timer = setInterval(() => (this.render.call(this)), 1000);
  }
  stop() {
    clearInterval(this.timer);
    return `игра окончена`;
  }
};

let clockClass1 = new ClockClass({ template: 'h:m:s' });
clockClass1.start();

setTimeout(() => {
  console.log(`остановим clockClass1`);
  clockClass1.stop.call(clockClass1)
}, 1000);

class ExtendedClockInh extends ClockClass {
  constructor(obj) {
    super(obj);
    this.precision = obj.precision || 1000;
  }
  start() {
    console.log(`${this.__proto__.constructor.name} часы с задержкой ${this.precision} запущен!`)
    this.timer = setInterval(() => (this.render.call(this)), this.precision);
  }
}
// https://learn.javascript.ru/class-inheritance#uluchshennye-chasy
let extClock1 = new ExtendedClockInh({
  template: 'h:m:s',
  precision: 3000
});

extClock1.start();
setTimeout(() => {
  console.log("остановим extClock1");
  extClock1.stop.call(extClock1);
}, 5000);
// https://learn.javascript.ru/class-inheritance#klass-rasshiryaet-obekt
/*
class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') );
*/

function showCircle(cx, cy, radius) {
  //alert(cx+""+ cy+""+ radius);
  return new Promise(function (resolve, reject) {
    let block = document.querySelector('.circle_prom');
    let toggle = block.classList.toggle(".circle_on_prom");
    if (!toggle) {
      radius = 0;
      let msg = block.firstElementChild;
      if (msg != null) {
        msg.remove();
      }

      block.style.width = radius * 2 + "px";
      block.style.height = radius * 2 + "px";

    } else {

      block.style.left = cx + 'px';
      block.style.top = cy + 'px';
      setTimeout(function () {
        block.style.width = radius * 2 + "px";
        block.style.height = radius * 2 + "px";

        block.addEventListener('transitionend', function () {
          resolve(block);
        });
      }, 0);
    }

  });

}
buttonShowCircle.onclick = function () {
  showCircle(150, 320, 100).then(add => {
    let div = document.createElement("div");
    div.classList.add('msg_japan');
    div.append("Hello, world!");
    let msg = add.firstElementChild;
    if (msg == null && add.style.width != "0px") {
      add.append(div);
    } else {
      if (msg != null) msg.remove();
    }
  });
}
function delay_promise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });

};
delay_promise(3000).then(() => console.log('delay_promise выполнился через 3 секунды'));
//https://learn.javascript.ru/async-await#perepishite-ispolzuya-async-await
async function loadJson_asaw(url) {
  // return fetch(url)
  //   .then(response => {
  //     if (response.status == 200) {
  //       return response.json();
  //     } else {
  //       throw new Error(response.status);
  //     }
  //   })
  let response = await fetch(url);
  try {
    if (response.status == 200) {
      return await response.json();
    }
  } catch{
    throw new Error(response.status);
  }


}

// loadJson_asaw('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}



// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  };

  let user;
  let flag = false;
  while (true) {
    try {
      let name = prompt("Введите логин?", "remyJS");
      user = await loadJson(`https://api.github.com/users/${name}`);
      if(name != null )flag = true;
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      } else {
        throw err;
      }
    }
  };
  if(flag){
    alert(`Полное имя: ${user.name}.`);
    let img = document.createElement('img');
    img.src = user.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // ждём 3 секунды и затем скрываем аватар
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  }

  return user;
}

//demoGithubUser();

async function wait_aa() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f_wait_aa() {
  // ...что здесь написать?
  // чтобы вызвать wait() и дождаться результата "10" от async–функции
  // не забывайте, здесь нельзя использовать "await"
  let wait;
  (async function () {
    wait = await wait_aa();
    alert(wait);
    
  })();
  
};
function* pseudoRandom (){
  let x = 1;
  do{
    x = x  * 16807 % 2147483647;
    yield x;
  }while(true);  
 
};
//let generatorPR = pseudoRandom(1);
let userProxy = {
  name: "John"
};

function wrapProxy(target) {
  return new Proxy(target, {
      /* ваш код */
      get(target, prop, receiver) {
        let t = target[prop]
        if( t == undefined){
           throw new Error("Такого свойства нет");
        }else{
          return Reflect.get(target, prop, receiver);
        }
      }
  });
}

userProxy = wrapProxy(userProxy);

// alert(userProxy.name); // John
// alert(userProxy.age); // Ошибка: такого свойства не существует
let arrayProxy = [1, 2, 3];

arrayProxy = new Proxy(arrayProxy, {
  /* ваш код */
  get(target, prop, receiver){
    if( +prop < 0){
      let i = target.length + (+prop);
      return Reflect.get(target, i, receiver);
    }else{
     // return target[prop];
      return Reflect.get(target, prop, receiver);
    }
  }
});

// alert( arrayProxy[-1] ); // 3
// alert( arrayProxy[-2] ); // 2

function makeObservable(target) {
  /* ваш код */
  return new Proxy( target,{
    set(target, prop, val, receiver ){
      return Reflect.set(target, prop, val, receiver);
    }
  });
}

let userP2 = {};
userP2 = makeObservable(userP2);

// userP2.observe((key, value) => {
//   alert(`SET ${key}=${value}`);
// });

// userP2.name = "John Proxy 2";
//пока не смог решить

function evalCallculator(){
   let str = prompt("Расчитать","2+2*3");
   alert( eval(str) );
}
//intl
let animalsIntl = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...
let collator_case = new Intl.Collator(undefined, {
  sensitivity: "case"
});

let anIntl = animalsIntl.sort(collator_case.compare);
