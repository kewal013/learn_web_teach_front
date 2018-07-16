'use strict'
ecom.service('httpCallService', [
    '$rootScope',
    '$http',
    function($rootScope, $http) {
        this.loginCall = function(loginData) {
            var url = "http://127.0.0.1:8090/v2/components/learnWebTeach/login";
            var apiConfig = [url];
            var headers = {};
            headers['Content-Type'] = 'application/json';
            headers['Accept'] = 'application/json';
            apiConfig.push(loginData);
            apiConfig.push({ 'headers': headers });

            return $http["post"].apply(null, apiConfig);
        }

        this.signupCall = function(signupData) {
            var url = "http://127.0.0.1:8090/v2/components/learnWebTeach/signup";
            var apiConfig = [url];
            var headers = {};
            headers['Content-Type'] = 'application/json';
            headers['Accept'] = 'application/json';
            apiConfig.push(signupData);
            apiConfig.push({ 'headers': headers });

            return $http["post"].apply(null, apiConfig);
        }

        this.getAllBlogs = function() {
            var url = "http://127.0.0.1:8090/v2/components/learnWebTeach/getAllBlogs";
            var apiConfig = [url];
            var headers = {};
            // headers['Content-Type'] = 'application/json';
            // headers['Accept'] = 'application/json';
            // apiConfig.push(signupData);
            apiConfig.push({ 'headers': headers });

            return $http["get"].apply(null, apiConfig);
        }

        this.getUserBlogs = function() {
            var username = localStorage.getItem('user');
            var url = "http://127.0.0.1:8090/v2/components/learnWebTeach/user/" + username + "/getBlogs";
            var apiConfig = [url];
            var headers = {};
            // headers['Content-Type'] = 'application/json';
            // headers['Accept'] = 'application/json';
            // apiConfig.push(signupData);
            apiConfig.push({ 'headers': headers });

            return $http["get"].apply(null, apiConfig);
        }
    }
]);