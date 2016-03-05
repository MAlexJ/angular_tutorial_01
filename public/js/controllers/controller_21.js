var myApp = angular.module('myApp');

myApp.controller('htmlController', function ($scope) {
    $scope.htmlcode = "<form name = 'answerForm' > " +
        "<fieldset>";
});

myApp.controller('AnswerController', function ($scope) {

    $scope.save = function (answer, answerForm){
        if(answerForm.$valid){
            // действия по сохранению
            alert(answer.author + ", ваш ответ сохранен");
        }
    };
});

