// Dynamic Programming 
// O[n] --> Each number will travel only once
var ClimbStairs = function(n){ 
    const dp =[1,1]; 
    for(i = 2; i <=n ; i++){ 
        const result = dp[0] + dp[1]; 
        dp[0] = dp[1]; 
        dp[1] = result; 
    }

    return dp[1];  // Function will return dp[1], dp[1] = result; 
}

/* 
n = 0 --> Stair 0 --> dp[0] = 1
n = 1 --> Stair 1 --> dp[1] = 1 

n = 2 --> Stair 2 --> Result = dp[0] + dp[1] = 1 + 1 = 2 
        dp[0] = 1 <--- dp[1]
        dp[1] = 2 <--- Result

n = 3 --> Stair 3 --> Result = dp[0] + dp[1] = 1 + 2 = 3 
        dp[0] = 2 <--- dp[1]
        dp[1] = 3 <--- Result 

n = 4 --> Stair 4 --> Result = dp[0] + dp[1] = 2 + 3 = 5
        dp[0] = 3 <--- dp[1]
        dp[1] = 5 <--- Result

n = 5 --> Stair 5 --> Result = dp[0] + dp[1] = 3 + 5 = 8 
        dp[0] = 5 <--- dp[1]
        dp[1] = 8 <--- Result

*/

let stairs =5; 
let totalSteps1= ClimbStairs(stairs); 
console.log(totalSteps1); 

let stairs2 =4; 
let totalSteps2= ClimbStairs(stairs2); 
console.log(totalSteps2);


let stairs3 =3; 
let totalSteps3= ClimbStairs(stairs3); 
console.log(totalSteps3); 