socialNetwork.factory('userService', function ($http, baseServiceUrl, authenticationService) {
	return {
		getCurrentUserInfo: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/me',
				headers: authenticationService.getAuthorizationHeaders()
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		},
		getUsersByName: function (searchTerm, success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/users/search?searchTerm=' + searchTerm,
				headers: authenticationService.getAuthorizationHeaders()
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		},
		getFriendRequests: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/me/requests',
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