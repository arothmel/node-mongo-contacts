
/*
 * GET home page.
 */

var ContactProvider = require('../contactprovider').ContactProvider;
var contactProvider= new ContactProvider('localhost', 27017);

exports.index = function(req, res){	        // exports is like expose
  res.render('index', { title: 'Express' });
};

// res.render calling jade. jade are you in?
exports.helloworld = function(req, res){
  res.render('helloworld', { title: 'Hello, World!' });
};

exports.index = function(req, res){	
   contactProvider.findAll(function(error, cntcts){
      res.render('index', {
            title: 'Contacts',
            contacts:cntcts
        });
  });
};

exports.contactNew = function(req, res){
    res.render('contact_new', {
        title: 'New Contacts'
    });
};

exports.contactEdit = function(req, res){
    contactProvider.findById(req.param('_id'), function(error, contact) {
        res.render('contact_edit',
            { 
                contact: contact
            });
    });
};


exports.contactSave = function(req, res){
    contactProvider.save({
        name: req.param('name'),
        email: req.param('email'),
        address: req.param('address'),        
        city: req.param('city'),
        province: req.param('province')                
    }, function( error, docs) {
        res.redirect('/')
    });
};


//save updated contact
exports.contactUpdate = function(req, res){
        contactProvider.update(req.param('_id'),{
                name: req.param('name'),
                email: req.param('email'),
                address: req.param('address'),
                city: req.param('city'),
                province: req.param('province')                                              
        }, function(error, docs) {
                res.redirect('/')
        });
};

