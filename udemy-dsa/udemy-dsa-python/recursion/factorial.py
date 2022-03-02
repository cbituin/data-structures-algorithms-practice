def find_factorial_recursive(num):
    print('Recursive output:')

    fact = 1
    if num != 0:
        fact = num * find_factorial_recursive(num - 1)
    
    print(fact)
    return fact
    
# find_factorial_recursive(20)

def find_factorial_iterative(num):
    print('Iterative output:')
    
    # fact = num
    # for count in range(num):
    #     if count > 2:
    #         fact *= (num-count) 
    #     else :
    #         return fact
    
    # print(fact)
    # return fact
    
    # Python Solution based on JS Video Solution
    fact = 1
    if num == 2:
        fact = 2
    
    for i in range(1, num+1):
        fact = fact * i
    
    print(fact)
    return fact
    
    
find_factorial_iterative(20)