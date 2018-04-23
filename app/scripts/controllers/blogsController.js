'use strict'
ecom.controller('blogsController', [
    '$scope',
    '$http',
    '$rootScope',
    '$state',
    '$window',
    function($scope, $http, $rootScope, $state, $window) {
        $window.scrollTo(0, 0);
        $scope.gotoState = function(state, menuUrl) {
            $state.go(state, { menu_url: menuUrl });
        }

        $http.get("../../json/blog.json").then(function(item) {
            $scope.blogData = item.data.main_content;
            console.log($scope.blogData);
        })

        $scope.displayDate = function(dateValue) {
            var date = new Date(dateValue);
            var day = date.getDate();
            var month = date.getMonth();
            var year = date.getFullYear();

            if (day < 10) { day = '0' + day }
            if (month < 10) { month = '0' + month };
            return day + '/' + month + '/' + year
        }
        $scope.getContentForBlogDesc = function(data) {
            var subString = data.substr(0, 450);
            return subString;
        }
    }
])