define(['app','communityCtrl','recipeCtrl','storeCtrl','mealCtrl','myCtrl','recipeSecondCtrl','recipeThirdCtrl','communitySecondCtrl','communitySecond_twoCtrl','communityThirdCtrl','storeSecond_oneCtrl','storeSecond_twoCtrl','storeSecond_threeCtrl','storeThirdCtrl',
        'mealSecondCtrl','mealThirdCtrl','mealThird_twoCtrl','mySecond_oneCtrl','mySecond_twoCtrl','mySecond_threeCtrl','mySecond_fourCtrl','mySecond_fiveCtrl','myThird_oneCtrl'], function(app){
    return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: './views/recipe.html', controller: 'recipeCtrl'})
            .when('/recipeSecond', {templateUrl: './views/recipeSecond.html', controller: 'recipeSecondCtrl'})
            .when('/recipeThird', {templateUrl: './views/recipeThird.html', controller: 'recipeThirdCtrl'})
            
            .when('/community', {templateUrl: './views/community.html', controller: 'communityCtrl'})
            .when('/communitySecond', {templateUrl: './views/communitySecond.html', controller: 'communitySecondCtrl'})
            .when('/communitySecond_two', {templateUrl: './views/communitySecond_two.html', controller: 'communitySecond_twoCtrl'})
            
            .when('/communityThird', {templateUrl: './views/communityThird.html', controller: 'communityThirdCtrl'})
            
            .when('/store', {templateUrl: './views/store.html', controller: 'storeCtrl'})
            .when('/storeSecond_one', {templateUrl: './views/storeSecond_one.html', controller: 'storeSecond_oneCtrl'})
            .when('/storeSecond_two', {templateUrl: './views/storeSecond_two.html', controller: 'storeSecond_twoCtrl'})
            .when('/storeSecond_three', {templateUrl: './views/storeSecond_three.html', controller: 'storeSecond_threeCtrl'})
            .when('/storeThird', {templateUrl: './views/storeThird.html', controller: 'storeThirdCtrl'})
            
            

            .when('/meal', {templateUrl: './views/meal.html', controller: 'mealCtrl'})
            .when('/mealSecond', {templateUrl: './views/mealSecond.html', controller: 'mealSecondCtrl'})
            .when('/mealThird', {templateUrl: './views/mealThird.html', controller: 'mealThirdCtrl'})
            .when('/mealThird_two', {templateUrl: './views/mealThird_two.html', controller: 'mealThird_twoCtrl'})


            .when('/my', {templateUrl: './views/my.html', controller: 'myCtrl'})
            .when('/mySecond_one', {templateUrl: './views/mySecond_one.html', controller: 'mySecond_oneCtrl'})
            .when('/mySecond_two', {templateUrl: './views/mySecond_two.html', controller: 'mySecond_twoCtrl'})
            .when('/mySecond_three', {templateUrl: './views/mySecond_three.html', controller: 'mySecond_threeCtrl'})
            .when('/mySecond_four', {templateUrl: './views/mySecond_four.html', controller: 'mySecond_fourCtrl'})
            .when('/mySecond_five', {templateUrl: './views/mySecond_five.html', controller: 'mySecond_fiveCtrl'})
            
            .when('/myThird_one', {templateUrl: './views/myThird_one.html', controller: 'myThird_oneCtrl'})
            
            .otherwise({redirectTo: '/'});
    }]);
});
