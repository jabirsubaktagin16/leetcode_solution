class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maximum = max(candies)
        res = []
        for i in range(len(candies)):
            if maximum<=(candies[i]+extraCandies):
                res.append(True)
            else:
                res.append(False)
        return res
        