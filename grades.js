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
for(let i=0;i<N;i++){
  let A=parseInt(readLine());
  
  if(A<38){
    console.log(A);
  }else{
    if(A%5>=3){
      A=A+(5-A%5);
      console.log(A);
    }else{
     console.log(A);
    }
  }
}