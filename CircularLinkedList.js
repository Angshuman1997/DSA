class CircularLinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.head.next = this.head; // Point the head's next to itself for circularity
    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const newNode = {
      value: data,
      next: this.head, // Point the new node's next back to the head
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  preappend(data) {
    const newNode = {
      value: data,
      next: this.head,
    };

    // Update the next reference of the current tail to point to the new head
    this.tail.next = newNode;

    this.head = newNode; // Update the head to the new node
    this.length++;
  }

  traversing(req) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== req) {
      counter++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  showList() {
    let counter = 0;
    let currentNode = this.head;
    const cList = [];
    while (counter <= this.length - 1) {
      counter++;
      cList.push(currentNode.value);
      currentNode = currentNode.next;
      if (currentNode === this.head) break; // Exit loop if we've completed a full circle
    }

    return cList;
  }

  // search by index
  searchByIndex(index) {
    if (index + 1 <= this.length) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
        counter++;
        currentNode = currentNode.next;
      }

      return currentNode.value;
    }

    return `Invalid as latest length is ${
      this.length
    }, therefore the last index is ${this.length - 1}`;
  }

  // search by value
  searchByValue(value) {
    let counter = 0;
    let currentNode = this.head;
    while (counter <= this.length - 1) {
      if (currentNode.value === value) {
        return `Found at index ${counter}`;
      }
      counter++;
      currentNode = currentNode.next;
      if (currentNode === this.head) break; // Exit loop if we've completed a full circle
    }

    return `Value not found`;
  }

  insert(index, data) {
    const newNode = {
      value: data,
      next: null,
    };

    const leaderNode = this.traversing(index - 1);
    const nextNode = leaderNode.next;

    newNode.next = nextNode;
    leaderNode.next = newNode;
    this.length++;
  }

  // Delete by index
  deleteIndx(index) {
    const leaderNode = this.traversing(index - 1);
    const nodeToDelete = leaderNode.next;
    const nextNode = nodeToDelete.next;

    leaderNode.next = nextNode;
    this.length--;
  }

  findIndex(value) {
    let counter = 0;
    let currentNode = this.head;
    while (counter <= this.length - 1) {
      if (currentNode.value === value) {
        return counter;
      }
      counter++;
      currentNode = currentNode.next;
      if (currentNode === this.head) break; // Exit loop if we've completed a full circle
    }
    return -1; // Value not found
  }

  // Delete by value
  deleteVal(value) {
    const index = this.findIndex(value);
    if (index !== -1) {
      this.deleteIndx(index);
    }
  }
}

const myCircularList = new CircularLinkedList(10);
myCircularList.append(20);
myCircularList.preappend(5);
myCircularList.preappend(0);
myCircularList.insert(1, 8);
console.log(myCircularList.showList());
myCircularList.deleteIndx(2);
myCircularList.deleteVal(20);
console.log(myCircularList.showList());
console.log(myCircularList.searchByIndex(2));
console.log(myCircularList);
