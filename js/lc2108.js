var checkPalindrome = (str)=>{
    const len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var firstPalindrome = (words)=>{
    let ans = [];
    let n = words.length;
    for(let i=0;i<n;i++){
        if(checkPalindrome(words[i])) return words[i];
    }
    return "";
};