// document.querySelector("form").onsubmit = function() {
//   document.getElementById("first").value = "";
//   document.getElementById("second").value = "";
//   return false;
// // };
// let i1 = document.getElementById("first").value;
// let i2 = document.getElementById("second").value;

function sum() {
  let i1 = document.getElementById("first").value;
  let i2 = document.getElementById("second").value;
  let i3 = Number(i1) + Number(i2);
  document.querySelector("label").innerHTML = i3;
}

function mult() {
  let i1 = document.getElementById("first").value;
  let i2 = document.getElementById("second").value;
  let i3 = Number(i1) * Number(i2);
  document.querySelector("label").innerHTML = i3;
}

function division() {
  let i1 = document.getElementById("first").value;
  let i2 = document.getElementById("second").value;
  let i3 = Number(i1) / Number(i2);
  document.querySelector("label").innerHTML = i3;
}

function substraction() {
  let i1 = document.getElementById("first").value;
  let i2 = document.getElementById("second").value;
  let i3 = Number(i1) - Number(i2);
  document.querySelector("label").innerHTML = i3;
}

function one() {
  document.getElementById("first").value = 1;
}

function two() {
  document.getElementById("first").value = 2;
}

function three() {
  document.getElementById("first").value = 3;
}
function four() {
  document.getElementById("first").value = 4;
}
function five() {
  document.getElementById("first").value = 5;
}

function six() {
  document.getElementById("first").value = 6;
}
function seven() {
  document.getElementById("first").value = 7;
}
function eight() {
  document.getElementById("first").value = 8;
}
function nine() {
  document.getElementById("first").value = 9;
}
function zero() {
  document.getElementById("first").value = 0;
}

function point() {
  document.getElementById("first").value = ".";
}
