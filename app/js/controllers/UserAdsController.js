'use strict';

app.controller('UserAdsController', function ($scope, userService, notifyService, pageSize) {
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

    $scope.reloadUserAds();
    }
);