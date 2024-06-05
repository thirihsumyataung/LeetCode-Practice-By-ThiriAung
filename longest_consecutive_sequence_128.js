
/* 

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.


Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. 
Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/

var longestConsecutive = function (nums){ 
     // for each number
  // we can get the streak it belongs
  // by +1/-1
  const set = new Set(nums);
  let streak = 0;

  for (const num of nums) {
    set.delete(num);
    let start = num;
    let end = num;
    while (set.has(end + 1)) {
      end += 1;
      set.delete(end);
    }
    while (set.has(start - 1)) {
      start -= 1;
      set.delete(start);
    }

    streak = Math.max(streak, end - start + 1);
  }

  return streak;
}

const nums = [100,4,200,1,3,2]; 
console.log(longestConsecutive(nums)); 

const numss = [0,3,7,2,5,8,4,6,0,1]
console.log(longestConsecutive(numss)); 


