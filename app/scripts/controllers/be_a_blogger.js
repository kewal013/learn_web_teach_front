'use strict'
ecom.controller('bloggingController', [
    '$scope',
    '$rootScope',
    '$state',
    'httpCallService',
    'toaster',
    function($scope, $rootScope, $state, httpCallService, toaster) {
        $rootScope.showMainFooter = false;
        $rootScope.loginHeight = true;
        $scope.showTextEditor = false;
        $scope.blogDetails = true;

        $scope.blogData = {};
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

        $scope.submitBlog = function() {
            $scope.blogData.content_published_by = localStorage.getItem('user');
            $scope.blogData.content_published_on = Date();
            console.log($scope.blogData);
            httpCallService.saveBlog($scope.blogData);
        }

        $scope.submitBlogDetails = function() {
            console.log($scope.blogData);
            $scope.showTextEditor = true;
            $scope.blogDetails = false;

        }

        $scope.showBlogDetails = function() {
            $scope.showTextEditor = false;
            $scope.blogDetails = true;
        }

        $scope.checkUser = function() {
            var user = localStorage.getItem('user');
            if (user) {
                console.log('user exist');
            } else {
                toaster.error('Warning!', 'First you have to login!');
                $state.go('login', { preBlog: 'blogging' });
            }
        }

        $scope.checkUser();

        $scope.previewBlog = function() {

        }
    }
]);