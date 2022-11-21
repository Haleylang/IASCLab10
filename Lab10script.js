

function difference(elementOne, elementTwo) {
  var elementOne = document.getElementById("firstNumber").value;
  var elementTwo = document.getElementById("secondNumber").value;
  var calculation = elementOne - elementTwo;
  document.getElementById("Answer").innerHTML = calculation ;
}

function sum(elementOne, elementTwo) {
  var elementOne = document.getElementById("firstNumber").value;
  var elementTwo = document.getElementById("secondNumber").value;
  var calculation = Number(elementOne) + Number(elementTwo);
  document.getElementById("Answer").innerHTML = calculation ;
}

function quotient(elementOne, elementTwo) {
  var elementOne = document.getElementById("firstNumber").value;
  var elementTwo = document.getElementById("secondNumber").value;
  var calculation = elementOne / elementTwo;
  document.getElementById("Answer").innerHTML = calculation ;
}

function multiply(elementOne, elementTwo) {
  var elementOne = document.getElementById("firstNumber").value;
  var elementTwo = document.getElementById("secondNumber").value;
  var calculation = elementOne * elementTwo;
  document.getElementById("Answer").innerHTML = calculation ;
}
