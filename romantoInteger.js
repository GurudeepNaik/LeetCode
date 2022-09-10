/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let obj = [
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ];
  let map = new Map(obj);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < map.get(s[i + 1])) {
      sum += map.get(s[i + 1]) - map.get(s[i]);
      i = i + 1;
    } else {
      sum += map.get(s[i]);
    }
  }
  return sum;
};
let s = "MCMXCIV";
console.log(romanToInt(s));
