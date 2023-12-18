const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth(); // 0-indexed (0 = January, 1 = February, ..., 11 = December)
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

console.log(`${year}-${month + 1}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`);
