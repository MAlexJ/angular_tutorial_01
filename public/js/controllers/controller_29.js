myModule.controller('myController', function ($scope, $http) {

    $http.get('json/question_29.json').success(function (data) {
        $scope.question = data.question;
    });

    $scope.voteUp = function (answer) {
        answer.rate++;
    };
    $scope.voteDown = function (answer) {
        answer.rate--;
    };

});