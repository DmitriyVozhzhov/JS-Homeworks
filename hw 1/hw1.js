"use strict";

task 1
 let x = 2;
let y = x * 3;
let z = x + y;
console.log(x,y,z)
 
task 2 
  let FirstName = prompt('введите имя');
 let LastName = prompt('введите фамилию');
 alert("What’s up"+ " " + FirstName + " " + LastName )  
 
 task 3 
 let x =  prompt('введите первое число');
let y =  prompt('введите второе число');
alert(`${+x + +y}
${x-y}
${x*y}
${x/y}`);
 

task 4 
 let rent = prompt('введите сумму заработка за час');
let days = prompt('введите количество рабочих дней в неделю');
let hours = prompt('количество рабочих часов');
let total = rent * hours *(days * 4);
console.log([total]) 

task 5
let n = prompt('введите число ');
if (n % 2 == 0)
	alert("четное число");
else
	alert("нечетное число");

 
 
 task 6 
 const n = Number(prompt('Напишите число'));
 if (isNaN(n)) {
	 alert('не число!');
 } else {
	 alert('число');
 }

 task 7 
 let n = (Math.random() * 100);
 let m = prompt('введите число ');
 if (n > m)
   alert('n > m' + '\n ' + 'первое число' + ' ' + (Math.round(n)) + ' \n' + 'второе число' + ' ' + (m))
 else
   alert('n < m' + '\n ' + 'первое число' + ' ' + (Math.round(n)) + '\n ' + 'второе число' + ' ' + (m));

task 8 
let str = prompt('Мне нравится изучать Front-end', 'Мне нравится изучать Front-end');
let str2 = prompt('', 'Напишите, что Вам нравится изучать');
if (str.indexOf("Front-end") != -1) {
  alert("Совпадение есть")
} else
  alert("Совпадений нет")
let result = (str.slice(0, 21));
alert(` ${result} ${str2} `)
