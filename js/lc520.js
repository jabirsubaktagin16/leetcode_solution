var detectCapitalUse = (word)=>{
    if(word===word.toUpperCase()||word===word.toLowerCase()) return true;
    else if(word.charAt(0)===word.charAt(0).toUpperCase()){
        for(let i=1;i<word.length;i++){
            if(word[i] != word[i].toLowerCase()) return false;
        }
        return true;
    }
    else return false;
};