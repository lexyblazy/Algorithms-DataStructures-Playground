/*
 * Weave two Queues
 * Example
 *  queue1 = [4,3,2,1]
 * queue2 = ['Hi','There']
 * weaved = [1,'There',2,'Hi',3,4]
 */

const Queue = require("./queue");

const weaveQueue = (queue1, queue2) => {
  const weaved = new Queue();
  while (queue1.peek() || queue2.peek()) {
    //we want to be sure we are not pushing undefined into the weaved
    if (queue1.peek()) {
      weaved.add(queue1.remove());
    }

    if (queue2.peek()) {
      weaved.add(queue2.remove());
    }
  }
  return weaved;
};

module.exports = weaveQueue;
