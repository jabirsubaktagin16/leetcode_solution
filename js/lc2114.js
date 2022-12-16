var mostWordsFound = (sentences)=>{
    let words = [];
    sentences.map((w)=>{
        w = w.split(' ');
        words.push(w.length);
    })
    return Math.max(...words);
};