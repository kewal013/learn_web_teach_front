'use strict'
ecom.controller('allBlogsController', [
    '$scope',
    '$timeout',
    '$http',
    function($scope, $timeout, $http) {
        $scope.content_technologies = [];
        $(document).ready(function() {
            $(".owl-carousel").owlCarousel();
        });

        var owl = $('.owl-carousel');

        owl.owlCarousel({
            loop: false,
            margin: 15,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });

        owl.on('mousewheel', '.owl-stage', function(e) {
            if (e.deltaY > 0) {
                owl.trigger('next.owl');
            } else {
                owl.trigger('prev.owl');
            }
            e.preventDefault();
        });

        $http.get("../../json/blog.json").then(function(item) {
            $scope.blogData = item.data.main_content;
            angular.forEach($scope.blogData, function(item, key) {
                    if (($scope.content_technologies).indexOf(item.content_technology) == -1) {
                        ($scope.content_technologies).push(item.content_technology);
                    }
                })
                //getAllBlogs($scope.content_technologies);
        })

        // function getAllBlogs(technologies) {
        //     angular.forEach(technologies, function(item,key){

        //     })
        // }

        $scope.getRelatedBlogs = function(technology) {
            $scope.relatedBlogsdata = [];
            angular.forEach($scope.blogData, function(value, key) {
                if (technology == value.content_technology) {
                    ($scope.relatedBlogsdata).push(value);
                }
            })
            console.log($scope.relatedBlogsdata);
            return $scope.relatedBlogsdata;
        }
    }
])