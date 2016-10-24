$(function() {
	

	//需要两个变量：分别用来模拟不断在改变的角标和图片
	var imgKey=0;
	var dianKey=0;

	$('.rightBtn').click(function(event) {
		
		//代表下一个角标
		dianKey++;
		if(dianKey>2){
			dianKey=0;
		}
		//让下一个角标具备current....
		$('.btnList li').eq(dianKey).addClass('current').siblings().removeClass('current');

		//移动的距离应该是：0 -100% -200%...
		//移动公式：imgKey*-100%
		imgKey++;
		if(imgKey>3){
			//banner停留在临时工身上，用户单击下一张，希望看到的是第1张
			imgKey=1;
			//一瞬间让UL回到0点，让它从0到-100%过渡【实现每次都移动100%距离】
			$('.imgList').css('left', 0);
		}
		var s=imgKey*-100;
		//因为JS会把%号解析成取余，所以这里要做一次拼接
		s=s+'%';
		$('.imgList').stop(true).animate({'left':s}, 500);

	});







});