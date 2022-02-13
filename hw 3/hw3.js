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
let arr = ['AngularJS', 'jQuery'];
console.log(arr)
arr.unshift('Backbone.js') //Добавляем в начало массива значение ‘Backbone.js’
console.log(arr)
arr.push('ReactJS', 'Vue.js') // Добавляем в конец массива значения ‘ReactJS’ и ‘Vue.js’
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

// task 4
let str = 'Как однажды Жак звонарь сломал фонарь головой';
console.log(str)
let arr = str.split(' ');

[arr[5], arr[6]] = [arr[6], arr[5]];
[arr[1], arr[3]] = [arr[3], arr[1]];
[arr[1], arr[2]] = [arr[2], arr[1]];

console.log(arr.join(' '));

// task 5
let person = {
	name: 'John',
	age: 25,
	city: 'Kharkiv',
	country: 'Ukraine',
	human: true,
};
let option = prompt('Введите свойтво');

if (option in person) {
	alert(person[option])
} else {
	person[option] = prompt('Введите значение свойства');
}

console.log(person);

// task 6

let phone = {};
phone.brand = prompt('Введите бренд телефона');
phone.model = prompt('Введите модель телефона');
phone.resolution = prompt('Введите разрешение экрана телефона');
phone.color = prompt('Введите цвет телефона');
person.phone = phone;

console.log(person);

// task 7


let dates = {};

let now = new Date();
let userDate = new Date(prompt('Введите дату в формате (yyyy-MM-dd)'));

dates.today = now.toDateString();
dates.yearBefore = new Date(now.setFullYear(now.getFullYear() - 1)).toDateString();

if (+new Date(userDate) <= +new Date(dates.today) && +new Date(userDate) >= +new Date(dates.yearBefore)) {
	console.log('Ваша дата в диапазоне  дат!');
} else {
	console.log('Вы не попали в диапазон дат!');
}

// task 8 


let arr = [];

for (;;) {
	let userNumber = prompt('Введите число');

	if (!isNaN(+userNumber) && userNumber) arr.push(+userNumber);
	else if (userNumber) alert('Вы скорее всего ввели не число');
	else break;
}

let total = arr.reduce((acc, item) => acc += item, 0);

alert('Обащая сумма чисел - ' + total);

// task 9 

let TablichkaUmnogenia = [];

for (let i = 1; i < 11; i++) {
	TablichkaUmnogenia[i - 1] = [];

	for (let j = 1; j < 11; j++) {
		TablichkaUmnogenia[i - 1].push(`${i} x ${j} = ${i * j}`);
	}
}
console.log(TablichkaUmnogenia)