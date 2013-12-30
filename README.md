What is a High-performance, schema-free document-oriented database?

RDBMS           MongoDB
-----           ---------
Table           Collection
Row(s)          JSON Document
Index           Index
Join            Embedding & Linking
Foreign Key     Reference

Indexing:

// Build an index on the 'tags' array
> db.contacts.ensureIndex({tags: 1})

// find posts with a specific tag
// This will use an index!)
> db.contacts.find({tags: 'friend'})


Schema design with MongoDB is different:

RDBMS - "What answers will I have?"
MongoDB - "What question will I have?"

Further reading: http://www.slideshare.net/friedo/data-modeling-examples
                 http://www.slideshare.net/mongodb/mongodb-schema-design-20356789
                 
