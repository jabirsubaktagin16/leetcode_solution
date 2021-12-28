var countMatches = (items, ruleKey, ruleValue)=> {
    let cnt = 0;
    for(let i of items){
        cnt = (ruleKey=="color" && i[1]==ruleValue)?cnt+1:(ruleKey=="type" && i[0]==ruleValue)?cnt+1:(ruleKey=="name" && i[2]==ruleValue)?cnt+1:cnt+0;
    }
    return cnt;
};