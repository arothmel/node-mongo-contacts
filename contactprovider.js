var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

ContactProvider = function(host, port) {
  this.db= new Db('node-mongo-contact', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
  this.db.open(function(){});
};

// A collection is instead of tables
ContactProvider.prototype.getCollection= function(callback) {
  this.db.collection('contacts', function(error, contact_collection) {
    if( error ) callback(error);
    else callback(null, contact_collection);
  });
};

//find all contacts
ContactProvider.prototype.findAll = function(callback) {
    this.getCollection(function(error, contact_collection) {
      if( error ) callback(error)
      else {
        contact_collection.find().toArray(function(error, results) {
          if( error ) callback(error)
          else callback(null, results)
        });
      }
    });
};

//save new contact
ContactProvider.prototype.save = function(contacts, callback) {
    this.getCollection(function(error, contact_collection) {
      if( error ) callback(error)
      else {
        if( typeof(contacts.length)=="undefined")
          contacts = [contacts];

        for( var i =0;i< contacts.length;i++ ) {
          contact = contacts[i];
          contact.created_at = new Date();
        }

        contact_collection.insert(contacts, function() {
          callback(null, contacts);
        });
      }
    });
};
//find an contact by ID
ContactProvider.prototype.findById = function(contactId, callback) {
    this.getCollection(function(error, contact_collection) {
      if( error ) callback(error)
      else {
        contact_collection.findOne({_id: contact_collection.db.bson_serializer.ObjectID.createFromHexString(contactId)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

// update a contact
ContactProvider.prototype.update = function(contactId, contacts, callback) {
    this.getCollection(function(error, contact_collection) {
      if( error ) callback(error);
      else {
        contact_collection.update(
                                  {_id: contact_collection.db.bson_serializer.ObjectID.createFromHexString(contactId)},
                                  contacts,
                                  function(error, contacts) {
                                          if(error) callback(error);
                                          else callback(null, contacts)       
                                  });
      }
    });
};
//delete contact
ContactProvider.prototype.delete = function(contactId, callback) {
        this.getCollection(function(error, contact_collection) {
                if(error) callback(error);
                else {
                        contact_collection.remove(
                                {_id: contact_collection.db.bson_serializer.ObjectID.createFromHexString(contactId)},
                                function(error, contact){
                                        if(error) callback(error);
                                        else callback(null, contact)
                                });
                        }
        });
};
exports.ContactProvider = ContactProvider;