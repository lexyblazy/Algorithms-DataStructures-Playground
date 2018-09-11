function levelWidth(node) {
  const counters = [0];
  const arr = [node, "s"];
  while (arr.length > 1) {
    const node = arr.shift();
    if (node === "s") {
      arr.push(node);
      counters.push(0);
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

module.exports = levelWidth;
