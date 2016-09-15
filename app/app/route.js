var express    =  require("express");
var app        =  express();
var User       =  require('../models/user');
var path       =  require('path');

module.exports =  function(app){

  app.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
  });

  app.get('/api/budgets', function(req, res){
    /* curl http://localhost:4000 */
    User.find({}, function(err, budgets){
      if (err) return res.status(500).json({'success': false, 'data': err});
      return res.json({'success': true, 'data': budgets});
    })
  });

  app.post('/add', function(req, res){
    /* curl --data "item=Levis Sneakers&cost=300" http://localhost:4000/add */
    var budget  =  new User();
    budget.item =  req.body.item;
    budget.cost =  req.body.cost;

    budget.save(function(err, data){
      if (err) res.status(500).json({'success': false, 'data': err});
      res.status(200).json({'success': true, 'data': data})
    });
  });

  app.delete('/budgets/:id', function(req, res){
    /* curl -X DELETE http://localhost:4000/budgets/57d964c745c902167c1860b */
    var id = req.params.id;
    User.remove({_id: id}, function(err, budget){
      if (err) res.status(500).json({'success': false, 'message': 'Error: No record with that id'});
      res.status(200).json({'success': true, 'data': budget})
    });
  });
  };
