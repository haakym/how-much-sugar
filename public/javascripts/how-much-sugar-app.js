const searchForm = document.getElementById('searchForm');
const searchResult = document.getElementById('searchResult');

searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const search = e.target.elements.search.value;

	const response = await fetch(`/fat-api/search?value=${search}`);

	const data = await response.json()

	// build string, output to page!
	const listStringTing = data.map(item => {
		return `<li>${item.food_name} - ${item.food_description}</li>`;
	}).join("");

	console.dir(listStringTing);

	searchResult.innerHTML = listStringTing;



	// next page
	
});