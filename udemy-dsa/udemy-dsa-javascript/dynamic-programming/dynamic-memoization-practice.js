// Normal function
const addTo80 = (n) => {
    console.log('addTo80 ran')
    return n + 80;
};

console.log(addTo80(1));
console.log(addTo80(2));
console.log(addTo80(3));

// Function memoized
let cache = {}
const memoizedAddTo80 = (n) => {
    if (cache[n]) {
        return cache[n]
    } else {
        console.log('memoizedAddTo80 calculation ran')
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log(memoizedAddTo80(1));
console.log(memoizedAddTo80(2));
console.log(memoizedAddTo80(1));

//Memoized function optimized with JS closure
const memoizedAddTo80WithClosure = (n) => {
    let cache = {}
    return function(n) {
        if (cache[n]) {
            return cache[n]
        } else {
            console.log('memoizedAddTo80WithClosure calculation ran')
            cache[n] = n + 80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80WithClosure()

console.log(memoized(1));
console.log(memoized(2));
console.log(memoized(1));