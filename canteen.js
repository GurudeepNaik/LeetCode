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
let A=parseInt(N[0]);
let B=parseInt(N[1]);
let BillAmount=readLine().split(" ");
let Charged=parseInt(readLine());
let Actual=0;
for(let i=0;i<A;i++){
  if(i==B){
    continue;
  }
BillAmount[i]=parseInt(BillAmount[i]);
Actual+=BillAmount[i];
}
if(Actual/2!=Charged){
console.log(Charged-Actual/2);
}else{
  console.log("It is Correct!");
}
