define(['app','css!../css/my.css','jquery'], function(app){
		
    app.controller('myCtrl',['$scope','indexfunc',function ($scope,indexfunc) {
        indexfunc.initjs();
    }]);
});
