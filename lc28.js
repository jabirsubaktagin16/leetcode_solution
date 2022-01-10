var strStr = function(haystack, needle) {
    if(needle.length===0) return 0;
    let arr = haystack.split(needle);
    return arr[0].length !== haystack.length?arr[0].length:-1;
};