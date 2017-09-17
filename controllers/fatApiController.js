const FatSecret = require('fatsecret');
const fatAPI = new FatSecret(process.env.FATSECRET_KEY, process.env.FATSECRET_SECRET);

exports.search = (req, res) => {
  const searchQuery = req.query.search;
  const pageNumber = req.query.page || 1;
 
  fatAPI
    .method('foods.search', {
      search_expression: searchQuery,
      max_results: 10,
      page_number: pageNumber
    })
    .then(function(results) {
      // console.log(results.foods.food);
      
      res.json(results.foods.food);
    })
    .catch(err => console.error(err));
};