socialNetwork.controller('ProfileController', function ($scope, userService, authenticationService, notifyService) {
	$scope.foundUsersExist = false;
	$scope.friendRequestsExist = false;

	$scope.getCurrentUserInfo = (function () {
		userService.getCurrentUserInfo(
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

	$scope.getFriendRequests = function () {
		userService.getFriendRequests(
			function success(data) {
				$scope.friendRequests = data;
				$scope.friendRequestsExist = true;
			},
			function error(error) {

			}
		);
	};

	$scope.hideFoundUsers = function () {
		$scope.foundUsersExist = false;
		$('search-users').val('');
	};

	$scope.hideFriendRequests = function () {
		$scope.friendRequestsExist = false;
	}
});