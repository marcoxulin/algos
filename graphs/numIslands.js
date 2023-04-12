const islandCount = (grid) => {
    //keeps track of the num of islands
    let islands = 0;
    //keeps track of the visited islands
    const visited = new Set();
    //iterate the whole grid;
    for(let y = 0; y < grid.length; y++){
      for(let x = 0; x < grid[y].length; x++){
        //explore will find land and add it to the visited set
        //if land is found then increment islands
        if(explore(grid, y, x, visited) === true) islands++;
      }
    }
    return islands;
  };
  
  function explore (grid, y, x, visited){
    //check if is inbounds in y 
    const yInBounds = 0 <= y && y < grid.length;
    //check if is inbounds in x 
    const xInBounds = 0 <= x && x < grid.length;
    //base case
    if(!yInBounds || !xInBounds) return false;
    //if position is W then move on
    if(grid[y][x] === 'W') return false;
    //if L then add to visited or move on
    const position = y + ',' + x;
    if(visited.has(position)) return false;
    visited.add(position);
    //explore up
    explore(grid, y - 1, x, visited);
    //explore down
    explore(grid, y + 1, x, visited);
    //explore left
    explore(grid, y, x - 1, visited);
    //explore right
    explore(grid, y, x + 1, visited);
    //if all surrounding postions visited then return true;
    return true;
  }