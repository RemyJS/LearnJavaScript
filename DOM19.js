//https://learn.javascript.ru/task/tree-info
let spotomkov = document.getElementById("schitaemPotomkov1").firstElementChild;

function liCounter1(list) {
  for (let i = 0; i < list.childElementCount; i++) {

    let liData = list.children[i].firstChild.data.trim();
    let liCount = list.children[i].querySelectorAll("li").length;
    let div = document.getElementById("resPotomkov");
    if (liData) div.innerHTML += liData + ' = ' + liCount + '; ';
    if (list.children[i].childElementCount) {
      liCounter1(list.children[i]);
    }

  }
}
liCounter1(spotomkov);
//https://learn.javascript.ru/modifying-document#ochistite-element
function mdClear(elem) {
  elem.remove();
};
mdClear(document.getElementById("clearElem1"));
//https://learn.javascript.ru/task/create-list
function creatingList1() {
  let prom = prompt("введите новое значение");
  let ul = document.createElement("ul");
  while (prom != null) {
    let li = document.createElement("li");
    li.textContent = prom;
    ul.append(li);
    prom = prompt("введите новое значение");
  };
  let cl = document.getElementById("create-list");
  cl.append(ul);
}
//creatingList1();
//https://learn.javascript.ru/task/create-object-tree
let dataObTree = {
  "Рыбы": {
    "форель": {},
    "лосось": {}
  },

  "Деревья": {
    "Огромные": {
      "секвойя": {},
      "дуб": {}
    },
    "Цветковые": {
      "яблоня": {},
      "магнолия": {}
    }
  }
};
function createTree1(container, dt) {
  let ul = document.createElement("ul");
  for (let node in dt) {
    //   console.log(dt[node]+' '+node);
    let li = document.createElement('li');
    li.innerText = node;
    ul.append(li);
    if (typeof (dt[node]) == "object") {
      createTree1(ul, dt[node]);
      container.append(ul);
    }
  }

};
let container1 = document.getElementById("ctree1");
createTree1(container1, dataObTree);
//https://learn.javascript.ru/task/tree-count

let tcount1 = document.getElementById("tree-count1");

function tcounter1(tree) {
  if (!tree.childElementCount) return 0;
  let res = tree.getElementsByTagName("li").length;
  // console.log(res);
  let r;
  for (let i = 0; i < tree.childElementCount; i++) {
    // console.log(tree.children[i]);
    r = tcounter1(tree.children[i]);

  }
  if (r > 0 && tree.tagName == "LI") tree.firstChild.after(" [" + res + "]");
  return res;

};
tcounter1(tcount1.firstElementChild);

//https://learn.javascript.ru/task/calendar-table

function createCalendar(elem, year, month) {
  let tbl = document.createElement("table");
  let week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  let d = new Date(year, month - 1, 1);

  //console.log(d);
  for (let i = 0; i < 6; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i == 0) {
        let th = document.createElement("th");
        th.innerText = week[j];
        tr.append(th);
      } else {
        if (d.getDay() != j) {
          let td = document.createElement("td");
          td.innerText = "";
          tr.append(td);
          continue;
        } else {
          let td = document.createElement("td");
          let date = d.getDate();
          if (d.getMonth() == month - 1) {
            td.innerText = date;
          } else {
            td.innerText = "";
          }
          d.setDate(++date);
          tr.append(td);
        }
      }
    };//for j
    tbl.append(tr);
  }//for i 
  let caption = document.createElement("caption");
  caption.innerHTML = `<h2 >${month} - ${year}</h2>`;
  tbl.prepend(caption);
  elem.append(tbl);
  return `${month}-${year}`;
};

createCalendar((document.getElementById("calendar1")), 2020, 1);
createCalendar((document.getElementById("calendar1")), 2020, 2);
createCalendar((document.getElementById("calendar1")), 2020, 3);

//https://learn.javascript.ru/task/put-ball-in-center

let field1 = document.querySelector(".field");

function ballGoToCenterField() {
  let field = document.querySelector(".field");
  field.style.position = "relative";
  let ballSize = ball2.offsetHeight / 2;
  let top = field.clientHeight / 2;
  ball2.style.top = (top - ballSize) + "px";
  let left = field.clientWidth / 2;
  ball2.style.left = left - ballSize + "px";
};

function positionAt(anchor, position, elem) {
  // ... ваш код ...
  let coords = anchor.getBoundingClientRect();
  //console.log(coords);

  function getCoords() {
    let box = anchor.getBoundingClientRect();

    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
  let absolute = getCoords();
  elem.style.position = "absolute";
  if (position == "top") {
    //let top = coords.y - elem.offsetHeight;

    let top = absolute.top - elem.offsetHeight;
    elem.style.top = top + "px";
    let left = coords.x;
    elem.style.left = left + "px";
  }
  if (position == "top-in") {
    let top = absolute.top;
    elem.style.top = top + "px";
    let left = coords.x;
    elem.style.left = left + "px";
  }
  if (position == "right") {
    // let top = coords.y + "px";
    let top = absolute.top + "px";
    elem.style.top = top;
    //let left = coords.x + coords.width + "px";
    let left = absolute.left + coords.width + "px";
    elem.style.left = left;
  };
  if (position == "right-in") {
    // let top = coords.y + "px";
    let top = absolute.top + "px";
    elem.style.top = top;
    //let left = coords.x + coords.width + "px";
    let left = absolute.left + coords.width - elem.offsetWidth + "px";
    elem.style.left = left;
  };
  if (position == "bottom") {
    //   let top = coords.y + coords.height + "px";
    let top = absolute.top + coords.height;
    elem.style.top = top + "px";
    //let left = coords.x ;
    let left = absolute.left;
    elem.style.left = left + "px";
  };
  if (position == "bottom-in") {
    //   let top = coords.y + coords.height + "px";
    let top = absolute.top + coords.height - elem.offsetHeight;
    elem.style.top = top + "px";
    //let left = coords.x ;
    let left = absolute.left;
    elem.style.left = left + "px";
  };
}
function showNote(anchor, position, html) {
  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}
showNote(bqtask, "top", "note above");
showNote(bqtask, "right", "note at the right");
showNote(bqtask, "bottom", "note below");
showNote(bqtask, "top-in", "note top-in");
showNote(bqtask, "right-in", "note at the right-in");
showNote(bqtask, "bottom-in", "note below-in");

let field2 = fieldT2.querySelector(".field");
field2.style.cursor = "pointer";

field2.addEventListener("click", {
  handleEvent(event) {
    let ballSize = ball3.offsetWidth / 2;
    
    let x = event.clientX + pageXOffset - ballSize;
    let y = event.clientY + pageYOffset - ballSize;
  //  console.log(x,y);
    let left = field2.offsetLeft + field2.clientLeft;
    if( x < left ) x = left;

    let top = field2.offsetTop + field2.clientTop;
    if (y < top) y = top;

    let right = field2.offsetLeft + field2.clientWidth - ballSize - field2.clientLeft;
    if( x > right) x = right;

    let bottom = field2.offsetTop + field2.clientHeight - field2.clientTop - ballSize;
    if ( y > bottom) y = bottom;

    ball3.style.transition = "all 1s";
    ball3.style.position = "absolute";
    ball3.style.left = x + "px";
    ball3.style.top = y + "px";
  }
});

function showSweet(){
  let ul = slidingMenu.getElementsByTagName("ul");
  ul[0].hidden = false;
  arrowShow.hidden = true;
  arrowHide.hidden = false;
};
function hideSweet(){
  let ul = slidingMenu.getElementsByTagName("ul");
  ul[0].hidden = true;
  arrowShow.hidden = false;
  arrowHide.hidden = true;
}
hideSweet();
arrowShow.addEventListener("click",showSweet);
arrowHide.addEventListener("click",hideSweet);

function hideMessageAboutAnimal(){
  function hidePane(){

  }
  let panes = hideAnimals.querySelectorAll(".pane");
  for(let i = 0; i < panes.length; i++){
    let button = document.createElement("button");
    button.innerText = '[x]';
    button.className = "remove-button";
    panes[i].prepend(button);
    button.addEventListener("click",{
      handleEvent(event){
        let click = event.currentTarget;
        click.parentNode.hidden = true
      }
    });
  }

}
hideMessageAboutAnimal();