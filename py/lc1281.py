def subtractProductAndSum(n):
    sum = 0
    product = 1
    while n:
        digit = n%10
        sum += digit
        product *= digit
        n = n//10
    return (product-sum)

n = 234
print(subtractProductAndSum(n))
