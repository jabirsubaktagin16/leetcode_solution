var smallerNumbersThanCurrent = (nums)=> {
    let n = nums.length;
    let ans = [];
    for (let i=0;i<n;i++){
        let cnt = 0;
        for(let j=0;j<n;j++){
            cnt = (nums[j]<nums[i])?cnt+1:cnt+0;
        }
        ans.push(cnt);
    }
    return ans;
};