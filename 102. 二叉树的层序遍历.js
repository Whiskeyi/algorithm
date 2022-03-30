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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(!root) return [];
    let rz = [];
    let queue = [];
    queue.push(root);
    while(queue.length) {
        const node = queue.shift();
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
        rz.push(node.val);
    }
    return rz;
};

// 二维数组
var levelOrder = function (root) {
    if(!root) return [];
    const queue = [];
    const res = [];
    queue.push(root);
    while (queue.length) {
        // 使用arr添加这一层的元素
        const arr = [];
        // 记录当前节点数量
        const n = queue.length;
        for(let i = 0; i < n; i++){
            const node = queue.shift();
            arr.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(arr);
    }
    return res;
};