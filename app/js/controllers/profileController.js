socialNetwork.controller('ProfileController', function ($scope, userService, friendService, authenticationService, notifyService) {
	$scope.foundUsersExist = false;
	$scope.friendRequestsExist = false;
	$scope.userData = {};

	$scope.editProfile = function (userData) {
		userService.editProfile(
			userData,
			function success(data) {
				notifyService.showInfo('Profile edit successful');
				$scope.getCurrentUserInfo();
				$('#input-fields-container > input[type="text"]').val('');
				$('#input-fields-container > input[type="email"]').val('');
			},
			function error(error) {
				notifyService.showError('Profile edit failed', error);
			}
		);
	};

	$scope.getCurrentUserInfo = function () {
		userService.getCurrentUserInfo(
			function success(data) {
				$scope.user = data;
			},
			function error(error) {

			}
		);
	};

	$scope.getCurrentUserInfo();

	$scope.getUsersByName = function (userSearchText) {
		userService.getUsersByName(
			userSearchText,
			function success(data) {
				$scope.foundUsers = data;
				$scope.foundUsersExist = true;
			},
			function error(error) {

			}
		);
	};

	$scope.getFriendRequests = function () {
		userService.getFriendRequests(
			function success(data) {
				$scope.friendRequests = data;
				$scope.numberOfFriendRequests = data.length;
			},
			function error(error) {

			}
		);
	};

	$scope.getFriendRequests();

	$scope.getOwnFriends = function () {
		userService.getOwnFriends(
			function success(data) {
				$scope.friends = shuffle(data).slice(0, 6);
				$scope.friendsCount = data.length;
			},
			function error() {

			}
		);
	};

	$scope.getOwnFriends();

	$scope.acceptFriendRequest = function (requestId) {
		friendService.acceptFriendRequest(
			requestId,
			function success(data) {
				$scope.getFriendRequests();
				$scope.getOwnFriends();
			},
			function error () {

			}
		);
	};

	$scope.rejectFriendRequest = function (requestId) {
		friendService.rejectFriendRequest(
			requestId,
			function success(data) {
				$scope.getFriendRequests();
				$scope.getOwnFriends();
			},
			function error() {

			}
		);
	};

	$scope.hideFoundUsers = function () {
		$scope.foundUsersExist = false;
		$('#search-users').val('');
	};

	$scope.pendingFriendRequestsClicked = function () {
		$scope.friendRequestsExist = true;
	};

	$scope.hideFriendRequests = function () {
		$scope.friendRequestsExist = false;
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
	}

	$scope.fileProfileImageSelected = function (fileInputField) {
		delete $scope.userData.profileImageData;
		var file = fileInputField.files[0];

		if(file.type.match(/image\/.*/)) {
			var reader = new FileReader();

			reader.onload = function () {
				$scope.userData.profileImageData = reader.result;
				$('#profile-image-box').html('<img id="preview-profile-image" src="' + reader.result + '">');
			}

			reader.readAsDataURL(file);
		} else {
			$('#profile-image-box').html('<p>File type not supported</p>');
		}
	};

	$scope.fileCoverImageSelected = function (fileInputField) {
		delete $scope.userData.coverImageData;
		var file = fileInputField.files[0];

		if(file.type.match(/image\/.*/)) {
			var reader = new FileReader();

			reader.onload = function () {
				$scope.userData.coverImageData = reader.result;
				$('#cover-image-box').html('<img id="preview-cover-image" src="' + reader.result + '">');
			}

			reader.readAsDataURL(file);
		} else {
			$('#cover-image-box').html('<p>File type not supported</p>');
		}
	};
});