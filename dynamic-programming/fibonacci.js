const fib = function(n) {
	if (n === 0) {
		return 0;
	}

	if (n === 1) {
		return 1;
	}

	return fib(n - 1) + fib(n - 2);
};

const fibCache = function(n) {
	if (n < 2) {
		return n;
	}

	// Create cache and initialize to -1
	const cache = new Array(n + 1);
	for (let i = 0; i < cache.length; i++) {
		cache[i] = -1;
	}

	// Fill initial values in cache
	cache[0] = 0;
	cache[1] = 1;
	return fibWithCache(n, cache);
};

const fibWithCache = function(n, cache) {
	// If value is set in cache return it
	if (cache[n] >= 0) {
		return cache[n];
	}

	// Compute and add to cache before returning
	cache[n] = fibWithCache(n - 1, cache) + fib(n - 2, cache);
	return cache[n];
};

const fibBottomUp = function(n) {
	if (n === 0) {
		return 0;
	}

	// Initialize cache
	const cache = new Array(n + 1);
	cache[0] = 0;
	cache[1] = 1;

	// Fill cache iteratively
	for (let i = 2; i <= n; i++) {
		cache[i] = cache[i - 1] + cache[i - 2];
	}

	return cache[n];
};

module.exports = {
	fib,
	fibCache,
	fibBottomUp
};
