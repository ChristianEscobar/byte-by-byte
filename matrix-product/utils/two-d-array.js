const create2DArray = function(matrix) {
	const twoDimensionalArr = new Array(matrix.length);
	for (let i = 0; i < twoDimensionalArr.length; i++) {
		twoDimensionalArr[i] = new Array(matrix[0].length);
	}

	return twoDimensionalArr;
};

module.exports = { create2DArray };
