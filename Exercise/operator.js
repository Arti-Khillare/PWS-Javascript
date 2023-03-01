//operators
//Arithmetic 
var a=20, b=10, sum, sub, prod, div, rem;

console.log("Addition of 20 & 10 " +(sum = a + b))
console.log("Substraction of 20 & 10 " +(sub = a - b))
console.log("Multiplication of 20 & 10 " +(prod = a * b))
console.log("Division of 20 & 10 " +(div = a / b))
console.log("Remainder of 20 & 10 " +(rem = a % b))
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);

//to check whether two values are same or not used assignment operator
if(a==b) {
    console.log(true)
}
else {
    console.log(false)
}

//Assignment operator
var m=9;
var n=9;
console.log(m+=n);
console.log(m-=n);
console.log(m*=n);
console.log(m/=n);
console.log(m%=n);

//exponentiation assignment
console.log(m**n); 

//comparision operator
let p = 4;
let q = 2;
console.log(p>q)
console.log(p<q)

let  e = 8, f = 8;
console.log(e == f);
console.log(e === f);
console.log(e != f);
console.log(e !== f);
console.log(e >= q);
console.log(e <= q);


//logical operator
const x=5;
const y=2;
console.log((x<y) && (x>y));
console.log((x<y) || (x>y));
console.log(!x);

//bitwise operator
console.log(x&y);
console.log(0 & 1);
console.log(1 & 0);
console.log(0 & 0);
console.log(1 & 1);
console.log(x|y);
console.log(x^y);
console.log(~y); //it gives (-y + 1) -2+1=-3
console.log(5>>2);
console.log(5<<2);