// O(n)
const findFactorialRecursive = value => {
    return value === 2 ? 2 : value * findFactorialRecursive(value - 1)
}


// O(n)
const findFactorialIterative = value => {
    let total = 1;
    while (value > 0) {
        total *= value;
        value--
    }
    return total;
}

console.log(findFactorialRecursive(5))