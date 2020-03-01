/**
 * Find the median of two arrays
 * arr1 = [1, 3, 5]
 * arr2 = [2, 4, 6]
 * median(arr1, arr2) = 3.5
 */

const median = function(arr1, arr2) {
	const reducer = (val, accum) => val + accum;
	let sum = arr1.reduce(reducer);
	sum += arr2.reduce(reducer);

	return sum / (arr1.length + arr2.length);
};

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(`Merged --> ${mergeArrays(arr1, arr2)}`);
