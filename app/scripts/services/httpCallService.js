'use strict'
ecom.service('httpCallService', [
    '$rootScope',
    '$http',
    function ($rootScope, $http) {
        this.loginCall = function (loginData) {
            // var data = {};
            // data.body = loginData;
            // data.headers = new headers();
            // $http.post("http://127.0.0.1:8090/v2/components/learn_web_teach/learnWebTeach/login", data).then(function (response) {
            //     $rootScope.token = response.token;
            //     console.log(response);
            // })
            // .error(function (err) {
            //     console.log(err);
            //     console.log("Something went wrong");
            // })
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8090/v2/components/learn_web_teach/learnWebTeach/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(loginData)
            }).then(function (response) {
                console.log(response);
            });
        }

        this.signupCall = function (signupData) {
            // var data = {};
            // data.body = signupData;
            // data.headers = new headers();
            // $http.post("http://127.0.0.1:8090/v2/components/learn_web_teach/learnWebTeach/signup", data).then(function (response) {
            //     $rootScope.token = response.token;
            //     console.log(response);
            // })
            // .error(function (err) {
            //     console.log(err);
            //     console.log("Something went wrong");
            // })
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:8090/v2/components/learn_web_teach/learnWebTeach/signup',
                data: signupData,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(function (response) {
                console.log(response);
            });
        }
    }
]);