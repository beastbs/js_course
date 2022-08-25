'use strict';
const css = require("../css/style.min.css");
const WebpackLogo = require("../img/favicon/chess_board.png")

import { createChess } from "./modules/creationChess";
import { dragFigs } from "./modules/dragFigs";
import { randomLocateChess } from "./modules/randomLocateChess";
import { resetChess } from "./modules/resetChess";

const allChess: NodeListOf<Element> = document.querySelectorAll('.chess');
const chessBoard: Element | null = document.querySelector('.chess-board');

window.addEventListener('DOMContentLoaded', (): void => {

	createChess();
	dragFigs();
	randomLocateChess();
	resetChess();

});

export { chessBoard, allChess };














