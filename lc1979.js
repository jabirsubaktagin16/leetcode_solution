var gcd = (x, y)=>{
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}

var findGCD = (nums)=> gcd(Math.max(...nums), Math.min(...nums));