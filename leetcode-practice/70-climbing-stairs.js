/**
 * @param {number} n
 * @return {number}
 */
 const memoized = () => {
    let cache = [0, 1, 2];
    
    return function memo(n) {
        if (n <= 2) {
            cache[n] = n;
        } else {
            for (let i=3; i <= n; i++) {
                cache[i] = cache[i-1] + cache[i-2]
            }
        }
        return cache[n];
    }
};

const climbStairs = memoized()