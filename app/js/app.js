'use strict';

var selloBuyerApp = angular.module('selloBuyerApp', ['ngRoute', 'ngResource']);

selloBuyerApp.constant('baseServiceUrl', 'http://localhost:1337/');
selloBuyerApp.constant('pageSize', 2);

selloBuyerApp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/homeAds.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegistrationController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );

});