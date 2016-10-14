define(['app','css!../css/store.css','jquery'],function(app){
    app.controller('storeCtrl',['$scope','indexfunc','$http',function ($scope,indexfunc,$http) {
        indexfunc.initjs(); 
        $http.get('data/store1.json').success(function(res){
            $scope.data = res.data.topBanner[0].bannerPicture;
            $scope.data1=res.data.scrollBanner;
            $scope.data2=res.data.listCommodity;
            $scope.data3=res.data.soup;
            $scope.data4=res.data.listCommodity[0].imageList;
            $scope.data5=res.data.listCommodity[0];
            $scope.data6=res.data.listCommodity[0].productImg;
        });
    }]);
});