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
  calculator.push(display.number);
  display.number = '';
  display.update();
  calculator.push(oper);
  console.log(oper);
}

function onClickEquals(e) {
  console.log("equal pushed");
  calculator.push(display.number);
  display.number = calculator.evaluate();
  display.operator = '';
  display.update();
}

function onClickClear(e) {
  console.log('clear pushed');
  calculator.operand_stack = [];
  calculator.operator_stack = [];
  display.number = 0;
  display.operator = '';
  display.update();
}

function onClickDecimal(e) {
  console.log('. pushed');
}

let calculator = {
  operand_stack: [],
  operator_stack: [],

  evalTop: function() {
    let b = Number(this.operand_stack.pop());
    let a = Number(this.operand_stack.pop());
    let oper = this.operator_stack.pop();
    let result = 0;
    switch(oper) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        if (b === 0) {
          result = 'ERROR - Cannot Divide by Zero!'
        }
        result = a / b;
        break;
    }
    if (result = 'ERROR - Cannot Divide by Zero!') {
      this.operator_stack = [];
    }
    this.operand_stack.push(result);
  },

  push: function(value) {
    let n = Number(value);
    if (!isNaN(n)) {
      this.operand_stack.push(value);
    } else if(value.match(/[*+-\/]/g)){
      this.operator_stack.push(value);
    }
  },

  evaluate: function() {
    while (this.operator_stack.length > 0) {
      this.evalTop();
    }
    return this.operand_stack[0];
  },
}