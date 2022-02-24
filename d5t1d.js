// var a = [32,34,56,67,91,111,4,3,167,377,413,89,71,56,54,24];
// var b = [];

// let primenum = function (x){
//    for(let i = 2; i <= x; i++){
//        if(x % i ==0){
//          return false;
//        }
//        return true;
//    }
// }
// for(let j = 0; j < a.length; j++){
//   if(primenum(a[j])){
//     b.push(a[j]);
//   }
// }
// console.log(b);


(function () {
  var a = [13,24,1,88,97];
  var b = [];
  let y = function (x){
     for(let i = 2; i <= x; i++){
         if(x % i ==0){
           return false;
         }
         return true;
     }
  }
  for(let j = 0; j < a.length; j++){
    if(y(a[j])){
      b.push(a[j]);
    }
  }
  console.log(b);
})();
