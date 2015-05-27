socialNetwork.controller('ProfileController', function ($scope, userService, authenticationService, notifyService) {
	$scope.foundUsersExist = false;
	$scope.showNewsFeedHeading = true;
	$scope.showPendingFriendRequestsHeading = false;
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

	$scope.getUsersByName = function (userSearchText) {
		userService.getUsersByName(
			userSearchText,
			function success(data) {
				$scope.foundUsers = data;
				$scope.foundUsersExist = true;
			},
			function error(error) {

			}
		);
	};

	$scope.showNewsFeed = function () {
		$scope.showNewsFeedHeading = true;
		$scope.showPendingFriendRequestsHeading = false;
	};

	$scope.showPendingFriendRequests = function () {
		$scope.showNewsFeedHeading = false;
		$scope.showPendingFriendRequestsHeading = true;
	};
});