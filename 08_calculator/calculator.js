const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  var sum = 0;
	for (num of arr)
    sum += num;
  return sum;
};

const multiply = function(arr) {
  var product = 1;
	for (num of arr)
    product *= num;
  return product;
};

const power = function(num,exp) {
	var res = 1;
  for (let i = 0; i < exp; i++){
    res *= num;
  }
  return res;
};

const factorial = function(num) {
	return num <= 1 ? 1 : num * factorial(num-1);
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
