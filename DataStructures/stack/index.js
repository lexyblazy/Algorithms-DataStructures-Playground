/**
 * A stack stores record in Last-In-First-Out(LIFO) Order
 * Example:
 * A Deck of Cards
 * A vertical line up of books
 */

class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    return this.data.pop();
  }
  peek(){
    return this.data[this.data.length - 1]
  }
}

module.exports = Stack;
