class Item {
	constructor(weight, value) {
		this.weight = weight;
		this.value = value;
	}

	print() {
		console.log(`weight: ${this.weight} value: ${this.value}`);
	}
}

module.exports = { Item };
