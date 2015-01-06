selloBuyer.controller('RegistrationController', function($scope, townsData) {
    townsData.getAllTowns(function(resp)
    {
        $scope.towns = resp
    });
});