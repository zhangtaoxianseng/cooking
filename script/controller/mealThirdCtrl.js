define(['app','css!../css/mealThird.css','jquery'],function(app){
    app.controller('mealThirdCtrl',['$scope', 'indexfunc','$http','footerfunc',function ($scope,indexfunc,$http,footerfunc) {
        indexfunc.initjs();
        footerfunc.footerSh();
    }]);
});