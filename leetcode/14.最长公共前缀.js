/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return ''
    }
    let res = ''
    for (let j = 0; j < strs[0].length; j++) {
        const element = strs[0][j]

        for (let i = 1; i < strs.length; i++) {
            if (element != strs[i][j]) {
                return res
            }
        }
        res += element
    }
    return res
}
// @lc code=end
