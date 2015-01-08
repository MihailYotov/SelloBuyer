'use strict';

app.controller('RightSidebarController', function ($scope, $rootScope, categoriesService, townsService) {
    $scope.categories = categoriesService.getCategories();
    $scope.towns = townsService.getTowns();
});