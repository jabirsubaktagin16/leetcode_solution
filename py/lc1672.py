class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        ans =0 
        current = 0
        for i in accounts:
            for j in i:
                current+=j
            ans = max(ans, current)
            current = 0
        return ans
