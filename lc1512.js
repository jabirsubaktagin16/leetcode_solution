var numIdenticalPairs = (nums)=>{
    let n = nums.length;
    let cnt = 0;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            cnt = (nums[i]===nums[j])?cnt+1:cnt+0;
        }
    }
    return cnt;
};