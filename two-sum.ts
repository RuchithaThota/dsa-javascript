console.log("Hello World");

/* The given statement is describing a problem where you are provided with an array of integers
(`nums`) and an integer (`target`). The task is to find two numbers in the array that add up to the
target value. The solution should return the indices of these two numbers. */

const arr = [3, 3];
const target = 6;

// Brut Force solution time-O(n2),space-O(1)
const brutForceTwoSum = () => {
  for (let i = 0; i < arr.length; i++) {
    const num = target - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === num) {
        return [i, j];
      }
    }
  }
};

const brutForceOutput = brutForceTwoSum();
console.log(brutForceOutput);

// Optimized solution time-O(n),space-O(1)
const twoSum = () => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let num = target - arr[i];
    if (map[num] !== undefined) {
      return [i, map[num]];
    }
    map[arr[i]] = i;
  }
};

const output = twoSum();
console.log(output);
