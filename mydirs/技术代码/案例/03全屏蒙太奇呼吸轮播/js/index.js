$(function() {
	
	var num=0;

	$('.rightBtn').click(function(event) {
		
		//让遮羞布出现
		$('.myCover').stop(true).fadeIn(200,function(){

			//淡入完成后，淡出出去
			$(this).stop(true).fadeOut(200);
			//淡出完成以后，直接显示下一张图，小伙伴们隐藏
			num++;
			if(num>2){
				num=0;
			}
			$('.imgList li').eq(num).show().siblings().hide();
			$('.btnList li').eq(num).addClass('current').siblings().removeClass('current');


		});
		

	});



	$('.leftBtn').click(function(event) {
		
		//蒙太奇式的轮播，上一张、下一张做的第一件事都是：让遮羞布淡入再淡出
		//让遮羞布出现
		$('.myCover').stop(true).fadeIn(200,function(){

			//淡入完成后，淡出出去
			$(this).stop(true).fadeOut(200);
			//淡出完成以后，直接显示上一张图，小伙伴们隐藏
			num--;
			if(num<0){
				num=2;
			}
			$('.imgList li').eq(num).show().siblings().hide();
			$('.btnList li').eq(num).addClass('current').siblings().removeClass('current');


		});

	});


	$('.btnList li').click(function(event) {
		
		var i=$(this).index();

		$('.myCover').stop(true).fadeIn(200,function(){

			//淡入完成后，淡出出去
			$(this).stop(true).fadeOut(200);
			//淡出完成以后，让用户选择的那个相对应的图片出来，小伙伴们隐藏
			//让当前这个序号和全局变量同步
			num=i;
			$('.imgList li').eq(num).show().siblings().hide();
			$('.btnList li').eq(num).addClass('current').siblings().removeClass('current');


		});

	});



});