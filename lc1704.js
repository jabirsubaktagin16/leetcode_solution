var halvesAreAlike = (s)=>{
    let firstHalf = s.toLowerCase().slice(0, s.length/2);
    let secondHalf = s.toLowerCase().slice(s.length/2);
    let vowel = ['a', 'e', 'i', 'o', 'u'];
    let rCnt = 0, lCnt = 0;
    for(let i=0;i<firstHalf.length;i++){
        lCnt = (vowel.includes(firstHalf[i]))?lCnt+1:lCnt+0;
    }
    for(let i=0;i<secondHalf.length;i++){
        rCnt = (vowel.includes(secondHalf[i]))?rCnt+1:rCnt+0;
    }
    
    return lCnt===rCnt;
};