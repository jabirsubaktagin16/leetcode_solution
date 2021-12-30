var interpret = (command)=>{
    return command.replace(/\(\)/g, "o").replace(/\(al\)/g, "al");
};