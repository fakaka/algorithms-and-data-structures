/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a, b) => b - a);
    console.log(people);
    let i = 0;
    let j = people.length - 1;
    let res = 0;
    while(i <= j) {
        let rest = limit - people[i++]
        if(rest > people[j]) {
            j--
        }
        res++
    }
    return res
};
// @lc code=end

