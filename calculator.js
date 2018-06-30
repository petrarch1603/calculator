"use strict"

let buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  if(button.textContent.match(/[01234567890]/g)) {
    button.addEventListener('click', onClickNumber);
  } else if (button.textContent.match(/[*\+\-\/]/g)) {
    button.addEventListener('click', onClickOperator);
  } else if (button.textContent === "=") {
    button.addEventListener('click', onClickEquals);
  } else if (button.textContent === "C") {
    button.addEventListener('click', onClickClear);
  } else if (button.textContent === ".") {
    button.addEventListener('click', onClickDecimal);
  }
});

function onClickNumber(e) {
  let num = e.target.textContent;
  console.log(num);
}

function onClickOperator(e) {
  let oper = e.target.textContent;
  console.log(oper);
}

function onClickEquals(e) {
  console.log('equal pushed');
}

function onClickClear(e) {
  console.log('clear pushed');
}

function onClickDecimal(e) {
  console.log('. pushed');
}