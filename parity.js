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
let min=Math.min(...arr);
let Sum=0
while(min>0){
  Sum+=min%10;
  min=parseInt(min/10);
}
if(Sum%2===0){
  console.log(1);
}else{
  console.log(0);
}


