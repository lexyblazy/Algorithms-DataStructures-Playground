class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
  add(data){
    const newNode = new Node(data);
    this.children.push(newNode);
  }
  remove(data){
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor(){
    this.root = null;
  }
  traverseBF(fn){
    const arr = [this.root];
    while(arr.length > 0){
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn){
    const arr = [this.root];
    while(arr.length > 0){
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Node, Tree };
