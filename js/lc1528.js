var restoreString = (s, indices)=>{
    let n = s.length;
    let shuffle = [];
    for(let i=0;i<n;i++){
        shuffle[indices[i]]=s[i];
    }
    let ans=shuffle.join('');
    return ans;
};