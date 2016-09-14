angular.module('UserService', []).factory('Budgets', ['$http', function($http) {


return {
          // call to get all budgets

get : function() {
              return $http.get('/');
          },



            // call to POST and create a new budget

create : function(data) {
              return $http.post('/add', data);
          },

          // call to DELETE a budget
          delete : function(id) {
              return $http.delete('/budget/' + id);
          
          }

      }

}]);
