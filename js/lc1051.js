var heightChecker = (heights)=>{
    let sortHeights = [...heights];
    sortHeights.sort((a,b)=>a-b);
    let n = heights.length;
    let cnt = 0;
    for(let i=0;i<n;i++){
        cnt = (heights[i]!==sortHeights[i])?cnt+1:cnt+0;
    }
    return cnt;
};