// Declare your function first
function passing(strNum1, strNum2) {
  var num1 = parseInt(strNum1);
  var num2 = parseInt(strNum2);
  var result = num1 + num2;
  return result;
}

// Call the function and assign to a variable `sum`
var sum = passing(`13`, `124`);

console.log(sum);
