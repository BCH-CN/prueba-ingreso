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

    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.pages = [];

    $scope.configPages = function() {
        $scope.pages.length = 0;
        var ini = $scope.currentPage - 4;
        var fin = $scope.currentPage + 5;
        if(ini < 1){
            ini = 1;
            if (Math.ceil($scope.register.length / $scope.pageSize) > 10){
                fin = 10;
            }else{
                fin = Math.ceil($scope.register.length / $scope.pageSize);
            } 
        } else {
            if (ini >= Math.ceil($scope.register.length / $scope.pageSize) - 10) {
                ini = Math.ceil($scope.register.length / $scope.pageSize) - 10;
                fin = Math.ceil($scope.register.length / $scope.pageSize);
            }
        }
        if(ini < 1){
          ini = 1;
        } 
        for(var i = ini; i <= fin; i++) {
            $scope.pages.push({ no: i });
        }
        if($scope.currentPage >= $scope.pages.length){
            $scope.currentPage = $scope.pages.length - 1;
        }
    };
    
    $scope.setPage = function(index) {
        $scope.currentPage = index - 1;
    };

    $scope.configPages();
});

app.filter('startFromGrid', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    };
});


// Jquery

$(document).ready(function(){
    $('.datetimepicker').datepicker();
});