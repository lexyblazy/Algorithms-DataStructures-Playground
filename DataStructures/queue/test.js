const Queue = require("./index");

const q = new Queue();

q.enqueue(1);

describe("Should Test a Queue", () => {
  const {data} = q;

  it("Test for enqueuing", () => {
    expect(q.enqueue(2)).toEqual([2,1]);
  });
  it("Test for Dequeuing", () => {
    expect(q.dequeue()).toBe(data[data.length - 1]);
  });
  it('Should peek into the queue',()=>{
      expect(q.peek()).toBe(data[data.length -1])
  })
});
