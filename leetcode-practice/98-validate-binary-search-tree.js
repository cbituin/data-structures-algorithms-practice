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
 * @return {boolean}
 */
 const isValidBST = root => {
   
    function validateTree(node=root, low, high) {
        if (!node) {
            return true;
        }

        if (node.val <= low || node.val >= high) {
            return false;
        }

        return validateTree(node.right, node.val, high) && validateTree(node.left, low, node.val)
    };

    return validateTree(root);
};