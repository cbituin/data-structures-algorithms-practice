//four operations
// one variable 'x'
// x = 0
// 

/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let sum = 0;
    if (!operations.length) {
          return sum;
    };

    operations.forEach((operation) => {
          if (operation === '++X' || operation === 'X++') {
               sum++;
          }
          if (operation === '--X' || operation === 'X--') {
               sum--;
          }
    });

    return sum;    
};