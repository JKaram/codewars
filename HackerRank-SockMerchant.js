function sockMerchant(n, ar) {
    let pairs = {}
    let output = 0;


    for (let color of ar) {
        pairs[color] >= 0 ? pairs[color] += 1 : pairs[color] = 1
    }
    const values = Object.keys(pairs)
    
    for (let i = 0; i < values.length; i++) {
        output += Math.floor(pairs[values[i]] / 2)
    }

    return output
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))