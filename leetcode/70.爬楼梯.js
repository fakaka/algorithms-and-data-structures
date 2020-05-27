/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {Number} n
 * @return {Number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n
    }
    let memo = {}
    memo[1] = 1
    memo[2] = 2

    for (let i = 3; i <= n; i++) {
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
}
// @lc code=end
