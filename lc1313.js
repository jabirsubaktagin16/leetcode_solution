var decompressRLElist = (nums)=> {
    let n = nums.length;
    let ans = [];
    for (let i=0; i<n; i=i+2){
        for (let j = 0; j < nums[i]; j++) {
            ans.push(nums[i + 1])
        }
    }
    return ans;
};