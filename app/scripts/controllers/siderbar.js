'use strict';

angular.module('managementApp', [])
.controller('SiderbarController', function($scope, $http){
	$http.get('scripts/datas/classMsList.json').success(function(data){
		$scope.classMsList = data.classMsList;
		$scope.isShow = false;

		$scope.toggleNav = function(){
			console.log(this.element);
		};
	});
});