/*
 * @lc app=leetcode.cn id=20 lang=java
 *
 * [20] 有效的括号
 */

// @lc code=start
class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
		if (s.length() % 2 != 0)
		{
			return false;
		}
		for (int i = 0; i < s.length(); i++)
		{
			if ('(' == s.charAt(i) || '[' == s.charAt(i) || '{' == s.charAt(i))
			{
				stack.push(s.charAt(i));
			}
			else if (')' == s.charAt(i))
			{
				if (!stack.isEmpty() && stack.peek() == '(')
				{
					stack.pop();
				}
				else
				{
					return false;
				}
			}
			else if (']' == s.charAt(i))
			{
				if (!stack.isEmpty() && stack.peek() == '[')
				{
					stack.pop();
				}
				else
				{
					return false;
				}
			}
			else if ('}' == s.charAt(i))
			{
				if (!stack.isEmpty() && stack.peek() == '{')
				{
					stack.pop();
				}
				else
				{
					return false;
				}
			}
		}
		return stack.isEmpty();
    }
}
// @lc code=end

