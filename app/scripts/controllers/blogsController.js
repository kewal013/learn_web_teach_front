'use strict'
ecom.controller('blogsController', [
    '$scope',
    '$http',
    '$rootScope',
    '$state',
    '$window',
    '$stateParams',
    function($scope, $http, $rootScope, $state, $window, $stateParams) {
        //var menu_url = $stateParams.menu_url;
        // to show the content of the blog
        //getData();
        //var allBlogsData;

        $window.scrollTo(0, 0);
        $scope.gotoState = function(state, menuUrl) {
            $state.go(state, { menu_url: menuUrl });

        }

        $http.get("../../json/blog.json").then(function(item) {
            //allBlogsData = item.data;
            $scope.blogData = item.data.main_content;
            if ($stateParams.menu_url != null || $stateParams.menu_url != undefined)
                getData($stateParams.menu_url);
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
            // var stringtoFindLastComma = (subString.substr(400, 450)).Contains(".")
            // if (stringtoFindLastComma) {
            //     subString = subString(0, stringtoFindLastComma.lastIndexOf(".") + 1);
            // }
            return subString;
        }

        function getData(menuUrl) {
            angular.forEach($scope.blogData, function(item, key) {
                if (item.content_url == menuUrl) {
                    $scope.results = item;
                }
            })

        }
    }
])