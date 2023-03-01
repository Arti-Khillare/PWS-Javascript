// Javascript String toUpperCase() Returns uppercase of a string
//convert string into uppercase
let a= "abcn ikkkdf ijvfm ";
console.log(a.toUpperCase())


// Javascript String toLowerCase() Returns lowercase representation of a string
//convert string into lowercase
console.log(a.toLowerCase())


// JavaScript String slice()
// Extracts and returns a section of the string
//slice method is used to return the selected item with start to end index
let str = "hello world"
let nStr = str.slice(0,6)
console.log(nStr);

//The first number is the starting index, and the second number is the delete count.
const food = ['pizza', 'cake', 'salad', 'cookie'];
food.splice(1,0,"burrito")
console.log(food);

// JavaScript String length
// Returns the number of characters in a string
console.log(food.length);

// JavaScript String replace()
// replace a substring/pattern in the string
const word = "cat ball";
let result = word.replace ('c' , 'b')
console.log(result);

const text = "Java is programming language and Java is also fun";

const ntext = text.replace("Java", "Javascript");
console.log(ntext);

//to replace all occurences
const pattern = /Java/g;
const gtext = text.replace(pattern, "Javascrript")
console.log(gtext);

//without considering uppercase and lowercase by using case incentive replacement -> replace pattern with /Java/i or /Java/gi

// JavaScript String indexOf()
// Returns the first index of occurrence of a value  
let array = food.indexOf("salad")
console.log(array);

// JavaScript String lastIndexOf()
// Returns the last index of occurrence of a value

// Javascript String startsWith()
// Checks if a string begins with a specified string
console.log(word.startsWith("Java"))
console.log(text.startsWith("Java"))

// Javascript String endsWith()
// Checks if a string ends with a specified string
console.log(text.endsWith("fun"))

// Javascript String includes()
// Checks if given string is found inside a string
console.log(text.includes("Java"))

// JavaScript String repeat()
// Returns a string by repeating it given times
console.log(word.repeat(3))