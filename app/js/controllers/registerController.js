socialNetwork.controller('RegisterController', function ($scope, $location, authenticationService, notifyService) {
	$scope.register = function (userData) {
		authenticationService.register(
			userData,
			function success() {
				notifyService.showInfo('Registration successful');
				$location.path('/home');
			},
			function error(error) {
				notifyService.showError('Registration failed', error);
			});
	};
});