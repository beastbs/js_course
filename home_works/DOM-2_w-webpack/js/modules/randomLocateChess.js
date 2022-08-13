const FnRangeRandomNumber = require('./rangeRandomNumber');

function randomLocateChess() {
	const btnRandom = document.querySelector('.btn__random');

	const allBlackCells = Array.from(document.querySelectorAll('.chess-board__block-black'));
	const allWhiteCells = Array.from(document.querySelectorAll('.chess-board__block-white'));
	const redChess = document.querySelectorAll('.fig-red');
	const greenChess = document.querySelectorAll('.fig-green');

	btnRandom.addEventListener('click', e => {
		const isCompaireNumsForRed = [];
		const isRandomBlackCells = [];

		for (let i = 0; i < redChess.length; i++) {
			const randomNumber = FnRangeRandomNumber(0, 17);

			if (isRandomBlackCells.length === 0) {
				isRandomBlackCells.push(allBlackCells[randomNumber]);
				isCompaireNumsForRed.push(randomNumber);
			}

			if (!isCompaireNumsForRed.includes(randomNumber)) {
				isRandomBlackCells.push(allBlackCells[randomNumber]);
				isCompaireNumsForRed.push(randomNumber);
			}

			console.log(isCompaireNumsForRed);
			console.log(isRandomBlackCells);
		}

		const isCompaireNumsForGreen = [];
		const isRandomWhiteCells = [];

		for (let i = 0; i < greenChess.length; i++) {
			const randomNumber = FnRangeRandomNumber(0, 17);

			console.log(randomNumber);

			if (isRandomWhiteCells.length === 0) {
				isRandomWhiteCells.push(allWhiteCells[randomNumber]);
				isCompaireNumsForGreen.push(randomNumber);
			}

			if (!isCompaireNumsForGreen.includes(randomNumber)) {
				isRandomWhiteCells.push(allWhiteCells[randomNumber]);
				isCompaireNumsForGreen.push(randomNumber);
			}
			console.log(isCompaireNumsForGreen);
			console.log(isRandomWhiteCells);
		}

		isRandomBlackCells.forEach((cell, i) => {
			redChess[i].style.position = 'static';
			cell.append(redChess[i]);
		});

		isRandomWhiteCells.forEach((cell, i) => {
			greenChess[i].style.position = 'static';
			cell.append(greenChess[i]);
		});

	});
}

module.exports = randomLocateChess;