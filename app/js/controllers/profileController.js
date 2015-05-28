socialNetwork.controller('ProfileController', function ($scope, userService, friendService, authenticationService, notifyService) {
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
				console.log(data);
				$scope.friendRequests = data;
				$scope.numberOfFriendRequests = data.length;
			},
			function error(error) {

			}
		);
	};

	$scope.getFriendRequests();

	$scope.getOwnFriends = function () {
		userService.getOwnFriends(
			function success(data) {
				$scope.friends = data;
				$scope.friendsCount = data.length;
			},
			function error() {

			}
		);
	};

	$scope.getOwnFriends();

	$scope.acceptFriendRequest = function (requestId) {
		friendService.acceptFriendRequest(
			requestId,
			function success(data) {
				$scope.getFriendRequests();
				$scope.getOwnFriends();
			},
			function error () {

			}
		);
	};

	$scope.rejectFriendRequest = function (requestId) {
		friendService.rejectFriendRequest(
			requestId,
			function success(data) {
				$scope.getFriendRequests();
				$scope.getOwnFriends();
			},
			function error() {

			}
		);
	};

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