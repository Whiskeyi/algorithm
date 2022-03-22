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
 * @return {number[]}
 */
 // 左根右
 var inorderTraversal = function(root) {
    let rz = [];
    const midOrder = function(treeNode) {
        if(!treeNode) return treeNode;
        else {
            midOrder(treeNode.left);
            rz.push(treeNode.val);
            midOrder(treeNode.right)
        }
    }
    midOrder(root);
    return rz;
};