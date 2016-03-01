var myApp = angular.module('myApp');

myApp.controller('myController', function ($scope) {

    $scope.phones = [{
        name: 'Nokia Lumia 630',
        year: 2014,
        price: 200,
        company: {
            name: 'Nokia',
            country: 'Финляндия'
        }
    }, {
        name: 'Samsung Galaxy S 4',
        year: 2014,
        price: 400,
        company: {
            name: 'Samsung',
            country: 'Республика Корея'
        }
    }, {
        name: 'Mi 5',
        year: 2015,
        price: 300,
        company: {
            name: 'Xiaomi',
            country: 'Китай'
        }
    }];

    $scope.lists = [{
        name: 'Nokia',
        models:[{
            name: "Nokia Lumia 53333333330",
            price: 150111
        },{
            name: "Nokia X2111111111",
            price: 200111
        }]
    },{
        name: 'HTX',
        models:[{
            name: "HTX 33333",
            price: 500111
        },{
            name: "HTX 22222",
            price: 4001111
        }]
    }];



});