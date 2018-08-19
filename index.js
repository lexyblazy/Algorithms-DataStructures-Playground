// function closest(s, queries) {
//   s = s.toLowerCase().split("");
//   const indexes = [];
//   const letter = s[queries];
//   for (var i = 0; i < s.length; i++) {
//     if (letter === s[i]) {
//       indexes.push(i);
//     }
//   }
//   if (indexes.length === 1) return -1;
//   const result = indexes.filter(index => index != queries);
//   return result[0];
// }

// closest("hackerrank", 4);
// closest("hackerrank", 1);
// closest("hackerrank", 6);
// closest("hackerrank", 8);

const sentences = [
  "bob and alice like to text each other",
  "bob does not like to ski",
  "alice likes to ski"
];
const queries = ["bob alice", "alice", "like"];

const sentences2 = [
  "jim likes mary",
  "kate likes tom",
  "tom does not like jim"
];
const queries2 = ["jim tom", "likes"];

let _buildCharMap = arr => {
  let charMap = {};
  for (let el of arr) {
    charMap[el] = charMap[el] + 1 || 1;
  }
  return charMap;
};

function checkQuery(sentence, phrase) {
  const map = _buildCharMap(sentence.split(" "));
  phrase = phrase.split(" ");
  let possible = true;
  phrase.forEach(element => {
    if (map[element]) {
      map[element]--;
      if (map[element] < 0) possible = false;
    } else {
      possible = false;
    }
  });
  return possible;
}

function textQueries(sentences, phrases) {
  const result = [];
  for (let i = 0; i < sentences.length; i++) {
    result.push([]);
  }
  phrases.forEach((phrase, phraseIndex) => {
    sentences.forEach((sentence, index) => {
      if (checkQuery(sentence, phrase)) {
        result[phraseIndex][index] = index;
      }
    });
  });

  const results = result.filter(r => r.length > 0).map(r => {
    return r.filter(d => Boolean(d) !== null || Boolean(d) !== undefined);
  });
  results.forEach(res => {
    console.log(...res);
  });
}

textQueries(sentences, queries);
textQueries(sentences2, queries2);



function containsString(string, substring) {
  let charIndex = 0;
  for(let i = 0; i < string.length; i += 1) {
    const char = substring[charIndex];
    if(string[i] === char) {
      charIndex += 1;
    }
  }
  return charIndex === substring.length;
}