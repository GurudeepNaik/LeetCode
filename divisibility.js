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
let N=readLine().split(" ");
let n=parseInt(N[0]);
let x=parseInt(N[1]);
let arr=readLine().split(" ");
let count=0;
for(let i=0;i<n;i++){
    if(parseInt(arr[i])%x==0){
        count=count+1;
    }else{
        continue;
    }
}console.log(count);