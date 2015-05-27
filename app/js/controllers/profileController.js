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

	$scope.getFriendRequests = (function () {
		userService.getFriendRequests(
			function success(data) {
				$scope.friendRequests = data;
				$scope.numberOfFriendRequests = data.length;
			},
			function error(error) {

			}
		);
	})();

	$scope.getOwnFriends = (function () {
		userService.getOwnFriends(
			function success(data) {
				$scope.friends = data;
				$scope.friendsCount = data.length;
			},
			function error() {

			}
		);
	}());

	$scope.hideFoundUsers = function () {
		$scope.foundUsersExist = false;
		$('search-users').val('');
	};

	$scope.pendingFriendRequestsClicked = function () {
		$scope.friendRequestsExist = true;
	};

	$scope.hideFriendRequests = function () {
		$scope.friendRequestsExist = false;
	};
});