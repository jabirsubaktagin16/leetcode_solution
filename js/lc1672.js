var maximumWealth = (accounts)=> {
    let n = accounts.length;
    let ans = 0;
    for(let i=0;i<n;i++){
        let current = accounts[i].reduce((x, y) => x + y);
        if(current>ans) ans=current;
    }
    return ans;
};