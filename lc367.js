var isPerfectSquare = (num)=>{
    let i = 0;
    while(i*i<=num){
        if(i*i===num) return true;
        i++;
    }
    return false;
};