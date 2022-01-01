var busyStudent = (startTime, endTime, queryTime)=>{
    let cnt = 0;
    let n = startTime.length;
    for(let i=0;i<n;i++){
        cnt +=(startTime[i]<=queryTime && endTime[i]>=queryTime)?1:0;
    }
    return cnt;
};