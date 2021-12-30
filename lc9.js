var isPalindrome = (x)=>{
    if (x < 0) return false;
    else {
        let a = x;
        let y = 0;
        while (a > 0) {
            let current = a % 10;
            y = y * 10 + current;
            a = Math.floor(a / 10);
        }
        return x == y;
  }
};