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
        $scope.Login = function() {
            var body = {};
            body.userName = "kewal";
            body.password = "kewal";
            body.email = "kewal.sharma@newgen.co.in";
            body.organization = "newgen";
            body.designation = "Software Engineer";
            httpCallService.signupCall(body);
        }
    }
])