'use strict'
var ecom = angular.module('ecom', [
    'ui.router'
]);

ecom.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.

    state("home", {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    })

    .state("blogs", {
        url: '/blogs',
        templateUrl: 'templates/blogs.html',
        controller: 'blogsController'
    })

    .state("contact-us", {
        url: '/contact-us',
        templateUrl: 'templates/contact_us.html'

    })

    .state("blog", {
        url: '/blog/:menu_url',
        templateUrl: 'templates/blog_content.html'
    })

    .state("all_blog", {
        url: '/all_blogs',
        templateUrl: 'templates/view_all_blogs.html',
        controller: 'allBlogsController'
    })

    .state("login", {
        url: '/signin',
        templateUrl: 'templates/login_page.html',
        controller: 'loginController'
    })

    .state("signup", {
        url: '/signup',
        templateUrl: 'templates/signup_page.html',
        controller: 'signupController'
    })
});

ecom.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
})