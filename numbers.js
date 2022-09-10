let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let N = parseInt(readLine());
let arr1 = [];
for (let i = 0; i < N; i++) {
    arr1.push(parseInt(readLine()));
}
let count=1;
let flag=0;
for(let j=1;j<N;j++){
	if(arr1[j]==arr1[j-1]){
		count += 1;
		if(count==4){
			console.log(arr1[j-1]);
			flag=1;
      break;
		}
	}else{
    count=1;
  }
}
if(flag==0){
console.log(-1);
}