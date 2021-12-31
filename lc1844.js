var replaceDigits = (s)=>{
    let ans = "";
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let n = s.length;
    for(let i=0;i<n;i++){
        ans+=(alphabet.indexOf(s[i]) !== -1)?s[i]:alphabet[alphabet.indexOf(s[i - 1]) + parseInt(s[i])];
    }
    return ans;
};