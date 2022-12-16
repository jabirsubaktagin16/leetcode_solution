class Solution:
    def sortColors(self, nums: List[int]) -> None:
        n = len(nums)
        if n>1:
            mid = n//2
            L = nums[:mid]
            R = nums[mid:]
            self.sortColors(L)
            self.sortColors(R)
            i=j=k=0
        
            while i<len(L) and j<len(R):
                if L[i]<=R[j]:
                    nums[k] = L[i]
                    i += 1
                else:
                    nums[k] = R[j]
                    j +=1
                k +=1
        
            while i<len(L):
                nums[k] = L[i]
                i += 1
                k += 1
            
            while j<len(R):
                nums[k] = R[j]
                j += 1
                k += 1