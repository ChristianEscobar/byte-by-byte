const naiveKnapsack = (itemsArr, maxWeight) => {
	return naiveKnapsackRecurse(itemsArr, maxWeight, 0);
};

const naiveKnapsackRecurse = (itemsArr, maxWeight, i) => {
	// Return when we reach the end of the list
	if (i === itemsArr.length) {
		return 0;
	}

	// If item is heavier than remaining weight, skip item
	const remainingWeight = maxWeight - itemsArr[i].weight;
	if (remainingWeight < 0) {
		return naiveKnapsackRecurse(itemsArr, maxWeight, i + 1);
	}

	// Try both including and excluding the current item
	return Math.max(
		naiveKnapsackRecurse(itemsArr, maxWeight - itemsArr[i].weight, i + 1) +
			itemsArr[i].value,
		naiveKnapsackRecurse(itemsArr, maxWeight, i + 1)
	);
};

module.exports = { naiveKnapsack };
