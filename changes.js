const people = [
  {
    name: 'laptop',
    price: 1000,
    count: 5
  }, {
    name: 'desktop',
    price: 1500,
    count: 2
  }, {
    name: 'phone',
    price: 500,
    count: 10
  }
];

const obj = {
  allItemNames: '',
  fullCount: 0,
  fullPrice: 0
};

people.forEach((item) => {
  if(!obj[item.name]){
    obj.allItemNames += item.name + ' '
    obj.fullCount += item.count;
    obj.fullPrice += item.price * item.count;
  }
});

console.log(obj);

const numberArray = [1, 2, 3, 4, 5, 6, 7];

function Sort(arr, number) {
  firstIndex = 0;
  lastIndex = arr.length - 1;
  while(firstIndex <= lastIndex){
    middleIndex = Math.floor((firstIndex + lastIndex)/2);
    if(arr[middleIndex] === number) return middleIndex;
    if(arr[middleIndex] < number){
      firstIndex = middleIndex + 1;
    } else {
      lastIndex = middleIndex - 1;
    }
  }
  return -1; 
}

console.log(Sort(numberArray, 6));