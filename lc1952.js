var isThree = (n)=>{
    let cnt = 0;
    for(let i=1;i<=n;i++){
        cnt = (n%i===0)?cnt+1:cnt+0;
    }
    return cnt===3;
};