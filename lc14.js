var longestCommonPrefix = (strs)=>{
    let n = strs.length;
    if(!strs||n===0) return "";
    
    let sortedStr = strs.sort((a, b)=> a.length-b.length);
    let prefixString = sortedStr[0];
    
    while(!strs.every((str)=>str.startsWith(prefixString))){
        if(prefixString.length===0) return;
        prefixString = prefixString.slice(0, -1);
    }
    return prefixString;
};