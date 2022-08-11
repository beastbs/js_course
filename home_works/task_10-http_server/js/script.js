'use strict';

const jsonPlaceholderURL = 'https://jsonplaceholder.typicode.com';

function getDataWithLogs(userID) {
	console.log(`Запрос на ${jsonPlaceholderURL} отправлен`);
	const start = new Date();

	fetch(jsonPlaceholderURL)
		.then(() => {
			console.log('Ответ получен');
			const end = new Date();
			const requestTime = end.getTime() - start.getTime();
			console.log(`Длительность запроса: ${requestTime}мс`);
		})
		.catch(err => console.error(err));

	let user;

	fetch(`${jsonPlaceholderURL}/users/${userID}`)
		.then(response => response.json())
		.then(userData => user = userData)
		.then(() =>
			fetch(`${jsonPlaceholderURL}/posts/${userID}`)
				.then(response => response.json())
				.then(posts =>
					fetch(`${jsonPlaceholderURL}/posts/${userID}/comments`)
						.then(response => response.json())
						.then(allComments => {
							const postsWithComments = [posts].map(post => ({
								...post,
								comments: allComments.filter(comment => comment.postId === post.id)
							}));

							user.posts = postsWithComments;
							console.log(user);
						})
				)
				.catch(err => console.error(err))
		);


}
getDataWithLogs(1);



const requestDataWithLogs = async (userID) => {
	try {
		console.log(`Запрос на ${jsonPlaceholderURL} отправлен`);
		const start = new Date();

		await fetch(jsonPlaceholderURL);
		await Promise.resolve(console.log('Ответ получен'));
		const end = new Date();
		const requestTime = end.getTime() - start.getTime();
		await Promise.resolve(console.log(`Длительность запроса: ${requestTime}мс`));
	} catch (error) {
		console.error(error);
	}


	try {
		const requestOneUser = await fetch(`${jsonPlaceholderURL}/users/${userID}`);
		const responseUserId = await requestOneUser.json();
		let user = responseUserId;

		const requestPosts = await fetch(`${jsonPlaceholderURL}/posts/${userID}`);
		const responsePosts = await requestPosts.json();
		console.log(responsePosts);

		const requestComments = await fetch(`${jsonPlaceholderURL}/posts/${userID}/comments`);
		const responseComments = await requestComments.json();
		console.log(responseComments);

		const postsWithComments = [responsePosts].map(post => ({
			...post,
			comments: responseComments.filter(comment => comment.postId === post.id)
		}));

		user.responsePosts = postsWithComments;
		console.log(user);
	} catch (error) {
		console.error(error);
	}

};
requestDataWithLogs(2);






