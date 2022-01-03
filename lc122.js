var maxProfit = (prices)=>{
    let n = prices.length;
    let p1 = prices[0];
    let ans = 0;
    for(let i=1;i<n;i++){
        if(p1>=prices[i]) p1=prices[i];
        else{
            ans+=prices[i]-p1;
            p1 = prices[i]
        }
    }
    return ans;
};