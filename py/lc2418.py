def sortPeople(names, heights):
  n = len(heights)
  
  for i in range(1, n):
    current_value = heights[i]
    current_name = names[i]
    
    j = i
    while j>0 and heights[j-1]<current_value:
      heights[j] = heights[j-1]
      names[j] = names[j-1]
      j -= 1
    
    heights[j] = current_value
    names[j] = current_name
  
  return names