'use strict';

/**
 * @ngdoc function
 * @name corlateApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the corlateApp
 */
angular.module('corlateApp')
  .controller('BlogCtrl', function ($scope) {

   $scope.buscar=function(){
   	/*alert ($scope.busqueda)*/
   	if ($scope.busqueda==undefined || $scope.busqueda=='') {
   		alert('tienes que escribir algo');
   	}

	else { 

		alert($scope.busqueda);

	}	
   	
   }
   
    
  });
