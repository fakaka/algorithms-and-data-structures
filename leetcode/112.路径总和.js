/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root) {
        return false
    }
    if (root.val == sum && !root.left && !root.right) {
        return true
    }
    if (hasPathSum(root.left, sum - root.val)) {
        return true
    }
    if (hasPathSum(root.right, sum - root.val)) {
        return true
    }
    return false
}
// @lc code=end
