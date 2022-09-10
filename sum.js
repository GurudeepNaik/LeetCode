var merge = function(nums1, m, nums2, n) {
  let arr=[];
    for(let i=0;i<m;i++){
     for(let j=0;i<n;j++){
       if(nums1[i]<nums2[i]){
         arr.push(nums1[i]);
       }else{
        arr.push(nums2[i]);
       }
     }
    }return arr;
};
let nums1 = [1,2,3];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
console.log(merge(nums1, m, nums2, n));