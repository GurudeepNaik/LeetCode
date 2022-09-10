let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function myFunc(arr,N){
  let Sum=0;
  for(i=0;i<arr.length;i++){
    if((i+1)%N===0){
      Sum+=arr[i];
    }
  }
  return Sum;
}

let testCase=parseInt(readLine());
let arr=[];
while(testCase>0){
arr.push(parseInt(readLine()));
testCase--;
}
let ithElement=parseInt(readLine());
console.log(myFunc(arr,ithElement));