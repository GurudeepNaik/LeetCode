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
let A=parseInt(readLine());
for(let i=1;i<N;i++){
  if((i)%2===1){
  A+=parseInt(readLine());
  }else{
    A-=parseInt(readLine());
  }
}
console.log(A);