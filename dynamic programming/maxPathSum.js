/*
Write a function, maxPathSum, that takes in a grid as an argument. 
The function should return the maximum sum possible by traveling a path from the top-left corner to the bottom-right corner. 
You may only travel through the grid by moving down or right.

You can assume that all numbers are non-negative.

const grid = [
  [1, 3, 12],
  [5, 1, 1],
  [3, 6, 1],
];
maxPathSum(grid); // -> 18

const grid = [
  [1, 2, 8, 1],
  [3, 1, 12, 10],
  [4, 0, 6, 3],
];
maxPathSum(grid); // -> 36
*/

const maxPathSum = (grid, r = 0, c = 0, memo = {}) => {
    const pos = r + ',' + c;
    if(pos in memo) return memo[pos];
    //when out of bounds return -Infinity because we are going to return max value
    if(r >= grid.length || c >= grid[0].length) return -Infinity;
    //when we reach the end of the grid return value and that way we work way up to the beginning
    if(r === grid.length - 1 && c === grid[0].length - 1) return grid[r][c];

    const sumDown = maxPathSum(grid, r, c + 1, memo);
    const sumRight = maxPathSum(grid, r + 1, c, memo);
    
    //return the current position value and the highest value of the sums
    memo[pos] = grid[r][c] + Math.max(sumDown, sumRight);
    return memo[pos];
  };
  
  module.exports = {
    maxPathSum,
  };