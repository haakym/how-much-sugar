const searchForm = document.getElementById('searchForm');
const searchResult = document.getElementById('searchResult');

searchForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const search = e.target.elements.search.value;

	const response = await fetch(`/fat-api/search?value=${search}`);

	const data = await response.json();

	// build string, output to page!
	const listStringTing = data.map(item => {
		// const carbs = /Carbs: (.*)g \|/g.exec(item.food_description)[1];

		return `
			<li>
				<h2>${item.food_name}</h2>
				<h3>${item.brand_name}</h3>
				<p>${item.food_description}</p>
			</li>
		`;
	}).join("");

	console.dir(listStringTing);

	searchResult.innerHTML = listStringTing;



	// next page
	
});