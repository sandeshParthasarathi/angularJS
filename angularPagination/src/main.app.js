(function () {
	'use strict';

	angular.module('myApp', ['public', 'angularUtils.directives.dirPagination'])
	.config(config);

	config.$inject = ['$urlRouterProvider'];
	function config($urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
	}
})();