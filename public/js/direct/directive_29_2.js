myModule.directive('questionSt',function(){
    return {
        link: function (scope, element, attrs) {
            scope.data = scope[attrs["questionSt"] || attrs["questionSt"]];
        },
        restrict: "EA",
        templateUrl: "temp/quest_temp.html"
    }
});