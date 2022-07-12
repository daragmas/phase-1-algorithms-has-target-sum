function hasTargetSum(array, target) {
  // Write your algorithm here
  array.sort((a,b)=> a-b)
  for(var n = 0 ; n<(array.length/2);n++){
    for(var j = n+1; j<array.length;j++){
      if(array[n]+array[j]==target){return true}
    }
  }

  return false
}

/* 
  Write the Big O time complexity of your function here
  O(n) for the array.sort()
  O(n/2) for n for loop
  O(n) for j for loop

  O(n^3 / 2) total run time
*/

/* 
  Add your pseudocode here
  Sort array in numerical order
  starting with first value, check if any of the remaining values work for target
    if not, check the next value.
  if none of the values in the array add to target, return false
*/

/*
  Add written explanation of your solution here
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
}

module.exports = hasTargetSum;
