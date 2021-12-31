var numberOfMatches = (n)=>{
    let matches = 0;
    let reminder = 0;
    while(n){
        n += reminder;
        reminder = n%2;
        n = (!reminder)?n/2:(n-1)/2;
        matches +=n
    }
    return matches;
};