/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let min = Number.POSITIVE_INFINITY;
  for (let i = 0; i < strs.length; i++) {
    min = Math.min(min, strs[i].length);
  }
  let str = "";
  for (let i = 0; i < min; i++) {
    let j;
    for (j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        return str;
      }
    }
    str = str + strs[j][i];
  }
  return str;
};
strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
