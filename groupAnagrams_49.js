var groupAnagrams = function(strs){ 
    const result = new Map();  // create a new Array named result 
    for (let str of strs){ 
        const count = Array(26).fill(0); // count array with length 26 and everything is 0
        for(let i = 0 ; i < str.length; i++){ 
            count[str.charCodeAt(i) - 97] +=1; // small letter 97 and capital letter 65 
        }

        const someWhatHash = count.join('|'); 
        // if result.has(key) --> true 
        if(result.has(someWhatHash)){ // true
            result.get(someWhatHash).push(str); 
        }else { 
            result.set(someWhatHash,[str]); // result.ser(key,value)
        }
    }
    return Array.from(result.values()); 
}

const str1 = ["eat","tea","tan","ate","nat","bat"]; 
const str2 = [""]; 
const str3 = ["a"];

console.log(groupAnagrams(str1));
console.log(groupAnagrams(str2)); 
console.log(groupAnagrams(str3)); 