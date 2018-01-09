(function (){
	'use strict';

	angular.module('myApp', ['public'])
	.config(config);

	config.$inject = ['$urlRouterProvider'];
	function config ($urlRouterProvider){

		$urlRouterProvider.otherwise('/')
	}
	
})();