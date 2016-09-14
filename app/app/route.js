var express    =  require("express");
var app        =  express();
var User       =  require('../models/user');

module.exports =  function(app){
  app.get('*', function(req, res){
    res.sendfile('./public/views/index.html');
  });
  };
