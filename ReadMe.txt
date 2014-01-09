Modules
----------
 express  --> (MVC Web Application Framework)
 jade     --> (Node Template Engine: in lieu of HTML)
 mongodb  --> (NoSQL database)
 stylus   --> ( Expressive, dynamic, robust CSS styles for Node.js)



Start database  (if local or VM))
// yes there could be an .ini file for the path

1. --> 1st terminal Start database
[ContactDB]$ sudo mongod --dbpath /home/allison/public_html/mean/ContactDB/data


--  or --- 

Start database (if on Cloud 9)
// Ensure mongod exists in local dir as a result of this was run previously!
// $ echo 'mongod --bind_ip=$IP --smallfiles --dbpath=data --nojournal --rest "$@"' > mongod

1. --> 1st terminal Start database
$ ./mongod
[websvr] admin web console waiting for connections on port 28017
[initandlisten] waiting for connections on port 27017

2. --> 2nd terminal Start application server
[ContactDB]$ node app.js

3. --> Web browser (if local))
http://localhost:3000/

--  or --- 

3. --> Web browser (if Cloud9)
https://node_mongo_contacts-c9-alar42.c9.io




Command-line Database
----------------------
Local:
4. Connect to database via terminal (optional)
[ContactDB]$ mongo
MongoDB shell version: 2.4.6
connecting to: test
> use node-mongo-contact
switched to db node-mongo-contact
> 

Cloud9:
4. Connect to database via terminal (optional)
$ mongo --host $IP
MongoDB shell version: 2.4.6
connecting to: 127.7.140.129:27017/test
Welcome to the MongoDB shell.
> use node-mongo-contact

See: http://docs.mongodb.org/manual/core/server-side-javascript/

db.node-mongo-contact.find()

Additional TOOLS (optional):

browse database (GUI)
/home/allison/Downloads/umongo-linux-all_1-6-1
[allison@gandalf umongo-linux-all_1-6-1]$ sh launch-umongo.sh 
