define(['app','css!../css/mySecond_three.css','jquery'], function(app){
    app.controller('mySecond_threeCtrl',['$scope','indexfunc','footerfunc',function ($scope,indexfunc,footerfunc) {
        indexfunc.initjs();
        footerfunc.footerSh();
		$('.my_setIput').on('touchstart',function(){
			$('.my_setIput1').show(5);
			$('.my_setIput').hide(5);
		})
    	$('.my_setIput1').on('touchstart',function(){
			$('.my_setIput').show(5);
			$('.my_setIput1').hide(5);
		})
		$scope.footerShow = function(){
	        $('footer').show();
	    }
    }]);
});