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
		let prevElem = arr[idx - 1];
		resultKey = idx;
		if (idx === 0) {
			curSet.add(elem);
		} else {
			if (elem - prevElem === 0 || elem - prevElem === 1) {
				curSet.add(elem);
			} else {
				result[resultKey] = createResultObject(curSet);
				curSet = new Set();
				curSet.add(elem);
			}
		}
	});

	// Add any remaining Set
	if (curSet.size > 0) {
		result[++resultKey] = createResultObject(curSet);
	}

	return result;
};

const createResultObject = set => {
	const arr = Array.from(set);
	return {
		arr,
		len: arr.length
	};
};

module.exports = { consecutive };
