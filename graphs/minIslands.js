const minimumIsland = (grid) => {
  const visited = new Set();
  let minSize;
  for(let r = 0; r < grid.length; r++){
    for(let c = 0; c < grid[0].length; c++){
      const currSize = findSize(grid, r, c, visited);
      if (currSize === 0) continue;
      if(minSize === undefined) minSize = currSize;
      else minSize = Math.min(currSize, minSize);
    }
  }
  return minSize;
};
function findSize(grid, r, c, visited){
  const rInBound = r >= 0 && r < grid.length;
  const cInBound = c >= 0 && c < grid[0].length;
  if(!rInBound || !cInBound) return 0;
  if(grid[r][c] === 'W') return 0;
  
  const pos =  r + ',' + c;
  if(visited.has(pos)) return 0;
  visited.add(pos);
  
  let size = 1;
  size += findSize(grid, r-1, c, visited);
  size += findSize(grid, r+1, c, visited);
  size += findSize(grid, r, c-1, visited);
  size += findSize(grid, r, c+1, visited);
  return size;
}

const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

console.log(minimumIsland(grid));