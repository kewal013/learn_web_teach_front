ecom.controller('blogsController', [
    '$scope',
    '$rootScope',
    '$state',
    '$window',
    function($scope, $rootScope, $state, $window) {
        $window.scrollTo(0, 0);
        $scope.gotoState = function(state, menuUrl) {
            $state.go(state, { menu_url: menuUrl });
        }
    }
])