'use strict'
ecom.controller('loginController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    'httpCallService',

    function ($scope, $state, $rootScope, $window, httpCallService) {

        $scope.Login = function () {
            var body = {};
            body.userName = "kewal";
            body.password = "kewal";
            httpCallService.loginCall(body);
        }
    }
])