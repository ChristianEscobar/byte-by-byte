'use strict';

const consecutive = arr => {
	if (arr.length === 0) {
		return null;
	}

	let curSet = new Set();
	const result = {};
	let resultKey = 0;

	arr.sort();
	arr.forEach((elem, idx) => {
		resultKey = idx;
		if (idx === 0) {
			curSet.add(elem);
		} else {
			if (elem - arr[idx - 1] === 0 || elem - arr[idx - 1] === 1) {
				curSet.add(elem);
			} else {
				result[resultKey] = Array.from(curSet);
				curSet = new Set();
				curSet.add(elem);
			}
		}
	});

	// Add any remaining Set
	if (curSet.size > 0) {
		result[++resultKey] = Array.from(curSet);
	}

	console.log(result);
};

module.exports = { consecutive };
