// let arr = [1,2,32,1,4,5,7,0];
//   let k = 5;

// const rotateArray1 = function(nums, k) {

//     for (let i = 0; i < k; i++) {
//         let d = nums[nums.length-1];
//         nums.pop();
//         nums.splice(0,0,d);
//     }
//     console.log(nums);
//   }(arr,k)
  
  let arr = [1,2,32,1,4,5,7,0];
  let k = 5;

(function(nums, k) {

    for (let i = 0; i < k; i++) {
        let d = nums[nums.length-1];
        nums.pop();
        nums.splice(0,0,d);
    }
    console.log(nums);
  })(arr,k)
  
