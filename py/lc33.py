class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if nums is None or len(nums) == 0:
            return -1
        low = 0
        high = len(nums) - 1
        
        while(low + 1 < high):
            mid = low + ((high - low) // 2)
            if target == nums[mid]:
                return mid
            if nums[low] < nums[mid]:
                if nums[low] <= target and target <= nums[mid]:
                    high = mid
                else:
                    low = mid
            
            else:
                if nums[mid] <= target and target <= nums[high]:
                    low = mid
                else:
                    high = mid

        if nums[low] == target: 
            return low
        if nums[high] == target: 
            return high
        return -1