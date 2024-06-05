var addBinary = function(a,b){ 
    let carryOver = 0; 
    let maxLength = Math.max(a.length,b.length);  // to know the length of the result array
    let result = Array(maxLength).fill(0); // Result array fill in 0 first 

    let i = 0 ; // for loop 

    while (i<maxLength){ 
        const sum = (a.length - 1 -i < 0 ? 0 : a[a.length-1-i] * 1) + 
                    (b.length - 1 -i < 0 ? 0 : b[b.length-1-i] * 1) + carryOver; 
        result[maxLength - 1 -i] = sum % 2;  // to get the binary result 1 or 0 ; 
        carryOver = Math.floor(sum / 2);  
        i+=1; // Array Increasement
    }
    if(carryOver > 0){ 
        result.unshift(1); 
    }
    return result.join(''); 
}


let n= "11"; 
let m= "1" ;
let resultAddBinary1 = addBinary(n,m); 
console.log(resultAddBinary1);  

let x= "1010"; 
let y= "1011" ;
let resultAddBinary2 = addBinary(x,y); 
console.log(resultAddBinary2); 

/*

var addBinary = function(a, b) {
    // `0b`prefix is used in JavaScript to denote a binary literal
    // Using the 0b prefix with BigInt in JS allows to directly convert a binary string to its decimal (base 10) representation.
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2);
};

*/