
let a = "the earth is a living planet";
let titlecaps=((x) => {
    
    x=x.toLowerCase();
    x=x.split(' ');
    for(i = 0;i < x.length;i++){
        x[i] = x[i].charAt(0).toUpperCase()+x[i].slice(1);
    }
    console.log(x);
})(a);