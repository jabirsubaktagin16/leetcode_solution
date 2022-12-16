var lengthOfLastWord = function(s) {
    let splitSentence = s.trim().split(" ");
    let n = splitSentence.length;
    return (splitSentence[n-1]).length;
};