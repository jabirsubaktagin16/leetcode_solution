var createTargetArray = (nums, index)=> {
    let n = nums.length;
    let target = [];
    for(let i=0;i<n;i++){
        target.splice(index[i], 0, nums[i]);
    }
    return target;
};