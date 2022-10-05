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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let paths = [];
  function backTracking(root, path) {
    if (root) {
      path += root.val.toString();
      if (!root.left && !root.right) {
        paths.push(path);
      } else {
        path += `->`
        backTracking(root.left, path);
        backTracking(root.right, path);
      }
    }
  }
  backTracking(root, "");
  return paths;
};