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
let arr = ['AngularJS', 'jQuery'] ; 
console.log(arr)
arr.unshift('Backbone.js') //Добавляем в начало массива значение ‘Backbone.js’
console.log(arr)
arr.push('ReactJS' , 'Vue.js') // Добавляем в конец массива значения ‘ReactJS’ и ‘Vue.js’
console.log(arr)
 arr.splice(1, 0, 'CommonJS'); // Добавляем  в массив значение ‘CommonJS’ вторым элементом
console.log(arr)
//  Находим и удаляем из массива значение ‘jQuery’,
// arr.splice(3, 1) - вариант удаления 

for (let i = 0; i < arr.length; i++) {
     if (arr[i] === 'jQuery') {
        alert(arr[i] + ' - Это здесь лишнее');
        delete arr[i];
   }
 }
