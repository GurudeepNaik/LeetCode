/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  arr = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let resultArr = [];
  for (let i = 0; i < words.length; i++) {
    let str = "";
    for (let j = 0; j < words[i].length; j++) {
      str += arr[words[i].charCodeAt(j) - 97];
    }
    resultArr.push(str);
  }
  resultArr.sort();
  let [...set] = new Set(resultArr);
  return set.length;
};
words = ["gin", "zen", "gig", "msg"];
console.log(uniqueMorseRepresentations(words));
