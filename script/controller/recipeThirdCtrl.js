define(['app','css!../css/recipeThird.css'], function(app){
    return app.controller('recipeThirdCtrl',['$scope','indexfunc',"$http",'footerfunc',function ($scope,indexfunc,$http,footerfunc) {
        indexfunc.initjs();
        footerfunc.footerSh();
        $http.get('data/recipe2.json').success(function(res){
        	$scope.data1 = res.data;
        });
        $scope.footerShow = function (){
            $('footer').show();
        }
    }]);
});