'use strict';
import { chessBoard } from "../script";

function dragFigs(): void {
	let selectedChip: null | HTMLElement = null;

	chessBoard?.addEventListener('dragstart', (e: any) => {
		const figTarget: HTMLElement = e.target?.closest('.chess');

		if (!figTarget) return;

		selectedChip = figTarget;
	});

	chessBoard?.addEventListener('dragover', function (e: any) {

		if (selectedChip?.classList.contains('fig-red')) {
			const targetBlackBoard: HTMLElement = e.target?.closest('.chess-board__block-black');

			if (!targetBlackBoard) return;
			e.preventDefault();
			return;
		}

		const targetWhiteBoard: HTMLElement = e.target?.closest('.chess-board__block-white');

		if (!targetWhiteBoard) return;
		e.preventDefault();
	});


	chessBoard?.addEventListener('drop', function (e: any) {

		if (selectedChip?.classList.contains('fig-red')) {

			const cellBlack: HTMLElement = e.target?.closest('.chess-board__block-black');

			if (!cellBlack) return;

			selectedChip.style.position = 'static';
			cellBlack.append(selectedChip);
			selectedChip = null;
			return;
		}

		const cellWhite: HTMLElement = e.target?.closest('.chess-board__block-white');

		if (!cellWhite) return;

		if (selectedChip !== null) {
			selectedChip.style.position = 'static';
			cellWhite.append(selectedChip);
			selectedChip = null;
		}

	});

}
export { dragFigs };