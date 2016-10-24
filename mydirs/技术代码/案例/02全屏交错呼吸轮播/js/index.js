$(function() {
	
	var num=0;

	$('.rightBtn').click(function(event) {
		
		//让当前这一张淡出
		$('.imgList li').eq(num).fadeOut(1000);
		num++;
		if(num>2){
			num=0;
		}
		//让下一张淡入
		$('.imgList li').eq(num).fadeIn(1000);
		//让下一张的角标具备current...
		$('.btnList li').eq(num).addClass('current').siblings().removeClass('current');



	});







});