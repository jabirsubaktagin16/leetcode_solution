var isPalindrome = (s)=>{
    var re = /[\W_]/g;
    var lowRegStr = s.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
};