(function (){
	'use strict';

	angular.module('public')
	.controller('otherController', otherController);

	otherController.$inject = [];
	function otherController() {
		// $scope.pageChangeHandler = function(num) {
	 //          console.log('meals page changed to ' + num);
	 //      };
		// body...
		var $ctrl = this;
		$ctrl.pageChangeHandler = function (num){
			console.log('meals page changed to ' + num);
		};
	}
})();


