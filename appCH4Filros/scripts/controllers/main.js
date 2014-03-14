'use strict';
//PASO 3
var peliculasRankingApp=angular.module('peliculasRankingApp', []);
peliculasRankingApp.controller('MoviesListCtrl', function($scope){
	$scope.movies=[
		{'name':'Capitan America','descripcion':'Steve Rogers struggles to embrace his role in the modern world and battles a new threat from old history: the Soviet agent known as the Winter Soldier.','image':'movies1.jpg','year':'2011'},
		{'name':'Back the imperial Forces','descripcion':'An animated TV series set between the events of Episode III and IV, Star Wars Rebels takes place in a time where the Empire is securing its grip on the galaxy and hunting down the last of ...','image':'movies2.jpg','year':'2010'},
		{'name':'The lego Movie','descripcion':'An ordinary LEGO minifigure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil LEGO tyrant from gluing the universe together.','image':'movies3.jpg','year':'2014'},
		{'name':'The wolf of wall street','descripcion':'Based on the true story of Jordan Belfort, from his rise to a wealthy stockbroker living the high life to his fall involving crime, corruption and the federal government.','image':'movies4.jpg','year':'2013'},
		{'name':'Why leave when you can rule','descripcion':'Three teenage friends, in the ultimate act of independence, decide to spend their summer building a house in the woods and living off the land.','image':'movies5.jpg','year':'2008'},
		{'name':'Silver Linings Playbook','descripcion':'After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.','image':'movies6.jpg','year':'2011'}

	];
	$scope.predicate="year";
});


