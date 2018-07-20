'use strict'
var ecom = angular.module('ecom', [
    'ui.router',
    'angularUtils.directives.dirPagination',
    'textAngular',
    'toaster'
]);

ecom.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};


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
        templateUrl: 'templates/blog_content.html',
        controller: 'blogsController'
    })

    .state("blogging", {
        url: '/be_a_blogger',
        templateUrl: 'templates/be_a_blogger.html',
        controller: 'bloggingController'
    })

    .state("all_blog", {
        url: '/all_blogs',
        templateUrl: 'templates/view_all_blogs.html',
        controller: 'allBlogsController'
    })

    .state("login", {
        url: '/signin',
        templateUrl: 'templates/login_and_signup_page.html',
        controller: 'loginController',
        params: {
            preBlog: null
        }
    })

    .state("signup", {
        url: '/signup',
        templateUrl: 'templates/login_and_signup_page.html',
        controller: 'signupController',
        params: {
            preBlog: null
        }
    })
});

ecom.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
})