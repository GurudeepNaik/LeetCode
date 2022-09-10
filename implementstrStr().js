/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const ans = haystack.indexOf(needle);
  return ans;
};
let haystack = "mississippi";
let needle = "";
console.log(strStr(haystack, needle));
