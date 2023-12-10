const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const concatenatedArray1 = array1.concat(array2);
console.log(concatenatedArray1);
// Result: concatenatedArray = [1, 2, 3, 'a', 'b', 'c']

/* --- Using Spread Operator --- */
const array3 = [1, 2, 3];
const array4 = ['a', 'b', 'c'];
const concatenatedArray2 = [...array3, ...array4];
console.log(concatenatedArray2);
// Result: concatenatedArray = [1, 2, 3, 'a', 'b', 'c']

/* --- Using push() method --- */
const array5 = [1, 2, 3];
const array6 = ['a', 'b', 'c'];

for (const element of array6) {
  array5.push(element);
}
console.log(array5);
// Result: array5 = [1, 2, 3, 'a', 'b', 'c']


/* Using Array.from() method: */
const array7 = [1, 2, 3];
const array8 = ['a', 'b', 'c'];
const concatenatedArray3 = Array.from(array7).concat(array8);
// Result: concatenatedArray = [1, 2, 3, 'a', 'b', 'c']
console.log(concatenatedArray3);


