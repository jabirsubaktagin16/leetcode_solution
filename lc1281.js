var subtractProductAndSum = (n)=>{
    let sum = 0
    let product = 1
    while (n>0){
        let digit = n%10;
        n =parseInt(n/10);
        sum += digit;
        product *= digit;
    }
    return (product-sum)
};