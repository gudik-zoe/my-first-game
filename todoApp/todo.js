function add() {
  generate();
  document.querySelector("#input").value = "";
  document.querySelector("#input").focus();
}
function completed() {
  document.getElementById("text");
}
// function id(id) {
//   id++;
//   return id;
// }
//list genetartor
let id = 0;
function generate() {
  id++;
  let click = id;
  let index = document.getElementById("input").value;
  document.getElementById(
    "label"
  ).innerHTML += `<li id='text${click}'> ${index}  
   <button  type= "button" id ='button${click}' onclick = "completed()"> done </button> </li>`;
  console.log(click);
}

// SPA - Single-Page Application
