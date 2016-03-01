var myApp = angular.module('myApp', []).run(function ($rootScope) {
        $rootScope.message = "Message";
        $rootScope.text = "Text";
    }
);