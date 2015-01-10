'use strict';

app.controller('UserAdsController', function ($scope, userService, notifyService, pageSize, $location) {
    $scope.adsParams = {
        'startPage' : 1,
        'pageSize' : pageSize
    };

    $scope.reloadUserAds = function() {
        userService.getUserAds(
            $scope.adsParams,
            function success(data) {
                $scope.ads = data;
            },
            function error(err) {
                notifyService.showError('Unable to load the ads')
            }
        );
    };

        $scope.deactivateUserAds = function(id) {
            userService.deactivateAd(
                id,
                function success() {
                    notifyService.showInfo("Ad deactivated!");
                    $scope.reloadUserAds();
                },
                function error() {
                    notifyService.showError('Unable to deactivate the ad')
                }
            );
        };

        $scope.publishAgainUserAds = function(id) {
            userService.publishAgainAd(
                id,
                function success() {
                    notifyService.showInfo("Ad published again!");
                    $scope.reloadUserAds();
                },
                function error() {
                    notifyService.showError('Unable to publish the ad again')
                }
            );
        };

    $scope.reloadUserAds();
    }
);