'use strict';

app.controller('UserEditAdController',
    function ($scope, $rootScope, $routeParams, $location, townsService, categoriesService, userService, notifyService) {
        $rootScope.pageTitle = "Edit ad";

        userService.getCurrentAd($routeParams.id, function(data) {
            $scope.adData = data;
        });

        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.editCurrentAd = function (id, adData) {
            userService.editAd(id, adData,
                function success() {
                    notifyService.showInfo("Ad edited successfully.");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Ad edition failed.", err);
                }
            )
        };

        $scope.fileSelected = function (fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function () {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };

    });
