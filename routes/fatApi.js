var express = require('express');
var router = express.Router();
const fatApiController = require('../controllers/fatApiController');

router.get('/search', fatApiController.search);

module.exports = router;
