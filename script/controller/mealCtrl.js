define(['app','css!../css/meal.css','jquery'],function(app){
    app.controller('mealCtrl',['$scope', 'indexfunc','$http',function ($scope,indexfunc,$http) {
        indexfunc.initjs();
        $http.get('./data/meal2.json').success(function(res){
            $scope.imgList = res.data.data
        });
        $scope.jumpImg=function(e){
            console.log('aa');
            sessionStorage.setItem("data",$(e.target).parent().parent().index());
        }
    }]);
    
});