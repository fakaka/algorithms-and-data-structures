/*
 * @lc app=leetcode.cn id=70 lang=java
 *
 * [70] 爬楼梯
 */

// @lc code=start
class Solution {
    public int climbStairs(int n) {
        if (n <= 2) {
            return n;
        }
        int prev = 1, curr = 2, prevprev;

        for (int i = 3; i <= n; i++) {
            prevprev = prev;
            prev = curr;
            curr = prev + prevprev;
        }
        return curr;
    }
}
// @lc code=end

