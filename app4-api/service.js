angular.module('app4').service('service', function($http) {

    var baseUrl = 'http://swapi.co/api/';
    
    this.getData = function() {
        return $http.get(baseUrl + 'people').then(function(response) {
                console.log(response.data.results);
                return response.data.results;
        });
    };

})