var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var widget_controller = require('../controllers/widget');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// widget ROUTES ///
// POST request for creating a widget.
router.post('/widget', widget_controller.widget_create_post);
// DELETE request to delete widget.
router.delete('/widget/:id', widget_controller.widget_delete);
// PUT request to update widget.
router.put('/widget/:id', widget_controller.widget_update_put);
// GET request for one widget.
router.get('/widget/:id', widget_controller.widget_detail);
// GET request for list of all widget items.
router.get('/widget', widget_controller.widget_list);
module.exports = router;

