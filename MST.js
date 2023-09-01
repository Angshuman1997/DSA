// A Minimum Spanning Tree (MST) is a subset of the edges of an undirected graph that connects all the vertices together without any cycles while minimizing the sum of the edge weights. One of the algorithms to find a Minimum Spanning Tree is Prim's algorithm. Here's an example of how to implement Prim's algorithm in JavaScript:

class Graph {
  constructor(vertices) {
    this.V = vertices;
    this.graph = new Array(vertices).fill(null).map(() => []);
  }

  addEdge(src, dest, weight) {
    this.graph[src].push({ dest, weight });
    this.graph[dest].push({ dest: src, weight }); // Graph is undirected
  }

  primMST() {
    const parent = new Array(this.V).fill(-1); // To store the MST
    const key = new Array(this.V).fill(Number.MAX_SAFE_INTEGER); // To store key values
    const mstSet = new Array(this.V).fill(false); // To keep track of included vertices

    // Start from the first vertex
    key[0] = 0;

    for (let count = 0; count < this.V - 1; count++) {
      const u = this.minKey(key, mstSet);

      mstSet[u] = true;

      for (const neighbor of this.graph[u]) {
        const v = neighbor.dest;
        const weight = neighbor.weight;

        if (!mstSet[v] && weight < key[v]) {
          parent[v] = u;
          key[v] = weight;
        }
      }
    }

    this.printMST(parent);
  }

  minKey(key, mstSet) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = -1;

    for (let v = 0; v < this.V; v++) {
      if (!mstSet[v] && key[v] < min) {
        min = key[v];
        minIndex = v;
      }
    }

    return minIndex;
  }

  printMST(parent) {
    console.log("Edge \tWeight");
    for (let i = 1; i < this.V; i++) {
      console.log(
        parent[i] + " - " + i + "\t" + this.graph[i][parent[i]].weight
      );
    }
  }
}

const g = new Graph(5);

g.addEdge(0, 1, 2);
g.addEdge(0, 3, 6);
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 8);
g.addEdge(1, 4, 5);
g.addEdge(2, 4, 7);
g.addEdge(3, 4, 9);

g.primMST();

// In this code:

// We create a Graph class to represent the graph and define methods for adding edges, finding the minimum key, and printing the MST.

// primMST is the main function to find the MST using Prim's algorithm.

// We start from the first vertex and iteratively add vertices to the MST while updating the key and parent arrays based on the minimum-weight edges.

// Finally, we print the Minimum Spanning Tree.

// This code will find the Minimum Spanning Tree for the given graph and print the edges along with their weights.