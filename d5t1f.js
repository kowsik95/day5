// let arr1 = [1,2,3,40,51];
// let arr2 = [38,44,5,6,7];

// let newarr = function (x,y){

//     let Newarr1 = x.concat(y);
//     let midpoint = Newarr1.length/2 - 1;
//     let midpoint2 = midpoint + 1;
   
//     let median = Newarr1[midpoint]+Newarr1[midpoint2];
//     console.log(median);
// }(arr1,arr2)


(function (){
    let arr1 = [981,24,113,40,61];
     let arr2 = [38,44,5,6,7];
    let Newarr1 = arr1.concat(arr2);
    let midpoint = Newarr1.length/2 - 1;
    let midpoint2 = midpoint + 1;
   
    let median = Newarr1[midpoint]+Newarr1[midpoint2];
    console.log(median);
})();