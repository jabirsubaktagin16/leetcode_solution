var maxProduct = (nums)=>{
    nums.sort((a, b)=> a - b);
    let n = nums.length;
    return (nums[n-1]-1)*(nums[n-2]-1)
};