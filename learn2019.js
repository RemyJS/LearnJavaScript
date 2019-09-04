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
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

let json_meetup = JSON.stringify(meetup,function(key, value){
  if(key !='' && value == meetup){
    return undefined;
  }else{
    return value;
  }
});