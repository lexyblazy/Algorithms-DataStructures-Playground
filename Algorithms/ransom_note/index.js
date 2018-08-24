
/*
assume mag = 'life is more than just a dream'
assume note = 'life is'
firstly, build a character map
{
    life: 1,
    is: 1,
    more:1,
    than: 1,
    just: 1,
    a: 1,
    dream: 1
}
we then loop through note (str), and check if mag[str] exists
*/

const _buildMap = str => {
  const map = {};
  str.split(" ").forEach(element => {
    map[element] = map[element] + 1 || 1;
  });
  return map;
};


const ransomNote = (mag, note) => {
  let possible = true;
  const magMap = _buildMap(mag);
  note.split(" ").forEach(el => {
    if (magMap[el]) {
      magMap[el]--;
      if (magMap[el] < 0) possible = false;
    }else{
        possible = false;
    }
  });
  return possible;
};
module.exports = ransomNote;
