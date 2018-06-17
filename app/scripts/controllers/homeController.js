'use strict'
ecom.controller('homeController', [
    '$scope',
    '$rootScope',
    '$state',
    '$window',
    function($scope, $rootScope, $state, $window) {
        $rootScope.loginHeight = false;
        $rootScope.showMainFooter = true;

        $scope.gotoState = function(state, menuUrl) {
            $state.go(state, { menu_url: menuUrl });

        }
    }
])