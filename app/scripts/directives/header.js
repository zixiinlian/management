'use strict';

ManagementApp.directive('msHeader', function(){
	return{
		restrict:'E',
		templateUrl:'views/header.html',
		replace: true,
		transclude: false,
		scope: false
	};
});