import sys

def maxProfit(prices):
  n = len(prices)
  mn = sys.maxsize
  ans = 0

  for i in range(n):
    if prices[i]<mn:
      mn = prices[i]
    if (prices[i]-mn)>ans:
      ans = prices[i]-mn
  
  return ans