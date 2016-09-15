var Budget =  require('../models/user');
var router =  require('express').Router();

router.get('/',function(req, res){
   res.sendfile('./public/views/index.html');
});

router.get('/api/budgets', function(req, res){
  /* curl http://localhost:4000 */
  Budget.find({}, function(err, budgets){
    if (err) res.status(500).json({'success': false, 'data': err});
    res.json({success: true, data: budgets});
  })
});

router.post('/add', function(req, res){
  /* curl --data "item=Levis Sneakers&cost=300" http://localhost:4000/add */
  var budget  =  new Budget();
  budget.item =  req.body.item;
  budget.cost =  req.body.cost;

  budget.save(function(err, data){
    if (err) res.status(500).json({'success': false, 'data': err});
    res.status(200).json({success: true, data: data})
  });
});

router.delete('/budgets/:id', function(req, res){
  /* curl -X DELETE http://localhost:4000/budgets/57d964c745c902167c1860b */
  var id = req.params.id;
  Budget.remove({_id: id}, function(err, budget){
    if (err) res.status(500).json({success: false, 'message': 'Error: No record with that id'});
    res.status(200).json({success: true, data: budget})
  });
});

module.exports = router;
