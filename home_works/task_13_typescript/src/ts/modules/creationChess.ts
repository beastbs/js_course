'use strict';
import { chessBoard } from "../script";

const createChess = (): void => {

	const colorBlack: string = 'chess-board__block-black';
	const colorWhite: string = 'chess-board__block-white';
	let flag: boolean = true;
	let counter: number = 0;

	for (let i = 0; i < 6; i++) {

		for (let j = 0; j < 6; j++) {

			if (j === 0) {
				flag = !flag;
			}


			const chessBlock: any = document.createElement('div');
			chessBlock.id = ++counter;

			if (flag) {
				chessBlock.classList = `chess-board__block ${colorBlack}`;
			} else {
				chessBlock.classList = `chess-board__block ${colorWhite}`;
			}

			chessBoard?.append(chessBlock);
			flag = !flag;
		}
	}
};

export { createChess };

















