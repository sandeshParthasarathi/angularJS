(function (){
	'use strict';

	angular.module('public')
	.controller('homeController', homeController);

	homeController.$inject = ['consumers', '$scope'];
	function homeController(consumers, $scope){
		var $ctrl = this;
 		$ctrl.consumers = consumers;

 		  $scope.currentPage = 1;
 		  // items per page : for custom page size
	      $scope.pageSize = 10;
	      
		}
	
})();