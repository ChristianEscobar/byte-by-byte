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

	let subarray1 = [];
	let subarray2 = [];
	if (median1 === median2) {
		return median1;
	} else if (median1 > median2) {
		// grab left side of array 1
		// grab right side of array 2
		if (arr1.length % 2 === 0) {
			// even number of elements in array
			subarray1 = subarray(arr1, 0, midpoint1 + 2);
			subarray2 = subarray(arr2, midpoint2, arr2.length);
		} else {
			// odd number of elements in array
			subarray1 = subarray(arr1, 0, midpoint1 + 1);
			subarray2 = subarray(arr2, midpoint2, arr2.length);
		}
	} else {
		// grab left side of array 2
		// grab right side of array 1
		if (arr1.length % 2 === 0) {
			// even number of elements in array
			subarray2 = subarray(arr2, 0, midpoint2 + 2);
			subarray1 = subarray(arr1, midpoint1, arr1.length);
		} else {
			// odd number of elements in array
			subarray2 = subarray(arr2, 0, midpoint2 + 1);
			subarray1 = subarray(arr1, midpoint1, arr1.length);
		}
	}

	return medianOfArrays(subarray1, subarray2);
};

module.exports = { medianOfArrays };