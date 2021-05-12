/*
 * @lc app=leetcode.cn id=1310 lang=javascript
 *
 * [1310] 子数组异或查询
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
    var prefixSum = []
    var res = []
    for (let i = 0; i < queries.length; i++) {
        res[i] = 1 ^ 1
        const element = queries[i]
        for (let j = element[0]; j <= element[1]; j++) {
            res[i] ^= arr[j]
        }
    }
    console.log(res)
    return res
    // prefixSum[0] = 1
    // for (let i = 0; i < res.length; i++) {
    //     const ele = res[i]
    //     prefixSum[i] = res[i] ^ prefixSum[i]
    // }
}
// @lc code=end
