module.exports = function levelWidth(root) {
  // level width is similar to breadth first traversal
  const arr = [root, "s"];
  const counters = [0];
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === "s") {
      counters.push(0);
      arr.push("s");
    } else {
      counters[counters.length - 1]++;
      arr.push(...node.children);
    }
  }
  return counters;
};
