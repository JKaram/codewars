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