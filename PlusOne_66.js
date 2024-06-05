var plusOne = function(digits) {
    for (let i = digits.length-1 ; i>=0; i--){ 
        if(digits[i] < 9){ 
            digits[i] = digits[i] + 1; 
            return digits; 
        }
        else {
            digits[i] = 0; 
        }
    }
    digits.unshift(1); 
    return digits; 
};

let digit1 = [1,2,3]; 
let resultDigit1 = plusOne(digit1); 
console.log(resultDigit1); 

let digit2 = [4,3,2,1]; 
let resultDigit2 = plusOne(digit2); 
console.log(resultDigit2); 

let digit3 = [9];
let resultDigit3 = plusOne(digit3); 
console.log(resultDigit3); 