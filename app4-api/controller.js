angular.module('app4').controller('mainCtrl', function($scope, service) {
    
    $scope.test = "hello";

    $scope.getPeople = function() {
        service.getData().then(function(response) {
            $scope.people = response;
        })
    }

    $scope.getPeople();

})