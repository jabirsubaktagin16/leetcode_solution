var isPowerOfFour = (n)=>n===0?false:(Math.ceil(Math.log10(n)/Math.log10(4)) === Math.floor(Math.log10(n)/Math.log10(4)));