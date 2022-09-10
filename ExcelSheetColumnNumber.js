var titleToNumber = function(columnTitle) {
    let i=0;
    let Value=0;
    for(let J=columnTitle.length-1;J>=0;J--){
      // console.log(Value);
      // console.log(26**i);
      Value+=(26**i)*(columnTitle.charCodeAt(J)-64);
      i++;
    }
    return Value;
};
let columnTitle="ZYAB"
console.log(titleToNumber(columnTitle));