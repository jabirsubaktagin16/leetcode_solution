var finalValueAfterOperations = (operations)=>{
    let n = operations.length;
    let ans = 0;
    for(let i=0;i<n;i++){
        ans = (operations[i]=='++X' || operations[i]=='X++')?ans+1:(operations[i]=='--X' || operations[i]=='X--')?ans-1:ans+0;
    }
    return ans;
};