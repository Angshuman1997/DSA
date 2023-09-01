class Stack {
  constructor() {
    this.items = [];
  }

  // Insert (Push) an item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Delete (Pop) the top item from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Search for an item in the stack
  search(item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      return `${item} not found in the stack`;
    }
    return `${item} found at index ${index}`;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the top item without removing it
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // Get the size of the stack
  size() {
    return this.items.length;
  }

  // Display the stack
  display() {
    return this.items.join(", ");
  }
}

// Example usage of the stack
const myStack = new Stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log("Stack:", myStack.display());
console.log("Pop:", myStack.pop());
console.log("Search 20:", myStack.search(20));
console.log("Peek:", myStack.peek());
console.log("Stack size:", myStack.size());
