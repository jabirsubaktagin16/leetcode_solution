class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        if len(digits)==0:
            return 1;
        carry = 1
        n = len(digits)
        for i in range(n-1, -1, -1):
            carry = int(carry+digits[i])
            digits[i] = int(carry % 10)
            carry = int(carry/10)
        if carry>0:
            digits.insert(0, carry)
        return digits