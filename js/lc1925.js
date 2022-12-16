var countTriples = (n)=>{
    if(n<5) return 0;
    let cnt = 0;
    for(let i=3; i<n; i++){
        for(let j=3; j<n; j++){
            let k = Math.sqrt((i*i)+(j*j));
            cnt = (k%1===0 && k<=n)?cnt+1:cnt+0;
        }
    }
    return cnt;
};