/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


const getMinimumDifference = root => {
    if (!root) {
        return 0;
    };

    let treeList = [];

    const traverse = root => {
        if (root) {
            traverse(root.left);
            treeList.push(root.val);
            traverse(root.right);
        } else {
            return;
        }
    }
    
    traverse(root);
    let minDiff = Infinity;
    for (let i = 1; i < treeList.length; i++) {
        
        let calcDiff = Math.abs(treeList[i] - treeList[i-1]);
        minDiff = calcDiff < minDiff ? calcDiff : minDiff;
    }
    
    return minDiff;
};