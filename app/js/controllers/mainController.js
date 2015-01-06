selloBuyer.controller('SelloBuyerController', function($scope, loadAds, townsData, categoriesData) {
    loadAds.getAllAds(function(resp)
    {
        $scope.data = resp
    });

    townsData.getAllTowns(function(resp)
    {
        $scope.towns = resp
    });

    categoriesData.getAllCategories(function(resp)
    {
        $scope.categories = resp
    })
});