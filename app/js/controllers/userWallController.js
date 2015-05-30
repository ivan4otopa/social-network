socialNetwork.controller('UserWallController', function ($scope, $routeParams, userService, friendService) {
	$scope.getUserFullDetails = function () {
		userService.getUserFullDetails(
			$routeParams.username,
			function success(data) {
				$scope.user = data;
			},
			function error(error) {

			}
		);
	};

	$scope.getUserFullDetails();

	$scope.getUserFriends = function () {
		userService.getUserFriends(
			$routeParams.username,
			function success(data) {
				$scope.userFriends = data;
				$scope.friendsCount = data.length;
			},
			function error(error) {

			}
		);
	};

	$scope.getUserFriends();

	$scope.sendFriendRequest = function () {
		friendService.sendFriendRequest(
			$routeParams.username,
			function success(data) {

			},
			function error (error) {

			}
		);
	};
});