socialNetwork.controller('ProfileController', function ($scope, userService, authenticationService, notifyService) {
	$scope.getCurrentUserInfo = (function () {
		userService.getCurrentUserInfo(
			authenticationService.getCurrentUser().userName,
			function success(data) {
				$scope.user = data;
			},
			function error(error) {

			}
		);
	})();
});