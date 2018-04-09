'use strict'
ecom.controller('allBlogsController', [
    '$scope',
    '$timeout',
    function($scope, $timeout) {
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
    }
])