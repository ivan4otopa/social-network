socialNetwork.factory('friendService', function ($http, baseServiceUrl, authenticationService) {
	return {
		acceptFriendRequest: function (requestId, success, error) {
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/api/me/requests/' + requestId + '?status=approved',
				headers: authenticationService.getAuthorizationHeaders()
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		},
		rejectFriendRequest: function (requestId, success, error) {
			var request = {
				method: 'PUT',
				url: baseServiceUrl + '/api/me/requests/' + requestId + '?status=rejected',
				headers: authenticationService.getAuthorizationHeaders()
			};
			$http(request)
				.success(function (data) {
					success(data);
				})
				.error(error);
		}
	}
})