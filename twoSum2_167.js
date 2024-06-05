var twoSum = function (numbers, target) { 
    let i = 0 ; 
    let j = numbers.length - 1; 

    while ( i < j ){ 
        const sum = numbers[i] + numbers[j]; 
        if(sum === target){ 
            return [ i+1, j+1]; 
        }
        else if ( sum < target){ 
            i+=1;
        }
        else { 
            j-=1;
        }
    }
    return "There is no target in array. "; 
}

const numbers1 = [2,7,11,15]; 
const target1 = 9 
console.log( twoSum(numbers1,target1)); 

const numbers2 = [2,3,4]; 
const target2 = 6; 
console.log(twoSum(numbers2,target2)); 

const numbers3 = [-1,0]; 
const target3 = -1; 
console.log(twoSum(numbers3, target3)); 

const numbers4 = [2,3,4]; 
const target4 = 9; 
console.log(twoSum(numbers4, target4)); 