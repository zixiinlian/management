'use strict';

ManagementApp.directive('treeNav', function(){
	return{
		restrict:'E',
		templateUrl:'views/treeNav.html',
		replace: true,
		transclude: false,
		scope: false
	};
});