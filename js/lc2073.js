var timeRequiredToBuy = (tickets, k)=>{
    let tick_k = tickets[k];
    let n = tickets.length;
    let ans = 0;
    for(let i=0;i<k+1;i++) ans +=Math.min(tick_k, tickets[i]);
    for(let i=k+1;i<n;i++) ans +=Math.min(tick_k-1, tickets[i]);
    return ans;
};