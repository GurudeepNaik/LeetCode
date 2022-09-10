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
function MyFunction(N){
  if(N==0){
    return 0;
  }else if(N==1 || N==2){
    return 1;
  }else if(N==3){
    return 2;
  }
  return MyFunction(N-3)+MyFunction(N-2)+MyFunction(N-1);
}

let N=parseInt(readLine());

console.log(MyFunction(N));