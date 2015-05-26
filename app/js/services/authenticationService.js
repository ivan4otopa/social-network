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
		},
		logout: function () {
			delete sessionStorage['currentUser'];
		},
		getCurrentUser: function () {
			var currentUser = sessionStorage['currentUser'];

			if(currentUser) {
				return JSON.parse(sessionStorage['currentUser']);
			}
		},
		getAuthorizationHeaders: function () {
			var headers = {};
			var currentUser = this.getCurrentUser();

			if(currentUser) {
				headers['Authorization'] = 'Bearer ' + currentUser.access_token;
			}

			return headers;
		},
		isLoggedIn: function () {
			return sessionStorage['currentUser'] != undefined;
		}
	};
});