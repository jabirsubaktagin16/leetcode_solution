var flipAndInvertImage = (image)=>{
	let n = image.length;
    for(let i=0; i<n; i++){
        let arr = [];
        for(let j=n-1;j>=0;j--){
            arr.push((image[i][j] == 0)?1:0)
        }
        image[i] = arr;
    }
    return image;
};