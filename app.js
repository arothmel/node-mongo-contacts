/**
 * Module dependencies.
 */
 // Express.js is the most popular node.js Framework
 // 1. First we import dependencies with Node.js global require() function.
 // 2. Then get access to our own modules which are app's routes 
 // 3. We also require core http and path modules

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');
  
// See contactprovider.js for db connection information

var ContactProvider = require('./contactprovider').ContactProvider;

// Instantiate express and assign our app variable
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

var contactProvider= new ContactProvider('localhost', 27017);

/* Routes -- handle routing the URI
--
-- ToDo: Move to routes directory
 */

// GET home page
// see also index.jade

app.get('/', function(req, res){
  contactProvider.findAll(function(error, cntcts){
      res.render('index', {
            title: 'Contacts',
            contacts:cntcts
        });
  });
});

// GET New Contacts page
// see also contact_new.jade

app.get('/contact/new', function(req, res) {
    res.render('contact_new', {
        title: 'New Contacts'
    });
});

//save new contact
app.post('/contact/new', function(req, res){
    contactProvider.save({
        name: req.param('name'),
        email: req.param('email'),
        address: req.param('address'),        
        city: req.param('city'),
        province: req.param('province')                
    }, function( error, docs) {
        res.redirect('/')
    });
});

//update a contact
app.get('/contact/:id/edit', function(req, res) {
        contactProvider.findById(req.param('_id'), function(error, contact) {
                res.render('contact_edit',
                { 
                        contact: contact
                });
        });
});

//save updated contact
app.post('/contact/:id/edit', function(req, res) {
        contactProvider.update(req.param('_id'),{
                name: req.param('name'),
                email: req.param('email'),
                address: req.param('address'),
                city: req.param('city'),
                province: req.param('province')                                              
        }, function(error, docs) {
                res.redirect('/')
        });
});

//delete a contact
app.post('/contact/:id/delete', function(req, res) {
        contactProvider.delete(req.param('_id'), function(error, docs) {
                res.redirect('/')
        });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
