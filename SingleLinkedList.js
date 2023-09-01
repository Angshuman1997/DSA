// Single Linked List Opeartion - Insert, Delete, Search

class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };

    this.tail = this.head;
    this.length = 1;
  }

  append(data) {
    const newNode = {
      value: data,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  preappend(data) {
    const newNode = {
      value: data,
      next: null,
    };

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  traversing(req) {
    let counter = 0;
    let currentNode = this.head;
    while (counter != req) {
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
      while (counter != index) {
        counter++;
        currentNode = currentNode.next;
      }

      return currentNode.value;
    }

    return `Invalid as latest length is ${
      this.length
    }, therefore last index is ${this.length - 1}`;
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
    };

    const leaderNode = this.traversing(index - 1);
    const nextNode = leaderNode.next;

    newNode.next = nextNode;
    leaderNode.next = newNode;
    this.length++;
  }

  // Delete from start
  deleteFS() {
    this.head = this.head.next;
    this.length--;
  }

  // Delete from end
  deleteFE() {
    
    let counter = 0;
    let currentNode = this.head;
    while (counter != this.length - 2) {
      counter++;
      currentNode = currentNode.next;
    }

    const newNode = {
        value: currentNode.value,
        next: null,
      };
      this.tail.next = null;
      this.tail = newNode;
      this.length--;
  }

  // Delete by index
  deleteIndx(index){
    const leaderNode = this.traversing(index - 1);
    const nextNode = this.traversing(index + 1);

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
    }
  }

  // Delete by value
  deleteVal(value){
    const index = this.findIndex(value);
    const leaderNode = this.traversing(index - 1);
    const nextNode = this.traversing(index + 1);

    leaderNode.next = nextNode;
    this.length--;
  }

  reverseList() {
    let first = this.head;
    this.tail =  this.head;
    let second = first.next;

    while(second){
        let temp = second.next;
        second.next = first;
        first = second;
        second = temp;
    }

    this.head.next = null;
    this.head = first;
  }
}

const myList = new LinkedList(10);
myList.append(20);
myList.preappend(5);
myList.preappend(0);
myList.insert(1, 8);
// console.log(myList.searchByIndex(4));
// console.log(myList.searchByValue(7));
// console.log(myList);
console.log(myList.showList());
// myList.deleteFS();
// myList.deleteFE();
// myList.deleteIndx(2);
// myList.deleteVal(20);
myList.reverseList();
console.log(myList.showList());
console.log(myList.searchByIndex(2));
console.log(myList);