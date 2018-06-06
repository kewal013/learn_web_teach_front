'use strict'
ecom.controller('homeController', [
    '$scope',
    '$rootScope',
    '$state',
    '$window',
    function($scope, $rootScope, $state, $window) {
        $rootScope.loginHeight = false;
        $rootScope.showMainFooter = true;
    }
])