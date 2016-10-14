require.config({
    paths: {
        "jquery": "./lib/jquery-1.12.3",
        "angular" : "./lib/angular.min",
        "angular-route" : "./lib/angular-route",
        'bootstrap':'./lib/bootstrap.min',
        'angular-css':'./lib/angular-css.min',
        'css':'./lib/css',
        'carousel':'./lib/carousel',
        'swipper':'./lib/idangerous.swiper2.7.6',
        'recipeCtrl':'./script/controller/recipeCtrl',
        'recipeSecondCtrl':'./script/controller/recipeSecondCtrl',
        'recipeThirdCtrl':'./script/controller/recipeThirdCtrl',
        
        'communityCtrl':'./script/controller/communityCtrl',
        'communitySecondCtrl':'./script/controller/communitySecondCtrl',
        'communitySecond_twoCtrl':'./script/controller/communitySecond_twoCtrl',
        
        'communityThirdCtrl':'./script/controller/communityThirdCtrl',
        
        'storeCtrl':'./script/controller/storeCtrl',
        'storeSecond_oneCtrl':'./script/controller/storeSecond_oneCtrl',
        'storeSecond_twoCtrl':'./script/controller/storeSecond_twoCtrl',
        'storeSecond_threeCtrl':'./script/controller/storeSecond_threeCtrl',
        'storeThirdCtrl':'./script/controller/storeThirdCtrl',
        'mealCtrl':'./script/controller/mealCtrl',
        'mealSecondCtrl':'./script/controller/mealSecondCtrl',
        'mealThirdCtrl':'./script/controller/mealThirdCtrl',
        'mealThird_twoCtrl':'./script/controller/mealThird_twoCtrl',



        'myCtrl':'./script/controller/myCtrl',
        'mySecond_oneCtrl':'./script/controller/mySecond_oneCtrl',
        'mySecond_twoCtrl':'./script/controller/mySecond_twoCtrl',
        'mySecond_threeCtrl':'./script/controller/mySecond_threeCtrl',
        'mySecond_fourCtrl':'./script/controller/mySecond_fourCtrl',
        'mySecond_fiveCtrl':'./script/controller/mySecond_fiveCtrl',
       
        'myThird_oneCtrl':'./script/controller/myThird_oneCtrl',

        
        "app" : "./app",
        "route" : "./route",
        'index':'./script/controller/index',
        "services":"./script/service/services"
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route':{
            deps: ["angular"],
            exports: 'angular-route'
        },
        deps: ['bootstrap']
    }
});

require(['jquery','angular','angular-route','route','index'],function (jq,angular){
    $(function () {
        angular.bootstrap(document,["myApp"]);
        $('html').addClass('ng-app:myApp');
    })
});