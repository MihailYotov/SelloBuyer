selloBuyer.factory('townsData', function ($http, $log) {
    return {
        getAllTowns: function (success) {
            $http({method: 'GET', url: 'http://localhost:1337/api/towns'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, sstatus, headers, config) {
                    $log.warn(data)
                })
        }
    }
});