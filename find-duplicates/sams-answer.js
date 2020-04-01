const samsAnswer = arr => {
	if (arr.length === 0) {
		return [];
	}
	const dupsSet = new Set();

	for (let value of arr) {
		// Convert the value into an index (1 <= x <= len(arr))
		const index = Math.abs(value) - 1;

		// If the value at that index is negative, then we've already seen
		// that value so it's a duplicate.  Otherwise, negate the value at
		// that index so we know we've seen it
		// We are guaranteed the array will not contain negative values
		if (arr[index] < 0) {
			dupsSet.add(Math.abs(value));
		} else {
			arr[index] = -arr[index];
		}
	}

	// Return the array to it's original state
	arr.forEach((element, index) => {
		arr[index] = Math.abs(element);
	});

	return Array.from(dupsSet);
};

module.exports = {
	samsAnswer
};
