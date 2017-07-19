var app = angular.module("banco", ["ngTable"]);

app.controller("bancoController", function ($scope, ngTableParams) {

    // Arreglo de datos para prueba
    $scope.register=[
        {fecha:'20/05/2017',nombre:'Cliente 1', tipo:'Abono', estado:'Realizado', monto:200000},
        {fecha:'10/05/2017',nombre:'Cliente 2', tipo:'Cargo', estado:'Rechazado', monto:100000},
        {fecha:'20/06/2017',nombre:'Cliente 1', tipo:'Abono', estado:'Realizado', monto:50000},
        {fecha:'20/05/2017',nombre:'Cliente 1', tipo:'Abono', estado:'Rechazado', monto:75000},
        {fecha:'08/05/2017',nombre:'Cliente 5', tipo:'Cargo', estado:'Realizado', monto:200000},
        {fecha:'17/08/2017',nombre:'Cliente 1', tipo:'Cargo', estado:'Rechazado', monto:100000},
        {fecha:'20/05/2017',nombre:'Cliente 1', tipo:'Abono', estado:'Realizado', monto:50000},
        {fecha:'23/05/2017',nombre:'Cliente 3', tipo:'Abono', estado:'Rechazado', monto:75000},
        {fecha:'20/11/2017',nombre:'Cliente 1', tipo:'Abono', estado:'Realizado', monto:200000},
        {fecha:'20/05/2017',nombre:'Cliente 1', tipo:'Cargo', estado:'Rechazado', monto:100000},
        {fecha:'10/05/2017',nombre:'Cliente 7', tipo:'Abono', estado:'Realizado', monto:50000},
        {fecha:'20/02/2017',nombre:'Cliente 1', tipo:'Abono', estado:'Rechazado', monto:75000},
    ];

    // Inicio Paginación
    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.pages = [];

    $scope.configPages = function() {
        $scope.pages.length = 0;
        var ini = $scope.currentPage / 4;
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
    // Final Paginación
});

// Filtro para paginación
app.filter('startFromGrid', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    };
});

// Filtro de busqueda
app.filter('generalFilter', function(){
    return function(input, s){
        var result=[];
        if(typeof(s.search) === "undefined" || s.search == ''){
            angular.forEach(input, function(register) {
                result.push(register)
            });
            return result;
        }else{
            angular.forEach(input, function(register) {
                if (register.monto == s.search || register.nombre.toUpperCase() == s.search.toUpperCase() || register.tipo.toUpperCase() == s.search.toUpperCase() || register.estado.toUpperCase() == s.search.toUpperCase()) {
                result.push(register)
                }
            });
            return result;
        }
    }
});

// Filtro de fecha desde
app.filter('startDate', function(){
    return function(input, d){
        var result=[];
        if(typeof(d.startDate) === "undefined" || d.startDate == ''){
            angular.forEach(input, function(register) {
                result.push(register)
            });
            return result;
        }else{
            var parts =d.startDate.split('/');
            var d1 = Number(parts[2] + parts[0] + parts[1]);
            angular.forEach(input, function(register) {
                parts =register.fecha.split('/');
                var d2 = Number(parts[2] + parts[1] + parts[0]);
                if (d1 <= d2) {
                result.push(register)
                }
            });
            return result;
        }
    }
});

// Filtro de fecha hasta
app.filter('endDate', function(){
    return function(input, d){
        var result=[];
        if(typeof(d.endDate) === "undefined" || d.endDate == ''){
            angular.forEach(input, function(register) {
                result.push(register)
            });
            return result;
        }else{
            var parts =d.endDate.split('/');
            var d1 = Number(parts[2] + parts[0] + parts[1]);
            angular.forEach(input, function(register) {
                parts =register.fecha.split('/');
                var d2 = Number(parts[2] + parts[1] + parts[0]);
                if (d1 >= d2) {
                result.push(register)
                }
            });
            return result;
        }
    }
});

// filtro por tipo
app.filter('tipo', function(){
    return function(input, t){
        console.log(t);
        var result=[];
        if(typeof(t.tipo) === "undefined" || t.tipo == ''){
            angular.forEach(input, function(register) {
                result.push(register)
            });
            return result;
        }else{
            angular.forEach(input, function(register) {
                if (register.tipo.toUpperCase() === t.tipo.toUpperCase()) {
                result.push(register)
                }
            });
            return result;
        }
    }
});

// Jquery para inicializar datepickers

$(document).ready(function(){
    $('.datetimepicker').datepicker();
});