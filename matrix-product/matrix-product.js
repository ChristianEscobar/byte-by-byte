'use strict';

const matrixProduct = function(matrix) {
	const result = {
		pathArr: [],
		path: '',
		product: 1
	};
	const matrixProductRecurse = function(matrix, row, col) {
		if (row === matrix.length && col === matrix.length) {
			// We are at the end of the matrix
			return 1;
		}

		result.pathArr.push(matrix[row][col]);
		result.product *= matrix[row][col];

		let nextRow = row;
		let nextCol = col;

		if (row + 1 === matrix.length && col + 1 === matrix.length) {
			return matrix[row][col];
		} else if (row + 1 === matrix.length && col + 1 !== matrix.length) {
			// Cannot go down anymore
			nextCol = col + 1;
			return matrixProductRecurse(matrix, row, nextCol);
		} else if (row + 1 !== matrix.length && col + 1 === matrix.length) {
			// Cannot go right anymore
			nextRow = row + 1;
			return matrixProductRecurse(matrix, nextRow, col);
		} else {
			const valueToRight = matrix[row][col + 1];
			const valueBelow = matrix[row + 1][col];

			if (valueBelow > valueToRight) {
				nextRow = row + 1;
			} else {
				nextCol = col + 1;
			}

			return matrixProductRecurse(matrix, nextRow, nextCol);
		}
	};

	// Start
	matrixProductRecurse(matrix, 0, 0);
	result.path = result.pathArr.join(' -> ');
	return result;
};

module.exports = { matrixProduct };
