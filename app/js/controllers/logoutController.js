socialNetwork.controller('LogoutController', function ($scope, $location, userService, authenticationService, notifyService) {
	$scope.logout = function () {
		userService.logout(
			function success (data) {
				notifyService.showInfo('Logout successful')
				authenticationService.logout();
				$location.path('/');
			},
			function error(error) {
				notifyService.showError('Logout failed', error);
			}
		);
	};

	$scope.logout();
});