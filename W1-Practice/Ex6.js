function challenge6(votes) {
    let parties = ['A', 'B', 'C'];
    let scoring = [0, 0, 0]; 
    for (let vote of votes) {
        if (vote === 'A') scoring[0]++;
        else if (vote === 'B') scoring[1]++;
        else if (vote === 'C') scoring[2]++;
    }

    let winnerScore = Math.max(...scoring);
    let winners = [];
    for (let i = 0; i < scoring.length; i++) {
        if (scoring[i] === winnerScore && winnerScore > 0) {
            winners.push(parties[i]);
        }
    }
    if (winners.length === 0) {
        return "There is no vote yet";
    } else if (winners.length === 1) {
        return `${winners[0]} is the winner`;
    } else {
        return winners.join(" and ") + " are both winners";
    }
}
console.log(challenge6(['A', 'B', 'A', 'C', 'A'])); 
console.log(challenge6(['A', 'B', 'B', 'C', 'A'])); 
console.log(challenge6([])); 
