
// TASK 1

// a leader is an element that occurs at more than 50% of positions of an array
// write a function that will check if an arbitrary array of integers passed as a parameter has a leader
// below is a sample of an array with and without a leader
// you are allowed to use any additional data structures you find necessary
// if you can, discuss the computational and memory complexity of the solution
 
// const leaderlessArray = [1, 6, 5, 3, 5, 9, 18, 5, 7, 2];
// const arrayWithLeader = [5, 1, 3, 5, 5, 5, 11, 5, 2, 5];

// function hasLeader(input) {
//  const numbers = {};
//  let max = 0;
 
//  for(let i = 0; i < input.length; i++){
//    if(numbers[input[i]]){
//      numbers[input[i]]++;
//    } else {
//      numbers[input[i]] = 1;
//    }
//  }
 
//  for(const [keys, values] of Object.entries(numbers)){
//    if(values > input.length/2){
//      return true;
//    }
//  }
//  return false;
//  // Object.keys , Object.entries
// }

// console.log(hasLeader(leaderlessArray))
// console.log(hasLeader(arrayWithLeader))

// TASK 2

// write a function that given an array and an integer number will return two indexes such as the sum
// of elements of the array on these two positions is equal to the number (or false if such indexes do
// not exist)
//
// bonus points for a solution with the lowest computational complexity


const input1 = [7, 2, 3, 1, 5, 6] // sum = 6, solution = 3, 4

const input2 = [5, 11, 7, 8, 14, 4, 9] // sum = 20, solution = 1, 6

function twoSum(input, sum) {
  for(let i = 0; i < input.length; i++){
      let j = i + 1;
      console.log(i + ' ' + j);
      if(input[i] + input[j] === sum){
        return i + ' ' + j
      }
  }
  return false;
}

//console.log(twoSum(input1, 6))
console.log(twoSum(input2, 20))

