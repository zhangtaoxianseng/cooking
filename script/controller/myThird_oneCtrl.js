define(['app','css!../css/myThird_one.css','jquery'], function(app){
    app.controller('myThird_oneCtrl',['$scope','indexfunc','footerfunc',function ($scope,indexfunc,footerfunc) {
        indexfunc.initjs();
        footerfunc.footerSh();
        $scope.ranColor = function(){
			var corStr = "abcdef0123456789";
			var color = "#";
			for (var i = 0; i <6; i++) {
				var index = parseInt(Math.random()*corStr.length);
				color+=corStr[index];
			}
			return color; 
		}
		$scope.color =  $scope.ranColor
		$scope.makeCheckCode = function(){
			var strr = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
			var str = "";		
			for(i=0;i<4;i++){
				str+=strr.charAt(parseInt(Math.random()*62));
				$('#my_one').prev().text(str);
				$('#my_one').prev().css({
					'color':$scope.color,
					'background':$scope.color
				});
			}
		}
		$scope.makeCheckCode();
		$('#my_one').on('touchstart',function(){
			$scope.makeCheckCode();
		});
    }]);
});