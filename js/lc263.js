var isUgly = (n)=>{
    if(n<=0) return false;
    let arr = [2, 3, 5];
    for(let i=0;i<3;i++){
        while(n%arr[i]===0) n /=arr[i];
    }
    return n===1;
};