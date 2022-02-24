let a = ["malayalam","noon","rose","madam"];
let palindrome = [];

let b = function (x) {
    for(let i = 0; i < x.length ; i++){
        let pali = x[i].split("").reverse().join("");
        if(x[i] ===pali){ 
           palindrome.push(pali);
        }
    }
    console.log(palindrome);
}
b(a);



// (function () {
//     let a = ["malayalam","noon","rose","madam"];
// let palindrome = [];
//     for(let i = 0; i < a.length ; i++){
//         let pali = a[i].split("").reverse().join("");
//         if(a[i] ===pali){ 
//             palindrome.push(pali);
//         }
//     }
//     console.log(palindrome);
// })();


