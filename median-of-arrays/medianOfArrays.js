const medianOfArrays = function(arr1, arr2) {
	const finalMedian = function(arr1, arr2) {
		const val1 = Math.min(arr1[0], arr2[0]);
		const val2 = Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1]);

		return (val1 + val2) / arr1.length;
	};

	const subarrayMedian = function(arr, mid) {
		if (arr.length % 2 === 0) {
			// is even
			return (arr[mid] + arr[mid + 1]) / 2;
		}

		// for odd return the value at the midpoint
		return arr[mid];
	};

	const midPoint = function(arr) {
		return Math.floor((arr.length - 1) / 2);
	};

	const subarray = function(arr, start, end) {
		return arr.splice(start, end);
	};

	/**
	 * Each array object contains the array as well as the midpoint
	 */
	const buildSubArrays = function(arr1Obj, arr2Obj, arr1GoLeft) {
		// grab left side of array 1
		// grab right side of array 2
		if (arr1Obj.arr.length % 2 === 0) {
			// even number of elements in array
			if (arr1GoLeft) {
				subarray1 = subarray(arr1Obj.arr, 0, arr1Obj.midpoint + 2);
				subarray2 = subarray(arr2Obj.arr, arr2Obj.midpoint, arr2Obj.arr.length);
			} else {
				subarray2 = subarray(arr2Obj.arr, 0, arr2Obj.midpoint + 2);
				subarray1 = subarray(arr1Obj.arr, arr1Obj.midpoint, arr1Obj.arr.length);
			}
		} else {
			// odd number of elements in array
			if (arr1GoLeft) {
				subarray1 = subarray(arr1Obj.arr, 0, arr1Obj.midpoint + 1);
				subarray2 = subarray(arr2Obj.arr, arr2Obj.midpoint, arr2Obj.arr.length);
			} else {
				subarray2 = subarray(arr2Obj.arr, 0, arr2Obj.midpoint + 1);
				subarray1 = subarray(arr1Obj.arr, arr1Obj.midpoint, arr1.length);
			}
		}

		return {
			subarray1,
			subarray2
		};
	};

	// Start here
	if (arr1.length != arr2.length) {
		return null;
	}

	if (arr1.length === 1) {
		return (arr1[0] + arr2[0]) / 2;
	}

	if (arr1.length === 2) {
		return finalMedian(arr1, arr2);
	}

	let midpoint1 = midPoint(arr1);
	let midpoint2 = midPoint(arr2);
	let median1 = subarrayMedian(arr1, midpoint1);
	let median2 = subarrayMedian(arr2, midpoint2);

	let subarrayObj = {};

	if (median1 === median2) {
		return median1;
	} else if (median1 > median2) {
		// grab left side of array 1
		// grab right side of array 2
		subarrayObj = {
			...buildSubArrays(
				{ arr: arr1, midpoint: midpoint1 },
				{ arr: arr2, midpoint: midpoint2 },
				true
			)
		};
	} else {
		// grab left side of array 2
		// grab right side of array 1
		subarrayObj = {
			...buildSubArrays(
				{ arr: arr1, midpoint: midpoint1 },
				{ arr: arr2, midpoint: midpoint2 },
				false
			)
		};
	}

	return medianOfArrays(subarrayObj.subarray1, subarrayObj.subarray2);
};

module.exports = { medianOfArrays };
