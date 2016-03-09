myModule.directive('answerList', function () {
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["answerList"] || attrs["source"]];
        },
        restrict: "EAC",

        templateUrl: "temp/answersTemplate.html"
    }
});