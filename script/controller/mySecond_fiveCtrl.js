define(['app','css!../css/mySecond_five.css','jquery'], function(app){
    app.controller('mySecond_fiveCtrl',['$scope','indexfunc','$http','footerfunc',function ($scope,indexfunc,$http,footerfunc) {
        indexfunc.initjs();
        footerfunc.footerSh();
        $http.get('data/my2.json').success(function(res){
      		console.log(res);
      		$scope.data = res.data.shequ_talent;
      	});
      	$scope.footerShow = function(){
	        $('footer').show();
	    }
    }]);
});