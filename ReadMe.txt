

1. --> 1st terminal Start database
[EmployeeDB]$ sudo mongod --dbpath /home/allison/public_html/mean/EmployeeDB/data

2. --> 2nd terminal Start application server
[EmployeeDB]$ node app.js

3. --> Web browser
http://localhost:3000/

Modules
----------
 express
 jade
 mongodb
 stylus

Module Dependancies
-----------
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , EmployeeProvider = require('./employeeprovider').EmployeeProvider;

var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

Command-line Database
----------------------
[EmployeeDB]$ mongo
MongoDB shell version: 2.4.6
connecting to: test
> use node-mongo-employee
switched to db node-mongo-employee
> 

db.node-mongo-employee.find()

TOOLS:

browse database (GUI)
/home/allison/Downloads/umongo-linux-all_1-6-1
[allison@gandalf umongo-linux-all_1-6-1]$ sh launch-umongo.sh 



