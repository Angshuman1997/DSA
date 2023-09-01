class DoublyLinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
      prev: null, // Previous property for doubly linked list
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const newNode = {
      value: data,
      next: null,
      prev: this.tail, // Set the previous node to the current tail
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  preappend(data) {
    const newNode = {
      value: data,
      next: this.head,
      prev: null, // The previous node for the new head is null
    };

    this.head.prev = newNode; // Update the previous reference of the current head
    this.head = newNode;
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
    const dList = [];
    while (counter <= this.length - 1) {
      counter++;
      dList.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return dList;
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
    }

    return `Value not found`;
  }

  insert(index, data) {
    const newNode = {
      value: data,
      next: null,
      prev: null,
    };

    const leaderNode = this.traversing(index - 1);
    const nextNode = leaderNode.next;

    newNode.next = nextNode;
    newNode.prev = leaderNode;
    leaderNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
  }

  // Delete from start
  deleteFS() {
    this.head = this.head.next;
    this.head.prev = null; // Update the previous reference of the new head
    this.length--;
  }

  // Delete from end
  deleteFE() {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== this.length - 2) {
      counter++;
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    this.tail = currentNode;
    this.length--;
  }

  // Delete by index
  deleteIndx(index) {
    const leaderNode = this.traversing(index - 1);
    const nodeToDelete = leaderNode.next;
    const nextNode = nodeToDelete.next;

    leaderNode.next = nextNode;
    nextNode.prev = leaderNode;
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
    }
  }

  // Delete by value
  deleteVal(value) {
    const index = this.findIndex(value);
    if (index !== -1) {
      this.deleteIndx(index);
    }
  }

  reverseList() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    while (current !== null) {
      let temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.next;
    }
  }
}

const myDoublyList = new DoublyLinkedList(10);
myDoublyList.append(20);
myDoublyList.preappend(5);
myDoublyList.preappend(0);
myDoublyList.insert(1, 8);
console.log(myDoublyList.showList());
myDoublyList.deleteFS();
myDoublyList.deleteFE();
myDoublyList.deleteIndx(2);
myDoublyList.deleteVal(20);
myDoublyList.reverseList();
console.log(myDoublyList.showList());
console.log(myDoublyList.searchByIndex(2));
console.log(myDoublyList);
