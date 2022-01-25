// task 1
let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = arr.reduce((acc, item) => {
	if (!isNaN(+item)) return acc + +item;
	return acc;
}, 0);

alert(sum);

// task 2
let arr = [];
let n = (Math.round(Math.random() * 10))
for (let i = 0; i < n; i++) {
	arr.push(Math.floor(Math.random() * 100) / 100);
}
console.log(arr)
arr.forEach(function (item, i, arr) {
	console.log(` ${item}` ** 5);
});

// task 3