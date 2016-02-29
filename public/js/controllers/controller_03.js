var myApp = angular.module('myApp');

myApp.controller('phoneCat', function($scope){

    this.message="myController";
    this.text="Контроллер без $scope";

});