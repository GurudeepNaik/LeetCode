/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let j = nums.length - 1;
  let i = 0;
  while (i <= j) {
    if (nums[i] === val) {
      if (nums[i] === nums[j]) {
        j--;
      } else {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++;
        j--;
      }
    } else {
      i++;
    }
  }
  return j + 1;
};
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums, 2));
console.log(nums);
