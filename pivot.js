/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let i=0;
    while (i<nums.length){
        let right=i+1;
        let rightSum=0;
        let left=i-1;
        let leftSum=0;
        while(right<nums.length){
           rightSum+=nums[right];
            right++;
        }
        while(left>=0){
            leftSum+=nums[left]
            left--;
        }
        if(rightSum===leftSum){
            return i;
        }
        i++;
    }
    return -1;
};
console.log(pivotIndex([2,1,-1]))