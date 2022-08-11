'use strict';

// Задание 1
// Написать реккурсивную функцию которая будет глубоко копировать обект.

const macbookPro = {
	about: {
		brend: 'macbook',
		model: 'pro',
		year: {
			releasYear: 2021,
			currentAge: null,
		},
		myFavoriteReleaseYears: [2015, 2017, 2021, null],
		nextReleas: null,
	},
	screenSize: 14.2,
	color: 'silver',
	keepBattery: 10, // h
	currentBattery: null,
	chargeEmptyBatteryToFull: 4, // h
	chargeFromNotEmptyBaterry: null,
	test: null,
	using: function (h) {
		this.currentBattery = this.keepBattery - h;
		this.about.year.currentAge = new Date().getFullYear() - this.about.year.releasYear;
		this.chargeFromNotEmptyBaterry = h / (this.keepBattery / this.chargeEmptyBatteryToFull);
	}
};
macbookPro.using(4);
console.log(macbookPro);


function recursiveDeepClone(object) {
	const cloneObject = {};

	for (let prop in object) {

		if (typeof object[prop] !== 'object' && !Array.isArray(object)) {
			cloneObject[prop] = object[prop];
			continue;
		}

		cloneObject[prop] = recursiveDeepClone(object[prop]);
	}

	return cloneObject;
}

const newClonedElements = recursiveDeepClone(macbookPro);
newClonedElements.about.myFavoriteReleaseYears[3] = 'qwerty';

console.log(newClonedElements);
console.log(macbookPro);





// Задание 2
//  Написать реккурсивную функцию которая будет принимать массив строк и возвращать самую длинную строку.
//  Если в массиве 2 и более строк, которые одной длинны, и являются самыми длинными - вернуть массив саммых длинных строк.

const dataOfStrings = ['name', 'surname', 'age', 'education', 'country', 'city', 'education'];

function getLongestWords(array, resultArr = []) {

	const isEmptyResArr = resultArr.length === 0;
	const isLongerString = array[0]?.length > resultArr[0]?.length;

	if (array.length === 0) {
		return resultArr.length === 1 ? resultArr[0] : resultArr;
	}

	if (isEmptyResArr || isLongerString) {
		return getLongestWords(array.slice(1), [array[0]]);
	}

	if (array[0].length === resultArr[0].length) {
		return getLongestWords(array.slice(1), [...resultArr, array[0]]);
	}

	return getLongestWords(array.slice(1), resultArr);
};

console.log(getLongestWords(dataOfStrings));




// Задание №3
// Написать реккурсивную функцию, которая будет возводить число в степень и возвращать результат. 
// fn(number, n) number - число, n - степень

function recursivePower(number, n) {

	if (n === 1) {
		return number;
	}

	return number * recursivePower(number, n - 1);
}
console.log(recursivePower(2, 5));




// Задание 4
// Взять метод массива forEach и попробовать вызвать в контексте строки 'string'. 
// В результате в цикле forEach вывести в консоль: 's', 't', 'r', 'i', 'n', 'g'.
//Ps - вывел в консоль как в задании

let str = '';
Array.prototype.forEach.call('string', function (word) {
	str === '' ? str += `'${word}'` : str += `,'${word}'`;
});
console.log(str);


// [].forEach.call('string', function (word) {
// 	console.log(word);
// });





// Задание №5
// Написать функцию: filterString(string, ignoreLetters). Используя  метод массива filter вызвать его в контексте
// строки и вернуть из функции строку без ignoreLetters.

function filterString(string, ignoreLetters) {
	return Array.prototype.filter.call(string, function (el) {
		return !ignoreLetters.includes(el);
	});
}
console.log(filterString('string', ['s', 'g']));




// Задание №6
// Написать функцию, которая может принимать от 1 до бесконечности аргументов (чисел) и возвращать сумму этих чисел. 
// Сделать 2 варианта. Использую rest оператор. И используя псевдомасив arguments.

// Rest
function getSumOfNumbers(...rest) {
	return rest.reduce((prev, num) => prev + num, 0);
}
console.log(getSumOfNumbers(1, 3, 5, 7, 9));

// Arguments
// function getSumOfNumbers() {
// 	return [...arguments].reduce((prev, num) => prev + num, 0);
// }
// console.log(getSumOfNumbers(2, 4, 6, 8, 10));



// Задание 7
// Создать объект какого то автомобиля (свойства и методы зависят от вашей фантазии и творчества). Но они должны быть вполне логичными.
// Свойства данного обьекта - это характеристики автомобиля
// Методы - это то как автомобиль функционирует.

// пробег увеличился на 150км
// бензин в баке уменьшился в зависимсоти от расхода и километража
// и т.д

// Придумайте как можно больше функционала.

const myCar = {
	model: 'BMW',
	horsePower: 370,
	maxSpeed: 280,
	mileage: 10000,
	fuelCapacity: 60,
	fuelConsuming: 15,
	fuel: [95, 98, 100],
	origin: 'Germany',
	speedDurningDrive: [100, 60],
	modelYear: 2018,
	currentAge: null,
	drive(km, year) {
		console.log('Running');
		this.mileage = this.mileage + km;
		this.fuelCapacity = this.fuelCapacity - (0.15 * km);
		this.currentAge = year - this.modelYear;
	}
};

myCar.drive(150, new Date().getFullYear())
console.log(myCar);



const useraName = 'Name';
function revStr(str) {

	if (str === '') {
		return '';
	}

	return revStr(str.substring(1)) + str[0];
}
console.log(revStr(useraName));







