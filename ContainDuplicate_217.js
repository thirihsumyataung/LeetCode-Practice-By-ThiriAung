/* 
Time Complexity : O(nLogn)
Space Complexity : O(1)
*/

// Using Set 
// If there is any duplicate number, return boolean  
const conatinDuplicate = function(nums){ 
    const s = new Set(nums); 
    return s.size !== nums.length; 

}
// Using Loop 
const containDuplicateLoop = function(nums) { 
    nums.sort((a,b) => a-b); 
    for(let i = 0; i < nums.length; i++){ 
        if(nums[i] === nums[i+1]){ 
            return true; 
        }
    }
    return false; 
}

const aString= [1,2,3,1]; 
console.log(conatinDuplicate(aString)); 

const bString = [1,2,3,4]; 
console.log(conatinDuplicate(bString)); 

const cString =[1,1,1,3,3,4,3,2,4,2]; 
console.log(conatinDuplicate(cString));


console.log(containDuplicateLoop(aString)); 
console.log(containDuplicateLoop(bString)); 
console.log(containDuplicateLoop(cString)); 