var fruits = ['apple','banana','orange','grapes','mango'];
const newFruits = fruits.slice(1,4); //include 1, exclude 4

console.log(newFruits) //Result: [ 'banana', 'orange', 'grapes' ]

const newFruitsWithStart = fruits.slice(1);
//[ 'banana', 'orange', 'grapes', 'mango' ]
console.log(newFruitsWithStart);

const negIndexFruits = fruits.slice(-2);
//[ 'grapes', 'mango' ]
console.log(negIndexFruits);

const copyWithSlice = fruits.slice();
//[ 'apple', 'banana', 'orange', 'grapes', 'mango' ]
console.log(copyWithSlice);

const sentence = 'The quick brown fox jumps over the lazy dog';

// Extract words from index 4 to 9
const slicedWords = sentence.split(' ').slice(4, 10);
console.log(slicedWords);
// Result: slicedWords = ['fox', 'jumps', 'over', 'the', 'lazy']
