const closestCarrot = (grid, startRow, startCol) => {
    const queue = [ [startRow, startCol, 0] ];
    const visited = new Set ();
    visited.add(startRow + ',' + startCol);
    while(queue.length > 0){
      const [row, col, distance] = queue.shift();
      if(grid[row][col] === 'C') return distance;
      const coordinates = [[1,0],[-1,0],[0,1],[0,-1]];
      coordinates.forEach(coordinate => {
        const [r, c] = coordinate;
        const neighborRow = row + r;
        const neighborCol = col + c;
        const rInBounds = neighborRow >= 0 && neighborRow < grid.length;
        const cInBounds = neighborCol >= 0 && neighborCol < grid[0].length;
        const pos = neighborRow + ',' + neighborCol;
        if(rInBounds && cInBounds && grid[neighborRow][neighborCol] !== 'X' && !visited.has(pos)){
          queue.push([neighborRow, neighborCol, distance+1]);
          visited.add(pos);
        }
      });
    }
    return -1;
  }
  
  const grid = [
    ['O', 'O', 'O', 'O', 'O'],
    ['O', 'X', 'O', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['O', 'X', 'C', 'O', 'O'],
    ['O', 'X', 'X', 'O', 'O'],
    ['C', 'O', 'O', 'O', 'O'],
  ];
  
  console.log(closestCarrot(grid, 1, 2));
  
  module.exports = {
    closestCarrot,
  };
  
    //bfs starting with the give coordinates
      //starting coordinates has a distance of 0
      //while traversing the graph we add a distance of 1 for every node
      //when we encounter the carrot then thats the shortest distance
    //notes:
      //keep in track the out of bounds
      //skip if X encounter
      //keep track of visited nodes