const { medianOfArrays } = require('../medianOfArrays');

describe('medianOfArrays.js', () => {
	test('#1 Calculates correct average', () => {
		const arr1 = [1, 3, 5];
		const arr2 = [2, 4, 6];
		const expected = 3.5;

		const result = medianOfArrays(arr1, arr2);
		expect(result).toBe(expected);
	});

	test('#2 Calculates correct average', () => {
		const arr1 = [1];
		const arr2 = [2];
		const expected = 1.5;

		const result = medianOfArrays(arr1, arr2);
		expect(result).toBe(expected);
	});

	test('#2 Calculates correct average', () => {
		const arr1 = [1, 5];
		const arr2 = [2, 6];
		const expected = 3.5;

		const result = medianOfArrays(arr1, arr2);
		expect(result).toBe(expected);
	});

	test('#3 Returns null when arrays not of equal length', () => {
		const arr1 = [1, 4, 5, 7];
		const arr2 = [2, 3];

		const result = medianOfArrays(arr1, arr2);
		expect(result).toBe(null);
	});
});
