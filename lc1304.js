var sumZero = (n)=>{
    let ans = [];
    if(n%2) ans.push(0);
    n /=2;
    for(let i=1; i<=n; i++){
        ans.push(i);
        ans.push(-i);
    }
    return ans;
};