def decompressRLElist(nums):
    n = len(nums)
    ans = []
    for i in range(0, n-1, 2):
        ans+= [nums[i+1]] * nums[i]
    return ans

nums = [1,2,3,4]
print(decompressRLElist(nums))
