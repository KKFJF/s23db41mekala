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

// Handle a show one view with id specified by query
exports.widget_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await widget.findById( req.query.id)
res.render('widgetdetail',
{ title: 'widget Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.widget_create_Page = function(req, res) {
console.log("create view")
try{
res.render('widgetcreate', { title: 'widget Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};



// Handle building the view for updating a costume.
// query provides the id
exports.widget_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await widget.findById(req.query.id)
res.render('widgetupdate', { title: 'widget Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};



// Handle a delete one view with id from query
exports.widget_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await widget.findById(req.query.id)
res.render('widgetdelete', { title: 'widget Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
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
//exports.widget_delete = function(req, res) {
//res.send('NOT IMPLEMENTED: widget delete DELETE ' + req.params.id);
//};
//Handle widget delete on DELETE.
exports.widget_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await widget.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": Error deleting ${err}}`);
}
};

// Handle widget update form on PUT.
//exports.widget_update_put = function(req, res) {
//res.send('NOT IMPLEMENTED: widget update PUT' + req.params.id);
//};

//Handle widget update form on PUT.
exports.widget_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await widget.findById( req.params.id)
// Do updates of properties
if(req.body.widget)
toUpdate.name = req.body.name;
if(req.body.price) toUpdate.price = req.body.price;
if(req.body.description) toUpdate.description = req.body.description;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
 
// VIEWS
// Handle a show all view
exports.widget_view_all_Page = async function(req, res) {
    try{
    console.log("IN")
    thewidgets = await widget.find();
    console.log(thewidgets)
    res.render('widget', { title: 'Search Results - widgets', results: thewidgets });
    }
    catch(err){
    //res.status(500);
    res.send(`{"error": ${err}}`);
    }
}

