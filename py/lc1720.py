def decode(encoded, first):
    ans = [first]
    for i in encoded:
        ans.append(ans[-1]^i)
    return ans

encoded = [1, 2, 3]
first = 1
print(decode(encoded, first))
