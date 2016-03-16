myApp.controller('myController', function ($scope, $http) {

    $scope.loaded = false;

    $http.get('/json/question_29.json').success(
        function (data) {
            $scope.question = data.question;
            $scope.loaded = true;
        }
    ).error(
        function (status) {
            console.log("Code response: " + status);
        }
    );


});