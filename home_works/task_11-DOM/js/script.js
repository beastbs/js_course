'use strict';


const square = document.querySelector('.square-yellow');

const rotateSquare = () => {
	square.addEventListener('mouseover', (e) => {
		square.classList.add('square__rotate-blue');
	});
	square.addEventListener('mouseout', (e) => {
		square.classList.remove('square__rotate-blue');
	});
};
rotateSquare();


const userInfo = userID => {
	const btnUser = document.querySelector('.info__user'),
		btnPosts = document.querySelector('.info__posts'),
		btnComments = document.querySelector('.info__comments'),
		infoUserBoard = document.querySelector('.info__userBoard'),
		infoFlexBoard = document.querySelector('.info__flexBoard');



	fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
		.then(response => response.json())
		.then(dataUser => {
			btnUser.addEventListener('click', () => {


				for (let prop in dataUser) {
					infoUserBoard.insertAdjacentHTML('afterbegin', `<span>${prop}: ${JSON.stringify(dataUser[prop])}</span><br>`);
				}

				btnUser.disabled = "true";
				btnPosts.classList.add('btn-active');
			});
		})
		.then(() => fetch(`https://jsonplaceholder.typicode.com/posts/${userID}`))
		.then(response => response.json())
		.then(posts => {
			btnPosts.addEventListener('click', (e) => {

				for (let prop in posts) {
					infoFlexBoard.insertAdjacentHTML('afterbegin', `<span>${prop}: ${JSON.stringify(posts[prop])}</span><br>`);
				}

				btnPosts.disabled = "true";
				btnComments.classList.add('btn-active');
			});
		})
		.then(() => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userID}`))
		.then(response => response.json())
		.then(comments => {
			btnComments.addEventListener('click', (e) => {
				comments.forEach((el, i) => {
					infoFlexBoard.insertAdjacentHTML('beforeend', `<span>${i + 1}: ${JSON.stringify(el)}</span><br>`);
				});

				btnComments.disabled = "true";
			});
		});
};
userInfo(4);








