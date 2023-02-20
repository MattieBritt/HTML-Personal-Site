// Makes it to where whatever name the user types, it will always return with an uppercase first letter, and lowercase letters for the rest of the name

var nameInput = prompt("What is your name?")
var nameInputFirst = nameInput.slice(0, 1);
var nameInputCapital = nameInputFirst.toUpperCase();
var nameInputFinal = nameInput.slice(1, );
var nameFinal = nameInputFinal.toLowerCase();
var nameCompleted = nameInputCapital + nameFinal;

alert(nameCompleted);