define(['app','css!../css/community.css','jquery'], function(app){
    app.controller('communityCtrl',['$scope','indexfunc',"$http",function ($scope,indexfunc,$http) { 
        indexfunc.initjs();
         $http.get('./data/community1.json').success(function(res){
            $scope.banner = res.data.banner;
            $scope.community_figure = res.data.shequ_talent;
            $scope.community_figure2 = res.data.shequ_marrow;
            $scope.community_figures = res.data.shequ_topics;
        });
    }]);   
});
