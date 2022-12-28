def factorial(num):
  if num==0:
    return 1
  return num*factorial(num-1)
    
def uniquePaths(m, n):
  return factorial(m+n-2)//(factorial(m-1)*factorial(n-1))