define(['app','css!../css/index.css','css!../lib/reset.css','css!../lib/iconfont.css','jquery'],function(app){
	$('footer a').on('touchstart',function(){
		$('footer a p').css('color','#9c9c9c');
		$(this).children().css('color','#f56e6a');
	});
})