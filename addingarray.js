var getConcatenation = function (nums) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
  }return nums.concat(arr);
};
nums = [1, 2, 1];
console.log(getConcatenation(nums));