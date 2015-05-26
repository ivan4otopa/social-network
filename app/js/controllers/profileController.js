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

	$scope.showNewsFeedHeading = true;
	$scope.showPendingFriendRequestsHeading = false;

	$scope.showNewsFeed = function () {
		$scope.showNewsFeedHeading = true;
		$scope.showPendingFriendRequestsHeading = false;
	};

	$scope.showPendingFriendRequests = function () {
		$scope.showNewsFeedHeading = false;
		$scope.showPendingFriendRequestsHeading = true;
	};
});