angular.module('app3').controller('mainCtrl', function($scope, service) {


    $scope.getData = function() {
        $scope.people = service.myData();
    }

    $scope.getData();


})