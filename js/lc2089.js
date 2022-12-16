var targetIndices = (nums, target)=>{
    let n = nums.length;
    let ans = [];
    nums.sort((a, b)=>a - b);
    for(let i=0;i<n;i++){
        if(nums[i]===target) ans.push(i);
    }
    return ans;
};