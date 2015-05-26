'use strict';

ManagementApp.controller('SiderbarController', function($scope, $http){
	$http.get('scripts/datas/classMsList.json').success(function(data){
		$scope.classMsList = data.classMsList;
		$scope.isShow = false;
		
		$scope.setActive = function(event){
			$('.sub-menu li').removeClass('active');
			$(event.target).parent("li").addClass("active");
		};

	});
});