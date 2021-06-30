def knapsack(weights, values, capacity):
    table = [[0 for x in range(capacity + 1)] for x in range(len(values) + 1)]
    for i in range(len(values)+1):
        for j in range(capacity+1):
            if i==0 or j ==0 :
                table[i][j] = 0
                
            elif j >= weights[i-1]:
                #I do i-1 becauese I start with extra element 0 in table that isn't in the weight array
                table[i][j] = max(
                        table[i-1][j],
                        values[i-1] + table[i-1][j-weights[i-1]]
                    )
            else: 
                table[i][j] = table[i-1][j]
    print(table)
    return table[len(values)][capacity]
print(knapsack([1,2,3], [60, 100, 120], 5))



