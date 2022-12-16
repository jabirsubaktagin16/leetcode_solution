def createTargetArray(nums, index):
    n = len(nums)
    target = []
    for i in range(n):
        target.insert(index[i], nums[i])
    return target

nums = [0,1,2,3,4]
index = [0,1,2,2,1]
print(createTargetArray(nums, index))
