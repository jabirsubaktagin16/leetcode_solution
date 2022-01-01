var reverseWords = (s)=>{
    let sentence = s.split(" ");
    let n = sentence.length;
    let ans = [];
    for(let i=0;i<n;i++){
        let letter = sentence[i].split('').reverse(); 
        ans.push(letter.join(''));
    }
    return ans.join(" ");
};