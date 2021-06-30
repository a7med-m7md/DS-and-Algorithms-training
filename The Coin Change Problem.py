def getWays(n, c): 
    table = [[ 0 for x in range(n+1) ] for x in range(len(c)+1)]
    for i in range(len(c)+1):
        for j in range(n+1):
            if i==0 or j==0:
                table[i][j] = 0
            elif c[i-1] == j:
                table[i][j] = table[i-1][j] + 1
            elif j>c[i-1]:
                table[i][j] = table[i-1][j] + table[i][j-c[i-1]]
            else:
                table[i][j] = table[i-1][j]
    print(table)
    return table[len(table)-1][len(table[0])-1] 
    
print(getWays(10, [2, 5, 3, 6]))
