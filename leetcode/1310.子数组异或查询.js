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
    // var res = []
    // for (let i = 0; i < queries.length; i++) {
    //     res[i] = 1 ^ 1
    //     const element = queries[i]
    //     for (let j = element[0]; j <= element[1]; j++) {
    //         res[i] ^= arr[j]
    //     }
    // }
    // console.log(res)
    // return res

    var res = []
    var prefixSum = []
    prefixSum[0] = 1
    prefixSum[1] = arr[1]
    for (let i = 2; i <= arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] ^ arr[i]
    }
    console.log(prefixSum)

    for (let i = 0; i < arr.length; i++) {
        let l = queries[i][0]
        let r = queries[i][1] + 1
        res[i] = prefixSum[l] ^ prefixSum[r]
    }
    return res
}
// @lc code=end
