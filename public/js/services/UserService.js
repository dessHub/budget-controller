angular.module('UserService', []).factory('Budgets', ['$http', function($http) {


return {
          // call to get all budgets

get : function() {
              return $http.get('/');
          },


            // call to POST and create a new budget

create : function(budget) {
              return $http.post('/add', budget);
          },

          // call to DELETE a budget
          delete : function(id) {
              return $http.delete('/user/' + id);
          }
      }

}]);
