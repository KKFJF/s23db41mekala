var express = require('express');
const widget_controlers= require('../controllers/widget');
var router = express.Router();

/* GET home page. */
router.get('/detail', widget_controlers.widget_view_one_Page);
module.exports = router;


/* GET detail costume page */
