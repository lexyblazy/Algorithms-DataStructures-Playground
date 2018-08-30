/**
 * The Queue data structure, it stores data in First-In-First-Out(FIFO) Order 
 * For example,
 * - Line-ups at a ticketing booth;
 */
class Queue {
  constructor() {
    this.data = [];
  }
  add(record){
    this.data.unshift(record);
  }
  remove(){
    return this.data.pop();
  }
}

module.exports =   Queue;
