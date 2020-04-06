const samsAnswer = arr => {
	// Put all values into an object
	const values = {};
	arr.forEach(element => {
		values[element] = element;
	});

	// For each value, check if its the first in a sequence of consecutive
	// numbers and iterate through to find the length of the consecutive
	// sequence
	let maxLength = 0;
	for (let i in values) {
		// If it is not the leftmost value in the sequence, don't bother
		if (values.hasOwnProperty((i - 1).toString())) {
			continue;
		}
		let length = 0;
		while (values.hasOwnProperty((i++).toString())) {
			length++;
		}
		maxLength = Math.max(maxLength, length);
	}

	return maxLength;
};

module.exports = { samsAnswer };
