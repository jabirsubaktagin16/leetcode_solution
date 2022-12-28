class Solution:
    def sortArray(self, arr:List[int]) -> List[int]:
        n = len(arr)
        
        if n>1:
            mid = n//2
            L =arr[:mid]
            R = arr[mid:]
            
            self.sortArray(L)
            self.sortArray(R)
            
            i=j=k=0
            
            while i<len(L) and j<len(R):
                if L[i]<=R[j]:
                    arr[k] = L[i]
                    i += 1
                else:
                    arr[k] = R[j]
                    j +=1
                k +=1
    
            while i<len(L):
                arr[k] = L[i]
                i += 1
                k += 1
            
            while j<len(R):
                arr[k] = R[j]
                j += 1
                k += 1
        
        return arr
    
    def minMovesToSeat(self, seats: List[int], students: List[int]) -> int:
        self.sortArray(seats)
        self.sortArray(students)
        
        n = len(students)
        sum = 0

        for i in range(n):
            sum += abs(students[i]-seats[i])
        
        return sum