//function declaration
function sum (){
    var a = 9;
    var b = 6;
    console.log(a+b)
}
sum();

//function expression
const square = function(num)  {
  console.log(num * num) 
}
const x = square(6)


//function hoisting
mul(2)
function mul(num) {
    console.log(num * num)
}

//recursive function
function printNum(x) {
  if (x >= 10) {
    return ;
  }

  printNum(x + 1) ;
}
printNum(0)