'use strict';

angular.module('managementApp', [])
.directive('msSiderbar', function(){
	return{
		restrict:'E',
		templateUrl:'views/siderbar.html',
		replace: true,
		transclude: false,
		scope: false
	};
});