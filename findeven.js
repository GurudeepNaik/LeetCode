var findNumbers = function (nums) {
  let number = 0;
  for (let i = 0; i < nums.length; i++) {
   nums[i]=nums[i].toString();
    if (nums[i].length % 2 === 0) {
      number++;
    }else{
      continue;
    }
  } return number;
  
};
nums = [12, 345, 2, 6, 7896];
console.log(findNumbers(nums))