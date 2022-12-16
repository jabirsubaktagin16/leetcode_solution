var searchInsert = (nums, target)=>{
    let result = 0;
    if(nums.indexOf(target)!=-1){
        result = nums.indexOf(target);
    } else{
        nums.push(target);
        nums.sort((a,b)=>a-b);
        result = nums.indexOf(target);
    }
    return result;
}