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
 // 左右根
var postorderTraversal = function(root) {
    const rz = [];
    const lastOrder = function (treeNode) {
        if(treeNode) {
            lastOrder(treeNode.left);
            lastOrder(treeNode.right);
            rz.push(treeNode.val);
        }else return treeNode;
    }
    lastOrder(root);
    return rz;
};