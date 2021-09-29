"use strict";

let guestList = [];
//Global variables

const btnAddGuestEnd = document.querySelector(".btn__add__end");
const btnAddGuestStart = document.querySelector(".btn__add__start");
const btnRemoveGuestStart = document.querySelector(".btn__remove__start");
const btnRemoveGuestEnd = document.querySelector(".btn__remove__end");
const btnReverse = document.querySelector(".btn__reverse");
const listDiv = document.createElement("div");

const main = document.querySelector(".main");
const input = document.querySelector("#name__input");
const errorMessage = document.createElement("p");
const listItem = document.createElement("li");

errorMessage.textContent = "Wrong Input";

function drawlist() {
  const list = document.createElement("ol");
  listDiv.innerHTML = null;
  for (let i = 0; i < guestList.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = guestList[i];
    list.append(listItem);
    listDiv.append(list);
  }
}

main.append(listDiv);
//Add guest list at the start, the values must be coreelated
btnAddGuestStart.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = input.value;
  if (inputValue === "" || !isNaN(inputValue)) {
    main.append(errorMessage);
  } else {
    errorMessage.remove();
    guestList.unshift(inputValue);
    drawlist();
  }
});
// Add guest list at the end
btnAddGuestEnd.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = input.value;
  if (inputValue === "" || !isNaN(inputValue)) {
    main.append(errorMessage);
  } else {
    errorMessage.remove();
    guestList.push(inputValue);
    drawlist();
  }
});
//Remove guest from the start of the list

btnRemoveGuestStart.addEventListener("click", (event) => {
  event.preventDefault();
  guestList.shift();
  drawlist();
});
//Remove guest from the end of the list
btnRemoveGuestEnd.addEventListener("click", (event) => {
  event.preventDefault();
  guestList.pop();
  drawlist();
});
//Reversing list
btnReverse.addEventListener("click", (event) => {
  event.preventDefault();
  guestList.reverse();
  drawlist();
});
