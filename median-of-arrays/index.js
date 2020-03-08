/**
 * Find the median of two arrays
 * arr1 = [1, 3, 5]
 * arr2 = [2, 4, 6]
 * median(arr1, arr2) = 3.5
 *
 * For the array with higher median, median of two is in the lesser half
 * For the array with lesser median, median of two is in the higher half
 *
 * If array length is even, make sure to include one over the middle point
 *
 * When arrays of length 2 are reached, take the min() of first two elements
 * and the max() of the last two elements
 *
 */
const { mergeArrays } = require('./merge-arrays');
const { medianOfArrays } = require('./medianOfArrays');

/**
 * The Brute Force approach is as follows
 * 1. Merge both arrays
 * 2. Sum up the values
 * 3. Divide the sum by the total number of values
 */
// const median = function(arr1, arr2) {
// 	const mergedArray = mergeArrays(arr1, arr2);
// 	const median =
// 		mergedArray.reduce((val, accum) => val + accum) / mergedArray.length;
// 	return median;
// };

/**
 * The optimized solution is a O(log n)
 * By executing an approach similar to binary search.
 */
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(medianOfArrays(arr1, arr2));
