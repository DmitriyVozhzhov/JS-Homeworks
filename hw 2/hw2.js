////task 1
//"use strict";


//let x = prompt('введите число', '0')
//if (Math.sign(x) >= 1) {
//alert('положительное число')}
//else if (Math.sign(x) == 0) {
//alert('Шеф тут ноль')}
//else if (Math.sign(x) < 0 ){
//alert('отрицательное число')}  

////task 2

// let x = prompt('введи сколько у тебя денег')
//let y = prompt('введи сколько денег у твоего друга')
//let z = (+x + +y);
//(z > 10) ? alert('едем на Маерку') : alert('пьем пиво');  */

////task 3
 
// let age = prompt('введитe Ваш возраст', '18' )
//20 <= age && age > 27 ? alert('получай повестку') : alert('гуляй ');  */

//// task 4
// let p = prompt('введите номер своего маршрута 7, 225 или 255')
//if (p == 225){
//alert('edem domoi')
//} else {
//alert('podojdem nemnogo')
//} 
//// task 5
//  let day = prompt('введите день недели') 
// if (day == 'суббота' || day == 'воскресенье'){
// alert('vihodnoi')
// } else {
// alert('idem na rabotu')} 


//// task 6

// let x = prompt('введите значение X от -20 до 20','0') 
//let y = prompt('введите значение Y от -20 до 20','0')
// x <= 1 && y >= 3 || y < 0 ? alert(${+x + +y}) : alert('Неверно!') */

////task 7 
// let x = prompt('введите значение X ') 
//let y = prompt('введите значение Y ')
//if (x > 2 && x < 11 || y >= 6 && y < 14) {
//x = x * 2
//} else {
//x = +x +5 }
//alert(x) 

////task 8 

//let name = prompt('введите свое имя')
//if  (name === null) {
//alert('Если нажал cancel, тогда прощай')
//} else if (name == 0) {
//alert(${'Привет' + ' ' + 'Аноним'})
//} else if (name != 0) { 
//alert(${'Привет' + ' ' + name}) 
//}   

////task 9

//  let greeting = ''
// let lang = prompt('введите значение ru, en или de')
// if (lang == 'ru') {
// greeting = 'Здравствуйте'
// } else if ( lang == 'en') {
// greeting = 'Welcome'
// } else if ( lang == 'de'){
// greeting = 'Willkommen'
// } else { alert('введите корректное значение  ru, en или de ')
// } alert(greeting)   */
  
////"switch"
// let lang = prompt('введите значение ru, en или de');
//let greeting = '';

//switch (lang) {
//  case 'ru':
//   greeting = 'Здравствуйте';
//    break;
//  case 'en':
//   greeting = 'Welcome';
//    break;
//  case 'de':
//    greeting = 'Willkommen';
//    break;
//  default:
//    alert( "Нет таких значений" );
//}
//alert(greeting) 

//task 10

// let month = (new Date(2011, 12, 3).getMonth())
// if (month >= 0 && month < 3) {
// alert('зима')
// }  else if (month >= 3 && month < 6) {
// alert('весна')
// }    else if (month >= 6 && month < 9) {
// alert('лето')
// } else if (month >= 9 && month < 12) {
// alert('осень')
// }  else if (month == 12) {
// alert('зима')
// }   
  
//task 11
// let lang = prompt('введите значение ru или en')
//let day = prompt('введите номер дня недели от 0 до 6 ')
//let result = ''
// if (lang == 'ru' && day == 0 ) {
//result = 'воскресенье'
//} else if (lang == 'ru' && day == 1 ) {
//result = 'понелельник'
//} else if (lang == 'ru' && day == 2 ) {
//result = 'вторник'
//} else if (lang == 'ru' && day == 3 ) {
//result = 'среда'
//} else if (lang == 'ru' && day == 4 ) {
//result = 'четверг'
//} else if (lang == 'ru' && day == 5 ) {
//result = 'пятница'
//} else if (lang == 'ru' && day == 6 ) {
//result = 'суббота'
//} else if (lang == 'en' && day == 0 ) {
//result = 'sunday'
//} else if (lang == 'en' && day == 1 ) {
//result = 'monday'
//} else if (lang == 'en' && day == 2 ) {
//result = 'tuesday'
//} else if (lang == 'en' && day == 3 ) {
//result = 'wednesday'
//} else if (lang == 'en' && day == 4 ) {
//result = 'thursday'
//} else if (lang == 'en' && day == 5 ) {
//result = 'friday'
//} else if (lang == 'en' && day == 6 ) {
//result = 'saturday'
//} else {
//alert('введите корректные значения')
//}
//alert(result) 


//task 12
//   let name = prompt('введите свое имя');
//   let age = prompt('введите свой возраст');
//   if (name === 'Jone' && age ==='29' || name === 'Kate' && age === '15')  {
//   alert(`Привет  ${name} ${age}`)
//   } else {
//   alert('Пока')}  
  
//  //switch
//   let name = prompt('введите свое имя');
//  let age = prompt('введите свой возраст');
  
//  switch (name)  {
//  case 'Jone':
//  switch (age) {
//   case '29':
//   alert(`Здравствуйте ${name} ${age}`);
//    break;
//  default:
//  alert('Пока')
//  }
//  }
  
//  switch (name)  {
//  case 'Kate':
//  switch (age) {
//   case '15':
//   alert(`Здравствуйте ${name} ${age}`);
//    break;
//  default:
//  alert('Пока')
//  }
//  } 
  
//  //?
//   let name = prompt('введите свое имя');
//  let age = prompt('введите свой возраст');
//  let message = (name === 'Jone' && age === '29' || name === 'Kate' && age === '15' ) ? alert(`Здравствуйте ${name} ${age}`) : alert('пока') 
   

////Циклы
	
//task 1
//  let str = '.';
// for (let i = 0; i < 5; i++) {
//  str = str + '#';
//  str = str + '.';
// }
 
// console.log(str);   

//task2
// for (i = 1; i <= 10; i++) {
// if (i % 2 == 0) { 
//     console.log(i*i); 
//    } 
//} 


//task 3

// let username = prompt('Введите свое имя')
//for (i = 1; i < 4; i++) {
// console.log('Happy birthday to you')
//if (i == 2) {
//console.log(Happy birthday dear ${username})}
//} 

//task 4  
// let x = confirm('нажми на ок чтоб отменить и на cancel, чтоб продолжить')
//for (let i = 0; i < 10; i++) {
//  if (x === false) {
//    console.log(i)
//    continue;

//  } else if (x === true) {
//    break;
//  }
//}
//console.log(i) 

//task 5
// let num = prompt('введите число');
//let sum = null;
//for (i = 0; i < num; i++) {
//if (i % 2 !== 0 ) {
//  sum += i;
//}
//}
//alert(sum)
 

//task 6
// let i = 0;
//while (true) {
//  let num = Math.random();
//  i++;

//  if (num > 0.9) {
//    console.log(num: ${num}, iter: ${i});
//    break;
//  }
//} 


// task 7
//for (let j = 1; j <= 9; j++) {
//  for (let i = 1; i <= 9; i++) {
//    console.log(i + "*" + j + "=" + (i * j) + '');
//  }
//}
// task 8 
//let num = '';
//for(let i = 0, j = 1; i <= 21; num += i + ' ', [i,j] = [j, i + j]);
//console.log(num);

// task 9 
//let i = 0,
//  j = 0,
//  chislo;
//while ((chislo = prompt("Введите число", 0)) !== "0" && chislo != null) {
//  ++i;
//  j += +chislo;
//}
//alert("Чисел введено: " + i + 
//     "\nСумма чисел: " + j +
//     "\nСреднее арифметическое: " + (j / i));

// task 10


//task 11 

//for (i = 1; i < 51; i++) {
//    result = ''
//    if (i % 3 == 0) {
//        result += 'Fizz'
//    } 
//    if (i % 5 == 0) {
//        result += 'Buzz'
//    }
//    console.log(result == '' ? i : result)
//} 
