// let str = "Welcome to this Javascript Guide";
// function reverseStr(str) {
//   let arr = str.split(" ");
//   let reveStr = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//       reveStr += arr[i][j];
//     }
//     reveStr += " ";
//   }
//   return reveStr;
// }
// console.log(reverseStr(str));

let string = "babab";
function checkPalindrome(string) {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return "False";
    }
  }
  return "True";
}
console.log(checkPalindrome(string));
