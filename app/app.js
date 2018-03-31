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
})