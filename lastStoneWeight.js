var lastStoneWeight = function(stones){ 
    stones.sort((a,b) => b-a); // to stort the array in descending --> more to less
    
    while(stones.length > 1){ 
        let first = stones.shift(); // 1st largest number 
        let second = stones.shift(); // 2nd largest number

        if (first !== second){ 
            const newStone = first - second; 

            const index = stones.findIndex(stone => stone <= newStone); 
            if (index === -1) stones.push(newStone)
            else stones.splice(index,0,newStone)
        }
    }
    return stones.length === 1 ? stones[0] : 0; 

}

let stoneArray1 = [2,7,4,1,8,1]; 
console.log(lastStoneWeight(stoneArray1)); 

let stoneArray2 = [1];
console.log(lastStoneWeight(stoneArray2)); 
