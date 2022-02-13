// task 1

function max(number1, number2) {
	if (number1 > number2) return number1;
	else if (number1 < number2) return number2;
	else return 'Числа равны или вы ввели некорректные данные';
}

console.log( max(0, -1) )

// task 2

function min() {
	let arrArguments = [...arguments];

	let minNumber = arrArguments.reduce(function (acc, item) {
			if (item < acc) return acc = item;
			return acc;
	}, arrArguments[0]);

	return minNumber;
}

console.log( min(0, -1, 100, 500, 100500) ); 

// task 3

let users = [
	{firstname: "user1", lastname: 'Lastname1', age: '01'},
	{firstname: "user2", lastname: 'Lastname2', age: '10'},
	{firstname: "user3", lastname: 'Lastname3', age: '20'},
	{firstname: "user4", lastname: 'Lastname4', age: '30'},
	{firstname: "user5", lastname: 'Lastname5', age: '40'},
	{firstname: "user6", lastname: 'Lastname6', age: '50'},
	{firstname: "user7", lastname: 'Lastname7', age: '60'},
	{firstname: "user8", lastname: 'Lastname8', age: '70'},
	{firstname: "user9", lastname: 'Lastname9', age: '80'},
	{firstname: "user10", lastname: 'Lastname10', age: '99'},
];

let youngsters = users.filter(user => +user.age < 18);
console.log('Пользователи младше 18 лет', youngsters);

let AddfullName = users.map(user => {
	user.fullName = user.firstname + ' ' + user.lastname;
	return user;
});
console.log('Добавленна ячейка fullName', AddfullName);

let fullnameUsers = [];
AddfullName.forEach(item => fullnameUsers.push(item.fullName));
console.log('Массив из fullName', fullnameUsers);

// task 4

function removeFirstElement(arr) {
	let Arr1 = [];
	for (let i = 1; i < arr.length; i++) {
			Arr1.push(arr[i]);
	}
	return Arr1;
}

console.log(removeFirstElement(['a', 'b', 'c', 'd', 'e']));

// task 5

function addElemToEnd(arr) {
	let newElements = [];

	for (let i = 1; i < arguments.length; i++) {
			newElements.push(arguments[i]);
	}

	return [...arr, ...newElements];
}

// task 6

function extend(sourse) {
	let obj = {};

	for (let i = 1; i < arguments.length; i++) {
			obj = {
					...obj,
					...arguments[i]
			};
	}

	return {
			...sourse,
			...obj
	}
}

let source = {firstname: 'Tom', age: 10};
let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});

// task 7  

function setComment(date, message, author = 'Anonymous') {
	if (!date && !message) return alert('данные переданы некорректно');
	console.log(author + ", " + date + "\n" + message);
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');

//Замыкания

// 1
let timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

function createTimer() {
	let time = performance.now();
	return () => {
			let time1 = performance.now();
			return `Время выполнения - ${time1 - time} миллисекунд`;
	}
}


alert( timer() );

// 2

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10

function createAdder(arg1) {
	return arg2 => arg1 + arg2;
}




