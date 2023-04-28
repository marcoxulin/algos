const semestersRequired = (numCourses, prereqs) => {
  const graph = {};
  for(let i = 0; i < numCourses; i++){
    graph[i] = [];
  }
  for(const course of prereqs){
    const [a,b] = course;
    graph[a].push(b);
  }
  const distance = {};
  //find ending courses
  for(const course in graph){
    if(graph[course].length === 0) {
      distance[course] = 1;
    }
  }
  for(const course in graph){
    traverse(course, distance, graph)
  }
  return Math.max(...Object.values(distance));
};

function traverse (node, distance, graph){
  if(node in distance) return distance[node];
  
  let maxDistance = 0;
  for(let neighbor of graph[node]){
    const currDistance = traverse(neighbor, distance, graph);
    if(currDistance > maxDistance) maxDistance = currDistance;
  }
  //one distance away from the neighbor node
  distance[node] = 1 + maxDistance
  return distance[node];
}

module.exports = {
  semestersRequired,
};

