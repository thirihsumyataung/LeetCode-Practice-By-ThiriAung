

// Brute Force 
// O(n^2)
var maxArea1 = function (height) {
    let max = 0;
  
    for (let i = 0; i < height.length - 1; i++) {
      for (let j = i + 1; j < height.length; j++) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
      }
    }
  
    return max;
  };

  // Two Cursors 1 
  var maxArea2 = function (height) {
    if (height.length === 0) return 0;
    // suppose we have fine the most water
    // if means we can remove the border outside the range because they are short
    // suppose we have an initial border of two.
    // now if we insert borders inside, then it only matters if it is larger than the shorter border
    // so it is safe now to remove borders on the shorter side
  
    // [1,8,6,2,5,4,8,3,7]
    // [1               7]  candidate
    //    [8            7]. candidate
    //.   [8        8] candiate
    // done
  
    let i = 0;
    let j = height.length - 1;
    let max = 0;
    // for each move
    while (i < j) {
      max = Math.max(max, Math.min(height[i], height[j]) * (j - i));
      if (height[i] < height[j]) {
        i += 1;
      } else {
        j -= 1;
      }
    }
    return max;
  };

  // Two cursors 2 
  // O(N)
  var maxArea3 = function (height) {
    let max = 0;
  
    let i = 0;
    let j = height.length - 1;
  
    while (i < j) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
  
      // try to move the cursors
      if (height[i] < height[j]) {
        // move i to the next bigger border
        let k = i + 1;
        while (height[k] <= height[i]) {
          k += 1;
        }
  
        i = k;
      } else {
        let k = j - 1;
        while (height[k] <= height[j]) {
          k -= 1;
        }
  
        j = k;
      }
    }
  
    return max;
  };


const height1 = [1,8,6,2,5,4,8,3,7]; 

const height2 = [1,1]


console.log(maxArea1(height1)); 
console.log(maxArea1(height2)); 


console.log(maxArea2(height1)); 
console.log(maxArea2(height2)); 


console.log(maxArea3(height1)); 
console.log(maxArea3(height2)); 



/* 
----------------
Description: 
-----------------
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.


--------
Example: 
--------

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.


*/