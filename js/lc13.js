var romanToInt = (s)=>{
    if(s==null) return -1;
    let n = s.length;
    let x = char_int(s.charAt(0));
    let y, z;
    for(let i=1;i<n;i++){
        z = char_int(s.charAt(i));
        y = char_int(s.charAt(i-1));
        x = (z<=y)?x+z:(x-y*2)+z;
    }
    return x;
};

var char_int = (c)=>{
    switch (c) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
          return 10;
        case "L":
          return 50;
        case "C":
          return 100;
        case "D":
          return 500;
        case "M":
          return 1000;
        default:
          return -1;
      }
};