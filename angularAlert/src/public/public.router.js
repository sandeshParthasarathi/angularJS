(function (){
	'use strict';

	angular.module('public')
	.config(routeConfig);

	routeConfig.$inject = ['$stateProvider'];
	function routeConfig ($stateProvider){
		$stateProvider
		.state('public', {
			url : '/',
			// abstract : true,
			templateUrl : 'src/public/public.html',
			controller : 'publicController',
			controllerAs : 'publicCtrl'
		})
	}
})();