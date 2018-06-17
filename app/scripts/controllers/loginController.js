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
        $scope.Login = function() {
            var body = {};
            body.userName = "kewal";
            body.password = "kewal";
            httpCallService.loginCall(body);
        }
        $scope.signupDisplay = function() {
            $state.go('signup');
        }
    }
])