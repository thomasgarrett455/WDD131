const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

const articleListContainer = document.querySelector('#article-list');

articles.forEach(item => {
    const newArticleElement = document.createElement('article');
    newArticleElement.classList.add('book-review-entry');

    const articleTemplate = `
        <h2>${item.title}</h2>
        <img src="${item.imgSrc}" alt="${item.imgAlt}">
        <p>${item.description} <button>Read More...</button></p>
        <div class="details">
            <ul>
                <li>Date: ${item.date}</li>
                <li>Recommended Ages: ${item.ages}</li>
                <li>Genre: ${item.genre}</li>
                <li>Rating: ${item.stars}</li>
            </ul>
        </div>
    `;

    newArticleElement.innerHTML = articleTemplate;
    articleListContainer.appendChild(newArticleElement);
});
