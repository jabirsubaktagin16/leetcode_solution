var minTimeToVisitAllPoints = (points)=>{
    let sum = 0;
    let n = points.length;
    for(let i=0; i<n-1; i++){
        let x = Math.abs(points[i+1][0]-points[i][0]);
        let y = Math.abs(points[i+1][1]-points[i][1]);
        sum+= Math.max(x, y);
    }
    return sum;
};