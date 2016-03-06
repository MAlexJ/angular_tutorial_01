var myApp = angular.module('myApp');

myApp.controller('myController', function ($scope) {

    $scope.elem = angular.element(document.querySelector("body"));

});

