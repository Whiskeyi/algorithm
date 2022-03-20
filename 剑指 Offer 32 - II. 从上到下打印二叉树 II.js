/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    // 如果是空树
    if (!root) return [];
    let queue = [root],
      res = [];
    while (queue.length) {
      let level = [];
      let size = queue.length;
      while (size--) {
        let cur = queue.shift();
        level.push(cur.val);
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
      }
      res.push(level);
    }
    return res;
  };