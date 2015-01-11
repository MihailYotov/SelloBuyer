'use strict';

app.controller('LoginController', function ($scope, $location, authService, notifyService, $rootScope) {
    $rootScope.pageTitle = "Login";
    $scope.login = function (userData) {
        authService.login(userData,
            function success() {
                notifyService.showInfo('Successful login.')
                $location.path("/");
            },
            function error(err) {
                notifyService.showError('Error', err)
            }
        )
    }
});