const array = [1,2,3,4,5];

array.push(5); //adding element in back
console.log(array)

array.pop(2); //removing element in back
console.log(array)

array.shift(1); //removing element from frontside
console.log(array)

array.unshift(22); //adding element from forward side
console.log(array)

array.splice(1,3, "Heloo"); //replaceing element from start index to end index
console.log(array)

const nArr = [1,2,3,4]
let sArr = nArr.slice(0,2); //it creates array with element staring from given index and ending at index
console.log(sArr);