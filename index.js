"use strict";

let guestList = [];
//Global variables

const btnAddGuestEnd = document.querySelector(".btn__add__end");
const btnAddGuestStart = document.querySelector(".btn__add__start");
const btnRemoveGuestStart = document.querySelector(".btn__remove__start");
const btnRemoveGuestEnd = document.querySelector(".btn__remove__end");
const btnReverse = document.querySelector(".btn__reverse");
const listDiv = document.createElement("div");
const list = document.createElement("ol");
const main = document.querySelector(".main");
const input = document.querySelector("#name__input");
const errorMessage = document.createElement("p");
const listItem = document.createElement("li");

errorMessage.textContent = "Wrong Input";

main.append(listDiv);
//Add guest list at the start
btnAddGuestStart.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = input.value;
  if (inputValue === "" || !isNaN(inputValue)) {
    main.append(errorMessage);
  } else {
    const listItem = document.createElement("li");
    guestList.unshift(inputValue);
    errorMessage.remove();
    listItem.append(inputValue);
    for (let i = 0; i < guestList.length; i++) {
      list.prepend(listItem);
      listDiv.append(list);
    }
  }
});
//Add guest list at the end
btnAddGuestEnd.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = input.value;
  if (inputValue === "" || !isNaN(inputValue)) {
    main.append(errorMessage);
  } else {
    const listItem = document.createElement("li");
    guestList.push(inputValue);
    errorMessage.remove();
    listItem.append(inputValue);
    for (let i = 0; i < guestList.length; i++) {
      list.append(listItem);
      listDiv.append(list);
    }
  }
});
//Remove guest from the start of the list
btnRemoveGuestStart.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = input.value;
  guestList.shift(inputValue);
  for (let i = guestList.length; i > 0; i--) {
    const listItem = document.createElement("li");
    listItem[i].textContent = null;
  }
});
//Remove guest from the end of the list
// btnRemoveGuestEnd.addEventListener("click", (event) => {
//   event.preventDefault();
//   let inputValue = input.value;
//   if (inputValue === "" || !isNaN(inputValue)) {
//     main.append(errorMessage);
//   } else {
//     const listItem = document.createElement("li");
//     guestList.push(inputValue);
//     errorMessage.remove();
//     listItem.append(inputValue);
//     for (let i = 0; i < guestList.length; i++) {
//       list.append(listItem);
//       listDiv.append(list);
//     }
//   }
// });
