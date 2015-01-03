var selloBuyer = angular.module('selloBuyerModule', ['ngRoute'])
    .config(function($routeProvider) {
$routeProvider.when('/register', {
    templateUrl:'templates/registration.html',
    controller: 'loginController'
})
    });