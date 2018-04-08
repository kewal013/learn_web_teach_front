'use strict'
var ecom = angular.module('ecom', [
    'ui.router'
]);

ecom.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/');
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
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
}])