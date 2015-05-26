socialNetwork.controller('HomeController', function ($scope, authenticationService) {
	$scope.isLoggedIn = authenticationService.isLoggedIn();
	$scope.buttonHide = false;
	$scope.loginShow = false;
	$scope.registerShow = false;

	$scope.loginClicked = function () {
		$scope.buttonHide = true;
		$scope.loginShow = true;
	};

	$scope.registerClicked = function () {
		$scope.buttonHide = true;
		$scope.registerShow = true;
	};

	$scope.loginCancelClicked = function () {
		$scope.buttonHide = false;
		$scope.loginShow = false;
	};

	$scope.registerCancelClicked = function () {
		$scope.buttonHide = false;
		$scope.registerShow = false;
	}
});