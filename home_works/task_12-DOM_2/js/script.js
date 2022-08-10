'use strict';

const drawChess = () => {
	const chessBoard = document.querySelector('.chess-board');
	const colorBlack = 'chess-board__block-black';
	const colorWhite = 'chess-board__block-white';
	let flag = true;
	let counter = 0;

	for (let i = 0; i < 6; i++) {

		for (let j = 0; j < 6; j++) {

			if (j === 0) {
				flag = !flag;
			}


			const chessBlock = document.createElement('div');
			chessBlock.id = ++counter;

			if (flag) {
				chessBlock.classList = `chess-board__block ${colorBlack}`;
			} else {
				chessBlock.classList = `chess-board__block ${colorWhite}`;
			}

			chessBoard.append(chessBlock);
			flag = !flag;

		}
	}


	function dragFigs() {
		let selectedChip = null;

		chessBoard.addEventListener('dragstart', e => {
			const figTarget = e.target.closest('.chess');

			if (!figTarget) return;

			selectedChip = figTarget;
			console.log(selectedChip);
		});

		chessBoard.addEventListener('dragover', function (e) {

			if (selectedChip.classList.contains('fig-red')) {
				const targetBlackBoard = e.target.closest('.chess-board__block-black');

				if (!targetBlackBoard) return;
				e.preventDefault();
				return;
			}

			const targetWhiteBoard = e.target.closest('.chess-board__block-white');

			if (!targetWhiteBoard) return;
			e.preventDefault();
		});


		chessBoard.addEventListener('drop', function (e) {

			if (selectedChip.classList.contains('fig-red')) {
				const cellBlack = e.target.closest('.chess-board__block-black');

				if (!cellBlack) return;

				selectedChip.style.position = 'static';
				cellBlack.append(selectedChip);
				selectedChip = null;
				return;
			}

			const cellWhite = e.target.closest('.chess-board__block-white');

			if (!cellWhite) return;

			selectedChip.style.position = 'static';
			cellWhite.append(selectedChip);
			selectedChip = null;
		});

	}
	dragFigs();


	const allChess = document.querySelectorAll('.chess');

	function resetChess() {
		const btnReset = document.querySelector('.btn__reset');

		btnReset.addEventListener('click', e => {
			allChess.forEach(allFigs => {
				allFigs.style.position = 'absolute';
			});
		});
	}
	resetChess();


	function rangeRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function randomLacateChess() {
		const btnRandom = document.querySelector('.btn__random');

		const allBlackCells = Array.from(document.querySelectorAll('.chess-board__block-black'));
		const allWhiteCells = Array.from(document.querySelectorAll('.chess-board__block-white'));
		const redChess = document.querySelectorAll('.fig-red');
		const greenChess = document.querySelectorAll('.fig-green');

		btnRandom.addEventListener('click', e => {
			const isCompaireNumsForRed = [];
			const isRandomBlackCells = [];

			for (let i = 0; i < redChess.length; i++) {
				const randomNumber = rangeRandomNumber(0, 17);

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
				const randomNumber = rangeRandomNumber(0, 17);

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
	randomLacateChess();


};
drawChess();

























