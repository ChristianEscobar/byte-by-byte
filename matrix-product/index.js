// const { matrixProduct } = require('./matrix-product');
const { samsAnswer } = require('./sams-answer');
const { create2DArray } = require('./utils/two-d-array');

const matrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

const matrix2 = [
	[-1, 2, 3],
	[4, 5, -6],
	[7, 8, 9]
];

// const matrix3 = [
// 	[-1, 5, 6],
// 	[4, 5, -6],
// 	[7, 8, 9]
// ];

console.log(samsAnswer(matrix1));
console.log(samsAnswer(matrix2));
// console.log(matrixProduct(matrix2));
// console.log(matrixProduct(matrix3));
