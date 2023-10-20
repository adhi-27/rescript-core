// Generated by ReScript, PLEASE EDIT WITH CARE


var Constants = {};

function floor(f) {
  return Math.floor(f) | 0;
}

function random(min, max) {
  var f = Math.random() * (max - min | 0);
  return (Math.floor(f) | 0) + min | 0;
}

var Int = {
  floor: floor,
  random: random
};

export {
  Constants ,
  Int ,
}
/* No side effect */
