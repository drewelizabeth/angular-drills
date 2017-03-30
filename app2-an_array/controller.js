angular.module('app2').controller('mainCtrl', function($scope, service){

    $scope.test = "This is working again!";

    $scope.getData = function() {
        service.myData();
    }
    
    service.myData();
})