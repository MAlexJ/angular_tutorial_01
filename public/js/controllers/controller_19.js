var myApp = angular.module('myApp');

myApp.controller('textController', function ($scope) {

    $scope.question = {text1: 'House'};
});

myApp.controller('questionController', function($scope){

    $scope.question = [{
        text: 'AngularJS!',
        author: 'Вова Сидоров',
        date: '11/07/2001',
        rate:14
    },{
        text: 'AngularJS лучше всех',
        author: 'Олег Кузнецов',
        date: '20/10/2013',
        rate:45
    },{
        text: 'Я бы использовал knockout',
        author: 'Неизвестный',
        date: '21/10/2013',
        rate:1
    }];

    $scope.sortparam='rate';

});