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
 var diameterOfBinaryTree = function(root) {
    let maxLen = 1;
    const dfs = function(treeNode) {
        if(!treeNode) return 0;
        let left = dfs(treeNode.left);
        let right = dfs(treeNode.right);
        maxLen = Math.max(maxLen, left + right + 1);
        return Math.max(left , right) + 1;
    }
    dfs(root);
    return maxLen - 1;
};