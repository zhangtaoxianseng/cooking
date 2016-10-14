define(['app','css!../css/communitySecond.css','jquery'], function(app){
    app.controller('communitySecondCtrl',['$scope','indexfunc',"$http",function ($scope,indexfunc,$http) { 
        indexfunc.initjs();
         $http.get("data/community_newest.json").success(function(res){
         	console.log(res);
         	$scope.newest = res.data;
         });
        $('.community_header_text p').find('a').css({
                'border':'none'
        });
        $('.community_header_text p').eq(2).find('a').css({
            'borderBottomWidth':'0.1rem',
            'borderBottomStyle':'solid',
            'borderBottomColor':'orangered',
        });
    }]);   
});