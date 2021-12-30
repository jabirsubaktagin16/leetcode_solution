var decode = (encoded, first)=>{
    let ans = [first];
    let n = encoded.length;
    for(let i=0;i<n;i++){
        ans.push(encoded[i]^ans[i]);
    }
    return ans;
};