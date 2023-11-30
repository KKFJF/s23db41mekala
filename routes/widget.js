var express = require('express');
const widget_controlers= require('../controllers/widget');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

router.get('/', widget_controlers.widget_view_all_Page);
/* GET home page. */
router.get('/detail', widget_controlers.widget_view_one_Page);

/* GET create costume page */
router.get('/create', secured, widget_controlers.widget_create_Page);


/* GET create update page */
router.get('/update',secured, widget_controlers.widget_update_Page);

/* GET delete costume page */
router.get('/delete', secured,widget_controlers.widget_delete_Page);



module.exports = router;


/* GET detail costume page */
