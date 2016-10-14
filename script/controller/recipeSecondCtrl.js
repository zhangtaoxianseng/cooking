define(['app','css!../css/recipeSecond.css'], function(app){
    return app.controller('recipeSecondCtrl',['$scope', 'indexfunc','footerfunc',function ($scope,indexfunc,footerfunc) {
		footerfunc.footerSh();
		$scope.footerShow = function(){
			$('footer').show();
		}
    }]);
});