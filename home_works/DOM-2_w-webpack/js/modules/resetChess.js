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