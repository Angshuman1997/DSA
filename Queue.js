class Queue {
  constructor() {
    this.items = [];
  }

  // Insert (Enqueue) an item into the queue
  enqueue(item) {
    this.items.push(item);
  }

  // Delete (Dequeue) the front item from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Search for an item in the queue
  search(item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
      return `${item} not found in the queue`;
    }
    return `${item} found at index ${index}`;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Get the front item without removing it
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Get the size of the queue
  size() {
    return this.items.length;
  }

  // Display the queue
  display() {
    return this.items.join(", ");
  }
}

// Example usage of the queue
const myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);

console.log("Queue:", myQueue.display());
console.log("Dequeue:", myQueue.dequeue());
console.log("Search 20:", myQueue.search(20));
console.log("Front:", myQueue.front());
console.log("Queue size:", myQueue.size());
