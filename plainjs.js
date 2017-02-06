/*
 * This file is the plain js (jquery and prototypes) version of the interview programming exercises.
 *
 * As the candidate, your tasks are
 *    1. load the html page into a browser and test its functionality
 *    2. note the bugs and fix them. Be prepared to explain your work. (use window.alert or a new span to put out error messages)
 *       - if you get stuck and can't make any progress, ask for help because getting some help and making progress is better
 *         than not getting anything done.
 *       2.1 explain the function pattern at the end
 *    3. extra credit: change the equation entry to free form text entry
 *       3.1 first, make it functionally equivalent to the existing entry
 *       3.2 second, allow any well formed equation using the given operators with the addition of parentheses
 *
 */

// constructor functions work best when they recieve arguments
var Equation=function(a,b,c) {
    this.operand1 = a;
    this.operand2 = b;
    this.operator = c;
    this.answer = null;
};

/**
 * [compute  gives us final answer; expanded to handle/alert user input errors]
 * @return  [nothing]
 */
Equation.prototype.compute = function() {

  console.log("This is the computer operator: " + this.operator);
  console.log("This is my first entry: " + this.operand1);
  console.log("This is my second entry: " + this.operand2);
    switch (this.operator) {
    case '+':
        this.answer = this.operand1 + this.operand2;
        break;
    case '-':
        this.answer = this.operand1 - this.operand2;
        break;
    case '/':
        this.answer = this.operand1 / this.operand2;
        break;
    case '*':
        this.answer = this.operand1 * this.operand2;
        break;

    default:
        break;
    }

    console.log("This is my answer: " + this.answer);

    if (Number.isInteger(this.answer)) {
      // reward smarty pants user with answer
    document.querySelector('#answer').innerText = this.answer;

  } else if (!Number.isInteger(this.answer)) {
      // you done screwed up and thought letters were numbers
      document.querySelector('#answer').innerText = "Please enter a valid query";
  }
};

//The below two protoype functions are useless as tits on a bull

// Equation.prototype.updateOperand = function(event) {
//   // grab correct number id!
//   if (event.currentTarget.id === '#operand1')
//        this.operand1 = parseFloat( event.currentTarget.value );
//    else this.operand2 = parseFloat( event.currentTarget.value );
//    this.compute();
// };

// Equation.prototype.updateOperator = function(event) {
//     this.operator = event.currentTarget.value;
//     this.compute();
// };

(function() {
    // WARNING: don't treat equation as a global variable in any changes you make

  // First, let's ensure the DOM has loaded before attempting anything
      document.addEventListener('DOMContentLoaded',function() {
  //I don't need your goofy equation
  //var equation = new Equation();

    // this will handle all the logic we need instead of the protoypes
    function calcAll() {
      var curOp = document.querySelector('#operator');
      var operand1 = eval(document.querySelector('#operand1').value);
      var operand2 =  eval(document.querySelector('#operand2').value);
      var operator = curOp.options[curOp.selectedIndex].value;
      var workingEq = new Equation(operand1, operand2, operator);

      console.log(operand1, operand2, operator);
        workingEq.compute();
    };

    document.querySelector('#operator').onchange=calcAll;
    // this can stay the same
    var operands = document.querySelectorAll('.operand');
    for (var i = 0, numOperands = operands.length; i < numOperands; i++) {
        operands[i].onchange=calcAll;
    }
    },false);
})();
