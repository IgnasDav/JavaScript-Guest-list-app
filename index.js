"use strict";

let guestList = [];
//Global variables

const btnAddGuestEnd = document.querySelector(".btn__add__end");
const btnAddGuestStart = document.querySelector(".btn__add__start");
const btnRemoveGuestStart = document.querySelector(".btn__remove__start");
const btnRemoveGuestEnd = document.querySelector(".btn__remove__end");
const btnReverse = document.querySelector(".btn__reverse");
const listDiv = document.createElement("div");
const btnAddGuestNumber = document.querySelector(".btn__add__guest");
const btnRemoveGuestNumber = document.querySelector(".btn__remove__guest");
const inputAddGuest = document.querySelector(".number__input--add");
const inputRemoveGuest = document.querySelector(".number__input--remove");
const main = document.querySelector(".main");
const input = document.querySelector("#name__input");
const errorMessage = document.createElement("p");
const listItem = document.createElement("li");
const btnMoveLastToFirst = document.querySelector(".btn__moveLastToFirst");
const btnMoveFirstToLast = document.querySelector(".btn__moveFirstToLast");
listItem.classList = "main__listItem";

errorMessage.textContent = "Wrong Input";

function drawList() {
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
    drawList();
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
    drawList();
  }
});
//Remove guest from the start of the list

btnRemoveGuestStart.addEventListener("click", (event) => {
  event.preventDefault();
  guestList.shift();
  drawList();
});
//Remove guest from the end of the list
btnRemoveGuestEnd.addEventListener("click", (event) => {
  event.preventDefault();
  guestList.pop();
  drawList();
});
//Reversing list
btnReverse.addEventListener("click", (event) => {
  event.preventDefault();
  guestList.reverse();
  drawList();
});
//Removing certain guest from a list
btnRemoveGuestNumber.addEventListener("click", (event) => {
  event.preventDefault();
  const removeValue = inputRemoveGuest.value;
  guestList.splice(removeValue - 1, 1);
  drawList();
});
//Adding certain guest to the list
btnAddGuestNumber.addEventListener("click", (event) => {
  event.preventDefault();
  const addValue = inputAddGuest.value;
  let inputValue = input.value;
  guestList.splice(addValue - 1, 0, inputValue);
  drawList();
});
//Moving Guest from last to first
btnMoveLastToFirst.addEventListener("click", (event) => {
  event.preventDefault();
  const lastValue = guestList.pop();
  guestList.unshift(lastValue);
  drawList();
});

//Moving guest from first to last
btnMoveFirstToLast.addEventListener("click", (event) => {
  event.preventDefault();
  const firstValue = guestList.shift();
  guestList.push(firstValue);
  drawList();
});
