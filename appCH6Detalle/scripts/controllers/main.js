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
peliculasRankingApp.controller('moviesDetailController', ['$scope','$routeParams','$http', function($scope,$routeParams,$http){
	$scope.peliculaId=$routeParams.movieId;
	$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/'+$routeParams.movieId+'.json', {
		params: {
      	  apikey: '6k649zrxufpt2ugu3w3su563',
       	 callback: 'JSON_CALLBACK'
    	}
		})
	.success(function (data) {
    	$scope.movie = data;
    	$scope.genres=data.genres;			
	});
	$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/'+$routeParams.movieId+'/reviews.json', {
				params: {
		      	  apikey: '6k649zrxufpt2ugu3w3su563',
		       	 callback: 'JSON_CALLBACK'
		    	}
	}).success(function (data) {
		    	$scope.reviews=data.reviews;
	});
	
}]);

