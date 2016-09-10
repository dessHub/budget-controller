angular.module('UserService', []).factory('Budgets', ['$http', function($http) {


return {
          // call to get all nerds

get : function() {
              return $http.get('/budgets');
          },


            // call to POST and create a new user

create : function(userData) {
              return $http.post('/add', userData);
          },

          // call to DELETE a user
          delete : function(id) {
              return $http.delete('/user/' + id);
          }
      }

}]);
