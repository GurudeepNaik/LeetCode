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
let arr1=readLine().split(" ");
let mean=0;
for(let i=0;i<N;i++){
    mean=mean+parseInt(arr1[i]);
}
console.log(Math.floor(mean/N));