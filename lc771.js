var numJewelsInStones = (jewels, stones)=>{
    let jLen = jewels.length;
    let sLen = stones.length;
    let cnt = 0
    for(let i=0;i<jLen;i++){
        for(let j=0;j<sLen;j++){
            cnt = (jewels[i]===stones[j])?cnt+1:cnt+0;
        }
    }
    return cnt;
};