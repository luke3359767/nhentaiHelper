let words = document.getElementById(`detact_text`);
let regrex = /\d\d\d\d\d\d/gi;
let numbers = words.values.match(regrex);
console.log(numbers);
