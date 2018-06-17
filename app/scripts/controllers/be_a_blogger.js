'use strict'
ecom.controller('bloggingController', [
    '$scope',
    '$rootScope',
    '$state',
    function($scope, $rootScope, $state) {
        $rootScope.showMainFooter = false;
        $rootScope.loginHeight = true;
        $scope.showTextEditor = false;
        $scope.blogDetails = true;
        $scope.submitBlog = function() {
            console.log($scope.blogContent);
        }

        $scope.submitBlogDetails = function() {
            $scope.showTextEditor = true;
            $scope.blogDetails = false;

        }

        $scope.showBlogDetails = function() {
            $scope.showTextEditor = false;
            $scope.blogDetails = true;

        }

        $scope.gotoSignupPage = function() {
            $state.go('signup');
        }
    }
]);