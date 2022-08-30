'use strict';
import { rangeRandomNumber } from "./rangeRandomNumber";

function randomLocateChess(): void {
	type ArrayOfElements = Element[];

	const btnRandom: HTMLElement | null = document.querySelector('.btn__random');

	const allBlackCells: ArrayOfElements = Array.from(document.querySelectorAll('.chess-board__block-black'));
	const allWhiteCells: ArrayOfElements = Array.from(document.querySelectorAll('.chess-board__block-white'));
	const redChess: HTMLElement[] = Array.from(document.querySelectorAll('.fig-red'));
	const greenChess: HTMLElement[] = Array.from(document.querySelectorAll('.fig-green'));

	btnRandom?.addEventListener('click', (e) => {
		const isCompaireNumsForRed: number[] = [];
		const isRandomBlackCells: ArrayOfElements = [];

		for (let i = 0; i < redChess.length; i++) {
			const randomNumber: number = rangeRandomNumber(0, 17);

			if (isRandomBlackCells.length === 0) {
				isRandomBlackCells.push(allBlackCells[randomNumber]);
				isCompaireNumsForRed.push(randomNumber);
			}

			if (!isCompaireNumsForRed.includes(randomNumber)) {
				isRandomBlackCells.push(allBlackCells[randomNumber]);
				isCompaireNumsForRed.push(randomNumber);
			}
		}

		const isCompaireNumsForGreen: number[] = [];
		const isRandomWhiteCells: ArrayOfElements = [];

		for (let i = 0; i < greenChess.length; i++) {
			const randomNumber: number = rangeRandomNumber(0, 17);

			if (isRandomWhiteCells.length === 0) {
				isRandomWhiteCells.push(allWhiteCells[randomNumber]);
				isCompaireNumsForGreen.push(randomNumber);
			}

			if (!isCompaireNumsForGreen.includes(randomNumber)) {
				isRandomWhiteCells.push(allWhiteCells[randomNumber]);
				isCompaireNumsForGreen.push(randomNumber);
			}
		}

		isRandomBlackCells.forEach((cell: Element, i: number) => {
			redChess[i].style.position = 'static';
			cell.append(redChess[i]);
		});

		isRandomWhiteCells.forEach((cell: Element, i: number) => {
			greenChess[i].style.position = 'static';
			cell.append(greenChess[i]);
		});

	});

}

export { randomLocateChess };