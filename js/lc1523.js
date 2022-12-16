var countOdds = (low, high)=>{
    let cnt = 0;
    for(let i=low;i<=high;i++) cnt = (i%2)?cnt+1:cnt+0;
    return cnt;
};