'use strict';
const { matrixProduct } = require('../matrix-product');

describe('matrix-product.js', () => {
	test('#1 returns correct path', () => {
		const matrix = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9]
		];
		const expectedPath = '1 -> 4 -> 7 -> 8 -> 9';
		const expectedValue = 2016;
		const result = matrixProduct(matrix, 0, 0);
		expect(result.path).toEqual(expectedPath);
		expect(result.product).toEqual(expectedValue);
	});

	test('#2 returns correct path', () => {
		const matrix = [
			[0, 5, 3],
			[4, 8, 6],
			[7, 1, 9]
		];
		const expectedPath = '0 -> 5 -> 8 -> 6 -> 9';
		const expectedValue = 0;
		const result = matrixProduct(matrix, 0, 0);
		expect(result.path).toEqual(expectedPath);
		expect(result.product).toEqual(expectedValue);
	});

	test('#3 returns correct path', () => {
		const matrix = [
			[-1, 2, 3],
			[4, 5, -6],
			[7, 8, 9]
		];
		const expectedPath = '-1 -> 4 -> 7 -> 8 -> 9';
		const expectedValue = -2016;
		const result = matrixProduct(matrix, 0, 0);
		expect(result.path).toEqual(expectedPath);
		expect(result.product).toEqual(expectedValue);
	});
});
