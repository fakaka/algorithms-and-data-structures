/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    if (triangle.length == 0) {
        return triangle[0][0]
    }
    let dp = [[]]
    dp[triangle.length - 1] = triangle[triangle.length - 1]

    for (let i = triangle.length - 2; i > -1; i--) {
        dp[i] = []
        const line = triangle[i]
        for (let j = 0; j <= i; j++) {
            dp[i][j] = triangle[i][j] + Math.min(dp[i + 1][j], dp[i + 1][j + 1])
        }
    }
    // console.log(dp)
    return dp[0][0]
}
// @lc code=end
