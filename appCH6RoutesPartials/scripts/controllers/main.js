'use strict';
//Modifical el controlador para que en lugar de que use el arreglo de datos lo jale del json de 
//rotten tomatoes
var peliculasRankingApp=angular.module('moviesController', []);
peliculasRankingApp.controller('moviesListController', function($scope,$http){
	$http.get('movies/enteatro.json').success(function(data){
		$scope.movies=data.movies;
	});
	$scope.predicate='year';
});
peliculasRankingApp.controller('moviesDetailController', ['$scope','$routeParams', function($scope,$routeParams){
	$scope.peliculaId=$routeParams.movieId;
}]);

