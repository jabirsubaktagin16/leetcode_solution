def merge_sort(nums, low, high):
  if low>=(high-1):
    return 0
  mid = (low+high)//2
  cnt = merge_sort(nums, low, mid)+merge_sort(nums, mid, high)
  temp = []
  i, j = low, mid
  while i<mid and j<high:
    if nums[i] <= (nums[j] * 2):
      i += 1
    else:
      cnt +=  mid -i
      j += 1
  
  i, j = low, mid
  
  while i<mid and j<high:
    if nums[i] <= nums[j]:
      temp.append(nums[i])
      i += 1
    else:
      temp.append(nums[j])
      j += 1
    while i < mid:
      temp.append(nums[i])
      i += 1
    while j < high:
      temp.append(nums[j])
      j += 1
    for i in range(low, high):
      nums[i] = temp[i - low]
    return cnt
    
def reversePairs(nums):
  return merge_sort(nums, 0, len(nums))