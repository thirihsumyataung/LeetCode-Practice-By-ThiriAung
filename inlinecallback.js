let hello = val => "Hello " + val; 
console.log(hello('Bammy')); 


let sampleArray = [9,100,5,6,7,23,8]; 
let sortedArray = sampleArray.sort((a,b)=> b-a);  // to sort the array in descending from more to less
console.log(sortedArray); 


const mapFunction = function (nums){ 
    return nums.map((num,index) => [num,index]); 
}

let array1 = [3,4,5,8]; 
console.log(mapFunction(array1)); 


// Spread Operator (Or) ...
// Quickly copy ll or part of an existing array or object into another array or object ß
// The spread operator is often used in combination with destructuring.
const myVehicle = { 
    brand: 'Ford', 
    model : 'Mustang', 
    color: 'Red'
}

const updateMyVehicle = { 
    type: 'Car', 
    year: 2021, 
    color: 'Yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle}; 
console.log(myUpdatedVehicle); 