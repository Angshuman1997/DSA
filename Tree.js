class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insertion
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Deletion by Value
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, key) {
    if (root === null) return root;

    if (key < root.value) {
      root.left = this.deleteNode(root.left, key);
    } else if (key > root.value) {
      root.right = this.deleteNode(root.right, key);
    } else {
      if (root.left === null) return root.right;
      else if (root.right === null) return root.left;

      root.value = this.findMinValue(root.right);

      root.right = this.deleteNode(root.right, root.value);
    }

    return root;
  }

  findMinValue(node) {
    let minValue = node.value;
    while (node.left) {
      minValue = node.left.value;
      node = node.left;
    }
    return minValue;
  }

  // Inorder Traversal (Left, Root, Right)
  inorderTraversal(node = this.root, callback) {
    if (node) {
      this.inorderTraversal(node.left, callback);
      callback(node.value);
      this.inorderTraversal(node.right, callback);
    }
  }

  // Preorder Traversal (Root, Left, Right)
  preorderTraversal(node = this.root, callback) {
    if (node) {
      callback(node.value);
      this.preorderTraversal(node.left, callback);
      this.preorderTraversal(node.right, callback);
    }
  }

  // Postorder Traversal (Left, Right, Root)
  postorderTraversal(node = this.root, callback) {
    if (node) {
      this.postorderTraversal(node.left, callback);
      this.postorderTraversal(node.right, callback);
      callback(node.value);
    }
  }

  // BFS - Level Order Traversal
  levelOrderTraversal(callback) {
    if (!this.root) return;

    const queue = [this.root];

    while (queue.length > 0) {
      const node = queue.shift();
      callback(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
  }

  // Boundary Traversal
  boundaryTraversal() {
    if (!this.root) return;

    console.log(this.root.value); // Print root

    this.leftBoundaryTraversal(this.root.left);
    this.leavesTraversal(this.root.left);
    this.leavesTraversal(this.root.right);
    this.rightBoundaryTraversal(this.root.right);
  }

  leftBoundaryTraversal(node) {
    if (!node) return;

    if (node.left) {
      console.log(node.value);
      this.leftBoundaryTraversal(node.left);
    } else if (node.right) {
      console.log(node.value);
      this.leftBoundaryTraversal(node.right);
    }
    // Ignore leaf nodes
  }

  rightBoundaryTraversal(node) {
    if (!node) return;

    if (node.right) {
      this.rightBoundaryTraversal(node.right);
      console.log(node.value);
    } else if (node.left) {
      this.rightBoundaryTraversal(node.left);
      console.log(node.value);
    }
    // Ignore leaf nodes
  }

  leavesTraversal(node) {
    if (!node) return;

    this.leavesTraversal(node.left);

    if (!node.left && !node.right) {
      console.log(node.value);
    }

    this.leavesTraversal(node.right);
  }

  // Diagonal Traversal
  diagonalTraversal() {
    const diagonals = new Map();

    this.diagonalTraversalHelper(this.root, 0, diagonals);

    for (const diagonal of diagonals.values()) {
      console.log(diagonal.join(" "));
    }
  }

  diagonalTraversalHelper(node, diagonalLevel, diagonals) {
    if (!node) return;

    if (!diagonals.has(diagonalLevel)) {
      diagonals.set(diagonalLevel, []);
    }

    diagonals.get(diagonalLevel).push(node.value);

    this.diagonalTraversalHelper(node.left, diagonalLevel + 1, diagonals);
    this.diagonalTraversalHelper(node.right, diagonalLevel, diagonals);
  }

  // Delete Entire Tree
  deleteTree() {
    this.root = null;
  }
}

// Example usage
const myTree = new BinaryTree();
myTree.insert(10);
myTree.insert(5);
myTree.insert(15);
myTree.insert(3);
myTree.insert(7);
myTree.insert(12);
myTree.insert(18);

console.log("Inorder Traversal:");
myTree.inorderTraversal((value) => console.log(value));

console.log("Preorder Traversal:");
myTree.preorderTraversal((value) => console.log(value));

console.log("Postorder Traversal:");
myTree.postorderTraversal((value) => console.log(value));

console.log("Level Order Traversal:");
myTree.levelOrderTraversal((value) => console.log(value));

console.log("Boundary Traversal:");
myTree.boundaryTraversal();

console.log("Diagonal Traversal:");
myTree.diagonalTraversal();

console.log("Deleting node 15:");
myTree.delete(15);

console.log("Inorder Traversal after deletion:");
myTree.inorderTraversal((value) => console.log(value));

console.log("Deleting the entire tree:");
myTree.deleteTree();
