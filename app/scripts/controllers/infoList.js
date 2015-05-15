'use strict';
ManagementApp.controller('infoList',function($scope,$http){
	$http.get('scripts/datas/infiList.json')
	.success(function(data){
		$scope.infoList = data;
	})
})
