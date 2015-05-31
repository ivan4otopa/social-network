socialNetwork.controller('PostsController', function ($scope, userService) {
	$scope.getNewsFeed = function () {
		userService.getNewsFeed(
			function success(data) {
				$scope.posts = data;
			},
			function error(error) {

			}
		);
	};

	$scope.getNewsFeed();
});