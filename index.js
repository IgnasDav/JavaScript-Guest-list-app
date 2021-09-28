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

errorMessage.textContent = "Wrong Input";

main.append(listDiv);

btnAddGuestStart.addEventListener("click", (event) => {
  event.preventDefault();
  let inputValue = input.value;
  for (let i = 0; i <= guestList.length; i++) {
    if (inputValue === "" || !isNaN(inputValue)) {
      main.append(errorMessage);
    } else {
      const listItem = document.createElement("li");
      listDiv.append(list);
      list.append(listItem);
      listItem.append(inputValue);
      errorMessage.remove();
      //This line is a bug, the for loop keeps iterating over and over again
      guestList.unshift(inputValue);
    }
  }
});
