const dups = arr => {
	const results = [];

	if (arr.length === 0) {
		return results;
	}

	const dupsMap = {};

	// Fill in counts
	for (let element of arr) {
		if (dupsMap.hasOwnProperty(element)) {
			dupsMap[element]++;
		} else {
			dupsMap[element] = 1;
		}
	}

	// Loop thru counts object and add those with count > 1 to results
	for (let key in dupsMap) {
		if (dupsMap[key] > 1) {
			results.push(key);
		}
	}

	return results;
};

module.exports = {
	dups
};
