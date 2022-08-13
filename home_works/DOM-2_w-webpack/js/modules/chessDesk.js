
const chessBoard = require('../script');
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
