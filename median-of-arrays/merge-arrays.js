const mergeArrays = function(arr1, arr2) {
	let pos1 = 0;
	let pos2 = 0;
	const mergedArray = [];

	while (pos1 < arr1.length && pos2 < arr2.length) {
		if (arr1[pos1] === arr2[pos2]) {
			mergedArray.push(arr1[pos1]);
			mergedArray.push(arr2[pos2]);
			pos1++;
			pos2++;
		}
		if (arr1[pos1] < arr2[pos2]) {
			mergedArray.push(arr1[pos1]);
			pos1++;
		} else {
			mergedArray.push(arr2[pos2]);
			pos2++;
		}
	}

	if (pos1 < arr1.length) {
		mergedArray.push(...arr1.slice(pos1));
	}

	if (pos2 < arr2.length) {
		mergedArray.push(...arr2.slice(pos2));
	}

	return mergedArray;
};

module.exports = {
	mergeArrays
};
