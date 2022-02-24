// let arr = [1,2,3,1,2,3];

// let dupli = function(x){
//     let newarr = [...new Set(x)];
//     return newarr;
// }(arr)
// console.log(dupli);

let arr = [1,2,3,1,2,3];
(function(x){
    let newarr = [...new Set(x)];
    console.log(newarr);
})(arr)
