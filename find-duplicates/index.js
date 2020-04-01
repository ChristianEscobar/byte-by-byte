const { dups } = require('./find-duplicates');
const { samsAnswer } = require('./sams-answer');

console.log(dups([]));
console.log(samsAnswer([]));
console.log('---------------------');
console.log(dups([1, 2, 3]));
console.log(samsAnswer([1, 2, 3]));
console.log('---------------------');
console.log(dups([1, 2, 2]));
console.log(samsAnswer([1, 2, 2]));
console.log('---------------------');
console.log(dups([3, 3, 3]));
console.log(samsAnswer([3, 3, 3]));
console.log('---------------------');
console.log(dups([2, 1, 2, 1]));
console.log(samsAnswer([2, 1, 2, 1]));
