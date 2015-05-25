socialNetwork.factory('authenticationService', function ($http, baseServiceUrl) {
	return {
		register: function (userData, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/users/register',
				data: userData
			};
			$http(request)
				.success(function (data) {
					sessionStorage['currentUser'] = JSON.stringify(data);
					success(data);
				})
				.error(error);
		},
		login: function (userData, success, error) {
			var request = {
				method: 'POST',
				url: baseServiceUrl + '/api/users/login',
				data: userData
			};
			$http(request)
				.success(function (data) {
					sessionStorage['currentUser'] = JSON.stringify(data);
					success(data);
				})
				.error(error);
		}
	};
});