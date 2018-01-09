(function (){
	'use strict';

	angular.module('public')
	.controller('publicController', publicController);

	publicController.$inject = ['SweetAlert'];
	function publicController (SweetAlert){
		var $ctrl = this;

		$ctrl.message = function (){
			SweetAlert.swal("Here's a message");
		}

		$ctrl.title = function (){
			SweetAlert.swal("Here's a message!", "It's pretty, isn't it?");
		}

		$ctrl.success = function (){
			SweetAlert.swal("Good job!", "You clicked the button!", "success");
		}

		$ctrl.warning = function (){
			SweetAlert.swal({
			   title: "Are you sure?",
			   text: "Your will not be able to recover this imaginary file!",
			   type: "warning",
			   showCancelButton: true,
			   confirmButtonColor: "#DD6B55",
			   confirmButtonText: "Yes, delete it!",
			   closeOnConfirm: false}, 
			function(){ 
			   SweetAlert.swal("Booyah!");
			});
		}

		$ctrl.cancel = function (){
			SweetAlert.swal({
			   title: "Are you sure?",
			   text: "Your will not be able to recover this imaginary file!",
			   type: "warning",
			   showCancelButton: true,
			   confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
			   cancelButtonText: "No, cancel plx!",
			   closeOnConfirm: false,
			   closeOnCancel: false }, 
			function(isConfirm){ 
			   if (isConfirm) {
			      SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
			   } else {
			      SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
			   }
			});
		}

		
	 	 $ctrl.custom = function (){
			SweetAlert.swal({
			   title: "Sweet!",
			   text: "Here's a custom image.",
			   imageUrl: "http:://oitozero.com/avatar/avatar.jpg" });

			}



	}
})();

