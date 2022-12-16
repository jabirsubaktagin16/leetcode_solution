var countKDifference = (nums, k)=>{
    let n = nums.length;
    let cnt = 0;
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            cnt = ((nums[i]-nums[j])===k)?cnt+1:cnt+0;
        }
    }
    return cnt;
};