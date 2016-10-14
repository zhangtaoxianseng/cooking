define(['app','css!../css/mealSecond.css','jquery'], function(app){
    return app.controller('mealSecondCtrl',['$scope', 'indexfunc','$http','footerfunc',function ($scope,indexfunc,$http,footerfunc) {
        indexfunc.initjs();
        footerfunc.footerSh();
        $http.get('data/meal2.json').success(function(res){
        	$scope.imgList = res.data.data
        	var i = sessionStorage.getItem("data");
            console.log(i);
        	$scope.sgMsg = res.data.data[i];
        });
		$http.get('data/meal3.json').success(function(res){
            $scope.messageList = res.data.data
        });
        $scope.footerShow = function(){
            $('footer').show();
        }
    }]);
});