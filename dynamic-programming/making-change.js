const change = function(x, coins) {
	if (x == 0) {
		return 0;
	}

	let min = x;
	for (let coin of coins) {
		if (x - coin >= 0) {
			let c = change(x - coin, coins);
			if (min > c + 1) {
				min = c + 1;
			}
		}
	}

	return min;
};

module.exports = {
	change
};
