let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in  formatstring
let N=readLine().trim().split("");
let R_COunt=0;
let J_Count=0;
for(let i=0;i<N.length;i++){
  if(N[i]==="R"){
    R_COunt++;
  }else if(N[i]==="G"){
    J_Count++;
  }
}
console.log(Math.min(R_COunt,J_Count));