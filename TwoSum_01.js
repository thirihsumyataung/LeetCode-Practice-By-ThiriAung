const TwoSum = function(nums, target){ 
    const numWithIndex = nums.map((num,index) => [num,index]); 
    numWithIndex.sort((a,b) => a[0] - b[0]);
    let left = 0, right = nums.length - 1; 
    while (left < right){ 
     const sum = numWithIndex[left][0] + numWithIndex[right][0]; 
     if(sum === target){ 
        return [ numWithIndex[left][1], numWithIndex[right][1]]; 
     }   
     else if (sum<right){ 
         left++; 
     }
     else { 
         right--; 
     }
    }
    return []; 
}


let array1= [2,7,11,15]; 

let array2 = [3,2,4]; 

let array3 = [3,3]; 

console.log(TwoSum(array1,9));
console.log(TwoSum(array2,6));
console.log(TwoSum(array3,6));
