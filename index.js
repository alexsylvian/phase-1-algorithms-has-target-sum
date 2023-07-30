function hasTargetSum(array, target) {
  let numSet = new Set()

  for (const num of array) {
    let dif = target - num
    if (numSet.has(dif)) {
      return true
    }
    numSet.add(num)
  }
  return false
}


/* 
  Big O Notation is O(n+2), so O(n), which is LINEAR TIME
*/

/* 
  create an empty set to store seen numbers

  iterate over each number in the array
  subtract each number from the target sum
  check if the difference has a matching number in the array
    if the difference has a matching number in the array, return true
    if the difference does not have a matching number in the array, return false
*/

/*
// function hasTargetSum(array, target) {
//   const numSet = new Set() => creates an empty set to push matching numbers to. I need to do this so 

//   for (const num of array) {
//     const difference = target - num
//     if (numSet.has(difference)) {
//       return true
//     }
//     numSet.add(num);
//   }
//   return false
// }

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 8));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 5], 7));
}

module.exports = hasTargetSum;

// function hasTargetSum(array, target) {
//   const numSet = new Set()

//   for (const num of array) {
//     const difference = target - num
//     if (numSet.has(difference)) {
//       return true
//     }
//     numSet.add(num);
//   }
//   return false
// }

// function hasTargetSum(array, target) {
//   for (const num of array) {
//     let dif = target - num
//     if (array.includes(dif)) {
//       return true;
//     }
//   }
//   return false
// }

