//1>multiplication by using recursion
function mul(a,b) {
    if(a == 0 | b ==0) {
        return 0;
    }
    return a * b;
}
console.log(mul(4,6))


//2>even or odd function
function evenOrOdd(number) {
    if( number % 2 == 0) {
        return "Even"
    }
    else {
        return "Odd"
    }
}
console.log(evenOrOdd(2))

//3>positivesum 
function positivesum(arr) {
    var sum = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i]
        }
    }
    return sum;
}
console.log(positivesum([1,2,3,4,5]))

//4>remove character of string from first and last
function removeChar(str) {
    // var nStr = str.slice(1,4);
    // return nStr
    var result = str.substring(1, str.length-1) //return string from start index upto and excluding end index
    return result ;
}
console.log(removeChar("Hello"))

//5>make negative num 
function makenegNum(no) {
    return -no
}
console.log(makenegNum(6))

//6> repeat string
function repeat(n, s) {
    return s.repeat(n)
}
console.log(repeat(3,"Hello"));