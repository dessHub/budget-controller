angular.module('UserCtrl', []).controller('UserController', function($scope, $http, Budgets) {

  // inject the Budget service factory into our controller
  $scope.formData =  {};
  $scope.budgets  =  {};

  // GET =====================================================================
    // when landing on the page, get all budgets and show them
  // use the service to get all the budgets
  // Get all budgets 
  Budgets.get()
  .success(function(data) {
    $scope.budgets = data;
  });

  // CREATE ==================================================================
    // when submitting the add form, send the text to the node API
  $scope.createBudget = function() {

    // validate the formData to make sure that something is there
    // if form is empty, nothing will happen

    if ($scope.formData.item != undefined) {
      console.log($scope.formData);
      // call the create function from our service (returns a promise object)
      Budgets.create($scope.formData)

      // if successful creation, call our get function to get all the new budgets
      .success(function(data) {
        console.log(data);
        $scope.formData = {}; // clear the form so our user is ready to enter another
        $scope.budget = data; // assign our new list of budgets
      })

      .error(function(data) {
        console.log("err :" + data);
      });
    }
  };

  // DELETE ==================================================================
    // delete a budget after checking it
  $scope.deleteBudget = function(id) {
    Budgets.delete(id)
    // if successful creation, call our get function to get all the new budgets
    .success(function(data) {
      $scope.budgets = data; // assign our new list of budgets
    });
  };

});
