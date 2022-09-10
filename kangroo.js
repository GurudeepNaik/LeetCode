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
function FindSnap(arr){
    let X1=arr[0];
    let V1=arr[1];
    let X2=arr[2];
    let V2=arr[3];
    if(V1<1 || V2 < 1 || X1<0 || X2<0){
        return ("NO");
    }
    while(X1<=10000 || X2<=10000){
      let Value1=X1+V1;
      let Value2=X2+V2
        if(Value1===Value2){
            return("YES");
        }
        X1+=V1;
        X2+=V2;
    }
    return ("NO");
}

let testCases=parseInt(readLine());
while(testCases>0){
    let arr=readLine().trim().split(" ").map(Number);
    console.log(FindSnap(arr));
    testCases--;
}