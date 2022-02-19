var missingNumber = (nums)=>{
    let n = nums.length;
    let sum = n;
    for(let i=0;i<n;i++){
        sum += i;
        sum -= nums[i];
    }
    return sum;
};