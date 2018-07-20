'use strict'
ecom.controller('signupController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    'httpCallService',

    function($scope, $state, $rootScope, $window, httpCallService) {
        $rootScope.showMainFooter = false;
        $rootScope.loginHeight = true;
        $rootScope.showSignup = true;
        $rootScope.showLogin = false;
        $scope.signupData = {
            userName: '',
            email: '',
            password: ''
        };
        $scope.userSignup = function() {
            // console.log($scope.signupData);
            var body = $scope.signupData;
            httpCallService.signupCall(body)
                .then(function(res) {
                    console.log(res.data.token);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', res.data.user);
                    if ($state.params.preBlog === 'blogging') {
                        $state.go('blogging');
                    } else {
                        $state.go('home');
                    }
                }, function(err) {
                    console.log("Error in fetching data from json: " + err);
                });
        }
    }
])