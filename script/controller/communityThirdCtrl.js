define(['app','css!../css/communityThird.css','jquery'], function(app){
    app.controller('communityThirdCtrl',['$scope','indexfunc',"$http",'footerfunc',function ($scope,indexfunc,$http,footerfunc) { 
        indexfunc.initjs();
        footerfunc.footerSh();
        $http.get("data/community_banner.json").success(function(res){
        	$scope.community_banner = res.data.image;
        	$scope.community_scontent = res.data.content;
        	$scope.data =res.data;
        });
        $(".second_attention").on("touchstart",function(){
     		if($(this).text()=="关注"){
     			$(this).text("取消关注");
     			$(".second_attention").css("background","lawngreen");
     		}else{
     			$(this).text("关注");
     			$(".second_attention").css("background","orange");
     		}
     	})
        $scope.footerShow = function(){
            $('footer').show();
        }
    }]);   
});
