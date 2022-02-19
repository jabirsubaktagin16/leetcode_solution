var isAnagram = (s, t)=>{
    let slen = s.length;
    let tlen = t.length;
    
    if(slen!==tlen) return false;
    
    let s_split_sort = s.split('').sort().join('');
    let t_split_sort = t.split('').sort().join('');
    
    return s_split_sort===t_split_sort;
};