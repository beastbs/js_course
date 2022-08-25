/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./img/favicon/chess_board.png":
/*!*************************************!*\
  !*** ./img/favicon/chess_board.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/favicon/chess_board.png\");\n\n//# sourceURL=webpack:///./img/favicon/chess_board.png?");

/***/ }),

/***/ "./css/style.min.css":
/*!***************************!*\
  !*** ./css/style.min.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/style.min.css?");

/***/ }),

/***/ "./ts/modules/creationChess.ts":
/*!*************************************!*\
  !*** ./ts/modules/creationChess.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createChess = void 0;\nvar script_1 = __webpack_require__(/*! ../script */ \"./ts/script.ts\");\nvar createChess = function () {\n    var colorBlack = 'chess-board__block-black';\n    var colorWhite = 'chess-board__block-white';\n    var flag = true;\n    var counter = 0;\n    for (var i = 0; i < 6; i++) {\n        for (var j = 0; j < 6; j++) {\n            if (j === 0) {\n                flag = !flag;\n            }\n            var chessBlock = document.createElement('div');\n            chessBlock.id = ++counter;\n            if (flag) {\n                chessBlock.classList = \"chess-board__block \".concat(colorBlack);\n            }\n            else {\n                chessBlock.classList = \"chess-board__block \".concat(colorWhite);\n            }\n            script_1.chessBoard === null || script_1.chessBoard === void 0 ? void 0 : script_1.chessBoard.append(chessBlock);\n            flag = !flag;\n        }\n    }\n};\nexports.createChess = createChess;\n\n\n//# sourceURL=webpack:///./ts/modules/creationChess.ts?");

/***/ }),

/***/ "./ts/modules/dragFigs.ts":
/*!********************************!*\
  !*** ./ts/modules/dragFigs.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.dragFigs = void 0;\nvar script_1 = __webpack_require__(/*! ../script */ \"./ts/script.ts\");\nfunction dragFigs() {\n    var selectedChip = null;\n    script_1.chessBoard === null || script_1.chessBoard === void 0 ? void 0 : script_1.chessBoard.addEventListener('dragstart', function (e) {\n        var _a;\n        var figTarget = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('.chess');\n        if (!figTarget)\n            return;\n        selectedChip = figTarget;\n    });\n    script_1.chessBoard === null || script_1.chessBoard === void 0 ? void 0 : script_1.chessBoard.addEventListener('dragover', function (e) {\n        var _a, _b;\n        if (selectedChip === null || selectedChip === void 0 ? void 0 : selectedChip.classList.contains('fig-red')) {\n            var targetBlackBoard = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('.chess-board__block-black');\n            if (!targetBlackBoard)\n                return;\n            e.preventDefault();\n            return;\n        }\n        var targetWhiteBoard = (_b = e.target) === null || _b === void 0 ? void 0 : _b.closest('.chess-board__block-white');\n        if (!targetWhiteBoard)\n            return;\n        e.preventDefault();\n    });\n    script_1.chessBoard === null || script_1.chessBoard === void 0 ? void 0 : script_1.chessBoard.addEventListener('drop', function (e) {\n        var _a, _b;\n        if (selectedChip === null || selectedChip === void 0 ? void 0 : selectedChip.classList.contains('fig-red')) {\n            var cellBlack = (_a = e.target) === null || _a === void 0 ? void 0 : _a.closest('.chess-board__block-black');\n            if (!cellBlack)\n                return;\n            selectedChip.style.position = 'static';\n            cellBlack.append(selectedChip);\n            selectedChip = null;\n            return;\n        }\n        var cellWhite = (_b = e.target) === null || _b === void 0 ? void 0 : _b.closest('.chess-board__block-white');\n        if (!cellWhite)\n            return;\n        if (selectedChip !== null) {\n            selectedChip.style.position = 'static';\n            cellWhite.append(selectedChip);\n            selectedChip = null;\n        }\n    });\n}\nexports.dragFigs = dragFigs;\n\n\n//# sourceURL=webpack:///./ts/modules/dragFigs.ts?");

/***/ }),

/***/ "./ts/modules/randomLocateChess.ts":
/*!*****************************************!*\
  !*** ./ts/modules/randomLocateChess.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.randomLocateChess = void 0;\nvar rangeRandomNumber_1 = __webpack_require__(/*! ./rangeRandomNumber */ \"./ts/modules/rangeRandomNumber.ts\");\nfunction randomLocateChess() {\n    var btnRandom = document.querySelector('.btn__random');\n    var allBlackCells = Array.from(document.querySelectorAll('.chess-board__block-black'));\n    var allWhiteCells = Array.from(document.querySelectorAll('.chess-board__block-white'));\n    var redChess = Array.from(document.querySelectorAll('.fig-red'));\n    var greenChess = Array.from(document.querySelectorAll('.fig-green'));\n    btnRandom === null || btnRandom === void 0 ? void 0 : btnRandom.addEventListener('click', function (e) {\n        var isCompaireNumsForRed = [];\n        var isRandomBlackCells = [];\n        for (var i = 0; i < redChess.length; i++) {\n            var randomNumber = (0, rangeRandomNumber_1.rangeRandomNumber)(0, 17);\n            if (isRandomBlackCells.length === 0) {\n                isRandomBlackCells.push(allBlackCells[randomNumber]);\n                isCompaireNumsForRed.push(randomNumber);\n            }\n            if (!isCompaireNumsForRed.includes(randomNumber)) {\n                isRandomBlackCells.push(allBlackCells[randomNumber]);\n                isCompaireNumsForRed.push(randomNumber);\n            }\n        }\n        var isCompaireNumsForGreen = [];\n        var isRandomWhiteCells = [];\n        for (var i = 0; i < greenChess.length; i++) {\n            var randomNumber = (0, rangeRandomNumber_1.rangeRandomNumber)(0, 17);\n            if (isRandomWhiteCells.length === 0) {\n                isRandomWhiteCells.push(allWhiteCells[randomNumber]);\n                isCompaireNumsForGreen.push(randomNumber);\n            }\n            if (!isCompaireNumsForGreen.includes(randomNumber)) {\n                isRandomWhiteCells.push(allWhiteCells[randomNumber]);\n                isCompaireNumsForGreen.push(randomNumber);\n            }\n        }\n        isRandomBlackCells.forEach(function (cell, i) {\n            redChess[i].style.position = 'static';\n            cell.append(redChess[i]);\n        });\n        isRandomWhiteCells.forEach(function (cell, i) {\n            greenChess[i].style.position = 'static';\n            cell.append(greenChess[i]);\n        });\n    });\n}\nexports.randomLocateChess = randomLocateChess;\n\n\n//# sourceURL=webpack:///./ts/modules/randomLocateChess.ts?");

/***/ }),

/***/ "./ts/modules/rangeRandomNumber.ts":
/*!*****************************************!*\
  !*** ./ts/modules/rangeRandomNumber.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.rangeRandomNumber = void 0;\nfunction rangeRandomNumber(min, max) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\nexports.rangeRandomNumber = rangeRandomNumber;\n\n\n//# sourceURL=webpack:///./ts/modules/rangeRandomNumber.ts?");

/***/ }),

/***/ "./ts/modules/resetChess.ts":
/*!**********************************!*\
  !*** ./ts/modules/resetChess.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.resetChess = void 0;\nvar script_1 = __webpack_require__(/*! ../script */ \"./ts/script.ts\");\nfunction resetChess() {\n    var btnReset = document.querySelector('.btn__reset');\n    btnReset === null || btnReset === void 0 ? void 0 : btnReset.addEventListener('click', function (e) {\n        script_1.allChess.forEach(function (allFigs) {\n            allFigs.style.position = 'absolute';\n        });\n    });\n}\nexports.resetChess = resetChess;\n\n\n//# sourceURL=webpack:///./ts/modules/resetChess.ts?");

/***/ }),

/***/ "./ts/script.ts":
/*!**********************!*\
  !*** ./ts/script.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.allChess = exports.chessBoard = void 0;\nvar css = __webpack_require__(/*! ../css/style.min.css */ \"./css/style.min.css\");\nvar WebpackLogo = __webpack_require__(/*! ../img/favicon/chess_board.png */ \"./img/favicon/chess_board.png\");\nvar creationChess_1 = __webpack_require__(/*! ./modules/creationChess */ \"./ts/modules/creationChess.ts\");\nvar dragFigs_1 = __webpack_require__(/*! ./modules/dragFigs */ \"./ts/modules/dragFigs.ts\");\nvar randomLocateChess_1 = __webpack_require__(/*! ./modules/randomLocateChess */ \"./ts/modules/randomLocateChess.ts\");\nvar resetChess_1 = __webpack_require__(/*! ./modules/resetChess */ \"./ts/modules/resetChess.ts\");\nvar allChess = document.querySelectorAll('.chess');\nexports.allChess = allChess;\nvar chessBoard = document.querySelector('.chess-board');\nexports.chessBoard = chessBoard;\nwindow.addEventListener('DOMContentLoaded', function () {\n    (0, creationChess_1.createChess)();\n    (0, dragFigs_1.dragFigs)();\n    (0, randomLocateChess_1.randomLocateChess)();\n    (0, resetChess_1.resetChess)();\n});\n\n\n//# sourceURL=webpack:///./ts/script.ts?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./ts/script.ts");
/******/ 	
/******/ })()
;