var myApp = angular.module('myApp');

myApp.controller('textController', function ($scope) {

    $scope.question = {text1: 'House'};
});

myApp.controller('questionController', function ($scope) {

    $scope.question = [
        {
            text: 'AngularJS!',
            author: 'Вова Сидоров',
            date: '11/07/2001',
            rate: 14
        }, {
            text: 'AngularJS лучше всех',
            author: 'Олег Кузнецов',
            date: '20/10/2013',
            rate: 45
        }, {
            text: 'Я бы использовал knockout',
            author: 'Неизвестный',
            date: '21/10/2013',
            rate: 1
        }];

    $scope.sortparam = 'rate';

    $scope.question={
        text: 'Какой js-фреймворк лучше использовать?',
        author: 'Иван Иванов',
        date: '12/10/2013',
        answers:[{
            text: 'AngularJS!',
            author: 'Вова Сидоров',
            date: '17/10/1900',
            rate:2
        },{
            text: 'AngularJS лучше всех',
            author: 'Олег Кузнецов',
            date: '28/10/2000',
            rate:0
        },{
            text: 'Я бы использовал knockout',
            author: 'Неизвестный',
            date: '21/10/2013',
            rate:0
        }]
    };

});