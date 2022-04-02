//task 1
//let calculator = {
// read: function() {
//		this.x = +prompt('введите первое число '),
//		this.y = +prompt('введите второе число ')
//	},
//	sum: function() {
//    return this.x + this.y
//	},
//	multi: function () {
//		return this.x * this.y;
//},
//diff: function () {
//		return this.x - this.y;
//},
//div: function () {
//		return this.x / this.y;
//}

//}
//calculator.read();
//alert( calculator.sum() );
//alert( calculator.multi() );
//alert( calculator.diff() );
//alert( calculator.div() );
// task 2

let coffeMachine = {
	message: 'Your coffee is ready!',
	start: function () {
		setTimeout(function () {
				alert(this.message);
		}.bind(this), 3000);
}
}
//coffeMachine.start()
//task 3

let counter = {
	count: 0,
	inc: function () {
			this.count++;
			return this;
	},
	dec: function () {
			this.count--;
			return this;
	},
	getValue: function () {
			return this.count;
	}
};

// var current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1

//task 4

let me = {
	getSum: function (x, y) {
			this.x = x;
			this.y = y;
			return this.x + ' + ' + this.y + ' = ' + calculator.sum.call(this, this.x, this.y);
	},
	getDiff: function (x, y) {
			this.x = x;
			this.y = y;
			return this.x + ' - ' + this.y + ' = ' + calculator.diff.call(this, this.x, this.y);
	},
	getMulti: function (x, y) {
			this.x = x;
			this.y = y;
			return this.x + ' * ' + this.y + ' = ' + calculator.multi.call(this, this.x, this.y);
	},
	getDiv: function (x, y) {
			this.x = x;
			this.y = y;
			return this.x + ' / ' + this.y + ' = ' + calculator.div.call(this, this.x, this.y);
	}
};

// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));

// task 5

var country = {
	name: 'Ukraine',
	language: 'ukrainian',
	capital: {
			name: 'Kyiv',
			population: 2907817,
			area: 847.66
	}
};

function format(start, end) {
	console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[',']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(country.capital.cc); // undefined

//task 6

let user = {
	name: 'John'
};

function format(start, end) {
	console.log(start + this.name + end);
}

let userFormat = format.bind(user)
userFormat('<<<', '>>>');

// task 7

function concat(str1, str2, sss = ' ') {
	return console.log(str1 + sss + str2);
}

let hello = concat.bind(null, 'Hello');

hello('World'); // Hello World
hello('John'); // Hello John


//task 8

function cub(numb, pow = 3) {
	if(pow != 1) {
			return numb * cub(numb, pow-1);
	}

	return numb;
}

function cubWithFor(numb) {
	let total = numb;

	for (let i = 1; i < 3; i++) {
			total *= numb;
	}

	return total;
}

// console.log( cube(2) ); // 8
// console.log( cubeWithFor(2) ); // 8

//task 9


function sum(...args) {
	if (args.length > 0) {
			return args[0] + sum(...args.slice(1));
	}

	return 0;
}

// console.log( sum(1, 2, 3, 4, 5) ); // 15