var xorOperation = function(n, start) {
    let res=0;
    for(let i=0;i<n;i++) {
        res=res^(start+2*i);
    }
    return res;
};