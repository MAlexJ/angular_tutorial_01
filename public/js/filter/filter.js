var myApp = angular.module('myApp');

myApp.filter('formatText', function(){
    return function(text){
        if(text.indexOf("фигасе")!==-1){
            return "***";
        }
        else{
            return text;
        }
    }
})