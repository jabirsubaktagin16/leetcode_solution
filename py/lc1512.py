def numIdenticalPairs(nums):
    n = len(nums)
    cnt = 0
    for i in range(n-1):
        for j in range(i+1, n):
            if nums[i]== nums[j]:
                cnt = cnt+1
    return cnt

nums = [1,2,3,1,1,3]
print(numIdenticalPairs(nums))
