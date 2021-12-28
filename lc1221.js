var balancedStringSplit = (s)=> {
    let cnt = 0;
    let res = 0;
    for(let i=0; i<s.length; i++){
        cnt = (s[i]=='L')?cnt+1:(s[i]=='R')?cnt-1:cnt+0;
        res = (cnt==0)?res+1:res+0;
    }
    return res;
};