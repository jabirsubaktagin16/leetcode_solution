var getConcatenation = (nums)=>{
    let n = nums.length;
    for(let i=0;i<n;i++){
        nums.push(nums[i]);
    }
    return nums;
};