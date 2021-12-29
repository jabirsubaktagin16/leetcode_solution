var kidsWithCandies = (candies, extraCandies)=>{
    let maximum = candies.reduce((a, b)=> Math.max(a, b));
    let ans = [];
    let n = candies.length;
    for(let i=0;i<n;i++){
        ans.push((maximum<=(candies[i]+extraCandies))?true:false);
    }
    return ans;
};