// 'use strict';

// Задание 1

// удалить свойство age,
// изменить свойство gender,
// добавить свойство массив объектов pets [{name: '',age: 0, classOfAnimal: 'dog'}]

const userBob = {
	name: 'Bob',
	age: 21,
	gender: 'male',
	married: false,
};

delete userBob.age;
userBob.gender = 'unknown';
userBob.pets = [
	{ name: 'Rich' },
	{ age: '1 year' },
	{ classOfAnimal: 'dog' }
];

console.log(userBob);


// Задание 2
// Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
// isPlainObject(el: any) => boolean

const object = { name: 'Ghost', age: 25 };
const arr = [1, 2, 3];
const nl = null;
const str = 'string';

const newObj = {};

function isPlainObject(element) {

	if (element === null ||
		Array.isArray(element) ||
		typeof element !== 'object') {

		return false;
	}

	return true;
}

console.log(isPlainObject(object));
console.log(isPlainObject(arr));
console.log(isPlainObject(nl));
console.log(isPlainObject(str));



// Задание 3
// Напишите функцию, которая возвращает новый объект без указанных значений. первый параметр obj второй массив свойств которые мы удалим
// getObjWithout({ a: 1, b: 2 }, ['b']) => { a: 1 }

const testObj = {
	a: 1,
	b: 2,
	c: 3,
};
const testArr = ['b'];

// Вариант №1
function getObjectWithout(object, array) {
	const objWith = {};
	Object.keys(object).forEach(key => array.includes(key) || (objWith[key] = object[key]));
	return objWith;
}
console.log(getObjectWithout(testObj, testArr));

// Вариант №2
// function getObjectWithout(object, array) {
// 	const objWith = { ...object };

// 	for (const key in objWith) {

// 		if (array.includes(key)) {
// 			delete objWith[key];
// 		}
// 	}

// 	return objWith;
// }
// console.log(getObjectWithout(testObj, testArr));


// Задание 4
// Напишите функцию, которая поверхностно сравнивает два объекта.
// * Ожидаемый результат: true если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

const userOne = { name: 'User', country: 'Ua', age: 25, };
const userTwo = { name: 'User', age: 25, country: 'Ua', };

// Способ №1
function isEqual(objOne, objTwo) {
	const propsOne = Object.keys(objOne);
	const propsTwo = Object.keys(objTwo);

	if (propsOne.length !== propsTwo.length) {
		return false;
	}

	return propsOne.every(el => objOne[el] === objTwo[el]);
}
console.log(isEqual(userOne, userTwo));


// Способ №2 - Если не сравнивать длинну

// function checkTwoObj(...rest) {
// 	return Object.keys({ ...rest[0], ...rest[1] }).every(key => rest[0][key] === rest[1][key]);
// }
// console.log(checkTwoObj(userOne, userTwo));


// Способ №3 - Сработает, если свойства идут по порядку

// function checkTwoObj(...rest) {
// 	return JSON.stringify(rest[0]) === JSON.stringify(rest[1]);
// }
// console.log(checkTwoObj(userOne, userTwo));



// Задание 5
// создать функцию которая принимает массив данных [1,24,'Bob', true, null, { name: 'Sam', age: 10 }, ...и тд]
// и возвращает объект {index0: 1, index1: 24, index2: 'Bob', ..... и тд}

const randomData = [1, 24, 'Bob', true, null, { name: 'Sam', age: 10, }, [1, 2, 3]];

function getObjectFromData(data) {
	const newObj = {};
	data.forEach((el, i) => newObj[`index${i}`] = el);

	// Получение Объектов или массивов НЕ по ссылке
	for (const key in newObj) {

		if (isPlainObject(newObj[key])) {
			newObj[key] = { ...newObj[key] };
		}

		if (Array.isArray(newObj[key])) {
			newObj[key] = [...newObj[key]];
		}

	}

	return newObj;
}
const transformData = getObjectFromData(randomData);
console.log(transformData);



// Задание 6
// Напишите функцию, которая отсортирует массив объектов по имени свойства
// вернет массив отсортированных объектов
// доп: проверить есть ли свойство в объекте если нет то возвращаем массив без изменений

const users = [
	{ name: 'Bob', age: 20 },
	{ name: 'Sam', age: 10 },
	{ name: 'Anna', age: 29 },
	{ name: 'Jim', age: 15 },
	{ name: 'Alex', age: 45 },
	{ name: 'Mick', age: 23 },
];

// Вариант №1
function sortByProps(data, prop) {
	return data.sort((a, b) => a[prop] > b[prop] ? 1 : -1);
}
console.log(sortByProps(users, 'name'));

// Вариант №2 - передаем только свойство
// function sortByProps(field) {
// 	return (a, b) => a[field] > b[field] ? 1 : -1;
// }
// console.log(users.sort(sortByProps('name')));



// Задание 7
// преобразуйте массив users в JSON (поиграйтесь с 3им параметром space) передайте значение в переменную и выведите на экран

const convertUsersToJson = JSON.stringify(users, null, 5);
// const convertUsersToJson = JSON.stringify(users, null, '-----');
console.log(convertUsersToJson);



// Задание 8
// клонировать объект

const userMax = {
	name: 'Max',
	age: 21,
	gender: 'male',
	married: false,
	pets: [{ name: 'Rex', age: 10 }, { name: 'Ron', age: 3 }],
	breaks: ['11:00', '17:00'],
	favoriteMovie: {
		name: 'Avatar',
		year: 2009,
		info: {
			country: 'USA',
			director: 'James Cameron'
		}
	}
};

// Способ №1 - Если нет функции, значения undefined, Symbol(ключ,значиние)
const cloneUserMax = JSON.parse(JSON.stringify(userMax));
console.log(cloneUserMax);

// Способ №2 - не совсем гибкий
// const cloneUserMax = { ...userMax, pets: [{ ...userMax.pets[0] }, { ...userMax.pets[1] }], favoriteMovie: { ...userMax.favoriteMovie, info: { ...userMax.favoriteMovie.info } } };

























