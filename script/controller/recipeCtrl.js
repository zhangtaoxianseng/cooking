define(['app','css!../css/recipe.css','css!../lib/iconfont.css','css!../lib/bootstrap.css','jquery','services','swipper'], function(app){
    app.controller('recipeCtrl',['$scope','indexfunc','$http','carousel',function ($scope,indexfunc,$http,carousel) {
        indexfunc.initjs();
        $http.get('../data/recipe1.json').success(function(res){
        	$scope.carouselImg1=res.data.banner[0];
        	$scope.carouselImg2 = [];
        	for (var i = 1; i < res.data.banner.length; i++) {
        		$scope.carouselImg2.push(res.data.banner[i]);
        	}
            console.log(res.data.banner);
        	$scope.rmLikeData = res.data.widgetList[0].widget_data
        	$scope.arrRmLike1 = [];
        	$scope.arrRmLike2 = [];
        	for (var i = 0; i < $scope.rmLikeData.length; i++) {
        		if(i%2==0){
        			$scope.arrRmLike1.push($scope.rmLikeData[i])
        		}else{
        			$scope.arrRmLike2.push($scope.rmLikeData[i])
        		}
        	}
            carousel.carouselImg();
        });
        $http.get('../data/recipe3.json').success(function(res){
        	$scope.bdpw = res.data.widgetList[1].widget_data;
        	$scope.newFood = res.data.widgetList[2].widget_data;
        	$scope.newFoodImg = [];
        	$scope.newFoodTitle = [];
        	$scope.newFoodDes = [];
        	$scope.newFoodVideo = [];
        	$scope.breakfastImg1 = res.data.widgetList[3].widget_data[0];
        	$scope.breakfastImg2 = [];
        	for (var i = 0; i < $scope.newFood.length; i++) {
        		if(i%4 == 0){
        			$scope.newFoodImg.push($scope.newFood[i]);
        		}
        		if(i%4 == 2){
        			$scope.newFoodTitle.push($scope.newFood[i]);
        		}
        		if(i%4 == 3){
        			$scope.newFoodDes.push($scope.newFood[i]);
        		}
        		if(i%4 == 1){
        			$scope.newFoodVideo.push($scope.newFood[i]);
        		}
        	}
        	for (var i = 3; i < 10; i++) {
        		if(i%2==1){
        			$scope.breakfastImg2.push(res.data.widgetList[3].widget_data[i]);
        		}
        	}
        });
    }]);
});