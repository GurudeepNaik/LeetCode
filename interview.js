// Check if the Numbers Have Same Last Digit
// Enter a first integer: 8
// Enter a second integer: 38
// Enter a third integer: 88
// 8, 38 and 88 have the same last digit.

// let nums=[28,38];
// function sameNumber(){
//   let firstNumber=nums[0]%10;
//   // console.log(lastNumber);
//   let lastNum=nums[1]%10;
//   if(firstNumber===lastNum){
//     return true;
//   }else{
//     return false
//   }

// }
// console.log(sameNumber(nums));


// Print number from 1-30
// If number divide by 3 print  hi
// if number divide by 5 print bye
// if number divide by 3 and 5 print Hi&bye
// otherwise print number.
// function printHi(){
//   for(let i=1;i<=30;i++){
//     if(i%3===0 && i%5===0){
//       console.log(i+" Hi&bye");
//     }else if(i%3===0){
//       console.log(i+" hi");
//     }else if(i%3===0){
//       console.log(i+" bye");
//     }
//   }
// }
// printHi();

// Str1: Good Str2: morning

// let A="Good";
// let B="morning";
// // let C=[];
// // C.push(A);
// A.length;
// A+=B;
// B=A.slice(0,A.length);
// A=A.slice(A.length,11);
// console.log(A);
// console.log(B);

// the duplicate elements of an array
// 1, 2, 3, 4, 2, 7, 8, 8, 3

// let nums=[1,2,3,4,2,7,8,8,3];
// function removeDublicate(){
//   nums.sort((a,b) => a-b);
//   for(let i=1;i<nums.length;i++){
//     if(nums[i]===nums[i-1]){
//       nums.splice(i-1,1);
//       i--;
//     }else{
//       continue;
//     }
//   }return nums;
// }
// console.log(removeDublicate(nums));
