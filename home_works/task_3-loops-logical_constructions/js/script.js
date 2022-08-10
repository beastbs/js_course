'use strict';

// Задание 1

const users = {
	"John": 28,
	"Mark": 30,
	"David": 25,
	"Richard": 42,
	"Bob": 12,
	"Tom": 61,
};

// Способ №1 for..in
let total = 0;
for (let key in users) {
	total += users[key];
}
console.log(total);

// Способ №2 reduce
// const totalAge = Object.values(users).reduce((sum, elem) => {
// 	return sum + elem;

// });
// console.log(totalAge);


// Задание 2

const totalNames = [];

for (let i = 0; i < 1; i++) {

	const usersName = prompt('Введите имя', '');

	if (usersName === null || usersName === 'done') {
		console.log(`Пользователи: ${totalNames.join(', ') || `информация отсутствует`}; Всего: ${totalNames.length} пользователя.`);
		break;
	}
	if (usersName.length < 2) {
		alert(`Короткое имя`);
		i--;
		continue;
	}

	totalNames.push(usersName);
	i--;

	// if (usersName === null || usersName === 'done') {
	// 	console.log(`Пользователи: ${totalNames.join(', ') || `информация отсутствует`}; Всего: ${totalNames.length} пользователя.`);
	// } else if (usersName.length < 2) {
	// 	alert(`Короткое имя`);
	// 	i--;
	// } else {
	// 	totalNames.push(usersName);
	// 	i--;
	// }



}


// Задание 3

// Способ №1
let num = 1000;
while (num > 50) { num = num / 2 };
// console.log(num);

// Способ №2
let i = 1000;
for (; i > 50;) {
	i = i / 2;
}
console.log(i);



// Задание 4
let resultOne = ``;

for (let i = 10; i <= 50; i++) {

	if (i > 30 && i < 40) {
		continue;
	}

	resultOne += i + `<br>`;
}
document.write(resultOne);


// Способ №2
// let numbersOne = 10;
// let numbersTwo = 40;

// while (numbersOne <= 30) {
// 	document.write(`${numbersOne} <br>`);
// 	numbersOne++;
// }
// while (numbersTwo <= 50) {
// 	document.write(`${numbersTwo} <br>`);
// 	numbersTwo++;
// }

//Задание 5

for (let i = 0; i <= 100; i++) {

	if (i % 2 === 1) continue;

	console.log(i);
}


// Задание№ 6

// Способ 1
let count = 0;

for (let i = 1; i < 100; i++) {
	count += i;
}
console.log(count);

// let index = 1;
// while (index < 100) {
// 	count += index;
// 	index++;
// }
// console.log(count);

// Способ 2
function countSumByReqursion(number) {
	if (number === 1) {
		return 1;
	} else {
		return number + countSumByReqursion(number - 1);
	}
}
console.log(countSumByReqursion(99));



// Задание №7
const numbers = [2, 3, 4, 5, 7, 9, 10];
let multiplyNumbers = 1;

for (let i = 0; i < numbers.length; i++) {
	multiplyNumbers *= numbers[i];
}
alert(multiplyNumbers);



// Задание №8
const colors = {
	green: 'зеленый',
	red: 'красный',
	blue: 'голубой',
	white: 'белый',
	yellow: 'желтый',
};

// Способ №1
// const keysFromColors = Object.keys(colors);
// const valuesFromColors = Object.values(colors);
// console.log(keysFromColors);
// console.log(valuesFromColors);

// Способ №2
const keysFromColors = [];
const valuesFromColors = [];

for (const key in colors) {
	keysFromColors.push(key);
	valuesFromColors.push(colors[key]);
}
console.log(keysFromColors);
console.log(valuesFromColors);



// Задание 9

const newElements = ['name', 'age', 25, true, null, 4, 'country'];

// Вариант №1
for (let i = 0; i < newElements.length; i++) {

	if (newElements[i] === 4 || newElements[i] === 6) {
		alert(`Есть!`);
		break;
	}
}

// Вариант №2
// const checkNewElements = newElements.find((item) => {
// 	if (item === 4) {
// 		console.log('Есть!');
// 	}
// });
// console.log(checkNewElements);



// Задание 10

const anyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringOfNumbers = ``;

// Способ 1
// for (let i = 0; i < anyNumbers.length; i++) {

// 	if (stringOfNumbers === '') {
// 		stringOfNumbers += `-${anyNumbers[i]}-`;
// 	} else {
// 		stringOfNumbers += `${anyNumbers[i]}-`;
// 	}

// }
// console.log(stringOfNumbers);

// Способ 2
for (let i = 0; i < anyNumbers.length; i++) {

	if (stringOfNumbers === '') {
		stringOfNumbers += `-${anyNumbers[i]}-`;
		continue;
	}

	stringOfNumbers += `${anyNumbers[i]}-`;
}
console.log(stringOfNumbers);

// Простой способ
// console.log(`-${anyNumbers.join('-')}-`);

// Задание 11

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let transformDays = '';
const date = new Date();

for (let i = 0; i < days.length; i++) {

	if (transformDays === '') {

		if (date.getDay() === i && days[i] === 'Sun') {
			transformDays += `( ${days[i]} )`.toUpperCase();
		} else {
			transformDays += ` ${days[i]}`.toUpperCase();
		}

		continue;
	}

	if (date.getDay() === i && days[i] === 'Sat') {
		transformDays += `, ( ${days[i]} )`.toUpperCase();
		continue;
	}

	if (days[i] === 'Sat') {
		transformDays += `, ${days[i]}`.toUpperCase();
		continue;
	}

	transformDays += `, ${days[i]}`;
}
console.log(transformDays);




// Задание 12

const userIvan = {
	name: 'Ivan',
	age: 25,
	country: 'Ua',
	gender: 'male',
	privat: true,
	tell: null,
	email: 'testmail@gmail.com',
	sayHi: () => { },
	hobby: ['football', 'boxing', 'gym',],
	tasks: {
		find: 'gym',
	},
};

function getText(user) {
	let text = '';

	for (const key in user) {

		if (user[key] === null) {
			text += `Свойство ${key} имеет тип null и значение - ${user[key]} \n`;
			continue;
		}
		if (Array.isArray(user[key])) {
			text += `Свойство ${key} имеет тип array и значение - ${user[key]} \n`;
			continue;
		}
		if (typeof user[key] === 'object') {
			for (let values in user[key]) {

				text += `Свойство ${key} имеет тип ${typeof user[[key]]} со свойством ${values} и значением - ${user[key][values]} \n`;
			}
			continue;
		}

		text += `Свойство ${key} имеет тип ${typeof user[[key]]} и значение - ${user[key]} \n`;
	}

	return text;
}
console.log(getText(userIvan));



// Задание 13

const test1 = (0 || 2 || null) && (3 || '') && false; // очередь 2 => 3 => false
const test2 = ('Sam' || '' || false) && (0 || 9) && 111; // очередь Sam => 9 => 111
const test3 = (null || '' || undefined || 0) && (NaN || 9) && 111; // очередь 0 => 9 => 0
const test4 = (null || 99) && (undefined || NaN) && (NaN || 9) && 111; // очередь 99 => NaN => 9 => NaN
const test5 = (null || 100 || undefined || NaN) && (NaN || 9) && 'string'; // очередь 100 => 9 => string
const test6 = ({ name: 'Sam' } || '' || undefined || NaN) && (NaN || [1, 2]) && 111; // очередь { name: 'Sam' } => [1, 2] => 111
const test7 = (null || '' || {} || NaN) && [] && 111; // очередь {} => [] => 111
const test8 = 'Sam' || '' || false && 0 || 9 && 111; // очередь false => 111 => Sam
const test9 = null || '' || undefined || 0 && NaN || 9 && 111; // очередь 0 => 111 => 111
const test10 = null || 99 && undefined || NaN && NaN || 9 && 111; // очередь undefined => NaN => 111 => 111
const test11 = null || 100 || undefined || NaN && NaN || 9 && 'string'; // очередь NaN => string => 100
const test12 = { name: 'Sam' } || '' || undefined || NaN && NaN || [1, 2] && 111; // очередь NaN => 111 => { name: 'Sam' }
const test13 = null || '' || {} || NaN && [] && 111; // очередь NaN => {} 


// Задание 14

const item = 1;
const item2 = 2;

// if (item > item2) {
// 	console.log('first');
// } else {
// 	console.log('second');
// }

item > item2 ? console.log('first') : console.log('second');

// let result;

// if (item > item2) {
// 	result = 0;
// } else {
// 	result = 1;
// }
// console.log(result);

const result = item > item2 ? 0 : 1;
console.log(result);


// Задание 15
// Переписать в синтаксис switch case

if (item > item2) {
	console.log('first');
} else if (item > 1 && item2 > 3) {
	console.log('second');
} else if (item < 1 || item2 > 3) {
	console.log('third');
} else if (item2 > 3) {
	console.log('forth');
} else {
	console.log('fifth');
}

switch (true) {
	case item > item2:
		console.log('first');
		break;
	case item > 1 && item2 > 3:
		console.log('second');
		break;
	case item < 1 || item2 > 3:
		console.log('third');
		break;
	case item2 > 3:
		console.log('forth');
		break;
	default:
		console.log('fifth');
}













