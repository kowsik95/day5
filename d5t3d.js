(() => {
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
  