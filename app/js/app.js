var socialNetwork = angular.module('SocialNetwork', ['ngRoute']);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');

socialNetwork.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	});

	$routeProvider.otherwise({ redirectTo: '/'});
});