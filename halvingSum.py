def halving_sum(n): 
    if n == 1:
        return 1
    else:
        return n + halving_sum(n//2)

print(halving_sum(25)) #47
print(halving_sum(127)) #247