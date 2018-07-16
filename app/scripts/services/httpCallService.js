'use strict'
ecom.service('httpCallService', [
    '$rootScope',
    '$http',
    'apiUrl',
    function($rootScope, $http, apiUrl) {
        var uri = apiUrl;
        console.log(uri);
        var baseUrl = "/v2/components/learnWebTeach";
        this.loginCall = function(loginData) {
            var url = uri + baseUrl + "/login";
            var apiConfig = [url];
            var headers = {};
            headers['Content-Type'] = 'application/json';
            headers['Accept'] = 'application/json';
            apiConfig.push(loginData);
            apiConfig.push({ 'headers': headers });

            return $http["post"].apply(null, apiConfig);
        }

        this.signupCall = function(signupData) {
            var url = uri + baseUrl + "/signup";
            var apiConfig = [url];
            var headers = {};
            headers['Content-Type'] = 'application/json';
            headers['Accept'] = 'application/json';
            apiConfig.push(signupData);
            apiConfig.push({ 'headers': headers });

            return $http["post"].apply(null, apiConfig);
        }

        this.getAllBlogs = function() {
            var url = uri + baseUrl + "/getAllBlogs";
            var apiConfig = [url];
            var headers = {};
            apiConfig.push({ 'headers': headers });

            return $http["get"].apply(null, apiConfig);
        }

        this.getUserBlogs = function() {
            var username = localStorage.getItem('user');
            var url = uri + baseUrl + "/user/" + username + "/getBlogs";
            var apiConfig = [url];
            var headers = {};
            apiConfig.push({ 'headers': headers });

            return $http["get"].apply(null, apiConfig);
        }
    }
]);