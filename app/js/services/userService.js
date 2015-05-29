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
		},
		getOwnFriends: function (success, error) {
			var request = {
				method: 'GET',
				url: baseServiceUrl + '/api/me/friends',
				headers: authenticationService.getAuthorizationHeaders()
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		},
		logout: function (success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/users/logout',
				headers: authenticationService.getAuthorizationHeaders()
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		},
		editProfile: function (userData, success, error) {
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/api/me',
				headers: authenticationService.getAuthorizationHeaders(),
				data: userData
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		},
		changePassword: function (passwordData, success, error) {
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/api/me/changepassword',
				headers: authenticationService.getAuthorizationHeaders(),
				data: passwordData
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		}
	};
});