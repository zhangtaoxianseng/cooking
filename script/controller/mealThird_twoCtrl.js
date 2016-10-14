define(['app','css!../css/mealThird_two.css','jquery'],function(app){
    app.controller('mealThird_twoCtrl',['$scope', 'indexfunc','$http',function ($scope,indexfunc,$http) {
        indexfunc.initjs();
    }]);
});