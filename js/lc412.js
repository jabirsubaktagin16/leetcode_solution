var fizzBuzz = (n)=>{
    let ans = [];
    for(let i=1;i<=n;i++) ans.push((i%3===0 && i%5===0)?"FizzBuzz":(i%3===0)?"Fizz":(i%5===0)?"Buzz":i.toString());
    return ans;
};