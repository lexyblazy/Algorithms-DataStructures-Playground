/*
 * Weave two Queues
 * Example
 *  queue1 = [4,3,2,1]
 * queue2 = ['Hi','There']
 * weaved = [1,'There',2,'Hi',3,4]
 */

const Queue = require("../queue");

const weaveQueue = (queue1, queue2) => {
  const weaved = [];
  while (queue1.peek() || queue2.peek()) {
    //we want to be sure we are not pushing undefined into the weaved
    if (queue1.peek()) {
      weaved.push(queue1.pop());
    }

    if (queue2.peek()) {
      weaved.push(queue2.pop());
    }
  }
  return weaved;
};

module.exports = weaveQueue;
