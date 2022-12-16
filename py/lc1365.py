def smallerNumbersThanCurrent(nums):
    n = len(nums)
    ans = []
    for i in range(n):
        cnt = 0
        for j in range(n):
            if nums[j]<nums[i]:
                cnt = cnt + 1
        ans.append(cnt)
    return ans

nums = [8,1,2,2,3]
print(smallerNumbersThanCurrent(nums))
