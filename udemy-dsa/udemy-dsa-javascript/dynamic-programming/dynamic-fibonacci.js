let unoptimizedCalculation = 0;
let optimizedCalculation = 0;

// Recursive solution TIME COMPLEXITY @ O(2^n)
const fibonacciRecursive = n => {
    unoptimizedCalculation++
    return n < 2 ? n : fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
} 

// Memoized solution TIME COMPLEXITY @ O(n)
// Increased SPACE COMPLEXITY to significantly reduce TIME COMPLEXITY
const memoizedFib = () => {
    let cache = {};
    return function fib(n) {
        optimizedCalculation++;
        if (cache[n]) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fib(n-1) + fib(n-2);
                return cache[n];
            }
        }
    }
}

const fasterFib = memoizedFib()

console.log('dp', fibonacciRecursive(35));
console.log('# of calculation for recursive solution:', unoptimizedCalculation)

console.log('dp', fasterFib(35));
console.log('# of calculation for memoized solution:', optimizedCalculation)