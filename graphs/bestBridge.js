const bestBridge = (grid) => {
    let mainIsland;
    for(let r = 0; r < grid.length; r++){
      for(let c = 0; c < grid[0].length; c++){
        const currIsland = exploreLand(r, c, grid, new Set());
        if(currIsland.size > 0) mainIsland = currIsland;
      }
    }
    //visited set
    const visited = new Set(mainIsland);
    const queue = [];
    for(const coor of mainIsland){
      const [row, col] = coor.split(',').map(Number);
      queue.push([row, col, 0]);
    }
    while(queue.length > 0){
      const [row, col, distance] = queue.shift();
      const pos = row + ',' + col;
      if(grid[row][col] === 'L' && !mainIsland.has(pos)) return distance - 1;
      
      const deltas = [[1,0], [-1,0], [0,1], [0,-1]];
      for(let delta of deltas){
        const [deltaRow, deltaCol] = delta;
        const neighborRow = row + deltaRow;
        const neighborCol = col + deltaCol;
        const neighborPos = neighborRow + ',' + neighborCol;
        if(inBounds(neighborRow, neighborCol, grid) && !visited.has(neighborPos)){
          visited.add(neighborPos);
          queue.push([neighborRow, neighborCol, distance + 1]);
        }
      }
    }
  };
  
  function inBounds (r, c, grid){
    const rInBounds = r >= 0 && r < grid.length;
    const cInBounds = c >= 0 && c < grid[0].length;
    return rInBounds && cInBounds;
  }
  
  function exploreLand (r, c, grid, visited){
    if(!inBounds(r, c, grid) || grid[r][c] === 'W') return visited;
    
    const pos = r + ',' + c;
    if(visited.has(pos)) return visited;
    
    visited.add(pos);
    
    exploreLand(r + 1, c, grid, visited)
    exploreLand(r - 1, c, grid, visited)
    exploreLand(r, c + 1, grid, visited)
    exploreLand(r, c - 1, grid, visited)
    
    return visited;
  }
  
  module.exports = {
    bestBridge,
  };
  
  const grid = [
    ["W", "W", "W", "L", "L"],
    ["L", "L", "W", "W", "L"],
    ["L", "L", "L", "W", "L"],
    ["W", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
  ];
  console.log(bestBridge(grid));
  
  //find Land
    //explore the land
  //explore out using deltas on every point of the main island
  //return the distance when we find land
  //use bfs

  //this algo basically is closestCarrot and numIslands;
  //Time:O(rc)
  //Space: O(rc)