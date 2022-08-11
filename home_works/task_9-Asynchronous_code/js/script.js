'use strict';

// Задание 1 - написать структуру данных очередь 

function structureOfDataQueue() {
	const queue = [];

	return {
		add: (item) => queue.push(item),
		remove: () => queue.shift(),
		getResult: () => console.log(queue),
	};
}

const result = structureOfDataQueue();
result.add(1);
result.add(2);
result.add(3);
result.getResult();
result.remove();
result.getResult();



// Задание 2 Написать Promise которые с 70 процентной вероятностью будет возвращать объект 
// { name: 'Bob', age: 25, gender: 'male', ... } придумайте еще поля,
//  и с 30 процентно будет throw Error()(почитать что такое throw Error)
// внутри промиса сделайте таймер чтобы имитировать запрос на сервер, 
// при отправке запроса выводим в консоль лог loader - true потом 
// обрабатываем объект минимум 5ью then(пример вывести имя в консоль)
//  и обрабатываем ошибку, выведите в консоль свойства объекта Error
//  и после всей обработке выводим в консоль done и loader - false


const getRandomNumber = () => {
	return Math.round(Math.random() * 100);
};

function modifyUserByAsync(ms) {
	console.log('data is loading...');

	const newPromise = new Promise((resolve, reject) => {

		setTimeout(() => {

			const userMax = {
				name: 'Max',
				age: 25,
				gender: 'male',
				country: 'Ua',
				hobby: 'Box',
				status: 'privat',
			};

			if (getRandomNumber() <= 50) {
				resolve(userMax);
			}

			reject(new Error());
		}, ms);
	});

	newPromise
		.then(data => {
			console.log('modify data...');
			return data;
		})
		.then(modifiedData => {
			modifiedData.city = 'Kyiv';
			return modifiedData;
		})
		.then(dataSuccess => {
			return new Promise(resolve => {
				setTimeout(() => {
					console.log('success...');
					resolve(dataSuccess.city);
				}, ms);
			});
		})
		.then(city => {
			return new Promise(resolve => {
				setTimeout(() => {
					console.log(`City: ${city}`);
					resolve(city);
				}, ms);
			});
		})
		.then(() => {
			return new Promise(resolve => {
				setTimeout(() => {
					console.log('send data to server...');
					resolve();
				}, ms);
			});
		})
		.then(() => {
			return new Promise(resolve => {
				let i = 0;
				setTimeout(() => {

					const timer = setInterval(() => {
						console.log(++i);
						i === 5 && clearInterval(timer);
						resolve();
					}, 200);
				}, ms);
			});
		})
		.catch(err => {
			err.name = 'Error of random number';
			err.message = 'You got less then 30 procent';
			console.error(err);
		})
		.finally(() => {
			setTimeout(() => {
				console.log('done');
			}, ms);
		});
}
// modifyUserByAsync(2000);




// Задание 3  Обработать все при помощи асинхронной функции async await

const modifyUserByAwait = () => {
	console.log('data is loading...');

	const userMax = {
		name: 'Max',
		age: 25,
		gender: 'male',
		country: 'Ua',
		hobby: 'Box',
		status: 'privat',
	};

	if (getRandomNumber() <= 50) {
		return userMax;
	}

	throw new Error(`You got less then 30 procent`);
};


const delayAndConsole = ((ms, text) => {
	return new Promise(resolve => setTimeout(() => resolve(console.log(text)), ms));
});

(async (ms) => {

	try {
		const result = await modifyUserByAwait();
		const modify = await Promise.resolve(result.city = `Kyiv`);
		await delayAndConsole(2000, `success...`);
		await delayAndConsole(2000, `City: ${modify}`);
		await delayAndConsole(2000, `send data to server...`);
		await new Promise(resolve => setTimeout(() => {
			let i = 0;

			const timer = setInterval(() => {
				console.log(++i);
				i === 5 && clearInterval(timer);
				resolve();
			}, 200);
		}, ms));
	} catch (err) {
		console.error('Error of random number: ', err.message);
	}
	finally {
		setTimeout(() => console.log(`done`), ms);
	}
})(2000);


// await new Promise(resolve => setTimeout(() => resolve(console.log('send data to server...')), ms)); - 
// для примера - как я делал до этого




















