'use strict';

// Задача № 4
const userName = prompt('What is your name?', '');
const userSurname = prompt('What is your surname?', '');

alert(`${userName} ${userSurname}`);



// Задача № 5

let cathOne = 5;
let cathTwo = 8;
let heightSide = 4;

// 1.Вариант - если у нас один угол прямой, т.е. равен 90deg
function getSquareOfTringle(cathOne, cathTwo) {
	return (cathOne * cathTwo) / 2;
}
alert(getSquareOfTringle(cathOne, cathTwo));

// 2.Вариант - если знаем высоту треугольника
function getSquareOfTringleByHeight(heightSide, cathTwo) {
	return (heightSide * cathTwo) / 2;
}
alert(getSquareOfTringleByHeight(heightSide, cathTwo));



// Задача № 6

const getUserName = prompt('What is your name?', '');
alert(`Привет, ${getUserName}`);



// Задача № 7

// Вариант 1
console.log(2 ** 5);

// Вариант 2
const twoNum = Math.pow(2, 5);
console.log(twoNum);

// Вариант 3
function pow(number, power) {
	let result = 1;

	for (let i = 0; i < power; i++) {
		result *= number;
	}
	return result;
}
const resultOfPow = pow(2, 4);
console.log(resultOfPow);



// Задача № 8

for (let i = 0; i < 1; i++) {

	const userAge = +prompt('Введите ваш возраст:', '18');
	if (userAge >= 18) {
		alert(`Привет, можешь входить`);
	} else if (userAge <= 0 || userAge === null || userAge === '' || isNaN(userAge)) {
		alert('Данные введены не верно!');
		i--;
	} else {
		alert('Привет, приходи в следующий раз!');
	}

}



// Задача № 9

for (let i = 0; i < 1; i++) {

	const answerOfPuzzle = prompt(`У обезьяны на передних лапах 10 пальцев.Сколько пальцев на 10 передних лапах?`, '');
	const answerOfPuzzleForParseInt = parseInt(answerOfPuzzle, 10);

	if (answerOfPuzzleForParseInt === 0) {
		alert('Маловато!');
		i--;
	} else if (answerOfPuzzleForParseInt >= 10 && answerOfPuzzleForParseInt < 20) {
		alert('Не верно, я думаю больше!');
		i--;
	} else if (answerOfPuzzleForParseInt >= 20 && answerOfPuzzleForParseInt < 40) {
		alert('Не верно, еще больше!');
		i--;
	} else if (answerOfPuzzleForParseInt >= 40 && answerOfPuzzleForParseInt < 50) {
		alert('Не верно, попробуй еще раз!');
		i--;
	} else if (answerOfPuzzleForParseInt === 50) {
		alert('Вот теперь верно!');
	} else {
		alert('Возьми калькулятор!');
		i--;
	}

}



// Задача № 10

for (let i = 0; i < 1; i++) {
	const getPassword = prompt('Введите пороль', '').toLowerCase();

	const isCorrectLength = getPassword.length >= 8 && getPassword.length <= 20;

	const hasSymbol = getPassword.includes('@') ||
		getPassword.includes('#') ||
		getPassword.includes('$') ||
		getPassword.includes('%');

	const hasNumber = getPassword.includes('0') ||
		getPassword.includes('1') ||
		getPassword.includes('2') ||
		getPassword.includes('3') ||
		getPassword.includes('4') ||
		getPassword.includes('5') ||
		getPassword.includes('6') ||
		getPassword.includes('7') ||
		getPassword.includes('8') ||
		getPassword.includes('9');

	if (isCorrectLength && hasSymbol && hasNumber) {
		alert(`Данные введены успешно`);
	} else {
		alert(`Данные введены не верно`);
		i--;
	}
}



// Задача № 11

const getYear = prompt('Введите год:', '');
const getYearForParseInt = parseInt(getYear, 10);

if (getYearForParseInt <= 0) {
	alert('Вы ввели неправильное(отрицаетльное) значение');
} else if (getYear === null || getYear === '' || isNaN(getYear)) {
	alert('Вы отменили действие или ничего не ввели или ввели не число');
} else {
	if (getYearForParseInt % 4 === 0) {
		if (getYearForParseInt % 100 === 0) {
			if (getYearForParseInt % 400 === 0) {
				alert(`Год ${getYear} -  высокосный год (366 дней)`);
			} else {
				alert(`Год ${getYear} - не высокосный год (365 дней)`);
			}
		} else {
			alert(`Год ${getYear} -  высокосный год (366 дней)`);
		}
	} else {
		alert(`Год ${getYear} - не высокосный год (365 дней)`);
	}
}



// Задача № 12

function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomNumber = getRandomNumber(1, 3);


for (let i = 0; i < 1; i++) {

	let userResult;
	const getOneWord = prompt('Выберите обно из трех: камень, ножницы, бумага', '');

	if (getOneWord === 'ножницы') {
		userResult = 1;
	} else if (getOneWord === 'камень') {
		userResult = 2;
	} else if (getOneWord === 'бумага') {
		userResult = 3;
	} else {
		alert('Играй честно');
	}

	switch (true) {
		case userResult === 1 && randomNumber === 2:
			alert(`Компьютер победил, ножницы против камня`);
			break;
		case userResult === 1 && randomNumber === 3:
			alert(`Игрок победил, ножницы против бумаги`);
			break;
		case userResult === 2 && randomNumber === 1:
			alert(`Игрок победил, камень против ножниц`);
			break;
		case userResult === 2 && randomNumber === 3:
			alert(`Компьютер победил, камень против бумаги`);
			break;
		case userResult === 3 && randomNumber === 1:
			alert(`Компьютер победил, бумага против ножниц`);
			break;
		case userResult === 3 && randomNumber === 2:
			alert(`Игрок победил, бумага против камня`);
			break;
		case userResult === randomNumber:
			alert(`Ничья`);
			break;
		default:
			alert(`Давай еще раз`);
			i--;
	}

	console.log(userResult);
	console.log(randomNumber);
}






