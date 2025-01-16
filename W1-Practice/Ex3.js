function challenge3(array) {
    if (array.length === 0) return 0; 
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum / array.length;
}

console.log(challenge3([85, 90, 78, 92])); 
console.log(challenge3([10, 20, 30])); 
console.log(challenge3([])); 
