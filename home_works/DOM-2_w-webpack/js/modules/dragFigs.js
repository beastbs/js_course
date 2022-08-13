'use strict';
const chessBoard = require('../script');

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

module.exports = dragFigs;