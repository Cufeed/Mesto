const config = {
	baseUrl: 'https://nomoreparties.co/v1/frontend-st-cohort-201',
	headers: {
		authorization: 'b015df23-ce0b-4c73-8ac6-fa62bcf3519c',
		'Content-Type': 'application/json',
	},
}

function getResponse(res) {
	if (res.ok) {
		return res.json()
	}
	return Promise.reject(`Ошибка: ${res.status}`)
}

export function getInitialCards() {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'GET',
		headers: config.headers,
	}).then(getResponse)
}

export function updateUserInfo(name, about) {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'PATCH',
		headers: {
			...config.headers, 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: name,
			about: about,
		}),
	}).then(getResponse)
}

export function updateAvatar(avatarLink) {
	return fetch(`${config.baseUrl}/users/me/avatar`, {
		method: 'PATCH',
		headers: config.headers,
		body: JSON.stringify({
			avatar: avatarLink,
		}),
	}).then(getResponse)
}

export function getUserInfo() {
	return fetch(`${config.baseUrl}/users/me`, {
		method: 'GET',
		headers: config.headers,
	}).then(getResponse)
}

export function addCard(name, link) {
	return fetch(`${config.baseUrl}/cards`, {
		method: 'POST',
		headers: {
			...config.headers, 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: name,
			link: link,
		}),
	}).then(getResponse)
}

export function deleteCard(cardId) {
	return fetch(`${config.baseUrl}/cards/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	}).then(getResponse)
}

export function addLike(cardId) {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'PUT',
		headers: config.headers,
	}).then(getResponse)
}

export function removeLike(cardId) {
	return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
		method: 'DELETE',
		headers: config.headers,
	}).then(getResponse)
}
