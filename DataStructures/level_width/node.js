class Node {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
  add(data) {
    const newNode = new Node(data);
    this.children.push(newNode);
  }
  remove(data) {
    this.children = this.children.filter(child => child.data !== data);
  }
}

module.exports = Node;
