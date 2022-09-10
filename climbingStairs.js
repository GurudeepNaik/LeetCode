/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function Stair(n, start) {
    if (start === n) {
      return 1;
    } else if (start > n) {
      return 0;
    } else {
      return Stair(n, start + 2) + Stair(n, start + 1);
    }
  }
  return Stair(n, 0);
};
let n = 45;
console.log(climbStairs(n));
