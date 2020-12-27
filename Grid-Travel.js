//Dynamic Programming -- Memoization
// O(m*n) -->> Time Complexity
// O(m+n) -->> Space Complexity
const grid = (n, m, memo={})=>{
    const key = n + ','+ m;

    if(key in memo) return memo[key];
    if(n==1 && m==1) return 1;
    if(n==0 || m==0) return 0;

    memo[key] = grid(n-1, m, memo) + grid(n, m-1, memo);
    return memo[key];
}

console.log(grid(18,18));

/* brute Force Solution
// O(2^(n+m)) -->> Time Complexity
// O(n+m) -->> Space Complexity
const grid = (n, m)=>{
    if(n==1 && m==1) return 1;
    if(n==0 || m==0) return 0;

    return grid(n-1, m) + grid(n, m-1);
}

console.log(grid(2,2));
*/