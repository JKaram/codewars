

let arr = [7, 11, 5, 15, [-2, 2, 1], [5, -6]]

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.filter(value => value + a >= s && value + a <= t).length)
    console.log(oranges.filter(value => value + b >= s && value + b <= t).length)
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])