var numberOfStudents = 15;
var numberOfMentors = 8;
var total = numberOfStudents + numberOfMentors;
var percentage = 100 / total;
console.log(
  `Percentage of students: ${Math.round(numberOfStudents * percentage)}%`
);
console.log(
  `Percentage of mentors: ${Math.round(numberOfMentors * percentage)}%`
);
