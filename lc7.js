var reverse = (x)=>{
    let negativeFlag = false;
    if (x < 0) {
        negativeFlag = true;
        x = -x;
    }
    let prev_y = 0;
    let y = 0;
    while (x != 0) {
        let current = x % 10;
        y = y * 10 + current;
        if (y >= 2147483647 || y <= -2147483648) y = 0;
        if (Math.floor((y - current) / 10) != prev_y) return 0;
        prev_y = y;
        x = Math.floor(x / 10);
    }
    return negativeFlag == true ? -y : y;
};