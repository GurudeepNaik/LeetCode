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
let arr=readLine().trim().split(" ").map(Number);
let count=0;
for(let i=0;i<N;i++){
if(arr[i]<0){
    count++;
}
}
console.log(count);