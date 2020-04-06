function jumpingOnClouds(c) {
    let count = -1;

    for (let i = 0; i < c.length; i++, count++) {
        console.log(i, 'i')
        console.log(count, 'COUNT')
        if (i < c.length - 2 && c[i + 2] == 0) i++ && console.log(i, 'NEW I');
    }

    return count;
}

// console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));

var numberOfSteps = function (num) {
    let steps = 0
    if (num % 2 != 0) {
        num -= 1;
        steps += 1
    }

    num = num / 2

    if (num != 0) {
        steps += 1;
        return numberOfSteps(num) + steps
    }

    return steps
};

console.log(numberOfSteps(14));