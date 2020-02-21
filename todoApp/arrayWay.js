let arr = [];

document.querySelector("form").onsubmit = function() {
  let index = document.querySelector("input").value;
  arr.push(index);
  document.querySelector("ul").innerHTML = arr
    .map(item => `<li>${item}</li>`)
    .join("");
  document.querySelector("input").value = "";
  return false;
};

function remove() {
  let index = document.querySelector("input").value;
  arr.pop();
}
