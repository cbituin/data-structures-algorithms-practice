/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
    if (s.length < 2) {
        return s.length;
    }
    
    let subStringTracker = {};
    let left = 0;
    let right = 0;
    let length = 0;

    while (right < s.length) {
        let rightChar = s[right];
        
        if (!subStringTracker[rightChar]){
            subStringTracker[rightChar] = right;
        }
        
        let index = subStringTracker[rightChar];
        
        if (!!index && index >= left && index < right) {
            left = index + 1;
        };
        
        let window = right - left;
        subStringTracker['length'] = length > window ? length : window;
        
        subStringTracker[rightChar] = right;
        right++;
        console.log(subStringTracker)

    }
    
    return subStringTracker['length'];
};

lengthOfLongestSubstring("pwwkew")