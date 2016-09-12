angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/user', {
			templateUrl: 'views/user.html',
			controller: 'UserController'
		})

		.when('/test', {
			templateUrl: 'views/test.html',
			controller: 'TestController'
		});

	$locationProvider.html5Mode(true);

}]);
