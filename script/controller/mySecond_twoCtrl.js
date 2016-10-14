define(['app','css!../css/mySecond_two.css','jquery'], function(app){
    app.controller('mySecond_twoCtrl',['$scope','indexfunc','footerfunc',function ($scope,indexfunc,footerfunc) {
        indexfunc.initjs();
         footerfunc.footerSh()
        $('.messageBanner li').on('touchstart',function(){
			$(this).parent().next().stop().animate({
				left:$(this).index()*$(this).width()
			})
			$(".messageMain").find("div").hide();
			$(".messageMain").find("div").eq($(this).index()).show();
		});
		$scope.footerShow = function(){
		    $('footer').show();
		}
    }]);
});