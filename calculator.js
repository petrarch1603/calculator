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

let display = {
  number: "",
  operator: null,
  update: function(){
    document.getElementById('number-display').textContent = this.number;
    document.getElementById('op-display').textContent = this.operator != null ? this.operator: "";
  },
  clear: function(){
    this.number = 0;
    this.operator = null;
  },

}

function onClickNumber(e) {
  let num = e.target.textContent;
  display.number = display.number + num;
  display.update();
}

function onClickOperator(e) {
  let oper = e.target.textContent;
  display.operator = oper;
  display.number = '';
  display.update();
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