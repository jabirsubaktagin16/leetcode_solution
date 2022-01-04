var signFunc = (x)=> x>0?1:x<0?-1:0;

var arraySign = (nums)=>{
    let product = 1;
    let n = nums.length;
    for(let i=0;i<n;i++) product *=nums[i];
    return signFunc(product);
};