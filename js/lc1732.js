var largestAltitude = (gain)=>{
    let altitude = [];
    altitude.push(0);
    let sum = 0;
    let n = gain.length;
    for(let i=0;i<n;i++){
        sum+=gain[i];
        altitude.push(sum);
    }
    return Math.max(...altitude);
};