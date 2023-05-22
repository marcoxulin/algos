/*
Write a function, countPaths, that takes in a grid as an argument. 
In the grid, 'X' represents walls and 'O' represents open spaces. 
You may only move down or to the right and cannot pass through walls. 
The function should return the number of ways possible to travel from 
the top-left corner of the grid to the bottom-right corner.

const grid = [
  ["O", "O"],
  ["O", "O"],
];
countPaths(grid); // -> 2

const grid = [
  ["O", "O", "X"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
countPaths(grid); // -> 5

*/

const countPaths = (grid, r=0, c=0, cache = {}) => {
    const pos = r + ',' + c;
    if(pos in cache) return cache[pos];
    //out of bounds or wall
    if(r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;
    //when reaching the endpoint
    if(r === grid.length-1 && c === grid[0].length-1) return 1;
    
    const countDown = countPaths(grid, r+1, c, cache);
    const countRight = countPaths(grid, r, c+1, cache);
    
    cache[pos] = countRight + countDown;
    return cache[pos];
  };
  
  module.exports = {
    countPaths,
  };
  
  //base case: when we reach the end then return 1;
  //base case: when out of bounds then return 0;
  //travel down and right
  //as we return to the previous callstacks add the paths;
  