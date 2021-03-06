var purchaseApp = angular.module("purchaseApp", []);

purchaseApp.controller("purchaseController", function ($scope) {
    $scope.list = model;
    $scope.addItem = function (text, price) {
        price = parseFloat(price); // преобразуем введенное значение к числу
        if(text != "" && !isNaN(price)) // если текст установлен и введено число, то добавляем
        {
            $scope.list.items.push({ purchase: text, price: price, done: false });
        }
    }
});

var model = {
    items: [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ]
};