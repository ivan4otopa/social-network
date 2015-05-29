socialNetwork.controller('UserWallController', function ($scope, $routeParams, userService) {
	$scope.getFriendFullDetails = function () {
		userService.getFriendFullDetails(
			$routeParams.username,
			function success(data) {
				$scope.friend = data;
			},
			function error(error) {

			}
		);
	};

	$scope.getFriendFullDetails();

	$scope.getFriendFriends = function () {
		userService.getFriendFriends(
			$routeParams.username,
			function success(data) {
				$scope.friendFriends = data;
				$scope.friendsCount = data.length;
			},
			function error(error) {

			}
		);
	};

	$scope.getFriendFriends();
});