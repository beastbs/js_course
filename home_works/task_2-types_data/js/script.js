'use strict';

document.addEventListener('DOMContentLoaded', (e) => {

	//Функция проверки числа на валидность

	function checkNumber(number) {
		let num = parseFloat(number, 10);

		if (isNaN(num) || num === null || num === '') {
			alert('Вы ввели не валидное число или отменили');
		}

		return num;
	}



	// Задача №1
	const firstNumber = checkNumber(prompt('Введите первое число', ''));
	const secondNumber = checkNumber(prompt('Введите второе число', ''));

	function countSumNumbers(numOne, numTwo) {

		return numOne + numTwo;
	}
	console.log(countSumNumbers(firstNumber, secondNumber));



	// Задача№2
	let userName = prompt('Enter your name', '');
	const userNames = ['Ivan', 'Alex', 'Petr', 'Olga', 'Daria'];

	function sayHiToUser(name) {

		if (name === null || name === '') {
			alert(`Вы отменили действие или ничего не ввели`);
		} else {
			alert(`Привет ${name}`);
		}

		for (let i = 0; i < userNames.length; i++) {
			console.log(`Hello dear ${userNames[i]}, you are number ${i + 1}`);
		}

	}
	sayHiToUser(userName);



	// Задача№3
	const numbers = [1, 2, 3];

	function multiply(num1, num2) {
		return num1 * num2;
	}

	// Способ №1
	for (let i = 0; i < numbers.length; i++) {
		alert(`Произведение числа ${numbers[i]} и его индекса ${i} = ${multiply(numbers[i], i)}`);
	}

	// Способ №2
	// numbers.forEach((item, i) => {
	// alert(`Произведение числа ${item[i]} и его индекса ${i} = ${multiply(item[i], i)}`);
	// });

	const multiplyOfNums = multiply(4, 4);
	console.log(multiplyOfNums);


	// Задача№4

	const arrayOne = [1, 3, 5, 7, 9];
	const arrayTwo = [2, 4, 6, 8, 10];

	function countSumOfTwoArrays(firstArr, secondArr) {

		const summOfArrayOne = firstArr.reduce((acc, item) => {
			return acc + item;
		});
		const summOfArrayTwo = secondArr.reduce((acc, item) => {
			return acc + item;
		});

		if (summOfArrayOne > summOfArrayTwo) {
			return console.log(`Сумма чисел массива arrayOne больше чем 
			 	сумма чисел массива arrayTwo`);
		}

		if (summOfArrayOne < summOfArrayTwo) {
			return console.log(`Сумма чисел массива arrayTwo больше чем 
			 	сумма чисел массива arrayOne`);
		}

		console.log(`Эти массивы равны`);
	}
	countSumOfTwoArrays(arrayOne, arrayTwo);



	// Задача№5
	const arrayOfStrings = ['name', 'street', 'country', 'height', 'education', 'age'];

	function getLongestWord(array) {
		let longWord = '';

		for (let i = 0; i < array.length; i++) {

			if (array[i].length > longWord.length) {
				longWord = array[i];
			}
		}

		return longWord;
	}
	console.log(getLongestWord(arrayOfStrings));




	// Задача№6
	function getNumberSum() {

		//Это вариант когда мы просим пользователя два раза ввести число
		for (let i = 0; i < 2; i++) {
			let question = checkNumber(prompt('Enter one number(`шестое задание`)', ''));
		}

		//ОЛИМПИАДНАЯ ВЕРСИЯ ЭТОЙ ЗАДАЧИ

		const condition = null;
		let sum = 0;
		let getNumbers;

		while (getNumbers !== condition) {
			getNumbers = prompt('Введите число', '');
			sum += +getNumbers;
		}

		return `Сумма чисел равна ${sum}`;

	}
	const sumOfNumbers = getNumberSum();
	alert(sumOfNumbers);



	// Задача№7
const obj = {};
const arr = [];
const str = 'some string';
const number = 10;
const typeOfNull = null;
const testFunction = function () {
	console.log(`Hello`);
};

function getType(value) {

	if ( value === null) {
		return 'null';
	}

	if (typeof value === 'function') {
		return 'object';
	}

	return typeof value;
}
console.log(getType(obj));
console.log(getType(arr));
console.log(getType(str));
console.log(getType(number));
console.log(getType(typeOfNull));
console.log(getType(testFunction));



	// Задача№8
	function countFactorial(number) {

		// Способ №1 с помощью рекурсии
		if (number === 0) {
			return 1;
		}
		return number * countFactorial(number - 1);

		//Сокращенный вариант
		// const countFactorial2 = (number) =>
		// number === 0 ? 1 : number * countFactorial2(number - 1);

		// Способ№2
		// let count = 1;

		// for (let i = 1; i <= number; i++) {
		// 	count *= [i];
		// }

		// return count;


	}
	console.log(countFactorial(0));
	console.log(countFactorial(1));
	console.log(countFactorial(2));
	console.log(countFactorial(3));
	console.log(countFactorial(4));
	console.log(countFactorial(5));

});






