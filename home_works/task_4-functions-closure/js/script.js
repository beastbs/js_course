'use strict';

// // Задание 1

function convertDegrees(fahrenheit) {

	let convert = (fahrenheit - 32) * 5 / 9;
	if (!Number.isInteger(convert)) { convert = convert.toFixed(2); }
	return +convert;

}
console.log(convertDegrees(1));
console.log(convertDegrees(32));
console.log(convertDegrees(86));
console.log(convertDegrees(115));



// Задание 2

const vowelsConsonants = 'HelosdinAAAzxeeEjshyuoomj';

function findVowels(string) {
	let countVawels = 0;
	let countConsonants = 0;

	const vowels = ['a', 'e', 'i', 'o', 'u'];

	for (let char of string.toLowerCase()) {

		if (vowels.includes(char)) {
			countVawels++;
			continue;
		}

		countConsonants++;
	}

	const totalWords = {
		'vowels': countVawels,
		'consonants': countConsonants,
	};

	return totalWords;
}
console.log(findVowels(vowelsConsonants));



//  Задание 3

function outerX() {

	return function innerX(nameOne, nameTwo) {
		console.log(`Hello ${nameOne} and ${nameTwo}`);
	};
}
const resultOuterX = outerX();
resultOuterX('Ivan', 'Anna');



// Задание 4

function getCount() {
	let count = 0;

	return function () {
		count++;
		return count;
	};
}

const increment = getCount();
const incr1 = increment();
const incr2 = increment();
const incr3 = increment();

console.log(incr1, incr2, incr3);



// Задание 5

function getMaxValue(numberOne, numberTwo) {
	return Math.max(numberOne, numberTwo);
}

function copyMaxValue(param) {

	return console.log(param);
}
copyMaxValue(getMaxValue(12, 15));



// Задание 6

function unlimitedNumbers(...argu) {

	let count = 0;
	for (let num of argu) {
		count += num;
	}

	return count;
}
console.log(unlimitedNumbers(1, 2, 3, 4, 5, 6, 7));
console.log(unlimitedNumbers(15, 15, 15, 55, 100, 200, 600));


// Задание 7

function getCalculator() {
	let result = 0;

	return {
		getResult: () => { return result; },
		plus: (value) => { result += value; },
		minus: (value) => { result = result - value; },
		multiply: (value) => { result *= value; },
		devide: (value) => { result = result / value; },
	};

}

const counter = getCalculator();

const c1 = counter.plus(20);
const c2 = counter.minus(5);
const c3 = counter.multiply(2);
const c4 = counter.devide(15);

console.log(counter.getResult());



// Запускаем часы
function initLocalClocks() {

	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();


	const hands = [
		{
			hand: 'hours',
			angle: (hours * 30) + (minutes / 2)
		},
		{
			hand: 'minutes',
			angle: (minutes * 6)
		},
		{
			hand: 'seconds',
			angle: (seconds * 6)
		}
	];

	for (let i = 0; i < hands.length; i++) {
		const elements = document.querySelectorAll('.' + hands[i].hand);
		for (let j = 0; j < elements.length; j++) {
			elements[j].style.webkitTransform = 'rotateZ(' + hands[i].angle + 'deg)';
			elements[j].style.transform = 'rotateZ(' + hands[i].angle + 'deg)';
			if (hands[i].hand === 'minutes') {
				elements[j].parentNode.setAttribute('data-second-angle', hands[i + 1].angle);
			}
		}
	}

}
setInterval(initLocalClocks, 1000);















