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

const numberArray = [1, 2, 3, 4, 5, 6, 7];

function Sort(arr, number) {
  leftIndex = 0;
  rightIndex = arr.length -1

  for(let i = 0; i < arr.length; i++){
    let middleIndex = Math.floor((leftIndex + rightIndex)/2)
    if(arr[middleIndex] === number) return middleIndex;
    if(arr[middleIndex] < number){
      leftIndex = middleIndex+1
    }else if(arr[middleIndex] > number){
      rightIndex = middleIndex-1
    }
    return -1;
  }
}

console.log(Sort(numberArray, 6));

const users = [
  { firstName: "A", lastName: "LA", age: 26},
  { firstName: "B", lastName: "LB", age: 75},
  { firstName: "C", lastName: "LC", age: 50},
  { firstName: "D", lastName: "LD", age: 26}
]

const overThrity = users.reduce((acc, curr) => {
  if(curr.age < 30){
    acc.push(curr.firstName);
  }
  return acc;
}, []);

const overThirtyChain = users.filter((x) => x.age < 30).map((x) => x.firstName);
/*
for(i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 7 === 0){
    console.log('Fizzbuzz')
  }else if(i % 3 === 0){
    console.log('Fizz')
  }else if(i % 7 === 0){
    console.log('Buzz')
  } else {
    console.log(i);
  }
}

do{
 let i = 1
 console.log('do while: ' + i)
}while(i === 0)

while(i === 0){
  let i = 1
  console.log('while: ' + i)
}
*/