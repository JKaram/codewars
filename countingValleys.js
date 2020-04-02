function countingValleys(n, s) {
    let elevation = output = 0;
    for (let action of s) {
        if(action === 'D' && elevation === 0){
            elevation -= 1;
            output += 1;
        } else if(action === 'D') {
            elevation -= 1;
        } else {
            elevation += 1;
        }
    }
    return output
}

console.log(countingValleys(12, ['D', 'D', 'U', 'U', 'D', 'D', 'U', 'D', 'U', 'U', 'U', 'D'])) //2