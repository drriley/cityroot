var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var bodyParser = require('body-parser');
var app     = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var mongoose = require('mongoose');

var dbHost = 'mongodb://localhost/rootlogin';

mongoose.connect(dbHost);


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
        res.sendFile(__dirname + 'index.html');
});

var userSchema = new mongoose.Schema({
     name: {
       first: String,
       last: { type: String, trim: true }
     },
     email: String,
     password: String,
     phone: String,
     address: String,
     company: String,


   });


var Actor = mongoose.model('Actor', userSchema );

app.post('/api/login', function(req, res) {


       console.log(req.body.email);
       console.log(req.body.password);


       Actor.findOne({"email": req.body.email },function(err, actor) {
         console.log(actor);
              if (err)
                  res.send(err)
              res.json(actor);
          });


   });






app.post('/api/newUser', function(req, res) {

       // create a todo, information comes from AJAX request from Angular

       Actor.create(
         { name: {
           first: req.body.name.first,
           last: req.body.name.last,
         },
         email: req.body.email,
         password: req.body.email,
         phone: req.body.phone,
         address: req.body.address,
         company: req.body.company



       }, function (err, owner) {
         if (err) return handleError(err);
        })

        Actor.findOne({"email": req.body.email }, function(err, actors) {
          console.log(actors);

               if (err)
                   res.send(err)
               res.json(actors);
           });

   });





app.listen('3000');

console.log('Magic happens on port 3000');

exports = module.exports = app;
