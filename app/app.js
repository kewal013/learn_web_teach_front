var ecom = angular.module('ecom', [
    'ui.router',
]);

ecom.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.

    state("home", {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: 'homeController'
    })

    .state("about", {
        url: '/about-me',
        templateUrl: 'templates/about_me.html'
    })

    .state("blog", {
        url: '/blog/:menu_url',
        templateUrl: 'templates/blog_content.html'
    })
})