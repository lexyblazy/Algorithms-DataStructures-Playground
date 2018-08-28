/**
 * The Queue data structure, it stores data in First-In-First-Out(FIFO) Order 
 * For example,
 * - Line-ups at a ticketing booth;
 */
class Queue {
  constructor() {
    this.data = [];
  }

  //add to queue
  enqueue(record) {
    this.data.unshift(record);
  }
  add(record){
    this.enqueue(record)
  }
  // remove from queue
  dequeue() {
    return this.data.pop();
  }
  remove(){
    return this.dequeue();
  }
  // peek into the queue
  peek(){
    return this.data[this.data.length -1]
  }
}

module.exports =   Queue;
