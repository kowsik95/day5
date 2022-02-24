let a = ["malayalam","noon","rose","madam"];
let palindrome = [];

let b = ((x) => {
    for(let i = 0; i < x.length ; i++){
        let pali = x[i].split("").reverse().join("");
        if(x[i] ===pali){ 
           palindrome.push(pali);
        }
    }
    console.log(palindrome);
})
(a);