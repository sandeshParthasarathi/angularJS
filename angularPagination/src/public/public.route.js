(function (){
	'use stricr';

	angular.module('public')
	.config(routeConfig);

	routeConfig.$inject = ['$stateProvider'];
	function routeConfig($stateProvider) {
		
		$stateProvider
		.state('public', {

			abstract : true,
			templateUrl : 'src/public/public.html'	
		})
		.state('public.home', {
	      url: '/',
	      templateUrl: 'src/public/home/home.html',
	      controller: 'homeController',
	      controllerAs: 'homeCtrl',
	      resolve: {
	        consumers: ['consumerService', function (consumerService) {
	          return consumerService.getConsumers();
	        }]
	      }
	    });
	}
})();
