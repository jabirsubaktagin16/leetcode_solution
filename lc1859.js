var sortSentence = (s)=>{
    let strArr = s.replace(/\d/g, "").split(" ");
    let n = strArr.length;
    let nums = s.match(/\d/g);
    let ans = [];
    
    for (let i = 0; i < n; i++) {
        ans[nums[i]] = strArr[i];
    }
    
    return ans.join(" ").trim();
};