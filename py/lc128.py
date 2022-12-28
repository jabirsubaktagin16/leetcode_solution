def mergeSort(arr):
  n = len(arr)

  if n>1:
    mid = n//2
    L =arr[:mid]

    R = arr[mid:]

    mergeSort(L)

    mergeSort(R)

    i=j=k=0

    # Copy data to temp arrays L[] and R[]
    while i<len(L) and j<len(R):
      if L[i]<=R[j]:
        arr[k] = L[i]
        i += 1
      else:
        arr[k] = R[j]
        j +=1
      k +=1
    
    # Checking if any element was left
    while i<len(L):
      arr[k] = L[i]
      i += 1
      k += 1
    
    while j<len(R):
      arr[k] = R[j]
      j += 1
      k += 1

def longestConsecutive(nums):
  if not nums:
    return 0
  mergeSort(nums)
  
  longest_streak = 1
  current_streak = 1
  
  for i in range(1, len(nums)):
    if nums[i] != nums[i-1]:
      if nums[i] == nums[i-1]+1:
        current_streak += 1
      else:
        if current_streak>longest_streak:
          longest_streak = current_streak
        current_streak = 1

  return max(longest_streak, current_streak)