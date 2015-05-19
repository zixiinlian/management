//'use strict';
ManagementApp.controller('infoList',function($scope,$http){
	$http.get('scripts/datas/infoList.json')
	.success(function(data){
		$scope.infoList = data.list;
		$scope.setDomModel($scope.infoList,$('.info-tab .panel-body'));
		$scope.toggleFn()
	})
	$scope.setDomModel = function(list, parent){
		var liInner;
			for (var i in list) {
				var $li = $('<li></li>');
				for (var j in list[i]) {
					if (list[i][j] instanceof Object) {
						var $ul = $('<ul class="subList"></ul>');
						$ul.appendTo($li);
						arguments.callee(list[i][j], $ul)
					} else {
						if(list[i].url){
							liInner = '<a href="'+list[i].url+'">'+list[i][j]+'</a>'
						}else{
							liInner = '<span>' + list[i][j] + '</span>'
						}
						$li.append(liInner).appendTo(parent)
						
					}
				}
			}
	}
	$scope.toggleFn = function(){
//		$('.tree .subList').hide();
		$('.tree span').click(function(){
			$(this).next('.subList').show();
			$(this).parent().siblings().children('.subList').hide();
			if($(this).next().css('display') == 'block'){
				
			}
			
			
		})
		
	}
	
	
	$scope.clickVal = function(){
		$scope.showV = !$scope.showV;
	};
	
})

