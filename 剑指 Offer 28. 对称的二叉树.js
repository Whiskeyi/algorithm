/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归
 var isSymmetric = function(root) {
    if(!root) return true;
    const check = (n1, n2) => {
        if(!n1 && !n2) return true;
        if(!(n1 && n2)) return false;
        return (n1.val === n2.val && check(n1.left, n2.right) && check(n1.right, n2.left));
    }
    return check(root.left, root.right);
};

var isSymmetric = function(root) {
    if (!root) return true;
    const queue = [root.left, root.right];
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i += 2) {
            const left = queue.shift();
            const right = queue.shift();
            if ((left && !right) || (!left && right)) return false;
            if (left && right) {
                if (left.val !== right.val) return false;
                queue.push(left.left, right.right, left.right, right.left);
            }
        }
    }
    return true;
};