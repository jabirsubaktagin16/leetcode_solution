var isValid = (s)=>{
    const stack = [];
    let n = s.length;
    for(let i=0;i<n;i++){
        let current = s[i];
        switch(current){
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            case "{":
                stack.push("}");
                break;
            default:
                topElement = stack.pop();
                if(current!==topElement) return false;
        }
    }
    return stack.length===0;
};