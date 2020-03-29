## Matrix-Product

### Key Concept

Create two cache matrices, minCache and maxCache, to keep track of both the min product and the max product.

Traverse matrix and set values in caches' as follows:

```
minCache[i][j] = min(matrix[i][j] * minCache[i-1][j], matrix[i][j] * maxCache[i-1][j]);
maxCache[i][j] = max(matrix[i][j] * minCache[i-1][j], matrix[i][j] * maxCache[i-1][j])
```

Edge cases:

1.

```
if(i === 0 && j === 0)
minCache[i][j] = matrix[i][j]
maxCache[i][j] = matrix[i][j]
```

2.

```
When at the left most edge, we only need to look above
```

3.

```
When at the top most edge, we only need to look to the left
```

Result is the last cell in maxCache

### Example

```
matrix = [
	[-1,  2,  3],
	[ 4,  5, -6],
	[ 7,  8,  9]
];

minCache = [
	[ -1,   -2,    -6],
	[ -4,  -20,    36],
	[-28, -224, -2016]
];

maxCache = [
	[ -1,  -2,   -6],
	[ -4, -10,  120],
	[-28, -80, 1080]
];
```
