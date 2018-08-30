const Stack = require("./stack");

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }
  remove() {
    // while there is an element in the first stack
    while (this.first.peek()) {
      // pop it off and push it on the second stack
      this.second.push(this.first.pop());
    }
    return this.second.pop();
  }
  peek() {
    // while there is an element in the first stack
    while (this.first.peek()) {
      // pop it off and push it on the second stack
      this.second.push(this.first.pop());
    }
    const peekedElement = this.second.peek();

    // return all the items to the first stack
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return peekedElement;
  }
}

module.exports = Queue;
