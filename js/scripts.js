var add = function(number1, number2) {
  return number1 + number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = add(number1, number2);
alert(result);

var subtract = function(number1, number2) {
  return number1 - number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = subtract(number1, number2);
alert(result);

var multiply= function(number1, number2) {
  return number1 * number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = multiply(number1, number2);
alert(result);

var divide = function(number1, number2) {
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);


//BMI: Multiply the weight in pounds by 0.45 (the metric conversion factor)

var userWeight = parseInt(prompt ("How much do you weigh in lbs?"));
var userHeight = parseInt(prompt ("How tall are you in inches?"));
var userBMI = function (height, weight){return ((weight*703)/(height*height))}

alert ("Your BMI is " + userBMI(userHeight, userWeight).toFixed() + ".");



//F to C: The temperature T in degrees Fahrenheit (°F) is equal to the temperature T in degrees Celsius (°C) times 9/5 plus 32:
