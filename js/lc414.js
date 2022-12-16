var thirdMax = (nums)=>{
    let uniqueArray = [...new Set(nums)];
    uniqueArray.sort((a,b)=>b-a);
    let n = uniqueArray.length;
    if(n<3){
        return Math.max(...uniqueArray);
    }
    return uniqueArray[2];
};