'use strict'
ecom.controller('navController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    'httpCallService',

    function($scope, $state, $rootScope, $window, httpCallService) {

        $window.scrollTo(0, 0);
        $rootScope.showMainHeader = true;
        $rootScope.showMainFooter = true;
        $rootScope.loginHeight = false;
        $rootScope.isHome = true;

        $scope.isloginSpan = true;
        $scope.issignupSpan = false;

        $scope.gotoState = function(state) {
            $state.go(state);
        }

        $scope.ActivateLogin = function() {
            $scope.isloginSpan = true;
            $scope.issignupSpan = false;
            var body = {};
            body.userName = "kewal";
            body.password = "kewal";
            httpCallService.loginCall(body);
        }

        $scope.ActivateSignup = function() {
            $scope.isloginSpan = false;
            $scope.issignupSpan = true;
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