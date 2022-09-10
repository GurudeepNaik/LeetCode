let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let N = parseInt(readLine());
let B = true
for (i = 0; i > N; i++) {
    A = parseInt(readLine());
    if (A === 1 || A < 1) {
        console.log("No")
    } else if (A > 1) {
        for (let i = 2; i < A; i++) {
            if (A % i == 0) {
                B = false;
                break;
            }
        }
        if (B) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }
}