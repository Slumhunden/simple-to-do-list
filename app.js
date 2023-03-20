"use strict";
window.addEventListener("load", initApp);

const list = document.querySelector("#to-do-list");
const newToDo = document.querySelector("#input-new-to-do");

function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

// function addToDo() {
//   const listItem = document.createElement("li");
//   const listText = document.createElement("span");
//   const listBtn = document.createElement("button");
//   listText.textContent = newToDo.value;
//   listBtn.textContent = "Delete";
//   console.log(listItem);
//   console.log(listText);
//   console.log(listBtn);
//   listItem.appendChild(listText);
//   listItem.appendChild(listBtn);
//  console.log(listItem);
//  console.log(listText);
//  console.log(listBtn);
//  list.appendChild(listItem);
//  newToDo.value= "";
// listBtn.addEventListener("click",removeToDo)
// }
function removeToDo() {
  this.parentNode.remove();
  console.log(this.parentNode);
}
function addToDo() {
  const myHTML = /*html*/ `
<li>
<span>${newToDo.value}</span>
<button>Delete</button>
</li>
`;
  list.insertAdjacentHTML("beforeend", myHTML);
  newToDo.value= "";
  list
    .querySelector("li:last-child button")
    .addEventListener("click", removeToDo);
}
