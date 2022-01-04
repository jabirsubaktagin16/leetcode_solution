var isPowerOfTwo = (n)=> {
    if(n===0) return false;
    
    return (Math.ceil(Math.log2(n)) === Math.floor(Math.log2(n)))
};