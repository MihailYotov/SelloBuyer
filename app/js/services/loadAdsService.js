selloBuyer.factory('loadAds', function ($http, $log) {
    return {
        getAllAds: function (success) {
            $http({method: 'GET', url: 'http://localhost:1337/api/ads?PageSize=10&StartPage=1'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, sstatus, headers, config) {
                    $log.warn(data)
                })
        }
    }
});