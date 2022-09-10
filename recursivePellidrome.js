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
function isPelindrome(C,Sp,Ep){
  let flag=1;
if(Sp>Ep){
  return flag=0;
}else{
  if(C[Sp]===C[Ep]){
    flag =1;
  }else{
   
  }
}
}


let testCase=parseInt(readLine());
for(let i=0;i<testCase;i++){
  let N=readLine();
  let C=N.split("");
  console.log(isPelindrome(C,0,C.length-1));
}