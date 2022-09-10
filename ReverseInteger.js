/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  x = x.toString().trim();
  let NewX = "";
  for (let i = x.length - 1; i >= 0; i--) {
    if (i === 0) {
        if(x[i] === "-"){
            NewX=parseInt(NewX) * -1;
        }else{
            NewX += x[i];
            NewX=parseInt(NewX);
        }
      break;
    }
    NewX += x[i];
  }
  if(NewX<2**31 && NewX>(2**31)*(-1)){
      return NewX;
  }else{
    return 0;
  }
};

x = -123;
console.log(reverse(x));
