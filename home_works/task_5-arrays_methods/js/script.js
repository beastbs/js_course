'use strict';

// Задание 1

function filledElements(elem, quantity) {
	const fillArr = [];

	while (fillArr.length < quantity) {
		fillArr.push(elem);
	}

	console.log(fillArr);
}
filledElements({ name: 'anyName' }, 8);



// Задание 2
const randomData = [2, false, 0, 14, 'test', '', undefined, NaN, true, 10];

function clearValues(data) {
	const transformRandomData = data.filter(item => (item === 0) || Boolean(item));
	console.log(transformRandomData);
}
clearValues(randomData);


// Задание 3
const anyNumbers = [1, 2, 3, 1, 4, 5, 7];

function getWithout(nums, ...args) {
	const without = nums.filter((el) => !args.includes(el));
	console.log(without);
}
getWithout(anyNumbers, 1, 2, 5, 7);



// Задание 4

function sortNumbers(nums) {
	return nums.sort((a, b) => a - b);
}

const arr1 = [1, 5, 2, 4, 3];
const arr2 = [1, 3, 5, 2, 4];

function checkTwoArr(arrOne, arrTwo) {

	if (arrOne.length !== arrTwo.length) {
		return false;
	}

	return arrOne.every((el, i) => el === arrTwo[i]);

}
console.log(checkTwoArr(sortNumbers(arr1), sortNumbers(arr2)));




// Задание 5
const testValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const timesDevide = 2;

function devider(value, quantity) {
	const devideValues = [];

	for (let i = 0; i < value.length; i += quantity) {
		devideValues.push(value.slice(i, i + quantity));
	}
	console.log(devideValues);
}
devider(testValues, timesDevide);




// Задание 6

const randomElem = [0, 1, 4, 1, 'bob', 'BOB', 'Sam', 'bOb', 'ivAn', 3];

function removeSameElements(elem) {

	const obj = {};

	const arrOne = elem.map(item =>
		typeof item === 'string' ? item.toLowerCase() : item);
	arrOne.forEach((el, i) =>
		arrOne.indexOf(el) === i ? obj[el] = [i] : obj[el].push(i));
	// obj[el] ? obj[el].push(i) : obj[el] = [i]);

	for (const key in obj) {

		if (obj[key].length > 1) {
			delete obj[key];
		}
	}

	// const arrTwo = Object.keys(obj)
	// 	.map(el => {

	// 		if (typeof el === 'string') {
	// 			return el[0].toUpperCase() + el.slice(1);
	// 		}

	// 		return el;
	// 	});

	const indexes = Object.values(obj)
		.map(el => el[0]);

	return elem.filter((el, i) => {
		return indexes.includes(i);
	});


}
console.log(removeSameElements(randomElem));


// Вариант №2
const randomElem2 = [0, 1, 4, 1, 'bob', 'BOB', 'Sam', 'bOb', 'ivAn', 3];

let isRepeat = false;
const result1 = [];

randomElem2
	.map(item => typeof item === 'string' ? item.toLowerCase() : item)
	.forEach((el, i, arr) => {
		const newArr = arr.slice(0, i).concat(arr.slice(i + 1));  // 0,3 / 0,1,4 + bob..3
		if (newArr.includes(el)) {
			return;
		}
		result1.push(randomElem2[i]);


	});
console.log(result1);




// Задание 7
const numbers = [1, 3, 5, 7, 2, 9, 2, 10, 14, 2];

function removeItems(arr, num) {
	return arr.filter(item => item !== num ? true : false);
}
console.log(removeItems(numbers, 2));



// Задание 8
const randomNumbers = [3, 5, 13, 22, 12, 3, 4, 5, 7, 8, 9, 10];

function randomElement(items) {
	const randomNum = Math.floor(Math.random() * items.length);
	// return items.find((el, i) => randomNum === i);
	return items[randomNum];
}
console.log(randomElement(randomNumbers));




// Задание 9

const randomNums = [14, 33, 12, 25, 17, 8, 10, 17, 31];
const getMinNumber = randomNums.reduce((prev, el) => (prev < el) ? prev : el); //можно Math.min(prev, el)
console.log(getMinNumber);


// Задание 10

const widthHeigth = [
	{ width: 10, height: 20 },
	{ width: 12, height: 26 },
	{ width: 14, height: 50 },
	{ width: 6, height: 11 },
];

const result = widthHeigth.reduce((prev, el) => {
	return {
		widthTotal: prev.widthTotal + el.width,
		heightTotal: prev.heightTotal + el.height,
		space: (prev.widthTotal + el.width) * (prev.heightTotal + el.height),
		quantity: ++prev.quantity
	};
},
	{
		widthTotal: 0,
		heightTotal: 0,
		space: 0,
		quantity: 0,
	});
console.table(result);






function test(a) {
	console.log(a);
	console.log(arguments);
}
test(5, 1, 2, 3);

const arr = [1, 2, 3, 4];
console.log(arr);



