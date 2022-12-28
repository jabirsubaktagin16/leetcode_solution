def lengthOfLongestSubstring(s):
  n = len(s)
  test = ""
  max_length = 0

  if n==0 or n==1:
    return n
  
  for c in s:
    if c in test:
      test = test[test.index(c)+1:]
    test = test + c
    if max_length < len(test):
      max_length = len(test)
  
  return max_length