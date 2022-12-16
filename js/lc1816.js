var truncateSentence = (s, k)=>{
    let sentence=s.split(" ");
    let ans = [];
    for (let i=0;i<k;i++){
        ans.push(sentence[i]);
    }
    return ans.join(" ");
};