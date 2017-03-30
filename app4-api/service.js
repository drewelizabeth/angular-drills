angular.module('app4').service('service', function($http) {

    var baseUrl = 'http://swapi.co/api/';
    
    this.getData = function() {
        return $http.get(baseUrl + 'people').then(function(results, error) {
            if (response.status === 200) {
                return response.data;
            }else {
                console.log(error);
            }
        });
    };

})