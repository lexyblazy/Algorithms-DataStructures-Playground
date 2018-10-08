class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(node) {
    this.head = new Node(node, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;
    // while we have a node, we increment the node count
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    let last = "";
    while (node) {
      if (!node.next) {
        // if the node has no next property, we are definitely on the last one
        last = node;
      }
      node = node.next;
    }
    return last;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }
  insertLast(data) {
    const last = this.getLast();
    if (last) {
      // append the new node the last element
      last.next = new Node(data);
    } else {
      // there is nothing here, we  create  a new one
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }
  insertAt(data, index) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    if (index === 0) {
      const head = this.head;
      this.head = newNode;
      newNode.next = head;
      return;
    }
    let previous = this.getAt(index - 1) || this.getLast();

    let nextNode = previous.next;
    previous.next = newNode;
    newNode.next = nextNode;
  }

  forEach(fn) {
    if (!this.head) return;
    let counter = 0;
    let node = this.head;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
