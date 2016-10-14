define(['app','css!../css/communitySecond_two.css',"jquery"], function(app){
    app.controller('communitySecond_twoCtrl',['$scope','indexfunc',"$http",function ($scope,indexfunc,$http) { 
        indexfunc.initjs();
        $http.get("data/community_attention.json").success(function(res){
         	console.log(res);
         	$scope.attention = res.data.data;
        });
        $('.community_header_text p').find('a').css({
                'border':'none'
        });
        $('.community_header_text p').eq(0).find('a').css({
            'borderBottomWidth':'0.1rem',
            'borderBottomStyle':'solid',
            'borderBottomColor':'orangered',
        });
    }]);
});