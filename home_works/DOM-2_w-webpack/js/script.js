'use strict';

const chessBoard = document.querySelector('.chess-board');

window.addEventListener('DOMContentLoaded', () => {
	const chessDesk = require('./modules/chessDesk');
	const dragFigs = require('./modules/dragFigs');
	const rangeRandomNumber = require('./modules/rangeRandomNumber');
	const randomLocateChess = require('./modules/randomLocateChess');
	const resetChess = require('./modules/resetChess');

	chessDesk();
	dragFigs();
	rangeRandomNumber();
	randomLocateChess();
	resetChess();

});

module.exports = chessBoard;






























