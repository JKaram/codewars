def next_id(arr):
    if not arr:
        return 0

    arr.sort()
    if arr[0] != 0:
        return 0

    for i in range(len(arr) - 1):
        if arr[i] - arr[i + 1] < -1:
            return arr[i] + 1
    
    return arr[-1] + 1


y = [0,1,2,3,4,5,6,7,8,9,10] # 11 
x = [0,0,0,0,0,0] # 1

print(next_id(y))

# and sort[num] - 1 != -1