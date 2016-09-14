//Grap Budget model
var Budget = require('./models/user');

function getBudgets(res){

Budget.find(function(err, budgets){

if (err){
          res.send(err);
        }
       res.json(budgets);
    });

}
module.exports = function(app){

//Server routes ========
app.get('/', function(req, res){

getBudgets(res);

})


 app.post('/add', function(req, res){
   console.log(req.body.item);
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

               getBudgets();
        })

}

app.delete('/budgets/:id', function(req, res){
    var id = req.params.id;
    Budget.remove(id, function(err, budget){
        if(err)
            res.send(err)

            getBudgets();

});
});

//frontend routes =======
//route to handle all angulerrequest

app.get('*', function(req, res){
   res.sendFile('./public/views/index.html');
});

}
