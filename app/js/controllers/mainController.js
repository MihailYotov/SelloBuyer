selloBuyer.controller('SelloBuyerController', function($scope, loadAds) {
    loadAds.getAllAds(function(resp)
    {
        $scope.data = resp
    })
});