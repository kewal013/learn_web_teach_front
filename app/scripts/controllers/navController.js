ecom.controller('navController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',

    function($scope, $state, $rootScope, $window) {

        $window.scrollTo(0, 0);
        $rootScope.showMainHeader = true;
        $rootScope.isHome = true;

        $scope.gotoState = function(state) {
            $state.go(state);
        }
    }
])