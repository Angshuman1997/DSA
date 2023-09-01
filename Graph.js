class Graph {
  constructor() {
    this.vertices = new Map();
  }

  // Insert a vertex into the graph
  insertVertex(vertex) {
    if (!this.vertices.has(vertex)) {
      this.vertices.set(vertex, []);
    } else {
      console.log(`${vertex} already exists in the graph.`);
    }
  }

  // Insert an edge between two vertices
  insertEdge(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const adjacencyList1 = this.vertices.get(vertex1);
      const adjacencyList2 = this.vertices.get(vertex2);

      if (!adjacencyList1.includes(vertex2)) {
        adjacencyList1.push(vertex2);
      }

      if (!adjacencyList2.includes(vertex1)) {
        adjacencyList2.push(vertex1);
      }
    } else {
      console.log("One or more vertices do not exist.");
    }
  }

  // Delete a vertex and its associated edges from the graph
  deleteVertex(vertex) {
    if (this.vertices.has(vertex)) {
      this.vertices.delete(vertex);
      for (const adjacentVertex of this.vertices.keys()) {
        const adjacencyList = this.vertices.get(adjacentVertex);
        const index = adjacencyList.indexOf(vertex);
        if (index !== -1) {
          adjacencyList.splice(index, 1);
        }
      }
    } else {
      console.log(`${vertex} does not exist in the graph.`);
    }
  }

  // Delete an edge between two vertices
  deleteEdge(vertex1, vertex2) {
    if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
      const adjacencyList1 = this.vertices.get(vertex1);
      const adjacencyList2 = this.vertices.get(vertex2);

      const index1 = adjacencyList1.indexOf(vertex2);
      const index2 = adjacencyList2.indexOf(vertex1);

      if (index1 !== -1) {
        adjacencyList1.splice(index1, 1);
      }

      if (index2 !== -1) {
        adjacencyList2.splice(index2, 1);
      }
    } else {
      console.log("One or more vertices do not exist.");
    }
  }

  // Search for a vertex in the graph
  searchVertex(vertex) {
    if (this.vertices.has(vertex)) {
      return `${vertex} found in the graph.`;
    } else {
      return `${vertex} not found in the graph.`;
    }
  }

  // Display the graph
  display() {
    for (const [vertex, adjacencyList] of this.vertices.entries()) {
      console.log(`${vertex} -> ${adjacencyList.join(", ")}`);
    }
  }
}

// Example usage of the graph
const myGraph = new Graph();

myGraph.insertVertex("A");
myGraph.insertVertex("B");
myGraph.insertVertex("C");
myGraph.insertEdge("A", "B");
myGraph.insertEdge("B", "C");

console.log("Graph:");
myGraph.display();

myGraph.deleteEdge("A", "B");
myGraph.deleteVertex("A");

console.log("Graph after deletion:");
myGraph.display();

console.log(myGraph.searchVertex("B"));
console.log(myGraph.searchVertex("X"));
