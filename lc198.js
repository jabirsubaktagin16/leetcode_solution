var rob = (nums)=>{
    let n = nums.length;
    let prev1 = 0, prev2=nums[0], curr=nums[0];
    for(let i=2;i<n+1;i++){
        curr = Math.max(prev2, prev1+nums[i-1]);
        prev1 = prev2;
        prev2 = curr;
    }
    return curr;
};