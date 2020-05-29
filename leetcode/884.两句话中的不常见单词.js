/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    let res = []
    let map = {}
    let arr = A.split(' ').concat(B.split(' '))

    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] > 0) {
            map[arr[i]] += 1
        } else {
            map[arr[i]] = 1
        }
    }
    for (const key in map) {
        if (map[key] == 1) {
            res.push(key)
        }
    }

    return res
}
// @lc code=end
