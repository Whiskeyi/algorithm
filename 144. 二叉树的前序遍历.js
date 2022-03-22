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
 // 根左右
 var preorderTraversal = function(root) {
    const rz = [];
    const preOrder = function(treeNode) {
        if(treeNode) {
            rz.push(treeNode.val);
            preOrder(treeNode.left);
            preOrder(treeNode.right);
        }else return treeNode;
    }
    preOrder(root);
    return rz;
};