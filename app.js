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

// Routes -- handle routing the URI

app.get('/', routes.index);
app.get('/helloworld', routes.helloworld);
app.get('/contact/new', routes.contactNew);
app.get('/contact/:id/edit', routes.contactEdit);

//save - post
app.post('/contact/new', routes.contactSave);
app.post('/contact/:id/edit', routes.contactUpdate);

// No roots :p
//delete a contact
app.post('/contact/:id/delete', function(req, res) {
        contactProvider.delete(req.param('_id'), function(error, docs) {
                res.redirect('/')
        });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
