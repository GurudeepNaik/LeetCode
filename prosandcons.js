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
let testCase=parseInt(readLine());
while(testCase--){
    let q=parseInt(readLine());
    let Sum=[];
    let Sum1=0;
    while(q--){
        let arr=readLine().split(" ").map(Number);
        Sum.push(arr[0]+arr[1]);
        Sum1+=arr[1];
    }
    // Sum=mergeSort(Sum);
    Sum=Sum.sort((a,b)=>{
        if(a<b){
            return +1;
        }else{
            return -1;
        }
    })
    let result=Sum[0]+Sum[1]-Sum1;
    console.log(result);
}