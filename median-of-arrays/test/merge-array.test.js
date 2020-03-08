const { mergeArrays } = require('../merge-arrays.js/index.js');

describe('merge-array.js', () => {
	it('should merge two arrays with distinct values', () => {
		const arr1 = [1, 3, 5, 7];
		const arr2 = [2, 4, 6, 8];
		const expected = [1, 2, 3, 4, 5, 6, 7, 8];
		const mergedArray = mergeArrays(arr1, arr2);

		expect(mergedArray).toEqual(expect.arrayContaining(expected));
		expect(mergedArray.length).toEqual(8);
	});

	it('should merge two arrays with containing same values', () => {
		const arr1 = [1, 3, 5, 7];
		const arr2 = [2, 4, 5, 6, 8];
		const expected = [1, 2, 3, 4, 5, 5, 6, 7, 8];
		const mergedArray = mergeArrays(arr1, arr2);

		expect(mergedArray).toEqual(expect.arrayContaining(expected));
		expect(mergedArray.length).toEqual(9);
	});

	it('should merge two arrays when one array is shorter than the other', () => {
		const arr1 = [1, 3, 5, 7];
		const arr2 = [2];
		const expected = [1, 2, 3, 5, 7];
		const mergedArray = mergeArrays(arr1, arr2);

		expect(mergedArray).toEqual(expect.arrayContaining(expected));
		expect(mergedArray.length).toEqual(5);
	});

	it('should merge two arrays when one array contains the same value repeatedly', () => {
		const arr1 = [1, 3, 5, 7];
		const arr2 = [2, 2, 2, 2, 2, 2, 2];
		const expected = [1, 2, 2, 2, 2, 2, 2, 2, 3, 5, 7];
		const mergedArray = mergeArrays(arr1, arr2);

		expect(mergedArray).toEqual(expect.arrayContaining(expected));
		expect(mergedArray.length).toEqual(11);
	});
});
