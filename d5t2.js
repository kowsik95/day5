// Functions warmup

// var num = 10;
// function addFive(num) { 
//    return num+5;
// }
// var result = addFive(num);
// console.log(result);

// var num = 10;
// function addFive(num) { 
//    return num+0;
// }
// var result = addFive(num);
// console.log(result);

// var num = 10;
// function addFive(num) { 
//    return num-5;
// }
// var result = addFive(num);
// console.log(result);

// var num = 5;
// function getOpposite(num) {
// return num-10;
// }
// var result = getOpposite(num);
// console.log(result);


// var num = 5;
// function getOpposite(num) {
//   return -num;
// }
// var result = getOpposite(num)
// console.log(result);

// var num = 5;
// function getOpposite(num) {
//    return num - 5;
// }
// var result = getOpposite(num);
// console.log(result);

// var num = 5;
// function getOpposite(num) {
//   return 10-num;
// }
// var result = getOpposite(num);
// console.log(result);


// function toSeconds(min) {
//   return min * 60;
// }
// var secs = toSeconds(5);
// console.log(secs);

// var secs =toSeconds(3);
// console.log(secs);

// var secs = toSeconds(2);
// console.log(secs);

// function toInteger(mystr){
//     let integer = +(mystr);
//     return integer;
// }
// var myInt1= toInteger("6");
// console.log(myInt1);

// var myInt2 = toInteger("1000");
// console.log(myInt2);

// var myInt3 = toInteger("12");
// console.log(myInt3);

// function nextNumber(myint) {
//         return myint + 1;
// }
// var myNextint1 = nextNumber(0);
// console.log(myNextint1);

// var myNextint2 = nextNumber(9);
// console.log(myNextint2);

// var myNextint3 = nextNumber(-3);
// console.log(myNextint3);


// function getFirstElement(arr) {
//    return arr[0];
// }
// var data1 = getFirstElement([1, 2, 3]);
// console.log(data1);

// var data1 = getFirstElement([80, 5, 100]);
// console.log(data1);

// var data1 = getFirstElement([-500, 0, 50]);
// console.log(data1);


// function hoursToseconds(a){
//      return a * 3600;
// }
// var hour1 = hoursToseconds(2);
// console.log(hour1);

// var hour2 = hoursToseconds(10);
// console.log(hour2);

// var hour2 = hoursToseconds(24);
// console.log(hour2);


// function toFindperimeter(h,w){
//         let peri = 2*(h+w);
//         return peri;
// }
// var perimeter1 = toFindperimeter(6,7);
// console.log(perimeter1);

// var perimeter2 = toFindperimeter(20,10);
// console.log(perimeter2);

// var perimeter3 = toFindperimeter(2,9);
// console.log(perimeter3);

// function lessThan100(num1,num2) {
//       let num = num1 + num2;
//       if(num < 100){
//         return true;
//       }else{
//         return false;
//       }
// }
// var res1 = lessThan100(22,15);
// console.log(res1);

// var res2 = lessThan100(83,34);
// console.log(res2);

// function remainder(num1,num2) {
//   let num = num1 % num2;
//   return num;
// }
// var res1 = remainder(1,3);
// console.log(res1);

// var res2 = remainder(3,4);
// console.log(res2);

// var res3 = remainder(-9,45);
// console.log(res3);

// var res4 = remainder(5,5);
// console.log(res4);

// function CountAnimals(tur,horse,pigs) {
//      let x = tur * 2;
//      let y = horse * 4;
//      let z = pigs * 4;
//      let totalLegs = x + y + z;
//      return totalLegs;
// }
// var legs1 = CountAnimals(2,3,5);
// console.log(legs1);

// var legs2 = CountAnimals(1,2,3);
// console.log(legs2);

// var legs3 = CountAnimals(5,2,8);
// console.log(legs3);

// function frames(num1,num2) {
//        let num = (num1 * 60) * (num2 * 60);
//        let numOfframes = num /60;
//        return numOfframes;
// }
// var fps1 = frames(1,1)
// console.log(fps1);

// var fps2 = frames(10,1)
// console.log(fps2);

// var fps3 = frames(10,25)
// console.log(fps3);

// function divisibleByFive(num1) {
//    if(num1 % 5 == 0){
//      return true;
//    }else{
//      return false;
//    }
// }
// var divisible1 = divisibleByFive(5);
// console.log(divisible1);

// var divisible2 = divisibleByFive(-55);
// console.log(divisible2);

// var divisible3 = divisibleByFive(37);
// console.log(divisible3);


// function isEven(num){
//    if(num % 2 === 0){
//      return true;
//    }else{
//      return false;
//    }
//  }
//  var even1 = isEven(12);
//  console.log(even1);

//  var even2 = isEven(0);
//  console.log(even2);

//  var even3 = isEven(11);
//  console.log(even3);

//  var even4 = isEven("11a");
//  console.log(even4);


// function areBothOdd(num1, num2){
//     if(num1 % 2 !== 0 && num2 % 2 !== 0){
//            return true; 
//     }else{
//         return false;
//     }
// }
// var odd1 = areBothOdd(1,3);
// console.log(odd1);

// var odd2 = areBothOdd(1,4);
// console.log(odd2);

// var odd3 = areBothOdd(2,4);
// console.log(odd3);

// var odd4 = areBothOdd(0,0);
// console.log(odd4);


// function getFullName(firstName, lastName){
//         return firstName + " " + lastName; 
// }
// let FullName1 = getFullName("GUVI","GEEK");
// console.log(FullName1);

// let FullName2 = getFullName("GUVI","");
// console.log(FullName2);

// let FullName3 = getFullName(" ","GEEK");
// console.log(FullName3);

// let FullName4 = getFullName("","");
// console.log(FullName4);


// function getLengthOfWord(word1){
//     if(typeof(word1) == "string"){
//         let a = word1.length;
//         return a;
//     }else{
//         return -1;
//     }
// }
// let length1 = getLengthOfWord("GUVI");
// console.log(length1);

// let length2 = getLengthOfWord("");
// console.log(length2);

// let length3 = getLengthOfWord();
// console.log(length3);

// let length4 = getLengthOfWord(9);
// console.log(length4);

// function isSameLength(a,b){
//     let length1 = a.length;
//     let length2 = b.length;
//     if(length1 = length2){
//         return true;
//     }else{
//         return false;
//     }
// }
// let lengthCompare = isSameLength("hi","to");
// console.log(lengthCompare)


// function getDistance(x1, y1, x2, y2)
// {
//     let x = x1 * x2/y1 * y2;
//     return x;
// }
// console.log(getDistance(100, 100, 400, 300));

// function getNthElement(array,n){
//     if(array[1] == 3){
//         return array[1];
//     }else if(array.length == 0){
//          return undefined;
//     }else{
//         return n;
//     }
//    }
//    let result = getNthElement([1,3,5],1);
//    console.log(result);

// function getLastElement(array){
//     let a = array[array.length-1];
//     console.log(a);
//    }
//    getLastElement([1, 2, 3, 4])

// var obj = {
//     mykey: "value"
//    };
//    function getProperty(obj, key) {
//         return obj.key;
//    }
//    getProperty(obj,'mykey')
//    getProperty(obj,'dummykey')
//    console.log(obj);

// var obj = {
//     mykey: "value"
//    };
//    function addProperty(obj, key){
//        obj.key = true;
//         return obj;
//     }
//     addProperty(obj, "mykey");
//     console.log(obj);

// let obj = {};
// function removeProperty(obj, key){
//     return obj.key;
//    }
//    removeProperty(obj,"name");
//    console.log(obj);

