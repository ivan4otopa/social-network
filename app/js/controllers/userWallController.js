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

	$scope.getSixUserFriends = function () {
		userService.getUserFriends(
			$routeParams.username,
			function success(data) {
				$scope.sixUserFriends = shuffle(data).slice(0, 6);
				$scope.friendsCount = data.length;
			},
			function error(error) {

			}
		);
	};

	$scope.getSixUserFriends();

	$scope.sendFriendRequest = function () {
		friendService.sendFriendRequest(
			$routeParams.username,
			function success(data) {

			},
			function error (error) {

			}
		);
	};

	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

    	while (0 !== currentIndex) {
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		}

	    return array;
	};
});