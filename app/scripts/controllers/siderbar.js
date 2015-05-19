'use strict';

ManagementApp.controller('SiderbarController', function($scope, $http){
	$http.get('scripts/datas/classMsList.json').success(function(data){
		$scope.classMsList = data.classMsList;
		$scope.isShow = false;
		$scope.isCurrent = false;
		
		$scope.setActive = function(){
			$scope.isCurrent = true;
		};

	});
});