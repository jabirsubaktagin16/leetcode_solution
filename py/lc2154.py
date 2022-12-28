def findFinalValue(nums, original):
  n = len(nums)
  
  for i in range(1, n):
    current_value = nums[i]
    j = i
    
    while j>0 and nums[j-1]>current_value:
      nums[j] = nums[j-1]
      j -= 1
    
    nums[j] = current_value
        
    for k in range(n):
      if nums[k]==original:
        original *=2
        
  return original