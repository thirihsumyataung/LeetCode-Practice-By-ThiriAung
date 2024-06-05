var threeSum = function (nums){ 
    if (nums.length < 3) return []; 
    const result = []; 
    const hashes = new Set(); 

    for (let i = 0; i+2 < nums.length ; i++){ 
        if( nums[i] === nums[i-1]) continue; 
        const set  = new Set(); 
        for (let j= i+1; j < nums.length; j++){ 
            const counterpart = -nums[i]-nums[j]; 
            if(set.has(counterpart)){ 
                const min = Math.min(nums[i], nums[j], counterpart); 
                const max = Math.max(nums[i], nums[j], counterpart); 
                const hash = `${min}_${max}`; 
                if(!hashes.has(hash)){ 
                    result.push([min, -min-max, max]); 
                    hashes.add(hash); 
                }
            }
            set.add(nums[j]); 
        }
    }
    return result; 
}

const nums1 = [-1,0,1,2,-1,-4]; 
console.log(threeSum(nums1)); 

const nums2= [0,1,1];
console.log(threeSum(nums2)); 


const nums3 = [0,0,0]; 
console.log(threeSum(nums3)); 
