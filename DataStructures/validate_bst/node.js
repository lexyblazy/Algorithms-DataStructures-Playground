class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (data > this.data && this.right) {
      // we add to the right
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    } else if (data < this.data && this.left) {
      //we add to the left
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    }
  }
  contains(data) {
    if (this.data === data) {
      return this;
    }
    if (data > this.data && this.right) {
      return this.right.contains(data);
    } else if (data < this.data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }
}

module.exports = Node;