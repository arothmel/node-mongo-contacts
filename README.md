                 
1. --> 1st terminal Start database  
[ContactDB]$ sudo mongod --dbpath /pathto/public_html/ContactDB/data  

2. --> 2nd terminal Start application server  
[ContactDB]$ node app.js  

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
  , EmployeeProvider = require('./contactprovider').ContactProvider;  

var Db = require('mongodb').Db;  
var Connection = require('mongodb').Connection;  
var Server = require('mongodb').Server;  
var BSON = require('mongodb').BSON;  
var ObjectID = require('mongodb').ObjectID;  

Command-line Database
----------------------
[ContactDB]$ mongo  

MongoDB shell version: 2.4.6  

connecting to: test  

> use node-mongo-employee  

switched to db node-mongo-contact  

>  

db.node-mongo-contact.find()  

