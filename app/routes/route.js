//Grap Budget model
var Budget = require('./models/user');
module.exports = function(app){

//Server routes ========
app.get('/budgets', function(req,res){
  User.find(function(err, budgets){
     if (err)
        res.send(err);
     res.json(budgets);
  });
 });

 app.post('/add', function(req, res){
   Budget.create({
     item : req.body.item,
     cost : req.body.cost
   }), function(err, budget){
     if (err)
        res.send(err);

       console.log(budget);
        Budget.find(function(err, budgets){
          if (err)
              res.send(err);

               res.json(budgets);
        })
   }
 });


//frontend routes =======
//route to handle all angulerrequest
app.get('*', function(req, res){
   res.sendFile('./public/views/index.html');
});

}
