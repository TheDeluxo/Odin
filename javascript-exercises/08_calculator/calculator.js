const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arg) {
  n = 0
  for (let i = 0; i < arg.length; i++){
      n += arg[i]
  }
  return n
};

const multiply = function(arg) {
  n = 1
  for (let i = 0; i < arg.length; i++){
      n *= arg[i]
  }
  return n
};

const power = function(num1, num2) {
  let n = 1;
  for (i=0; i<num2; i++){
      n *= num1
  }
  return n
};

const factorial = function(num) {
  let n = 1;
  for (i = num; i > 0; i--){
      n *= i
  }
  return n
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
