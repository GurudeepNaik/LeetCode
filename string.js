var restoreString = function(s, indices) {
    let arr=Array(indices.length);
    for(let i=0;i<indices.length;i++){
        arr[indices[i]]=s[i];
    }
    arr=arr.join("")
    return arr;
};
let s = "codeleet"
let indices = [4,5,6,7,0,2,1,3];
restoreString(s,indices);