selloBuyer.factory('categoriesData', function ($http, $log) {
    return {
        getAllCategories: function (success) {
            $http({method: 'GET', url: 'http://localhost:1337/api/categories'})
                .success(function (data, status, headers, config) {
                    success(data)
                })
                .error(function (data, sstatus, headers, config) {
                    $log.warn(data)
                })
        }
    }
});