// KATA 1
//  https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
function sumCubes(n){
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    console.log(i)
    sum += Math.pow(i,3);
  }
  return sum;
}

console.log(sumCubes(2))
console.log(sumCubes(3))

// KATA 2 
// https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript
function toNumberArray(arr){
  return arr.map(val => Number(val))
}

console.log(toNumberArray(["1.1","2.2","3.3"])) 

// KATA 3
//  https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript
function removeUrlAnchor(url){
  return url.replace(/#.*/, '')
}

console.log(removeUrlAnchor('www.codewars.com/katas/'))
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'))

// KATA 4
// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5
function reverseNumber(n) {
  let num =  parseInt(n.toString().split('').reverse().join(''), 10);
  return Math.sign(n) * num;
}

console.log(reverseNumber(123))
console.log(reverseNumber(4321234))
console.log(reverseNumber(-123))

// KATA 5
// https://www.codewars.com/kata/5a4b16435f08299c7000274f/train/javascript
const sumSquareEvenRootOdd = ns => {
  const array = [];
  ns.forEach(val => {
    return val % 2 === 0 ?  array.push(Math.pow(val, 2)) : array.push(Math.sqrt(val));
  })
  return +(array.reduce((ttl, cv) => ttl + cv, 0)).toFixed(2);
  
};

console.log(sumSquareEvenRootOdd([4,5,7,8,1,2,3,0]))
console.log(sumSquareEvenRootOdd([2,2,3,3]))




