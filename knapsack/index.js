/**
 * Question: Given a list of items with values and weights, as well as a max weight,
 * find the maximum value you can generate from items where the sum of the weights is less than the max.
 * items​ = {(​w:1​, ​v:6​), (​w:2​, ​v:10​), (​w:3​, ​v:12​)} maxWeight = ​5
 * knapsack(​items​, maxWeight) = ​22
 */
const { naiveKnapsack } = require('./knapsack');
const { Item } = require('./Item');

const items = [new Item(1, 6), new Item(2, 10), new Item(3, 12)];
const maxWeight = 5;

console.log(naiveKnapsack(items, maxWeight));
