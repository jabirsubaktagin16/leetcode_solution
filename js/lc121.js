var maxProfit = (prices)=>{
    let n = prices.length;
    let mn = 999999;
    let ans = 0;
    for(let i=0;i<n;i++){
        mn = Math.min(mn, prices[i]);
        ans = Math.max(ans, prices[i]-mn);
    }
    return ans;
};