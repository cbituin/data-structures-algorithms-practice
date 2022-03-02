# Create a function that reverse a string
# expect 'Hi My name is Andrei' to be 'ierdnA si eman yM iH'

def reverse(str):
    solution = []
    
    if str:
        for idx in range(len(str)):
            solution.append(str[-1 - idx])
    
    solution = ''.join(solution)
    print(solution)
    return solution
    
        
    
reverse('abc d')