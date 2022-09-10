const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let A=readLine().split("");
let max=1;
let arr="";
for(let i=0;i<A.length;i++){
  if(A[i]===A[i+1]){
    max+=1;
  }else{
    arr=arr+A[i]+max;
    max=1;
  }
}
console.log(arr);