'use strict';
import { allChess } from "../script";

function resetChess(): void {
	const btnReset: HTMLElement | null = document.querySelector('.btn__reset');

	btnReset?.addEventListener('click', (e: any) => {
		allChess.forEach((allFigs: any) => {
			allFigs.style.position = 'absolute';
		});
	});
}

export { resetChess };