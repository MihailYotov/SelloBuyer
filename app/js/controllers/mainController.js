selloBuyer.controller('SelloBuyerController', function($scope, loadAds) {
    loadAds.getAllAds(function(resp)
    {
        $scope.data = resp
    });

    loadAds.getAllTowns(function(resp)
    {
        $scope.towns = resp
    });

    loadAds.getAllCategories(function(resp)
    {
        $scope.categories = resp
    })
});