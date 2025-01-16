function challenge5(string) {
    if (string.trim() === '') return 0; 
    let spaceCount = 0;
    for (let char of string) {
        if (char === ' ') {
            spaceCount++;
        }
    }

    return spaceCount + 1;
}
console.log(challenge5("hello world"));           
console.log(challenge5("this is the best day"));  
console.log(challenge5("a bb ccc ddddddd e"));    