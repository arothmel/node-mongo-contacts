//find an contact by ID
ContactProvider.prototype.findById = function(id, callback) {
    this.getCollection(function(error, contact_collection) {
      if( error ) callback(error)
      else {
        contact_collection.findOne({_id: contact_collection.db.bson_serializer.ObjectID.createFromHexString(id)}, function(error, result) {
          if( error ) callback(error)
          else callback(null, result)
        });
      }
    });
};

// update an contact
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