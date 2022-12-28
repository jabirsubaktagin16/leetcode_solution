def searchMatrix(matrix, target):
  low = 0
  row, cols = len(matrix), len(matrix[0])
  high = (row*cols)-1

  while low<=high:
    mid = (low+high)//2
    guess = matrix[mid // cols][mid % cols]

    if guess == target:
      return True
    elif guess<target:
      low = mid+1
    else:
      high = mid-1
  
  return False