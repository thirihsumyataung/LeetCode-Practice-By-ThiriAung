

var romanToNum = function (s){ 
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let total = 0; 
    for( i = 0 ; i < s.length; i++){ 
        let curr = s[i]; 
        let next = s[i+1]; 

        if(sym[curr] < sym[next]){ 
            total -= sym[curr]; 
        }else{ 
            total += sym[curr]; 
        }
    }
    return total; 
}

let roman1 = "LVIII"; 
let resultRoman1 = romanToNum(roman1); 
console.log(resultRoman1); 

let roman2 = "XLIX";
let resultRoman2 = romanToNum(roman2); 
console.log(resultRoman2); 