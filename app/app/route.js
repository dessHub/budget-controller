var express = require("express");
var app = express();

//Grab User model
var User = require('../models/user');
module.exports = function(app){
/*
//Server routes ========
app.get('users', function(req,res){
  User.find(function(err, users){
     if (err)
        res.send(err);
     res.json(users);
  });
 });
*/

//frontend routes =======
//route to handle all angulerrequest
app.get('*', function(req, res){
   res.sendfile('./public/views/index.html');
});

}
