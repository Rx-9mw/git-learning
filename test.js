let firstString = 'simon';
let secondString = 'felicia';

function concatenateStrings(string_1, string_2){
  firstString = string_1.slice(-(string_1.length-1));
  secondString = string_2.slice(-(string_2.length-1));
  return firstString + secondString;
}

console.log(concatenateStrings(firstString, secondString));

num = 749;

function increasingSequence(num){
  arr_num = ('' + num).split('');
  for(i = 0; i < arr_num.length; i++){
    if(Number(arr_num[i]) >= Number(arr_num[i+1])){
      return false;
    }
  }
  return true;
}

console.log(increasingSequence(num));