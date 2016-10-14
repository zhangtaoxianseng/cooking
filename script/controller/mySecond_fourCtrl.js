define(['app','css!../css/mySecond_four.css','jquery'], function(app){
    app.controller('mySecond_fourCtrl',['$scope','indexfunc','$http','footerfunc',function ($scope,indexfunc,$http,footerfunc) {
        indexfunc.initjs();
        footerfunc.footerSh();
        $http.get('data/my1.json').success(function(res){
      		console.log(res);
      		$scope.data = res.data.data;
      	})
      	$scope.footerShow = function(){
	        $('footer').show();
	    }
    }]);
});