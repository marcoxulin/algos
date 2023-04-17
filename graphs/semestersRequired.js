const semestersRequired = (numCourses, prereqs) => {
    const graph = {}
    prereqs.forEach(course => {
      if(!(course[0] in graph)) graph[course[0]] = [];
      if(!(course[1] in graph)) graph[course[1]] = [];
      graph[course[0]].push(course[1]);
    });
    const distance = {};
    for(const course in graph){
      if(graph[course].length === 0) distance[course] = 1;
    }
    for(const course in graph){
      countSemester(course, graph, distance)
    }
    console.log(distance)
    return Math.max(...Object.values(distance));
  };
  
  function countSemester (node, graph, distance){
    if(node in distance) return distance[node];
    let maxDistance = 0;
    for(let neighbor of graph[node]){
      const neighborDistance = countSemester(neighbor, graph, distance);
      if (neighborDistance > maxDistance) maxDistance = neighborDistance;
    }
    distance[node] = 1 + maxDistance;
    return distance[node];
  }
  
  module.exports = {
    semestersRequired,
  };
  
  const numCourses = 6;
  const prereqs = [
    [1, 2],
    [2, 4],
    [3, 5],
    [0, 5],
  ];
  console.log(semestersRequired(numCourses, prereqs)); 
  