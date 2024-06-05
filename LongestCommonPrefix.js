var longestCommonPrefix = function(strs){ 
    if(strs.length == 0 ) { 
        return " "; 
    }
    let prefix = strs[0]; 
    for(let i = 0 ; i < strs.length; i ++){ 
        while(strs[i].indexOf(prefix) != 0){ 
            prefix = prefix.substring( 0,prefix.length-1); 
            console.log('Prefix is currently --- ' + prefix);    
        }
    }
    return prefix; 
}

let string1 = ["flower","flow","flight"]; 
let resultString1 = longestCommonPrefix(string1); 
console.log(resultString1); 

console.log(); 

let string2 = ["dog","racecar","car"]; 
let resultString2 = longestCommonPrefix(string2); 
console.log(resultString2); 