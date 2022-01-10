var maximumProduct = (nums)=>{
    nums.sort((a,b)=>a-b);
    let n = nums.length;
    let l = nums[n-1]*nums[n-2]*nums[n-3];
    let m = nums[0]*nums[1]*nums[n-1];
    return Math.max(l, m);
};