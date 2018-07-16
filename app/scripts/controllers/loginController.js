'use strict'
ecom.controller('loginController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    'httpCallService',

    function($scope, $state, $rootScope, $window, httpCallService) {
        // $rootScope.showMainHeader = false;
        $rootScope.showMainFooter = false;
        $rootScope.loginHeight = true;
        $rootScope.showSignup = false;
        $rootScope.showLogin = true;
        $scope.loginData = {
            userName: '',
            password: ''
        }
        $scope.userLogin = function() {
            console.log($scope.loginData);
            var body = $scope.loginData;
            httpCallService.loginCall(body)
                .then(function(res) {
                    console.log(res.data.token);
                    localStorage.setItem('token', res.data.token);
                    localStorage.setItem('user', res.data.user);
                    $state.go('home');
                }, function(err) {
                    console.log("Error in fetching data from json: " + err);
                });
        }
        $scope.signupDisplay = function() {
            $state.go('signup');
        }
    }
])