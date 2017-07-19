var app = angular.module("banco", ["ngTable"]);

app.controller("bancoController", function ($scope, ngTableParams) {
    $scope.register=[
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:200000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:100000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:50000},
        {lorem:'xxxxxxxxxxxx',ipsum:'xxxxxxxxxxxx', dolor:'xxxxxxxxxxxx', sit:'xxxxxxxxxxxx', amet:150000}
    ];

    $scope.registerTable = new ngTableParams({}, { dataset: $scope.register });
});
