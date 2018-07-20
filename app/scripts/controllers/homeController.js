'use strict'
ecom.controller('homeController', [
    '$scope',
    '$rootScope',
    '$state',
    '$window',
    'httpCallService',
    function($scope, $rootScope, $state, $window, httpCallService) {
        $rootScope.loginHeight = false;
        $rootScope.showMainFooter = true;
        $rootScope.userExist = false;
        $rootScope.userName = '';
        $rootScope.userBlogsCount = 0;

        $scope.getUserBlogs = function() {
            httpCallService.getUserBlogs()
                .then(function(blogs) {
                    $rootScope.userBlogsCount = blogs.data.length;
                })
        }

        $scope.getUser = function() {
            var username = localStorage.getItem('user');
            console.log(username);
            if (username) {
                $rootScope.userExist = true;
                $rootScope.userName = username;
                $scope.getUserBlogs();
            }
        }
        $scope.getUser();


        $scope.gotoState = function(state, menuUrl) {
            $state.go(state, { menu_url: menuUrl });

        }

        $rootScope.logout = function() {
            localStorage.clear();
            $state.reload();
            if ($state.current.name === 'blogging') {
                $state.go('home');
            }
        }

    }
])