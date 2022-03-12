/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (!nums) {
        return 0;
    };

    let length = nums.length

    let robNextPlusOne = 0;

    let robNext = nums[length - 1];

    for (let i = length-2; i >= 0; i--){
        current = Math.max(robNext, robNextPlusOne + nums[i]);

        robNextPlusOne = robNext;
        robNext = current;
    }

    return robNext;
    
};
