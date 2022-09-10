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
let N=parseInt(readLine());
let arr=[];
for(let i=0;i<N;i++){
arr.push(parseInt(readLine()));
}
// console.log(arr);
let max=[];
max.push(arr[N-1]);
let j=0;
for(let i=N-2;i>=0;i--){
if(arr[i]>max[j]){
  max.push(arr[i]);
  j++;
}
}
for(let i=0;i<max.length;i++){
console.log(max[i]);
}