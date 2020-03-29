'use strict';
const { create2DArray } = require('./utils/two-d-array');

const samsAnswer = function(matrix) {
	if (matrix.length === 0 || matrix[0].length === 0) {
		return 0;
	}

	// Create cache of min and max product to a given cell
	const maxCache = create2DArray(matrix);
	const minCache = create2DArray(matrix);

	// Fill caches.  We start at the top left and iteratively find the greatest
	// at smallest path to each subsequent cell by considering the greatest and
	// smallest path to the cells above and to the left of the current cell
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			let maxVal = Number.MIN_SAFE_INTEGER; // Max is set to min
			let minVal = Number.MAX_SAFE_INTEGER; // Min is set to max

			// If you're in the top left corner, just copy to cache
			if (i === 0 && j === 0) {
				maxVal = matrix[i][j];
				minVal = matrix[i][j];
			}

			// If we're not at the top, consider the value above
			if (i > 0) {
				const tempMax = Math.max(
					matrix[i][j] * maxCache[i - 1][j],
					matrix[i][j] * minCache[i - 1][j]
				);
				maxVal = Math.max(tempMax, maxVal);

				const tempMin = Math.min(
					matrix[i][j] * maxCache[i - 1][j],
					matrix[i][j] * minCache[i - 1][j]
				);
				minVal = Math.min(tempMin, minVal);
			}

			// If we're not on the left, consier the value to the left
			if (j > 0) {
				const tempMax = Math.max(
					matrix[i][j] * maxCache[i][j - 1],
					matrix[i][j] * minCache[i][j - 1]
				);
				maxVal = Math.max(tempMax, maxVal);

				const tempMin = Math.min(
					matrix[i][j] * maxCache[i][j - 1],
					matrix[i][j] * minCache[i][j - 1]
				);
				minVal = Math.min(tempMin, minVal);
			}
			maxCache[i][j] = maxVal;
			minCache[i][j] = minVal;
		}
	}

	// Return the max value at the bottom right
	return maxCache[maxCache.length - 1][maxCache[0].length - 1];
};

module.exports = { samsAnswer };
