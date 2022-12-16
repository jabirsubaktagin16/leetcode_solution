class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
        n = len(operations)
        res = 0
        for i in range(n):
            if operations[i]=='++X' or operations[i]=='X++':
                res = res+1
            elif operations[i]=='--X' or operations[i]=='X--':
                res = res-1
        return res
