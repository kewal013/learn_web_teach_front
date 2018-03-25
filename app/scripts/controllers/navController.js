ecom.controller('navController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',

    function($scope, $state, $rootScope, $window) {

        $window.scrollTo(0, 0);
        $rootScope.showMainHeader = true;
        $rootScope.isHome = true;
        $scope.isloginSpan = true;
        $scope.issignupSpan = false;

        $scope.gotoState = function(state) {
            $state.go(state);
        }

        $scope.ActivateLogin = function() {
            $scope.isloginSpan = true;
            $scope.issignupSpan = false;
        }

        $scope.ActivateSignup = function() {
            $scope.isloginSpan = false;
            $scope.issignupSpan = true;
        }
    }
])