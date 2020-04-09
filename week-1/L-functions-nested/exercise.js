var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;

// You should have one function that calculates the percentage
function percentage(value, total) {
  var calculation = Math.round((value / total) * 100) + "%";
  return calculation;
}

// You should have one function that creates a message
function message(type, value, total) {
  var str = `The percentage of ${type} is: ${percentage(value, total)}`;
  return str;
}

console.log(message("students", numberOfStudents, total));
console.log(message("mentors", numberOfMentors, total));
