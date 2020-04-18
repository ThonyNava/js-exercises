/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  var splitWord = str.split("");
  var firstLetter = splitWord[0].toUpperCase();
  var wordLessFirstLetter = splitWord.slice(1, splitWord.length).join("");
  var capitalise = firstLetter + wordLessFirstLetter;
  return capitalise;
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
