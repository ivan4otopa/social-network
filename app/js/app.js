var socialNetwork = angular.module('SocialNetwork', ['ngRoute']);

socialNetwork.constant('baseServiceUrl', 'http://softuni-social-network.azurewebsites.net');
socialNetwork.constant('pageSize', 2);

socialNetwork.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
		controller: 'HomeController'
	});

	$routeProvider.when('/profile', {
		templateUrl: 'views/editProfile.html'
	});

	$routeProvider.when('/profile/password', {
		templateUrl: 'views/changePassword.html'
	});

	$routeProvider.when('/logout', {
		templateUrl: 'views/logout.html',
		controller: 'LogoutController'
	});

	$routeProvider.when('/profile/friends', {
		templateUrl: 'views/currentUserFriends.html'
	});

	$routeProvider.when('/users/:username', {
		templateUrl: 'views/userWall.html'
	});

	$routeProvider.when('/users/:username/friends', {
		templateUrl: 'views/userFriends.html'
	});

	$routeProvider.otherwise({ redirectTo: '/'});
});