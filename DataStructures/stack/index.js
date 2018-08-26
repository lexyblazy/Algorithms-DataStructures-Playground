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
  add(record) {
    this.data.push(record);
  }
  remove() {
    return this.data.pop();
  }
}
