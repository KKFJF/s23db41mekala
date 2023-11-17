var express = require('express');
const widget_controlers= require('../controllers/widget');
var router = express.Router();

router.get('/', widget_controlers.widget_view_all_Page);
/* GET home page. */
router.get('/detail', widget_controlers.widget_view_one_Page);

/* GET create costume page */
router.get('/create', widget_controlers.widget_create_Page);


/* GET create update page */
router.get('/update', widget_controlers.widget_update_Page);

/* GET delete costume page */
router.get('/delete', widget_controlers.widget_delete_Page);



module.exports = router;


/* GET detail costume page */
