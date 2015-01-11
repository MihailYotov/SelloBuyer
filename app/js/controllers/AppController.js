'use strict';

app.controller('AppController',
    function ($scope, $location, authService, notifyService, $rootScope) {
        $scope.authService = authService;

        $scope.loginPath = function() {
            $location.path("/login");
        };

        $scope.registerPath = function() {
            $location.path("/register");
        };

        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("You have logged out.");
            $location.path("/");
        };

        $scope.cancel = function () {
            $location.path("/");
        }
    }
);
