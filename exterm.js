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
let arr1=[];
for(let i=0;i<N;i++){
  arr1.push(parseInt(readLine()));
}
//find min no. Min:
//find max no. max:
let min=arr1[0];
let max=arr1[0];
for(let j=1;j<N;j++){
  if(min>arr1[j]){
    min=arr1[j];
  }else if(max<arr1[j]){
    max=arr1[j];
  }else{
    continue;
  }
}
console.log(min*max);
