/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    if (n < 1) return 0
    if (n <= 3) {
        return n - 1
    }
    let res = 1

    while (n > 4) {
        n -= 3
        res *= 3
    }
    return res * n
}
// @lc code=end
