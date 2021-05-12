/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length < 2) {
        return nums.length
    }
    var dp = []
    dp[0] = 1
    let ans = 1
    for (let i = 1; i < nums.length; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        ans = Math.max(ans, dp[i]);
    }
    return ans
}
// @lc code=end
