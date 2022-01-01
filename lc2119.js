var reversedNum = num => parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);

var isSameAfterReversals = (num)=>{
    let reverseNumber = reversedNum(num);
    let doubleReverse = reversedNum(reverseNumber);
    return num===doubleReverse;
};