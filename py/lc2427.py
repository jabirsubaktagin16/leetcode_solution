def commonFactors(a, b):
        cnt = 0
        if a>b:
            a, b = b, a
        for i in range(1, a+1):
            if a%i==0 and b%i==0:
                cnt += 1
        return cnt