define(['app','css!../css/mySecond_one.css','jquery'], function(app){
    app.controller('mySecond_oneCtrl',['$scope','indexfunc','footerfunc',function ($scope,indexfunc,footerfunc){
        indexfunc.initjs();
        footerfunc.footerSh();
        $scope.footerShow = function(){
	        $('footer').show();
	    }
    }]);
});