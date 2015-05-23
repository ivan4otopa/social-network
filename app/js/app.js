var socialNetwork = angular.module('SocialNetwork', ['ngRoute']);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net/api');

socialNetwork.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/welcome.html'
	});

	$routeProvider.when('/login', {
		templateUrl: 'views/login.html'
	});

	$routeProvider.when('/register', {
		templateUrl: 'views/register.html'
	});

	$routeProvider.otherwise({ redirectTo: '/'});
});