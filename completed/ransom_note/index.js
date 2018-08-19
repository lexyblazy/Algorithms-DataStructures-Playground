
function ransomNote(magazine, note) {
  magazine = magazine
    .toLowerCase()
    .replace(/[.,]/g, "")
    .split(" ");
  note = note.toLowerCase().split(" ");
  const magObj = {};
  for (let word of magazine) {
    magObj[word] = magObj[word] + 1 || 1;
  }
  let possible = true;
  for (let noteWord of note) {
    if (magObj[noteWord]) {
      magObj[noteWord]--;
      if (magObj[noteWord] < 0) possible = false;
    } else {
      possible = false;
    }
  }
  return possible;
}

module.exports = ransomNote;


