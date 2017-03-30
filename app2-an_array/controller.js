angular.module('app2').controller('mainCtrl', function($scope, service){

    $scope.test = "This is working again!";

    $scope.getData = service.myData();

    $scope.getData = function() {
        $scope.people = service.myData();
    };
    
    $scope.getData();
})