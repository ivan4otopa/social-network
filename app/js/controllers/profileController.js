socialNetwork.controller('ProfileController', function ($scope, userService, authenticationService, notifyService) {
	$scope.getMe = function () {
		userService.getMe(
			authenticationService.getCurrentUser().userName,
			function success(data) {
				notifyService.showInfo('Got me');
				$scope.name = data.name;
			},
			function error(error) {
				notifyService.showError('Didn\'t get me', error);
			}
		);
	};
});