define(['app','jquery'],function(app){
    app.factory('indexfunc',function(){
        return {
            initjs:function(){
                document.documentElement.style.fontSize = innerWidth/16 +"px";
                window.onresize =function(){
                    document.documentElement.style.fontSize = innerWidth/16 + "px";
                }
            }
        }
    });
	app.factory('carousel',function(){
        return {
            carouselImg:function(){
                mySwiper = new Swiper('.swiper-container',{
                    autoplay : 2000,//可选选项，自动滑动
                    loop : true,//可选选项，开启循环
                    autoplayDisableOnInteraction : false,//滑动后轮播图继续轮播
                    pagination : '.pagination',//初始化小圆点
                    createPagination :true//自动创建小圆点 几张图创建几张
                }); 
            }
        }
    });
    app.factory('footerfunc',function(){
        return {
            footerSh:function(){
                $('footer').hide();
                $('main').css('height','100%')
            }
        }
    });
})