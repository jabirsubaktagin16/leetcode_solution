var findNumbers = (nums)=>{
    let n = nums.length;
    let cnt = 0;
    for(let i=0;i<n;i++){
        let numsSplit = nums[i].toString().split('');
        cnt = numsSplit.length%2?cnt+0:cnt+1;
    }
    return cnt;
};