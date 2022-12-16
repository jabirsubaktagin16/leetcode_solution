var arrayStringsAreEqual = function(word1, word2) {
    let finalWord1 = word1.join('');
    let finalWord2 = word2.join('');
    return finalWord1===finalWord2;
};