socialNetwork.controller('LoginController', function ($scope, $location, authenticationService, notifyService) {
	$scope.login = function (userData) {
		authenticationService.login(
			userData,
			function success() {
				notifyService.showInfo('Login successful');
				$location.path('/home');
			},
			function error(error) {
				notifyService.showError('Login failed', error);
			}
		);
	};
});