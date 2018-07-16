'use strict'
ecom.controller('blogsController', [
    '$scope',
    '$http',
    '$rootScope',
    '$state',
    '$window',
    '$stateParams',
    'httpCallService',
    function($scope, $http, $rootScope, $state, $window, $stateParams, httpCallService) {
        //var menu_url = $stateParams.menu_url;
        // to show the content of the blog
        //getData();
        //var allBlogsData;
        $scope.allTags = [];
        $scope.allTechnology = [];
        $scope.blogData;
        $scope.blogDataBackup;
        // var selectedTag = [];
        // var selectedTech = [];
        $scope.itemsPerPage = 5;
        $window.scrollTo(0, 0);
        $scope.gotoState = function(state, menuUrl) {
            $state.go(state, { menu_url: menuUrl });

        }


        $scope.scrollToTop = function() {
            $window.scrollTo(0, 0);
        }

        // $http.get("../../json/blog.json")
        $scope.getData = function() {
            httpCallService.getAllBlogs()
                .then(function(item) {
                    //allBlogsData = item.data;
                    $scope.blogData = item.data;
                    $scope.blogDataBackup = $scope.blogData;
                    if ($stateParams.menu_url != null || $stateParams.menu_url != undefined)
                        getData($stateParams.menu_url);
                    angular.forEach($scope.blogData, function(value, key) {
                        var tagsInaSingleBlog = value.content_tag;
                        var technologiesInSingleBlog = value.content_technology;
                        var technologyArrayInSingleBlog = technologiesInSingleBlog.split(",");
                        var tagsArrayForSingleBlog = tagsInaSingleBlog.split(",");
                        angular.forEach(tagsArrayForSingleBlog, function(item, i) {
                            if (($scope.allTags).indexOf(item) == -1) {
                                var obj = {};
                                obj.name = item;
                                obj.activeStatus = false;
                                $scope.allTags.push(obj);
                            }
                        });
                        angular.forEach(technologyArrayInSingleBlog, function(val, pos) {
                            if (($scope.allTechnology).indexOf(val) == -1) {
                                var obj1 = {};
                                obj1.name = val;
                                obj1.activeStatus = false;
                                $scope.allTechnology.push(obj1);
                            }
                        });


                    });
                    $scope.allTechnology = removeDuplicates($scope.allTechnology, 'name');
                    $scope.allTags = removeDuplicates($scope.allTags, 'name');
                });
        }
        $scope.getData();

        function removeDuplicates(myArr, prop) {
            return myArr.filter((obj, pos, arr) => {
                return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
            });
        }

        $scope.filterDataWithTag = function(tag) {
            $scope.blogData = $scope.blogDataBackup;
            // selectedTag.push(tag);
            if (tag.activeStatus == true) {
                tag.activeStatus = false;
                // get index of object with id:37
                // var removeIndex = selectedTag.map(function(item) { return item.name; }).indexOf(tag.name);
                // selectedTag.splice(removeIndex, 1);
                $scope.blogData = $scope.blogDataBackup;
            } else {
                tag.activeStatus = true;
                $scope.blogData = ($scope.blogData).filter(function(blogData) {
                    return blogData.content_tag.split(",").indexOf(tag.name) > -1;
                });
            }
            // angular.forEach(selectedTag, function(item, key) {

            // });

        }

        $scope.filterDataWithTechnology = function(tag) {
            if (tag.activeStatus == true) {
                tag.activeStatus = false;
            } else {
                tag.activeStatus = true;
                $scope.blogData = $scope.blogDataBackup;
                $scope.blogData = ($scope.blogData).filter(function(blogData) {
                    return blogData.content_technology.split(",").indexOf(tag.name) > -1;
                });
            }
        }

        $scope.showUnfilteredData = function() {
            $scope.blogData = $scope.blogDataBackup;
            angular.forEach($scope.allTechnology, function(val, key) {
                if (val.activeStatus == true) {
                    val.activeStatus = false;
                }
            });

            angular.forEach($scope.allTags, function(val, key) {
                if (val.activeStatus == true) {
                    val.activeStatus = false;
                }
            })
        }


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