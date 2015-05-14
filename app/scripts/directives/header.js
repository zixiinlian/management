'use strict';

angular.module('managementApp', [])
.directive('msHeader', function(){
	return{
		restrict:'E',
		templateUrl:'views/header.html',
		replace: true,
		transclude: false,
		scope: false
	};
});