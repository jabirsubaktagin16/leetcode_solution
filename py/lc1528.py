def restoreString(s, indices):
    n = len(s)
    shuffle = [None]*len(s)
    for i in range(n):
        shuffle[indices[i]] = s[i]
    ans = ''.join(shuffle)
    return ans

str = "aiohn"
indices = [3,1,4,2,0]
print(restoreString(str, indices))
