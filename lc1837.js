var sumBase = (n, k)=>{
    let sum = 0;
    while (n>0) {
        sum += Math.trunc(n % k);
        n = n / k;
    }
    return sum;
};