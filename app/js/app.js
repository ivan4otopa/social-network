var socialNetwork = angular.module('SocialNetwork', ['ngRoute']);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

socialNetwork.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/welcome.html'
	});

	$routeProvider.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'LoginController'
	});

	$routeProvider.when('/register', {
		templateUrl: 'views/register.html',
		controller: 'RegisterController'
	});

	$routeProvider.otherwise({ redirectTo: '/'});
});