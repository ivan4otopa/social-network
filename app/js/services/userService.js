socialNetwork.factory('userService', function ($http, baseServiceUrl, authenticationService) {
	return {
		getCurrentUserInfo: function (username, success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/users/' + username,
				headers: authenticationService.getAuthorizationHeaders()
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		}
	};
});