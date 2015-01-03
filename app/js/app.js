var selloBuyer = angular.module('selloBuyerModule', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'templates/registration.html'
            //controller: 'registrationController'
        });
        $routeProvider.when('/login', {
            templateUrl: 'templates/login.html'
            //controller: 'loginController'
        });
        $routeProvider.when('/ads', {
            templateUrl: 'templates/ads.html'
        });
        $routeProvider.otherwise({redirectTo: '/ads'})
    });