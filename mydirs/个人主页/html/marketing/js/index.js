$(function(){

	// 设定滚动或者点击的下标值
	var key = 0;
	// 函数节流的开关
	var flag = true;
	// 滚动事件
	$(window).mousewheel(function(event,num){

		//console.log(num)
		
		/*0   -1   1

		1   -1   2

		2   -1   3

		3    1   2*/
		// 第一种函数节流 利用定时器
		/*if(flag){

			flag = false;
			key = key - num;

			if( key > 5 ) key = 5;
			if( key < 0 ) key = 0

			$('.wrap').stop().animate({'top':-key*100+'%'},1000);

			setTimeout(function(){
				flag = true;
			}, 1000)
		}*/

		// 第二种函数节流  aniamte的回调函数
		
		/*if(flag){

			flag = false;
			key = key - num;

			if( key > 5 ) key = 5;
			if( key < 0 ) key = 0

			$('.wrap').stop().animate({'top':-key*100+'%'},1000,function(){

				flag = true;

			});

			
		}*/

		//第三种函数节流　判断当前对象是否在做动画
		
		if(!$('.wrap').is(':animated')){

			key = key - num;

			if( key > 5 ) key = 5;
			if( key < 0 ) key = 0

			$('.wrap').stop().animate({'top':-key*100+'%'},1000);
			// 滚动到拿一屏就给哪一屏的小圆点添加current这个类
			$('.nav li').removeClass('current').eq(key).addClass('current');
            dhua();

		}



	})

	// 创建节点
	var span = '<span></span>';
	// 将创建好的节点插入到li里面去
	$('.nav li').append(span);
	// 创建文本数组
	var arr = ['首页','营销手段','服务优势','特色功能','技术优势','申请加入'];
	// 遍历到哪一个span就给那一个span动态添加文本
	$('.nav li span').each(function(index, el) {
		
		$(this).html(arr[index]);

	});
	// 给 li绑定多个事件
	$('.nav li').bind({
		// 移入到当前li就让当前li的span做过渡效果
		mouseover : function(){
			$(this).children('span').css({
				'visibility':'visible',
				'right':'20px',
				'opacity':1
			})
		},
		// 移入到当前li就让当前li的span做过渡效果
		mouseout : function(){
			$(this).children('span').css({
				'visibility':'hidden',
				'right':'50px',
				'opacity':0
			})
		},
		// 点击哪一个就给哪一个li添加current类 并且滚动到那一屏
		click : function(){
			// 这里必须跟之前的key统一起来
			key = $(this).index();

			$('.wrap').stop().animate({'top':-key*100+'%'},1000);

			$(this).addClass('current').siblings().removeClass('current');
            dhua();
		}
	})

    dhua();

    function dhua(){
        $('.page').addClass('Tlin').eq(key).removeClass('Tlin');
    }


})