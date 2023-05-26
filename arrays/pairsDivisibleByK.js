/*
You are given an array of integers **`a`** and an integer **`k`**. Your task is to calculate the number of ways to pick two different indices **`i < j`**, such that **`a[i] + a[j]`** is divisible by **`k`**.

Example

- For **`a = [1, 2, 3, 4, 5]`** and **`k = 3`**, the output should be **`solution(a, k) = 4`**.
    
    There are **`4`** pairs of numbers that sum to a multiple of **`k = 3`**:
    
    - **`a[0] + a[1] = 1 + 2 = 3`**
    - **`a[0] + a[4] = 1 + 5 = 6`**
    - **`a[1] + a[3] = 2 + 4 = 6`**
    - **`a[3] + a[4] = 4 + 5 = 9`**
*/

function pairsDivisibleK(a, k) {
    const memo = {};
    let sum = 0;

    for(let i = 0; i < a.length; i++){
        const rem = a[i] % k;
        if(!(rem in memo)) memo[rem] = 1;
        const dif = k - rem;
        if(rem !== 0){
            if(dif in memo){ sum += memo[dif]; }
        } else {
            sum += memo[0];
            memo[rem]++;
        }
    }
return sum;
}
console.log(pairsDivisibleK([1, 2, 3, 4, 5], 3));