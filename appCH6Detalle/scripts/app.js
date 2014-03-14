'use strict';
//Modifcar el app y colocar las rutas
var peliculasRankingApp = angular.module('peliculasRankingApp',[
  'ngRoute',
  'moviesController'
]);

peliculasRankingApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.
    when('/peliculas',{
      templateUrl:'views/peliculas-grid.html',
      controller:'moviesListController'
    }).
    when('/peliculas/:movieId',{
      templateUrl:'views/peliculas-detalle.html',
      controller:'moviesDetailController'
    }).
    otherwise({
        redirectTo:'/peliculas'
      });
  }
]);
 
