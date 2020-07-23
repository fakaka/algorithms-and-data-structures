/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let dp = []
    dp[0] = []
    dp[0][0] = grid[0][0]
    for (let i = 1; i < grid[0].length; i++) {
        const element = grid[0][i]
        dp[0][i] = element + dp[0][i - 1]
    }
    for (let m = 1; m < grid.length; m++) {
        dp[m] = []
        dp[m][0] = grid[m][0] + dp[m - 1][0]
        for (let n = 1; n < grid[m].length; n++) {
            dp[m][n] = grid[m][n] + Math.min(dp[m - 1][n], dp[m][n - 1])
            console.log(dp[m][n])
        }
    }
    return dp[grid.length - 1][grid[0].length - 1]
}

// @lc code=end
