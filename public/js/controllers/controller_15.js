var myApp = angular.module('myApp');

myApp.controller('myController', function ($scope) {

    $scope.somestyle = {background: '#eee', color: '#333'};

    $scope.someclass = "myclass";

    $scope.data = {visible: false};

});