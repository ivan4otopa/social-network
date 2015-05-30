socialNetwork.controller('UserFriendsController', function ($scope, $routeParams, userService) {
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

	$scope.getUserDetails = function () {
		userService.getUserFullDetails(
			$routeParams.username,
			function success(data) {
				$scope.user = data;
			},
			function error(error) {

			}
		);
	};

	$scope.getUserDetails();
});