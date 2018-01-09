(function () {
	'use strict';

	angular.module('common')
	.service('consumerService', consumerService);

	consumerService.$inject = ['$http', 'ApiPath'];

	function consumerService ($http, ApiPath){

		var service = this;

		service.getConsumers = function () {
			return $http.get(ApiPath + '/consumer/local')
			.then(function (response) {
				return response.data;
			})
		}

	}
})();