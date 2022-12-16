var countGoodTriplets = (arr, a, b, c)=>{
    let n = arr.length;
    let cnt = 0;
    for(let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
            for(let k=j+1;k<n;k++){
                cnt = (Math.abs(arr[i]-arr[j])<=a && Math.abs(arr[j]-arr[k])<=b && Math.abs(arr[i]-arr[k])<=c)?cnt+1:cnt+0;
            }
        }
    }
    return cnt;
};