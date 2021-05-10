/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    var res1 = []
    var res2 = []
    getArray(root1, res1)
    console.log(res1)
    getArray(root2, res2)
    console.log(res2)
    if (res1.length != res2.length) {
        return false
    }
    for (let i = 0; i < res1.length; i++) {
        if (res1[i] != res2[i]) {
            return false
        }
    }
    return true
}

function getArray(treeNode, res) {
    if (treeNode == null) return []

    if (treeNode.left == null && treeNode.right == null) {
        res = res.push(treeNode.val)
    }
    getArray(treeNode.left, res)
    getArray(treeNode.right, res)
}
// @lc code=end
