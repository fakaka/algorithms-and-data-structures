/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let res = []
    let max = candies[0]
    for (let i = 1; i < candies.length; i++) {
        max = Math.max(max, candies[i])
    }
    for (let i = 0; i < candies.length; i++) {
        res.push(extraCandies + candies[i] >= max)
    }
    return res
}
// @lc code=end
