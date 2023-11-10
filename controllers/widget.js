var widget = require('../models/widgetSchema');
// List of all widgets
exports.widget_list = async function(req, res) {
    try{
        thewidgets = await widget.find();
        res.send(thewidgets);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        } 
};
// for a specific widget.
//exports.widget_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: widget detail: ' + req.params.id);
// };
// Handle widget create on POST.


// for a specific widget.
exports.widget_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await widget.findById(req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
exports.widget_create_post = async function(req, res) {
    console.log(req.body)
    let document = new widget();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"widget_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.description = req.body.description;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } ;
};
// Handle widget delete form on DELETE.
exports.widget_delete = function(req, res) {
res.send('NOT IMPLEMENTED: widget delete DELETE ' + req.params.id);
};
// Handle widget update form on PUT.
exports.widget_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: widget update PUT' + req.params.id);
};
 
// VIEWS
// Handle a show all view
exports.widget_view_all_Page = async function(req, res) {
    try{
    console.log("IN")
    thewidgets = await widget.find();
    console.log(thewidgets)
    res.render('widgets', { title: 'Search Results - widgets', results: thewidgets });
    }
    catch(err){
    //res.status(500);
    res.send(`{"error": ${err}}`);
    }
}