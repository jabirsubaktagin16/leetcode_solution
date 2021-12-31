var maxProductDifference = (nums)=>{
    const firstMax = Math.max(...nums);
    nums.splice(nums.indexOf(firstMax), 1);
    const secondMax = Math.max(...nums);
    
    const firstMin = Math.min(...nums);
    nums.splice(nums.indexOf(firstMin), 1);
    const secondMin = Math.min(...nums);
    
    return (firstMax*secondMax)-(firstMin*secondMin);
};