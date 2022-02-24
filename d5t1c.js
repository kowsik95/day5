// let a = [1,2,3,4,5];

// let b = function(x){
//     let sum = 0;
//     let c=[];
//     for(i =0;i <=x.length;i++){
//         sum+=i;
//     }
//     c.push(sum)
//     console.log(c);
// }(a);

(function(){
    let a=[1,2,3,4,5];
    let sum = 0;
    let c=[];
    for(i =0;i <=a.length;i++){
        sum+=i;
    }
    c.push(sum)
    console.log(c);
})();