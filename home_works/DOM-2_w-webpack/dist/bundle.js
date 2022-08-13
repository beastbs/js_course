/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./home_works/DOM-2_w-webpack/js/modules/chessDesk.js":
/*!************************************************************!*\
  !*** ./home_works/DOM-2_w-webpack/js/modules/chessDesk.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const chessBoard = __webpack_require__(/*! ../script */ "./home_works/DOM-2_w-webpack/js/script.js");
// import { chessBoard } from "../script";

const chessDesk = () => {
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
};

module.exports = chessDesk;


/***/ }),

/***/ "./home_works/DOM-2_w-webpack/js/modules/dragFigs.js":
/*!***********************************************************!*\
  !*** ./home_works/DOM-2_w-webpack/js/modules/dragFigs.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const chessBoard = __webpack_require__(/*! ../script */ "./home_works/DOM-2_w-webpack/js/script.js");

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

/***/ }),

/***/ "./home_works/DOM-2_w-webpack/js/modules/randomLocateChess.js":
/*!********************************************************************!*\
  !*** ./home_works/DOM-2_w-webpack/js/modules/randomLocateChess.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const FnRangeRandomNumber = __webpack_require__(/*! ./rangeRandomNumber */ "./home_works/DOM-2_w-webpack/js/modules/rangeRandomNumber.js");

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

/***/ }),

/***/ "./home_works/DOM-2_w-webpack/js/modules/rangeRandomNumber.js":
/*!********************************************************************!*\
  !*** ./home_works/DOM-2_w-webpack/js/modules/rangeRandomNumber.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


function rangeRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = rangeRandomNumber;

/***/ }),

/***/ "./home_works/DOM-2_w-webpack/js/modules/resetChess.js":
/*!*************************************************************!*\
  !*** ./home_works/DOM-2_w-webpack/js/modules/resetChess.js ***!
  \*************************************************************/
/***/ ((module) => {

function resetChess() {
	const allChess = document.querySelectorAll('.chess');
	const btnReset = document.querySelector('.btn__reset');

	btnReset.addEventListener('click', e => {
		allChess.forEach(allFigs => {
			allFigs.style.position = 'absolute';
		});
	});
}

module.exports = resetChess;

/***/ }),

/***/ "./home_works/DOM-2_w-webpack/js/script.js":
/*!*************************************************!*\
  !*** ./home_works/DOM-2_w-webpack/js/script.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const chessBoard = document.querySelector('.chess-board');

window.addEventListener('DOMContentLoaded', () => {
	const chessDesk = __webpack_require__(/*! ./modules/chessDesk */ "./home_works/DOM-2_w-webpack/js/modules/chessDesk.js");
	const dragFigs = __webpack_require__(/*! ./modules/dragFigs */ "./home_works/DOM-2_w-webpack/js/modules/dragFigs.js");
	const rangeRandomNumber = __webpack_require__(/*! ./modules/rangeRandomNumber */ "./home_works/DOM-2_w-webpack/js/modules/rangeRandomNumber.js");
	const randomLocateChess = __webpack_require__(/*! ./modules/randomLocateChess */ "./home_works/DOM-2_w-webpack/js/modules/randomLocateChess.js");
	const resetChess = __webpack_require__(/*! ./modules/resetChess */ "./home_works/DOM-2_w-webpack/js/modules/resetChess.js");

	chessDesk();
	dragFigs();
	rangeRandomNumber();
	randomLocateChess();
	resetChess();

});

module.exports = chessBoard;
































/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./home_works/DOM-2_w-webpack/js/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map