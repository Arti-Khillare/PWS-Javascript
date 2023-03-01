//Primitive datatype
//Number
const age = 22;
console.log(age)

//string
const Name = "Ayasha";
console.log(Name)

//Array
const array = [1,2,3,4,5];
console.log(array)

//Boolean
const x = true;
const y = false;
console.log(x);
console.log(y);

//string + number
const m = 21;
const n = "1";
console.log(m+n); //211

//JavaScript treats 16 and 4 as numbers, until it reaches "Volvo"
let p = "www" + 2 + 4;
console.log(p); //www24
let q = 2 + 4 + "www";
console.log(q); //6www


//Javascript dynamic types
let d; //undefined
d=8;   //number
d="tyi"//string

//object
const person = {
    name : "kjnjkvn",
    age : 12,
}
console.log(person.name);
console.log(person.age);

//undeefined
var g;
console.log(g)

//primitive datatype symbol - generally it is used for creating for unique properties of object

//object creation with literals with one callback function
let flower = {
    rname : "rose",
    color : "red",
    fragrance() {
        console.log(`${this.rname}  smells pleasant`);
    }
}
flower.fragrance(); //rose smells pleasant
flower["color"]; //red

//object without function
var obj = {
    fname : "Rita",
    age : 12,
    dance : function (){
        console.log(`${this.fname} is my name`)
    }
};
console.log(obj.fname);
obj.dance();
console.log(obj.age);